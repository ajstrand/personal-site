extern crate serde_json;
use std::string::String;
use std::error::Error;
use std::fs::File;
use std::io::prelude::*;
use std::path::Path;
use std::env;
extern crate serde;
#[macro_use]
extern crate serde_derive;

use serde_json::value::Value;

extern crate simple_server;

use simple_server::Server;

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
    title: &'a str 
                   
}

#[derive(Serialize, Deserialize)]
struct SiteData<'a> {
    content: &'a str,
    title: &'a str
}
   
fn main() {
    let mut file = File::open("./data.json").unwrap();
    let mut data = String::new();
    file.read_to_string(&mut data).unwrap();

    let json: SiteData = serde_json::from_str(&data).unwrap();

    let test_val = json.content;
    let my_title = json.title;
    let data = DataTemplate { content: test_val, title: my_title }; // instantiate your struct

    let path = Path::new("./templates/index.html");
    let display = path.display();

    let mut file = match File::create(&path) {
        Err(why) => panic!("couldn't create {}: {}",
                           display,
                           why.description()),
        Ok(file) => file,
    };


    match file.write_all(data.render().unwrap().as_bytes()) {
        Err(why) => {
            panic!("couldn't write to {}: {}", display,
                                               why.description())
        },
        Ok(_) => println!("successfully wrote to {}", display),
    }

    //let root = Path::new("./templates");
    //assert!(env::set_current_dir(&root).is_ok());
    //println!("Successfully changed working directory to {}!", root.display());


    /*let host = "127.0.0.1";
    let port = "7878";

    let server = Server::new(|request, mut response| {
        Ok(response.body("Hello Rust!".as_bytes())?)
    });

    server.listen(host, port);*/

}
