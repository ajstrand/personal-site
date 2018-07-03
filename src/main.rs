mod posts;

use std::string::String;
use std::error::Error;
use std::fs::File;
use std::io::prelude::*;
use std::path::Path;
use std::fs;

extern crate serde_json;

extern crate comrak;

extern crate serde;
#[macro_use]
extern crate serde_derive;

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
    project_link_one:&'a str,
    project_link_two:&'a str,
    project_link_three:&'a str,
    project_link_four:&'a str,
    link_one: &'a str,
    link_two: &'a str,
    link_three: &'a str,
    link_four: &'a str,
}

#[derive(Serialize, Deserialize)]
struct SiteData<'a> {
    content: &'a str,
    title: &'a str,
    project_link_one:&'a str,
    project_link_two:&'a str,
    project_link_three:&'a str,
    project_link_four:&'a str,
    intro_text: &'a str,
    link_one: &'a str,
    link_two: &'a str,
    link_three: &'a str,
    link_four: &'a str,

}

fn main() {
    posts::posts::create_posts();
    create_site();
}

fn create_site() {
    let mut file = File::open("./data.json").unwrap();
    let mut data = String::new();
    file.read_to_string(&mut data).unwrap();

    let json: SiteData = serde_json::from_str(&data).unwrap();

    let about_me = json.content;
    let my_title = json.title;
    let intro = json.intro_text;

    let project_link_one = json.project_link_one;
    let project_link_two = json.project_link_two;
    let project_link_three = json.project_link_three;
    let project_link_four = json.project_link_four;


    let link_one = json.link_one;
    let link_two = json.link_two;
    let link_three = json.link_three;
    let link_four = json.link_four;

    let data = DataTemplate {
        content: about_me,
        intro_text: intro,
        project_link_one,
        project_link_two,
        project_link_three,
        project_link_four,
        link_one: link_one,
        link_two: link_two,
        link_three: link_three,
        link_four: link_four,
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
