/** @jsx mdx */
import { mdx } from "@mdx-js/preact";
/* @jsx mdx */
export const meta = {
  title: "Learning Rust: a simple static site generator",
  slug: "rust-site",
  tags: ["Rust", "HTML"],
  updatedAt: "2018-03-01",
};
const MDXLayout = "wrapper";
export default function MDXContent({ components, ...props }) {
  return mdx(
    MDXLayout,
    Object.assign({}, props, {
      components: components,
      mdxType: "MDXLayout",
    }),
    mdx(
      "p",
      null,
      `I wanted to learn rust, a systems programming language developed by Mozilla.\nThe only problem was that I was struggling for ideas for projects.`
    ),
    mdx(
      "p",
      null,
      `I came across a post on Reddit about someone recommending that people should\nmake a static site generator as a project when they learn a new language.`
    ),
    mdx(
      "p",
      null,
      `I was rather apprehensive at first, because I felt that something that was above my current\ncapabilities.`
    ),
    mdx(
      "p",
      null,
      `But once I divided up the project into a lot of small pieces, it became much less overwhelming.`
    ),
    mdx(
      "h2",
      Object.assign(
        {},
        {
          id: "development",
        }
      ),
      mdx(
        "a",
        Object.assign(
          {},
          {
            className: "heading-link-anchor",
            href: "#development",
            parentName: "h2",
          }
        ),
        mdx(
          "heading-link-icon",
          Object.assign(
            {},
            {
              className: "heading-link-icon",
              parentName: "a",
            }
          )
        )
      ),
      `Development`
    ),
    mdx(
      "p",
      null,
      `I found some libraries that really helped speed up development, so that wouldn't have to implement\nsome of the more hairier portions of static site generating(like generating html from markdown and\nconverting json data into html templates). These libraries were `,
      mdx(
        "a",
        Object.assign(
          {},
          {
            href: "https://github.com/kivikakk/comrak",
            parentName: "p",
          }
        ),
        `comrak`
      ),
      `\nand `,
      mdx(
        "a",
        Object.assign(
          {},
          {
            href: "https://github.com/djc/askama",
            parentName: "p",
          }
        ),
        `askama`
      ),
      `.`
    ),
    mdx(
      "p",
      null,
      `Learning Rust has been one of the more interesting things I have done in a while.\nIt's interesting approaches to how it deals with memory management and mutable variables\nmake it quite the challenging language to someone coming from doing a lot of JavaScript/es6/React.\nHaving not touched much Java since college, a typed language is rather refreshing.`
    ),
    mdx(
      "p",
      null,
      `I wanted to point out some tricky concepts for those also learning Rust that also confused me(and still do sometimes).`
    ),
    mdx(
      "p",
      null,
      `The `,
      mdx(
        "inlineCode",
        Object.assign(
          {},
          {
            parentName: "p",
          }
        ),
        `<'a>`
      ),
      ` is what's known as a lifetime construct. In Rust, the language is very careful about what it will let you do in regards to reusing variables all over the place. The lifetime construct tells Rust how long you want the variable to last.`
    ),
    mdx(
      "p",
      null,
      `Lifetimes are also part of Rust's borrowing checking. In Rust, you have to borrow variables you want to use in a function or in some other activity. Using `,
      mdx(
        "inlineCode",
        Object.assign(
          {},
          {
            parentName: "p",
          }
        ),
        `&`
      ),
      ` means you're borrowing a variable. In the case below, I'm borrowing the strings used for the data in my static site.`
    ),
    mdx(
      "codeblock",
      Object.assign(
        {},
        {
          className: "language-rust",
          codestring:
            "struct SiteData<'a> {\n    content: &'a str,\n    title: &'a str,\n    intro_text: &'a str,\n    project_one: &'a str,\n    project_two: &'a str,\n    project_three: &'a str,\n    link_one: &'a str,\n    link_two: &'a str,\n    link_three: &'a str }",
        }
      ),
      `<pre class="prism-code language-rust" style="color: #d6deeb; background-color: #011627; background-color: transparent;"><div class="token-line" style="color: #d6deeb;"><span class="token keyword" style="color: rgb(127, 219, 202);">struct</span><span class="token plain"> </span><span class="token type-definition class-name" style="color: rgb(255, 203, 139);">SiteData</span><span class="token operator" style="color: rgb(127, 219, 202);">&lt;</span><span class="token lifetime-annotation symbol">'a</span><span class="token operator" style="color: rgb(127, 219, 202);">&gt;</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(199, 146, 234);">{</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">    content</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> </span><span class="token operator" style="color: rgb(127, 219, 202);">&amp;</span><span class="token lifetime-annotation symbol">'a</span><span class="token plain"> </span><span class="token keyword" style="color: rgb(127, 219, 202);">str</span><span class="token punctuation" style="color: rgb(199, 146, 234);">,</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">    title</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> </span><span class="token operator" style="color: rgb(127, 219, 202);">&amp;</span><span class="token lifetime-annotation symbol">'a</span><span class="token plain"> </span><span class="token keyword" style="color: rgb(127, 219, 202);">str</span><span class="token punctuation" style="color: rgb(199, 146, 234);">,</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">    intro_text</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> </span><span class="token operator" style="color: rgb(127, 219, 202);">&amp;</span><span class="token lifetime-annotation symbol">'a</span><span class="token plain"> </span><span class="token keyword" style="color: rgb(127, 219, 202);">str</span><span class="token punctuation" style="color: rgb(199, 146, 234);">,</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">    project_one</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> </span><span class="token operator" style="color: rgb(127, 219, 202);">&amp;</span><span class="token lifetime-annotation symbol">'a</span><span class="token plain"> </span><span class="token keyword" style="color: rgb(127, 219, 202);">str</span><span class="token punctuation" style="color: rgb(199, 146, 234);">,</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">    project_two</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> </span><span class="token operator" style="color: rgb(127, 219, 202);">&amp;</span><span class="token lifetime-annotation symbol">'a</span><span class="token plain"> </span><span class="token keyword" style="color: rgb(127, 219, 202);">str</span><span class="token punctuation" style="color: rgb(199, 146, 234);">,</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">    project_three</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> </span><span class="token operator" style="color: rgb(127, 219, 202);">&amp;</span><span class="token lifetime-annotation symbol">'a</span><span class="token plain"> </span><span class="token keyword" style="color: rgb(127, 219, 202);">str</span><span class="token punctuation" style="color: rgb(199, 146, 234);">,</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">    link_one</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> </span><span class="token operator" style="color: rgb(127, 219, 202);">&amp;</span><span class="token lifetime-annotation symbol">'a</span><span class="token plain"> </span><span class="token keyword" style="color: rgb(127, 219, 202);">str</span><span class="token punctuation" style="color: rgb(199, 146, 234);">,</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">    link_two</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> </span><span class="token operator" style="color: rgb(127, 219, 202);">&amp;</span><span class="token lifetime-annotation symbol">'a</span><span class="token plain"> </span><span class="token keyword" style="color: rgb(127, 219, 202);">str</span><span class="token punctuation" style="color: rgb(199, 146, 234);">,</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">    link_three</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> </span><span class="token operator" style="color: rgb(127, 219, 202);">&amp;</span><span class="token lifetime-annotation symbol">'a</span><span class="token plain"> </span><span class="token keyword" style="color: rgb(127, 219, 202);">str</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(199, 146, 234);">}</span></div></pre>`
    )
  );
}
MDXContent.isMDXComponent = true;
