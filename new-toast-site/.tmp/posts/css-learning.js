/** @jsx mdx */
import { mdx } from "@mdx-js/preact";
/* @jsx mdx */
export const meta = {
  title:
    "Always Learning about CSS: the whitespace property and how less code is sometimes a smarter approach",
  slug: "css-learning",
  tags: ["CSS"],
  updatedAt: "2019-25-12",
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
      "h2",
      Object.assign(
        {},
        {
          id:
            "no-matter-how-long-youve-been-coding-theres-always-more-to-learn",
        }
      ),
      mdx(
        "a",
        Object.assign(
          {},
          {
            className: "heading-link-anchor",
            href:
              "#no-matter-how-long-youve-been-coding-theres-always-more-to-learn",
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
      `No matter how long you've been coding there's always more to learn.`
    ),
    mdx(
      "p",
      null,
      `I recently ran into an issue where I had some content in my website footer that looked like this`
    ),
    mdx(
      "codeblock",
      Object.assign(
        {},
        {
          className: "language-jsx",
          codestring:
            '<p>\n  built with\n  <a href="https://gatsbyjs.org">Gatsby</a>\n  and hosted on\n  <a href="https://netlify.com">Netlify</a>\n</p>',
        }
      ),
      `<pre class="prism-code language-jsx" style="color: #d6deeb; background-color: #011627; background-color: transparent;"><div class="token-line" style="color: #d6deeb;"><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&lt;</span><span class="token tag" style="color: rgb(127, 219, 202);">p</span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&gt;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  built </span><span class="token keyword" style="color: rgb(127, 219, 202);">with</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&lt;</span><span class="token tag" style="color: rgb(127, 219, 202);">a</span><span class="token tag" style="color: rgb(127, 219, 202);"> </span><span class="token tag attr-name" style="color: rgb(173, 219, 103); font-style: italic;">href</span><span class="token tag attr-value punctuation attr-equals" style="color: rgb(199, 146, 234);">=</span><span class="token tag attr-value punctuation" style="color: rgb(199, 146, 234);">&quot;</span><span class="token tag attr-value" style="color: rgb(127, 219, 202);">https://gatsbyjs.org</span><span class="token tag attr-value punctuation" style="color: rgb(199, 146, 234);">&quot;</span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&gt;</span><span class="token maybe-class-name">Gatsby</span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&lt;/</span><span class="token tag" style="color: rgb(127, 219, 202);">a</span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&gt;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  and hosted on</span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&lt;</span><span class="token tag" style="color: rgb(127, 219, 202);">a</span><span class="token tag" style="color: rgb(127, 219, 202);"> </span><span class="token tag attr-name" style="color: rgb(173, 219, 103); font-style: italic;">href</span><span class="token tag attr-value punctuation attr-equals" style="color: rgb(199, 146, 234);">=</span><span class="token tag attr-value punctuation" style="color: rgb(199, 146, 234);">&quot;</span><span class="token tag attr-value" style="color: rgb(127, 219, 202);">https://netlify.com</span><span class="token tag attr-value punctuation" style="color: rgb(199, 146, 234);">&quot;</span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&gt;</span><span class="token maybe-class-name">Netlify</span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&lt;/</span><span class="token tag" style="color: rgb(127, 219, 202);">a</span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&gt;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain"></span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&lt;/</span><span class="token tag" style="color: rgb(127, 219, 202);">p</span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&gt;</span></div></pre>`
    ),
    mdx("p", null, `Example:`),
    mdx(
      "p",
      null,
      `Between the two attribution tags in my footer, there was no space for the phrase 'and honsted on' between the anchor tags.`
    ),
    mdx(
      "p",
      null,
      `It's been that way on my site for a while now and i was confused as to why the html wasn't lying out like i expected.`
    ),
    mdx(
      "p",
      null,
      `I finally googled and found an answer on `,
      mdx(
        "a",
        Object.assign(
          {},
          {
            href:
              "https://stackoverflow.com/questions/33384318/how-to-use-nbsp-in-html5",
            parentName: "p",
          }
        ),
        `stackoverflow`
      ),
      `.`
    ),
    mdx(
      "p",
      null,
      `Since i wasn't putting my text in the same line as my anchor tags,\ni would have to use a non breaking space `,
      mdx(
        "inlineCode",
        Object.assign(
          {},
          {
            parentName: "p",
          }
        ),
        `&nbsp`
      ),
      ` to create space for the text.`
    ),
    mdx("p", null, `Example:`),
    mdx(
      "p",
      null,
      `But the Stackoverflow thread pointed towards a better solution.\nTo use the `,
      mdx(
        "a",
        Object.assign(
          {},
          {
            href:
              "https://developer.mozilla.org/en-US/docs/Web/CSS/white-space",
            parentName: "p",
          }
        ),
        `whitespace property from Mozilla Developer Network`
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
        `pre`
      ),
      ` property of the whitespace css rule:`
    ),
    mdx(
      "codeblock",
      Object.assign(
        {},
        {
          className: "language-css",
          codestring: 'a {\n  white-space: "pre";\n}',
        }
      ),
      `<pre class="prism-code language-css" style="color: #d6deeb; background-color: #011627; background-color: transparent;"><div class="token-line" style="color: #d6deeb;"><span class="token selector" style="color: rgb(199, 146, 234); font-style: italic;">a</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(199, 146, 234);">{</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token property" style="color: rgb(128, 203, 196);">white-space</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> </span><span class="token string" style="color: rgb(173, 219, 103);">&quot;pre&quot;</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain"></span><span class="token punctuation" style="color: rgb(199, 146, 234);">}</span></div></pre>`
    ),
    mdx("p", null, `Example:`),
    mdx(
      "p",
      null,
      `I would now get the whitespace I wanted. The full explanation from the docs is`
    ),
    mdx(
      "p",
      null,
      mdx(
        "inlineCode",
        Object.assign(
          {},
          {
            parentName: "p",
          }
        ),
        `Sequences of white space are preserved. Lines are only broken at newline characters in the source and at <br> elements`
      )
    ),
    mdx("p", null, `The final code of my solution looked something like this:`),
    mdx(
      "codeblock",
      Object.assign(
        {},
        {
          className: "language-jsx",
          codestring:
            'const determineResult = (type) => {\n  const { prop } = type;\n  let result;\n  let temp;\n  switch (prop) {\n    case "noCSS":\n      temp = null;\n      break;\n    case "nbsp":\n      temp = "non-breaking-space";\n      break;\n    case "pre":\n      temp = "pre";\n      break;\n    default:\n      console.log(`${prop} not a valid option`);\n      break;\n  }\n  result = temp;\n  return result;\n};\n\nconst CSSWhitespace = (cssType) => {\n  let useCSS = determineResult(cssType);\n  const whiteSpaceStyle = {\n    whiteSpace: "pre",\n  };\n  const useWhiteSpace = useCSS === "pre" ? whiteSpaceStyle : null;\n  const useNBSP = useCSS === "non-breaking-space" ? <span>&nbsp;</span> : null;\n  return (\n    <p>\n      built with\n      {useNBSP} <a style={useWhiteSpace} href="https://gatsbyjs.org">\n        Gatsby\n      </a> {useNBSP}\n      <span>and</span>\n      {useNBSP} <a style={useWhiteSpace} href="https://netlify.com">\n        Netlify\n      </a>.\n    </p>\n  );\n};',
        }
      ),
      `<pre class="prism-code language-jsx" style="color: #d6deeb; background-color: #011627; background-color: transparent;"><div class="token-line" style="color: #d6deeb;"><span class="token keyword" style="color: rgb(127, 219, 202);">const</span><span class="token plain"> </span><span class="token function-variable function" style="color: rgb(130, 170, 255);">determineResult</span><span class="token plain"> </span><span class="token operator" style="color: rgb(127, 219, 202);">=</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(199, 146, 234);">(</span><span class="token parameter">type</span><span class="token punctuation" style="color: rgb(199, 146, 234);">)</span><span class="token plain"> </span><span class="token arrow operator" style="color: rgb(127, 219, 202);">=&gt;</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(199, 146, 234);">{</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token keyword" style="color: rgb(127, 219, 202);">const</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(199, 146, 234);">{</span><span class="token plain"> prop </span><span class="token punctuation" style="color: rgb(199, 146, 234);">}</span><span class="token plain"> </span><span class="token operator" style="color: rgb(127, 219, 202);">=</span><span class="token plain"> type</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token keyword" style="color: rgb(127, 219, 202);">let</span><span class="token plain"> result</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token keyword" style="color: rgb(127, 219, 202);">let</span><span class="token plain"> temp</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token keyword control-flow" style="color: rgb(127, 219, 202);">switch</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(199, 146, 234);">(</span><span class="token plain">prop</span><span class="token punctuation" style="color: rgb(199, 146, 234);">)</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(199, 146, 234);">{</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">    </span><span class="token keyword" style="color: rgb(127, 219, 202);">case</span><span class="token plain"> </span><span class="token string" style="color: rgb(173, 219, 103);">&quot;noCSS&quot;</span><span class="token operator" style="color: rgb(127, 219, 202);">:</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">      temp </span><span class="token operator" style="color: rgb(127, 219, 202);">=</span><span class="token plain"> </span><span class="token keyword null nil" style="color: rgb(127, 219, 202);">null</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">      </span><span class="token keyword control-flow" style="color: rgb(127, 219, 202);">break</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">    </span><span class="token keyword" style="color: rgb(127, 219, 202);">case</span><span class="token plain"> </span><span class="token string" style="color: rgb(173, 219, 103);">&quot;nbsp&quot;</span><span class="token operator" style="color: rgb(127, 219, 202);">:</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">      temp </span><span class="token operator" style="color: rgb(127, 219, 202);">=</span><span class="token plain"> </span><span class="token string" style="color: rgb(173, 219, 103);">&quot;non-breaking-space&quot;</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">      </span><span class="token keyword control-flow" style="color: rgb(127, 219, 202);">break</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">    </span><span class="token keyword" style="color: rgb(127, 219, 202);">case</span><span class="token plain"> </span><span class="token string" style="color: rgb(173, 219, 103);">&quot;pre&quot;</span><span class="token operator" style="color: rgb(127, 219, 202);">:</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">      temp </span><span class="token operator" style="color: rgb(127, 219, 202);">=</span><span class="token plain"> </span><span class="token string" style="color: rgb(173, 219, 103);">&quot;pre&quot;</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">      </span><span class="token keyword control-flow" style="color: rgb(127, 219, 202);">break</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">    </span><span class="token keyword module" style="color: rgb(127, 219, 202);">default</span><span class="token operator" style="color: rgb(127, 219, 202);">:</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">      </span><span class="token console class-name" style="color: rgb(255, 203, 139);">console</span><span class="token punctuation" style="color: rgb(199, 146, 234);">.</span><span class="token method function property-access" style="color: rgb(130, 170, 255);">log</span><span class="token punctuation" style="color: rgb(199, 146, 234);">(</span><span class="token template-string template-punctuation string" style="color: rgb(173, 219, 103);">\`</span><span class="token template-string interpolation interpolation-punctuation punctuation" style="color: rgb(199, 146, 234);">\${</span><span class="token template-string interpolation">prop</span><span class="token template-string interpolation interpolation-punctuation punctuation" style="color: rgb(199, 146, 234);">}</span><span class="token template-string string" style="color: rgb(173, 219, 103);"> not a valid option</span><span class="token template-string template-punctuation string" style="color: rgb(173, 219, 103);">\`</span><span class="token punctuation" style="color: rgb(199, 146, 234);">)</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">      </span><span class="token keyword control-flow" style="color: rgb(127, 219, 202);">break</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token punctuation" style="color: rgb(199, 146, 234);">}</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  result </span><span class="token operator" style="color: rgb(127, 219, 202);">=</span><span class="token plain"> temp</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token keyword control-flow" style="color: rgb(127, 219, 202);">return</span><span class="token plain"> result</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain"></span><span class="token punctuation" style="color: rgb(199, 146, 234);">}</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain" style="display: inline-block;"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain"></span><span class="token keyword" style="color: rgb(127, 219, 202);">const</span><span class="token plain"> </span><span class="token function-variable function maybe-class-name" style="color: rgb(130, 170, 255);">CSSWhitespace</span><span class="token plain"> </span><span class="token operator" style="color: rgb(127, 219, 202);">=</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(199, 146, 234);">(</span><span class="token parameter">cssType</span><span class="token punctuation" style="color: rgb(199, 146, 234);">)</span><span class="token plain"> </span><span class="token arrow operator" style="color: rgb(127, 219, 202);">=&gt;</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(199, 146, 234);">{</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token keyword" style="color: rgb(127, 219, 202);">let</span><span class="token plain"> useCSS </span><span class="token operator" style="color: rgb(127, 219, 202);">=</span><span class="token plain"> </span><span class="token function" style="color: rgb(130, 170, 255);">determineResult</span><span class="token punctuation" style="color: rgb(199, 146, 234);">(</span><span class="token plain">cssType</span><span class="token punctuation" style="color: rgb(199, 146, 234);">)</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token keyword" style="color: rgb(127, 219, 202);">const</span><span class="token plain"> whiteSpaceStyle </span><span class="token operator" style="color: rgb(127, 219, 202);">=</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(199, 146, 234);">{</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">    whiteSpace</span><span class="token operator" style="color: rgb(127, 219, 202);">:</span><span class="token plain"> </span><span class="token string" style="color: rgb(173, 219, 103);">&quot;pre&quot;</span><span class="token punctuation" style="color: rgb(199, 146, 234);">,</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token punctuation" style="color: rgb(199, 146, 234);">}</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token keyword" style="color: rgb(127, 219, 202);">const</span><span class="token plain"> useWhiteSpace </span><span class="token operator" style="color: rgb(127, 219, 202);">=</span><span class="token plain"> useCSS </span><span class="token operator" style="color: rgb(127, 219, 202);">===</span><span class="token plain"> </span><span class="token string" style="color: rgb(173, 219, 103);">&quot;pre&quot;</span><span class="token plain"> </span><span class="token operator" style="color: rgb(127, 219, 202);">?</span><span class="token plain"> whiteSpaceStyle </span><span class="token operator" style="color: rgb(127, 219, 202);">:</span><span class="token plain"> </span><span class="token keyword null nil" style="color: rgb(127, 219, 202);">null</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token keyword" style="color: rgb(127, 219, 202);">const</span><span class="token plain"> useNBSP </span><span class="token operator" style="color: rgb(127, 219, 202);">=</span><span class="token plain"> useCSS </span><span class="token operator" style="color: rgb(127, 219, 202);">===</span><span class="token plain"> </span><span class="token string" style="color: rgb(173, 219, 103);">&quot;non-breaking-space&quot;</span><span class="token plain"> </span><span class="token operator" style="color: rgb(127, 219, 202);">?</span><span class="token plain"> </span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&lt;</span><span class="token tag" style="color: rgb(127, 219, 202);">span</span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&gt;</span><span class="token entity named-entity">&amp;nbsp;</span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&lt;/</span><span class="token tag" style="color: rgb(127, 219, 202);">span</span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&gt;</span><span class="token plain"> </span><span class="token operator" style="color: rgb(127, 219, 202);">:</span><span class="token plain"> </span><span class="token keyword null nil" style="color: rgb(127, 219, 202);">null</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token keyword control-flow" style="color: rgb(127, 219, 202);">return</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(199, 146, 234);">(</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">    </span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&lt;</span><span class="token tag" style="color: rgb(127, 219, 202);">p</span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&gt;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">      built </span><span class="token keyword" style="color: rgb(127, 219, 202);">with</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">      </span><span class="token punctuation" style="color: rgb(199, 146, 234);">{</span><span class="token plain">useNBSP</span><span class="token punctuation" style="color: rgb(199, 146, 234);">}</span><span class="token plain"> </span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&lt;</span><span class="token tag" style="color: rgb(127, 219, 202);">a</span><span class="token tag" style="color: rgb(127, 219, 202);"> </span><span class="token tag attr-name" style="color: rgb(173, 219, 103); font-style: italic;">style</span><span class="token tag script language-javascript script-punctuation punctuation" style="color: rgb(199, 146, 234);">=</span><span class="token tag script language-javascript punctuation" style="color: rgb(199, 146, 234);">{</span><span class="token tag script language-javascript" style="color: rgb(127, 219, 202);">useWhiteSpace</span><span class="token tag script language-javascript punctuation" style="color: rgb(199, 146, 234);">}</span><span class="token tag" style="color: rgb(127, 219, 202);"> </span><span class="token tag attr-name" style="color: rgb(173, 219, 103); font-style: italic;">href</span><span class="token tag attr-value punctuation attr-equals" style="color: rgb(199, 146, 234);">=</span><span class="token tag attr-value punctuation" style="color: rgb(199, 146, 234);">&quot;</span><span class="token tag attr-value" style="color: rgb(127, 219, 202);">https://gatsbyjs.org</span><span class="token tag attr-value punctuation" style="color: rgb(199, 146, 234);">&quot;</span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&gt;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">        </span><span class="token maybe-class-name">Gatsby</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">      </span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&lt;/</span><span class="token tag" style="color: rgb(127, 219, 202);">a</span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&gt;</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(199, 146, 234);">{</span><span class="token plain">useNBSP</span><span class="token punctuation" style="color: rgb(199, 146, 234);">}</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">      </span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&lt;</span><span class="token tag" style="color: rgb(127, 219, 202);">span</span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&gt;</span><span class="token plain">and</span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&lt;/</span><span class="token tag" style="color: rgb(127, 219, 202);">span</span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&gt;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">      </span><span class="token punctuation" style="color: rgb(199, 146, 234);">{</span><span class="token plain">useNBSP</span><span class="token punctuation" style="color: rgb(199, 146, 234);">}</span><span class="token plain"> </span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&lt;</span><span class="token tag" style="color: rgb(127, 219, 202);">a</span><span class="token tag" style="color: rgb(127, 219, 202);"> </span><span class="token tag attr-name" style="color: rgb(173, 219, 103); font-style: italic;">style</span><span class="token tag script language-javascript script-punctuation punctuation" style="color: rgb(199, 146, 234);">=</span><span class="token tag script language-javascript punctuation" style="color: rgb(199, 146, 234);">{</span><span class="token tag script language-javascript" style="color: rgb(127, 219, 202);">useWhiteSpace</span><span class="token tag script language-javascript punctuation" style="color: rgb(199, 146, 234);">}</span><span class="token tag" style="color: rgb(127, 219, 202);"> </span><span class="token tag attr-name" style="color: rgb(173, 219, 103); font-style: italic;">href</span><span class="token tag attr-value punctuation attr-equals" style="color: rgb(199, 146, 234);">=</span><span class="token tag attr-value punctuation" style="color: rgb(199, 146, 234);">&quot;</span><span class="token tag attr-value" style="color: rgb(127, 219, 202);">https://netlify.com</span><span class="token tag attr-value punctuation" style="color: rgb(199, 146, 234);">&quot;</span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&gt;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">        </span><span class="token maybe-class-name">Netlify</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">      </span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&lt;/</span><span class="token tag" style="color: rgb(127, 219, 202);">a</span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&gt;</span><span class="token punctuation" style="color: rgb(199, 146, 234);">.</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">    </span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&lt;/</span><span class="token tag" style="color: rgb(127, 219, 202);">p</span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&gt;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token punctuation" style="color: rgb(199, 146, 234);">)</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain"></span><span class="token punctuation" style="color: rgb(199, 146, 234);">}</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span></div></pre>`
    ),
    mdx(
      "p",
      null,
      `Its about 40 some lines of code and not exactly the simplist solution.`
    ),
    mdx(
      "p",
      null,
      `After spending more time than neccesary\non the React example code of the various approaches\nI tried on how to handle the spacing/whitspace issue, I had a realization.`
    ),
    mdx(
      "p",
      null,
      `My problem could be solved with much less code than i thought.`
    ),
    mdx("p", null, `The approach I took is shown below.`),
    mdx(
      "codeblock",
      Object.assign(
        {},
        {
          className: "language-jsx",
          codestring:
            'const UpdatedIdea = () => {\n  const linkVar = (link, text) => <a href={link}>{text}</a>;\n  return (\n    <p>\n      built with {linkVar("https://gatsbyjs.org", "Gatsby")}{" "}\n      <span>and hosted on</span> {linkVar("https://netlify.com", "Netlify")}\n    </p>\n  );\n};',
        }
      ),
      `<pre class="prism-code language-jsx" style="color: #d6deeb; background-color: #011627; background-color: transparent;"><div class="token-line" style="color: #d6deeb;"><span class="token keyword" style="color: rgb(127, 219, 202);">const</span><span class="token plain"> </span><span class="token function-variable function maybe-class-name" style="color: rgb(130, 170, 255);">UpdatedIdea</span><span class="token plain"> </span><span class="token operator" style="color: rgb(127, 219, 202);">=</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(199, 146, 234);">(</span><span class="token punctuation" style="color: rgb(199, 146, 234);">)</span><span class="token plain"> </span><span class="token arrow operator" style="color: rgb(127, 219, 202);">=&gt;</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(199, 146, 234);">{</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token keyword" style="color: rgb(127, 219, 202);">const</span><span class="token plain"> </span><span class="token function-variable function" style="color: rgb(130, 170, 255);">linkVar</span><span class="token plain"> </span><span class="token operator" style="color: rgb(127, 219, 202);">=</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(199, 146, 234);">(</span><span class="token parameter">link</span><span class="token parameter punctuation" style="color: rgb(199, 146, 234);">,</span><span class="token parameter"> text</span><span class="token punctuation" style="color: rgb(199, 146, 234);">)</span><span class="token plain"> </span><span class="token arrow operator" style="color: rgb(127, 219, 202);">=&gt;</span><span class="token plain"> </span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&lt;</span><span class="token tag" style="color: rgb(127, 219, 202);">a</span><span class="token tag" style="color: rgb(127, 219, 202);"> </span><span class="token tag attr-name" style="color: rgb(173, 219, 103); font-style: italic;">href</span><span class="token tag script language-javascript script-punctuation punctuation" style="color: rgb(199, 146, 234);">=</span><span class="token tag script language-javascript punctuation" style="color: rgb(199, 146, 234);">{</span><span class="token tag script language-javascript" style="color: rgb(127, 219, 202);">link</span><span class="token tag script language-javascript punctuation" style="color: rgb(199, 146, 234);">}</span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&gt;</span><span class="token punctuation" style="color: rgb(199, 146, 234);">{</span><span class="token plain">text</span><span class="token punctuation" style="color: rgb(199, 146, 234);">}</span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&lt;/</span><span class="token tag" style="color: rgb(127, 219, 202);">a</span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&gt;</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token keyword control-flow" style="color: rgb(127, 219, 202);">return</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(199, 146, 234);">(</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">    </span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&lt;</span><span class="token tag" style="color: rgb(127, 219, 202);">p</span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&gt;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">      built </span><span class="token keyword" style="color: rgb(127, 219, 202);">with</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(199, 146, 234);">{</span><span class="token function" style="color: rgb(130, 170, 255);">linkVar</span><span class="token punctuation" style="color: rgb(199, 146, 234);">(</span><span class="token string" style="color: rgb(173, 219, 103);">&quot;https://gatsbyjs.org&quot;</span><span class="token punctuation" style="color: rgb(199, 146, 234);">,</span><span class="token plain"> </span><span class="token string" style="color: rgb(173, 219, 103);">&quot;Gatsby&quot;</span><span class="token punctuation" style="color: rgb(199, 146, 234);">)</span><span class="token punctuation" style="color: rgb(199, 146, 234);">}</span><span class="token punctuation" style="color: rgb(199, 146, 234);">{</span><span class="token string" style="color: rgb(173, 219, 103);">&quot; &quot;</span><span class="token punctuation" style="color: rgb(199, 146, 234);">}</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">      </span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&lt;</span><span class="token tag" style="color: rgb(127, 219, 202);">span</span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&gt;</span><span class="token plain">and hosted on</span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&lt;/</span><span class="token tag" style="color: rgb(127, 219, 202);">span</span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&gt;</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(199, 146, 234);">{</span><span class="token function" style="color: rgb(130, 170, 255);">linkVar</span><span class="token punctuation" style="color: rgb(199, 146, 234);">(</span><span class="token string" style="color: rgb(173, 219, 103);">&quot;https://netlify.com&quot;</span><span class="token punctuation" style="color: rgb(199, 146, 234);">,</span><span class="token plain"> </span><span class="token string" style="color: rgb(173, 219, 103);">&quot;Netlify&quot;</span><span class="token punctuation" style="color: rgb(199, 146, 234);">)</span><span class="token punctuation" style="color: rgb(199, 146, 234);">}</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">    </span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&lt;/</span><span class="token tag" style="color: rgb(127, 219, 202);">p</span><span class="token tag punctuation" style="color: rgb(199, 146, 234);">&gt;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token punctuation" style="color: rgb(199, 146, 234);">)</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain"></span><span class="token punctuation" style="color: rgb(199, 146, 234);">}</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span></div></pre>`
    ),
    mdx("p", null, `Example:`),
    mdx(
      "p",
      null,
      `The shown idea is that you can use a function to return an anchor tag with the data i need. This means I can put my copyright text on one line\nwithout needing css to manage the whitespace/spacing(HTML will do that for me).`
    ),
    mdx(
      "p",
      null,
      `This results in far less code written.\nI further shortened the space used by my function calls by assigning those calls to variables like so:`
    ),
    mdx(
      "codeblock",
      Object.assign(
        {},
        {
          className: "language-jsx",
          codestring:
            'const gatsbyLink = externalLinkText(\n  "https://gatsbyjs.org",\n  "Gatsby",\n  "Gatsby framework website url"\n);\nconst netlifyLink = externalLinkText(\n  "https://www.netlify.com",\n  "Netlify",\n  "Netlify website URL"\n);',
        }
      ),
      `<pre class="prism-code language-jsx" style="color: #d6deeb; background-color: #011627; background-color: transparent;"><div class="token-line" style="color: #d6deeb;"><span class="token keyword" style="color: rgb(127, 219, 202);">const</span><span class="token plain"> gatsbyLink </span><span class="token operator" style="color: rgb(127, 219, 202);">=</span><span class="token plain"> </span><span class="token function" style="color: rgb(130, 170, 255);">externalLinkText</span><span class="token punctuation" style="color: rgb(199, 146, 234);">(</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token string" style="color: rgb(173, 219, 103);">&quot;https://gatsbyjs.org&quot;</span><span class="token punctuation" style="color: rgb(199, 146, 234);">,</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token string" style="color: rgb(173, 219, 103);">&quot;Gatsby&quot;</span><span class="token punctuation" style="color: rgb(199, 146, 234);">,</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token string" style="color: rgb(173, 219, 103);">&quot;Gatsby framework website url&quot;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain"></span><span class="token punctuation" style="color: rgb(199, 146, 234);">)</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain"></span><span class="token keyword" style="color: rgb(127, 219, 202);">const</span><span class="token plain"> netlifyLink </span><span class="token operator" style="color: rgb(127, 219, 202);">=</span><span class="token plain"> </span><span class="token function" style="color: rgb(130, 170, 255);">externalLinkText</span><span class="token punctuation" style="color: rgb(199, 146, 234);">(</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token string" style="color: rgb(173, 219, 103);">&quot;https://www.netlify.com&quot;</span><span class="token punctuation" style="color: rgb(199, 146, 234);">,</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token string" style="color: rgb(173, 219, 103);">&quot;Netlify&quot;</span><span class="token punctuation" style="color: rgb(199, 146, 234);">,</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token string" style="color: rgb(173, 219, 103);">&quot;Netlify website URL&quot;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain"></span><span class="token punctuation" style="color: rgb(199, 146, 234);">)</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span></div></pre>`
    ),
    mdx(
      "p",
      null,
      `This reduces the amount of space taken up in my text and therefore makes the code easier to read in my editor.`
    )
  );
}
MDXContent.isMDXComponent = true;
