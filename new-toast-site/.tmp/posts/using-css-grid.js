/** @jsx mdx */
import { mdx } from "@mdx-js/preact";
const MDXLayout = "wrapper";
export default function MDXContent({ components, ...props }) {
  return mdx(
    MDXLayout,
    Object.assign({}, props, {
      components: components,
      mdxType: "MDXLayout",
    }),
    mdx("hr", null),
    mdx("p", null, `date: "2019-10-29"\ntitle: "Lessons from CSS grid"`),
    mdx(
      "h2",
      Object.assign(
        {},
        {
          id: "author-alex-strand",
        }
      ),
      mdx(
        "a",
        Object.assign(
          {},
          {
            className: "heading-link-anchor",
            href: "#author-alex-strand",
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
      `author: "Alex Strand"`
    ),
    mdx(
      "h1",
      Object.assign(
        {},
        {
          id: "mistakes-that-can-be-made-when-using-css-grid",
        }
      ),
      mdx(
        "a",
        Object.assign(
          {},
          {
            className: "heading-link-anchor",
            href: "#mistakes-that-can-be-made-when-using-css-grid",
            parentName: "h1",
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
      `Mistakes that can be made when using CSS grid`
    ),
    mdx(
      "p",
      null,
      `I noticed recently that the css in my personal site was not behaving as I expected.\nMy footer was uch too larger on mobile devices.`
    ),
    mdx(
      "p",
      null,
      `When I started learning CSS grid, I had set the two sections of my main content\nto have specfic `,
      mdx(
        "inlineCode",
        Object.assign(
          {},
          {
            parentName: "p",
          }
        ),
        `grid-row-start`
      ),
      ` and `,
      mdx(
        "inlineCode",
        Object.assign(
          {},
          {
            parentName: "p",
          }
        ),
        `grid-row-end`
      ),
      ` values.`
    ),
    mdx("p", null, `Top Section:`),
    mdx(
      "codeblock",
      Object.assign(
        {},
        {
          className: "language-css",
          codestring:
            "main {\n  grid-column-start: 1;\n  grid-column-end: end;\n  grid-row-start: 1;\n  grid-row-end: 3;\n}",
        }
      ),
      `<pre class="prism-code language-css" style="color: #d6deeb; background-color: #011627; background-color: transparent;"><div class="token-line" style="color: #d6deeb;"><span class="token selector" style="color: rgb(199, 146, 234); font-style: italic;">main</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(199, 146, 234);">{</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token property" style="color: rgb(128, 203, 196);">grid-column-start</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> </span><span class="token number" style="color: rgb(247, 140, 108);">1</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token property" style="color: rgb(128, 203, 196);">grid-column-end</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> end</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token property" style="color: rgb(128, 203, 196);">grid-row-start</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> </span><span class="token number" style="color: rgb(247, 140, 108);">1</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token property" style="color: rgb(128, 203, 196);">grid-row-end</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> </span><span class="token number" style="color: rgb(247, 140, 108);">3</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain"></span><span class="token punctuation" style="color: rgb(199, 146, 234);">}</span></div></pre>`
    ),
    mdx("p", null, `Footer:`),
    mdx(
      "codeblock",
      Object.assign(
        {},
        {
          className: "language-css",
          codestring:
            "footer {\n  grid-row-start: 2;\n  grid-row-end: end;\n  grid-column-start: 1;\n  grid-column-end: end;\n}",
        }
      ),
      `<pre class="prism-code language-css" style="color: #d6deeb; background-color: #011627; background-color: transparent;"><div class="token-line" style="color: #d6deeb;"><span class="token selector" style="color: rgb(199, 146, 234); font-style: italic;">footer</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(199, 146, 234);">{</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token property" style="color: rgb(128, 203, 196);">grid-row-start</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> </span><span class="token number" style="color: rgb(247, 140, 108);">2</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token property" style="color: rgb(128, 203, 196);">grid-row-end</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> end</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token property" style="color: rgb(128, 203, 196);">grid-column-start</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> </span><span class="token number" style="color: rgb(247, 140, 108);">1</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token property" style="color: rgb(128, 203, 196);">grid-column-end</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> end</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain"></span><span class="token punctuation" style="color: rgb(199, 146, 234);">}</span></div></pre>`
    ),
    mdx(
      "p",
      null,
      `I realized that into addition to the `,
      mdx(
        "inlineCode",
        Object.assign(
          {},
          {
            parentName: "p",
          }
        ),
        `grid-row-end`
      ),
      ` value for the `,
      mdx(
        "inlineCode",
        Object.assign(
          {},
          {
            parentName: "p",
          }
        ),
        `main`
      ),
      ` element being wrong, I wasn't using CSS Grid to it's full potential.`
    ),
    mdx(
      "p",
      null,
      `The fix I used came from `,
      mdx(
        "a",
        Object.assign(
          {},
          {
            href:
              "https://dev.to/niorad/keeping-the-footer-at-the-bottom-with-css-grid-15mf",
            parentName: "p",
          }
        ),
        `this post on dev.to`
      ),
      `.`
    ),
    mdx("p", null, `In my Layout component, I had CSS that looked like this:`),
    mdx(
      "p",
      null,
      mdx(
        "em",
        Object.assign(
          {},
          {
            parentName: "p",
          }
        ),
        `note: some lines omuitted for clarity`
      )
    ),
    mdx(
      "codeblock",
      Object.assign(
        {},
        {
          className: "language-css",
          codestring:
            'div {\n  grid-template-rows: "1fr 1fr";\n  @media screen and (min-width: 30em) {\n    grid-template-rows: "1fr 50px";\n  }\n}',
        }
      ),
      `<pre class="prism-code language-css" style="color: #d6deeb; background-color: #011627; background-color: transparent;"><div class="token-line" style="color: #d6deeb;"><span class="token selector" style="color: rgb(199, 146, 234); font-style: italic;">div</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(199, 146, 234);">{</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token property" style="color: rgb(128, 203, 196);">grid-template-rows</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> </span><span class="token string" style="color: rgb(173, 219, 103);">&quot;1fr 1fr&quot;</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token atrule rule">@media</span><span class="token atrule"> screen </span><span class="token atrule keyword" style="color: rgb(127, 219, 202);">and</span><span class="token atrule"> </span><span class="token atrule punctuation" style="color: rgb(199, 146, 234);">(</span><span class="token atrule property" style="color: rgb(128, 203, 196);">min-width</span><span class="token atrule punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token atrule"> </span><span class="token atrule number" style="color: rgb(247, 140, 108);">30</span><span class="token atrule unit">em</span><span class="token atrule punctuation" style="color: rgb(199, 146, 234);">)</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(199, 146, 234);">{</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">    </span><span class="token property" style="color: rgb(128, 203, 196);">grid-template-rows</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> </span><span class="token string" style="color: rgb(173, 219, 103);">&quot;1fr 50px&quot;</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token punctuation" style="color: rgb(199, 146, 234);">}</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain"></span><span class="token punctuation" style="color: rgb(199, 146, 234);">}</span></div></pre>`
    ),
    mdx(
      "p",
      null,
      `In my default `,
      mdx(
        "inlineCode",
        Object.assign(
          {},
          {
            parentName: "p",
          }
        ),
        `grid-template-rows`
      ),
      ` rule, the values I was using said that each row in the grid should be as tall as it possibly can.`
    ),
    mdx(
      "p",
      null,
      `Instead what I needed to use was `,
      mdx(
        "inlineCode",
        Object.assign(
          {},
          {
            parentName: "p",
          }
        ),
        `grid-template-rows:1fr auto;`
      ),
      `.`
    ),
    mdx(
      "p",
      null,
      `What this says is that the first row will grow to take up as much space as possible.\nAuto will just set the second row to only take up as much space as it normally would.`
    ),
    mdx(
      "p",
      null,
      mdx(
        "em",
        Object.assign(
          {},
          {
            parentName: "p",
          }
        ),
        `note: I Am not a CSS Grid expert, so explannations may be somewhat confusing.\nFor a more detailed explanation of CSS Grid,\nsee `,
        mdx(
          "a",
          Object.assign(
            {},
            {
              href:
                "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout",
              parentName: "em",
            }
          ),
          `the mdn docs`
        )
      ),
      `.`
    ),
    mdx(
      "p",
      null,
      `Using the `,
      mdx(
        "inlineCode",
        Object.assign(
          {},
          {
            parentName: "p",
          }
        ),
        `grid-template-rows`
      ),
      ` syntax I described above, I was able to solve my problem and also get rid of a lot of unneccesaary css.`
    )
  );
}
MDXContent.isMDXComponent = true;
