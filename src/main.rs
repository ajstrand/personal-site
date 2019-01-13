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

use typed_html::{dom::DOMTree, html, text};


#[derive(Deserialize, Debug)]
struct Obj {
    projArr: Vec<Foo>
}

#[derive(Deserialize, Debug)]
struct Foo {
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
    posts::posts::create_posts();
    create_site();
    }


fn create_site () {
    let mut file = File::open("./json/data.json").unwrap();
    let mut data = String::new();
    file.read_to_string(&mut data).unwrap();

    let json: SiteData = serde_json::from_str(&data).unwrap();

    let mut f = File::open("./json/projectsArray.json").unwrap();
    let mut sec = String::new();
    f.read_to_string(&mut sec).unwrap();

    let projDataObj = serde_json::from_str::<Obj>(&sec).unwrap();
    let arr = projDataObj.projArr;

    let doc: DOMTree<String> = html!(
<html>
<head>
<title>{text!(json.title)}</title>
  <meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no" />
  <link rel=LinkType::StyleSheet href="https://fonts.googleapis.com/css?family=Roboto"/>
  <link rel=LinkType::StyleSheet href="app.css"/>
  <link rel=LinkType::StyleSheet href="header.css"/>
  <script src="https://cdn.jsdelivr.net/npm/cash-dom@1.3.5/dist/cash.min.js"></script>
  <script src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
    <script src="define.js"></script>
  <script src="toggleDark.js"></script>
  <script src="type.js"></script>
  <script src="app.js"></script>
  
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
        { arr.into_iter().map(|p| html!(
      <div class="columnCont">
        <div class="project">
            <a href="foo-link">
                <p class="desc">{text!(p.desc)}</p>
            </a>
        </div>
      </div>
       )) }
   </div>
     <footer>
     <a href="https://twitter.com/_alex_strand">
        <i class="fab fa-twitter"></i>
      </a>
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

let path = Path::new("./index.html");
    let display = path.display();

    let mut file = match File::create(&path) {
        Err(why) => panic!("couldn't create {}: {}", display, why.description()),
        Ok(file) => file,
    };

    match file.write_all(doc_str.as_bytes()) {
        Err(why) => panic!("couldn't write to {}: {}", display, why.description()),
        Ok(_) => println!("successfully wrote to {}", display),
    }
}
