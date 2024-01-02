import nakai
import nakai/html.{type Node, Body, Element, Html, LeafElement}
import nakai/html/attrs.{type Attr, data}
import simplifile.{write}

const header_style = "
  color: #52397b;
  font-family: 'Neuton', serif;
  font-size: 2rem;
  font-weight: 400;
"

const bg_style = "
color:#186a62;
font-size:1.5rem;
"

pub fn with_attr(node: Node(a), attr: Attr(a)) -> Node(a) {
  case node {
    Html(attrs, children) -> Html([attr, ..attrs], children)
    Body(attrs, children) -> Body([attr, ..attrs], children)
    Element(tag, attrs, children) -> Element(tag, [attr, ..attrs], children)
    LeafElement(tag, attrs) -> LeafElement(tag, [attr, ..attrs])
    _ -> node
  }
}

pub fn main_content(attrs: List(Attr(a)), children) -> Node(a) {
  let attrs = [attrs.style(bg_style), ..attrs]
  html.main(attrs, children)
}

pub fn header(attrs: List(Attr(a)), text: String) -> Node(a) {
  let attrs = [attrs.style(header_style), ..attrs]
  html.h1_text(attrs, text)
}

pub fn document() {
  html.Fragment([
    html.Head([
      html.title("alex's site"),
      html.link([attrs.rel("stylesheet"), attrs.href("./style.css")]),
    ]),
    main_content([], [
      header([], "Hello, from Nakai!"),
      html.div([attrs.data("component", "true"), attrs.data("count", "4")], []),
      html.Element(
        "script",
        [
          attrs.type_("module"),
          attrs.src("./build/dev/javascript/site/entry-client.jsx"),
        ],
        [],
      ),
    ]),
  ])
}

pub fn app() -> String {
  document()
  |> nakai.to_string()
}

pub fn main() {
  let filepath = "./public/index.html"

  app()
  |> write(to: filepath)
}
