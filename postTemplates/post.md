<!DOCTYPE html>

<html>

<head>
  <meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no" />
  <title>{{title}}</title>
  <link href="app.css" rel="stylesheet" />
  <link href="header.css" rel="stylesheet" />
  <link href="post.css" rel="stylesheet" />

</head>

<body>
  <nav class="header-cont">
    <a href="index.html">Home</a>
    <a href="cv.html">Resume</a>
    <a href="posts.html">Posts</a>
  </nav>

# Learning Rust

I wanted to learn rust, a systems programming language developed by Mozilla.
The only problem was that I was struggling for ideas for projects.

I came across a post on Reddit about a guy recommending that people should
make a static site generator as a project when they learn a new language.

I was rather apprehensive at first, because I felt that something that was above my current
capabilities.

But once I chunked up the project into a lot of small pieces, it became much less overwhelming.

## Development

I found some libraries that really helped speed up development, so that wouldn't have to implement some of the more hairier portions of static site generating(like generating html from markdown and converting json data into html templates). These libraries were [comrak](https://github.com/kivikakk/comrak) and [askama](https://github.com/djc/askama).

Learning Rust has been one of the more interesting things I have done in a while. It's interesting approaches to how it deals with memory management and mutable variables make it quite the challenging language to someone coming from doing a lot of JavaScript/es6/React. Having not touched much Java since college, a typed language is rather refreshing.

I wanted to point out some tricky concepts for those also learning Rust that also confused me(and still do sometimes).

The `<'a>` is what's known as a lifetime construct. In Rust, the language is very careful about what it will let you do in regards to reusing variables all over the place. The lifetime construct tells Rust how long you want the variable to last.

Lifetimes are also part of Rust's borrowing checking. In Rust, you have to borrow variables you want to use in a function or in some other activity. Using `&` means you're borrowing a variable. In the case below, I'm borrowing the strings used for the data in my static site.

```rust
struct SiteData<'a> {
    content: &'a str,
    title: &'a str,
    intro_text: &'a str,
    project_one: &'a str,
    project_two: &'a str,
    project_three: &'a str,
    link_one: &'a str,
    link_two: &'a str,
    link_three: &'a str }
```
