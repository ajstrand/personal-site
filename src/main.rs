extern crate serde_json;
use std::string::String;
use std::error::Error;
use std::fs::File;
use std::io::prelude::*;
use std::path::Path;
extern crate comrak;

use std::fs;
extern crate serde;
#[macro_use]
extern crate serde_derive;

use serde_json::value::Value;

#[macro_use]
extern crate askama; // for the Template trait and custom derive macro

use askama::Template; // bring trait in scope

#[derive(Template)] // this will generate the code...
// using the template in this path, relative
// to the templates dir in the crate root
#[template(path = "template.html")]

// the name of the struct can be anything
// the field name should match the variable name
// in your template
struct DataTemplate<'a> {
    content: &'a str,
    title: &'a str,
    intro_text: &'a str,
    project_one: &'a str,
    project_two: &'a str,
    project_three: &'a str,
    link_one: &'a str,
    link_two: &'a str,
    link_three: &'a str,
}

#[derive(Serialize, Deserialize)]
struct SiteData<'a> {
    content: &'a str,
    title: &'a str,
    intro_text: &'a str,
    project_one: &'a str,
    project_two: &'a str,
    project_three: &'a str,
    link_one: &'a str,
    link_two: &'a str,
    link_three: &'a str,
}

fn main() {
    create_posts();
    create_site_with_template_data();
}

fn create_site_with_template_data() {
    let mut file = File::open("./data.json").unwrap();
    let mut data = String::new();
    file.read_to_string(&mut data).unwrap();

    let json: SiteData = serde_json::from_str(&data).unwrap();

    let about_me = json.content;
    let my_title = json.title;
    let intro = json.intro_text;
    let project_one = json.project_one;
    let project_two = json.project_two;
    let project_three = json.project_three;
    let link_one = json.link_one;
    let link_two = json.link_two;
    let link_three = json.link_three;

    let data = DataTemplate {
        content: about_me,
        intro_text: intro,
        project_one: project_one,
        project_two: project_two,
        project_three: project_three,
        link_one: link_one,
        link_two: link_two,
        link_three: link_three,
        title: my_title,
    }; // instantiate your struct

    let path = Path::new("./templates/index.html");
    let display = path.display();

    let mut file = match File::create(&path) {
        Err(why) => panic!("couldn't create {}: {}", display, why.description()),
        Ok(file) => file,
    };

    match file.write_all(data.render().unwrap().as_bytes()) {
        Err(why) => panic!("couldn't write to {}: {}", display, why.description()),
        Ok(_) => println!("successfully wrote to {}", display),
    }

    fs::copy("./templates/index.html", "index.html");
    println!("copied template to an index file in the root");

    fs::remove_file("./templates/index.html");
    println!("deleted un needed index file in the template folder");
}

fn create_posts() {
    let post_paths = fs::read_dir("./postTemplates").unwrap();

    for path in post_paths {
        let my_path = &path.unwrap().path();
        let new_path = Path::new(my_path);
        create_post(new_path)
    }
    println!("added all posts");
}

fn create_post(new_path: &std::path::Path) {
    use comrak::{markdown_to_html, ComrakOptions};

    let mut file = File::open(new_path).unwrap();

    let mut data = String::new();
    file.read_to_string(&mut data).unwrap();

    let new_post = markdown_to_html(&data, &ComrakOptions::default());

    let path = Path::new("./templates/my_first_post.html");
    let display = path.display();

    let mut file = match File::create(&path) {
        Err(why) => panic!("couldn't create {}: {}", display, why.description()),
        Ok(file) => file,
    };

    match file.write_all(new_post.as_bytes()) {
        Err(why) => panic!("couldn't write to {}: {}", display, why.description()),
        Ok(_) => println!("successfully wrote to {}", display),
    }

    fs::copy("./templates/my_first_post.html", "my_first_post.html");
    println!("copied template to a markdown file in the root");

    fs::remove_file("./templates/my_first_post.html");
    println!("deleted un needed markdown file in the template folder");
}
