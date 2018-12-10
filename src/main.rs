#![recursion_limit = "1024"]
// #![feature(proc_macro_hygiene, decl_macro)]
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

extern crate typed_html;
extern crate typed_html_macros;

use typed_html::types::LinkType;

use serde_json::{Value};

use typed_html::{dom::DOMTree, html, text};


#[derive(Serialize, Deserialize)]
struct FooArray {
    link:String,
    desc:String
}


#[derive(Serialize, Deserialize)]
struct SiteData<'a> {
    content: &'a str,
    title: &'a str,
    intro_text:&'a str,
    company_desc:&'a str,
    company_two_desc:&'a str
}

fn main() {
    //posts::posts::create_posts();
    create_site();
    }


fn create_site () {
    let mut file = File::open("./data.json").unwrap();
    let mut data = String::new();
    file.read_to_string(&mut data).unwrap();

    let json: SiteData = serde_json::from_str(&data).unwrap();

    let mut f = File::open("./projectsArray.json").unwrap();
    let mut sec = String::new();
    f.read_to_string(&mut sec).unwrap();

    let tt: Vec<FooArray> = serde_json::from_str(&sec).unwrap();

    for v in tt.iter() {
        println!("hello {}", v.link)
    }
    /*let mut doc: DOMTree<String> = html!(
<html>
<head>
<title>{text!(json.title)}</title>
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
  <link href="css/app.css" rel="stylesheet" />
  <link href="css/header.css" rel="stylesheet" />
  <script src="https://cdn.jsdelivr.net/npm/cash-dom@1.3.5/dist/cash.min.js"></script>
  <script src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
  <script src="js/define.js"></script>
  <script src="js/toggleDark.js"></script>
  <script src="js/type.js"></script>
  <script src="js/app.js"></script>
</head>
<body>
  <nav class="header-cont">
    <a href="index.html">"Home"</a>
    <a href="cv.html">"Resume"</a>
    <a href="posts.html">"Posts"</a>
  </nav>
  <div class="contentWrapper">
      <div class="top">
          <button id="darkModeButton"></button>
          <div class="container">
              <div class="main-info">
                <div class="headWrapper fullWidth">
                  <h2 class="typewriter">{text!(json.intro_text)}</h2>
                    <span class="blink">"|"</span>
                </div>
              </div>
            </div>
      </div>
        <ul>
            <li>{text!(json.company_desc)}</li>
            <li>{text!(json.company_two_desc)}</li>
        </ul>   
       <p>{text!(json.content)}</p> 
          <h1>"Projects"</h1>
            <div class="projects">
        { projArr.map(|p| html!(
      <div class="columnCont">
        <div class="project">
            <a href={text!(p.link)}>
                <p class="desc">{text!(p.desc)}</p>
            </a>
        </div>
      </div>
       )) }
   </div>
     <footer>
      <a href="https://github.com/ajstrand">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/ajstrand">
        <i class="fab fa-linkedin"></i>
      </a>
  </footer>
   </div>
</body>

</html>
);
let doc_str = doc.to_string();

let path = Path::new("./templates/foo-test.html");
    let display = path.display();

    let mut file = match File::create(&path) {
        Err(why) => panic!("couldn't create {}: {}", display, why.description()),
        Ok(file) => file,
    };

    match file.write_all(doc_str.as_bytes()) {
        Err(why) => panic!("couldn't write to {}: {}", display, why.description()),
        Ok(_) => println!("successfully wrote to {}", display),
    }

      fs::copy("./templates/index.html", "index.html");
    println!("copied template to an index file in the root");*/
}
