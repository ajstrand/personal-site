use maud::{DOCTYPE, Markup, html};
use serde::Serialize;

#[tokio::main] // Added async runtime macro
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Fixed return type
    my_functional_task().await?;
    Ok(())
}

#[derive(Serialize)]
struct CounterProps {
    initial_count: i32,
}

fn preact_island<T: Serialize>(component_name: &str, props: &T) -> Markup {
    let serialized_props = serde_json::to_string(props).unwrap_or_else(|_| "{}".to_string());
    html! {
        div class="preact-island" data-component=(component_name) data-props=(serialized_props) {
            "--test-outlet--"
            "Loading interactive component..."
        }
    }
}

async fn home_page() -> Markup {
    let counter_props = CounterProps { initial_count: 5 };

    html! {
        (DOCTYPE)
        html lang="en" {
            head {
                meta charset="UTF-8";
                meta name="viewport" content="width=device-width, initial-scale=1.0";
                title { "Rust-Tropical Engine" }
                link rel="stylesheet" href="/dist/assets/index.css";
            }
            body {
                h1 { "🍹 Welcome to Rust-Tropical" }
                p { "The page layout below is completely static HTML compiled via Maud." }

                div class="component-wrapper" {
                    (preact_island("Counter", &counter_props))
                }

                script type="module" src="/dist/assets/index.js" {}
            }
        }
    }
}

async fn home_page_to_string() -> String {
    let markup = home_page().await;
    markup.into_string()
}

async fn write_file() -> std::io::Result<()> {
    // Replaced blocking fs::write with tokio::fs::write
    tokio::fs::write("index.html", home_page_to_string().await).await?;

    println!("HTML file written successfully!");
    Ok(())
}

async fn my_functional_task() -> Result<String, std::io::Error> {
    println!("Task is running!");

    // Explicitly await the file writing process
    write_file().await?; // The ? operator works fine here now if you handle the block cleanly

    Ok("Success".to_string())
}
