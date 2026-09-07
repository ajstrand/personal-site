use axum::{Router, routing::get};
use maud::{DOCTYPE, Markup, html};
use serde::Serialize;
use serde_json::Value;
use tower_http::services::ServeDir;

#[derive(Serialize)]
struct CounterProps {
    initial_count: i32,
}

// Reusable macro/function to embed a Preact Island
fn preact_island<T: Serialize>(component_name: &str, props: &T) -> Markup {
    let serialized_props = serde_json::to_string(props).unwrap_or_else(|_| "{}".to_string());
    html! {
        // Render a placeholder tag that the frontend bundle targets
        div class="preact-island" data-component=(component_name) data-props=(serialized_props) {
            // Optional: Render server-side placeholder content here if needed
            "Loading interactive component..."
        }
    }
}

async fn read_data() -> Result<String, Box<dyn std::error::Error>> {
    // 1. Read the manifest file contents from disk
    let manifest_content = tokio::fs::read_to_string("dist/.vite/manifest.json").await?;

    // 2. Parse the JSON structure
    let v: Value = serde_json::from_str(&manifest_content)?;

    // 3. Extract the dynamic hashed script path
    let file_path = v["index.html"]["file"]
        .as_str()
        .ok_or("Failed to find 'file' key in manifest")?;

    // 4. Format the final absolute source path
    let script_src = format!("/dist/{}", file_path);
    Ok(script_src)
}

async fn home_page() -> Markup {
    let counter_props = CounterProps { initial_count: 5 };

    let script_src = read_data().await;

    let content = match script_src {
        Ok(text) => text,
        Err(_) => "Failed to load content".to_string(),
    };

    html! {
        (DOCTYPE)
        html lang="en" {
            head {
                meta charset="UTF-8";
                meta name="viewport" content="width=device-width, initial-scale=1.0";
                title { "Rust-Tropical Engine" }
                // Link the Vite compilation output
                link rel="stylesheet" href="/dist/assets/index.css";
            }
            body {
                h1 { "🍹 Welcome to Rust-Tropical" }
                p { "The page layout below is completely static HTML compiled via Maud." }

                // Injecting our interactive Preact client component island
                div class="component-wrapper" {
                    (preact_island("Counter", &counter_props))
                }
                // The variable is wrapped in parentheses to evaluate inside the macro
                               script type="module" src=(&content) {}
            }
        }
    }
}

// 1. Define the handler function
// async fn serve_index() -> Html<String> {
//     let content = fs::read_to_string("dist/static/Test.html")
//         .await
//         .unwrap_or_else(|_| "File not found".to_string());

//     Html(content)
// }

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/", get(home_page))
        //.route("/", get(serve_index))
        // Serve frontend asset artifacts directly from the dist folder
        .nest_service("/dist", ServeDir::new("dist"));

    let listener = tokio::net::TcpListener::bind("127.0.0.1:3000")
        .await
        .unwrap();
    println!("Server rolling on http://127.0.0.1:3000");
    axum::serve(listener, app).await.unwrap();
}
