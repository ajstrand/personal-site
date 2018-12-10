
pub mod posts {
  use std::string::String;
use std::error::Error;
use std::fs::File;
use std::io::prelude::*;
use std::path::Path;
use std::fs;
  pub fn create_posts() {
    let post_paths = fs::read_dir("./postTemplates").unwrap();

    for path in post_paths {
        let my_path = &path.unwrap().path();
        let new_path = Path::new(my_path);
        create_post(new_path)
    }
    println!("added all posts");
}

use std;
fn create_post(new_path: &std::path::Path) {
    use comrak::{markdown_to_html, ComrakOptions};

    let mut file = File::open(new_path).unwrap();

    let mut data = String::new();
    file.read_to_string(&mut data).unwrap();

    let new_post = markdown_to_html(&data, &ComrakOptions::default());

    let path = Path::new("./my_first_post.html");
    let display = path.display();

    let mut file = match File::create(&path) {
        Err(why) => panic!("couldn't create {}: {}", display, why.description()),
        Ok(file) => file,
    };

    match file.write_all(new_post.as_bytes()) {
        Err(why) => panic!("couldn't write to {}: {}", display, why.description()),
        Ok(_) => println!("successfully wrote to {}", display),
    }


}
}
