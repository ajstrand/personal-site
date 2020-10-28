/** @jsx mdx */
import { mdx } from "@mdx-js/preact";
/* @jsx mdx */
export const meta = {
  title: "Building a YouTube API app with graphQL",
  slug: "youtube-graphql-player",
  tags: ["GraphQL", "React"],
  updatedAt: "2019-07-28",
};
const makeShortcode = (name) =>
  function MDXDefaultShortcode(props) {
    console.warn(
      "Component " +
        name +
        " was not imported, exported, or provided by MDXProvider as global scope"
    );
    return mdx("div", Object.assign({}, props));
  };
const GifPlayerWrapper = makeShortcode("GifPlayerWrapper");
const MDXLayout = "wrapper";
export default function MDXContent({ components, ...props }) {
  return mdx(
    MDXLayout,
    Object.assign({}, props, {
      components: components,
      mdxType: "MDXLayout",
    }),
    mdx(
      "h1",
      Object.assign(
        {},
        {
          id: "learning-graphql-and-using-the-youtube-api",
        }
      ),
      mdx(
        "a",
        Object.assign(
          {},
          {
            className: "heading-link-anchor",
            href: "#learning-graphql-and-using-the-youtube-api",
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
      `Learning GraphQL and using the YouTube API`
    ),
    mdx(
      "p",
      null,
      `I wanted to write up a list of things I learned and challenges I faced building my latest project.`
    ),
    mdx(
      "p",
      null,
      `You can view it `,
      mdx(
        "a",
        Object.assign(
          {},
          {
            href: "https://lofi-hiphop-videos.herokuapp.com/",
            parentName: "p",
          }
        ),
        `here`
      ),
      `.`
    ),
    mdx(
      "h2",
      Object.assign(
        {},
        {
          id: "graphql-can-take-some-getting-used-to-but-its-really-nice",
        }
      ),
      mdx(
        "a",
        Object.assign(
          {},
          {
            className: "heading-link-anchor",
            href: "#graphql-can-take-some-getting-used-to-but-its-really-nice",
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
      `GraphQL can take some getting used to, but it's really nice.`
    ),
    mdx(
      "p",
      null,
      `GraphQL can be challenging, if you've only ever worked with REST APIs before, but don't try to understand it all at once.\nRead the docs and take it slow. I struggled with understanding simple queries and how to express exactly what I was trying to, but eventually I got the hang of it.`
    ),
    mdx(
      "p",
      null,
      `I read a lot of blog posts and articles, but one article that helped with\nbasic understanding was `,
      mdx(
        "a",
        Object.assign(
          {},
          {
            href: "https://www.robinwieruch.de/react-with-graphql-tutorial/",
            parentName: "p",
          }
        ),
        `this one`
      ),
      `.\n`,
      mdx(
        "a",
        Object.assign(
          {},
          {
            href: "https://graphql.org/graphql-js/",
            parentName: "p",
          }
        ),
        `The graphql javascript docs were also extremely helpful`
      ),
      `.`
    ),
    mdx(
      "p",
      null,
      `For a more academic, in depth guide to graphQL I'd suggest checking out Eve Porcello's Learning GraphQL.`
    ),
    mdx(
      "h2",
      Object.assign(
        {},
        {
          id: "read-apis-docs-thoroughly",
        }
      ),
      mdx(
        "a",
        Object.assign(
          {},
          {
            className: "heading-link-anchor",
            href: "#read-apis-docs-thoroughly",
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
      `Read APIs docs thoroughly.`
    ),
    mdx(
      "p",
      null,
      `I had never worked with YouTube's API before, so I wasn't sure what to expect.\nThankfully their website is full of helpful examples and interactive ways you can test their APIS.\nI was able to find what I needed, but the next problem was how do I make this work in the context of writing Node app?\nHaving a done number of other small projects with Node, it was platform I felt most familiar with for a quick server.`
    ),
    mdx(
      "p",
      null,
      `Thankfully Google provided a Node client library for `,
      mdx(
        "a",
        Object.assign(
          {},
          {
            href: "https://github.com/googleapis/google-api-nodejs-client",
            parentName: "p",
          }
        ),
        `accessing the YouTube API`
      ),
      `.\nI was able to find what I needed and adapt their examples to fit my use case. Google's Node client made the process of writing the server for app less intimidating than I thought it would be.`
    ),
    mdx(
      "h2",
      Object.assign(
        {},
        {
          id: "css-grid-is-great-for-making-layout-accessible",
        }
      ),
      mdx(
        "a",
        Object.assign(
          {},
          {
            className: "heading-link-anchor",
            href: "#css-grid-is-great-for-making-layout-accessible",
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
      `CSS Grid is great for making layout accessible`
    ),
    mdx(
      "p",
      null,
      `I wanted to use CSS Grid because CSS has never been a strong suit of mine and it's something I need to improve on. CSS grid made it very easy to describe\nhow I wanted to layout my page and in combination with flexbox I maybe wrote 10 lines of CSS to dictate the layout of the page. The Mozilla Developer Network's docs on `,
      mdx(
        "a",
        Object.assign(
          {},
          {
            href: "",
            parentName: "p",
          }
        ),
        `CSS Grid`
      ),
      ` are fantastic, and a resource that I recommend.`
    ),
    mdx(
      "h2",
      Object.assign(
        {},
        {
          id: "challenges",
        }
      ),
      mdx(
        "a",
        Object.assign(
          {},
          {
            className: "heading-link-anchor",
            href: "#challenges",
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
      `Challenges`
    ),
    mdx(
      "h1",
      Object.assign(
        {},
        {
          id: "responsive-video-player",
        }
      ),
      mdx(
        "a",
        Object.assign(
          {},
          {
            className: "heading-link-anchor",
            href: "#responsive-video-player",
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
      `Responsive video player`
    ),
    mdx(
      "p",
      null,
      `One of the bigger I faced was getting the video player to be responsive.\nThis snippet of code from a `,
      mdx(
        "a",
        Object.assign(
          {},
          {
            href:
              "https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php",
            parentName: "p",
          }
        ),
        `css tricks article`
      ),
      ` really helped me out.\nThe bottom padding is set to 16:9.`
    ),
    mdx(
      "codeblock",
      Object.assign(
        {},
        {
          className: "language-css",
          codestring:
            ".videoWrapper {\n  position: relative;\n  padding-bottom: 56.25%;\n  padding-top: 25px;\n  height: 0;\n}\n.videoWrapper iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}",
        }
      ),
      `<pre class="prism-code language-css" style="color: #d6deeb; background-color: #011627; background-color: transparent;"><div class="token-line" style="color: #d6deeb;"><span class="token selector class" style="color: rgb(199, 146, 234); font-style: italic;">.videoWrapper</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(199, 146, 234);">{</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token property" style="color: rgb(128, 203, 196);">position</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> relative</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token property" style="color: rgb(128, 203, 196);">padding-bottom</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> </span><span class="token number" style="color: rgb(247, 140, 108);">56.25</span><span class="token unit">%</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token property" style="color: rgb(128, 203, 196);">padding-top</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> </span><span class="token number" style="color: rgb(247, 140, 108);">25</span><span class="token unit">px</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token property" style="color: rgb(128, 203, 196);">height</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> </span><span class="token number" style="color: rgb(247, 140, 108);">0</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain"></span><span class="token punctuation" style="color: rgb(199, 146, 234);">}</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain"></span><span class="token selector class" style="color: rgb(199, 146, 234); font-style: italic;">.videoWrapper</span><span class="token selector" style="color: rgb(199, 146, 234); font-style: italic;"> iframe</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(199, 146, 234);">{</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token property" style="color: rgb(128, 203, 196);">position</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> absolute</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token property" style="color: rgb(128, 203, 196);">top</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> </span><span class="token number" style="color: rgb(247, 140, 108);">0</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token property" style="color: rgb(128, 203, 196);">left</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> </span><span class="token number" style="color: rgb(247, 140, 108);">0</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token property" style="color: rgb(128, 203, 196);">width</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> </span><span class="token number" style="color: rgb(247, 140, 108);">100</span><span class="token unit">%</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token property" style="color: rgb(128, 203, 196);">height</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> </span><span class="token number" style="color: rgb(247, 140, 108);">100</span><span class="token unit">%</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain"></span><span class="token punctuation" style="color: rgb(199, 146, 234);">}</span></div></pre>`
    ),
    mdx(
      "p",
      null,
      `Basically what's happening here is that the iframe is set to have 100% width and height, meaning it'll stretch to fill the entire container.\nThe wrapper element forces the video into a 16:9 aspect ratio, so the video doesn't look squished or stretched.`
    ),
    mdx(
      "p",
      null,
      `The other challenge I ran into is once I implemented the code above, the video would fill the entire width of screen, which looked really bad on large desktops(like mine for instance).`
    ),
    mdx(
      "p",
      null,
      `Here's the solution: you just need to give the video a maximum and minimum width so that the video never grows beyond that.\nIn my case since i was using flexbox I also set the flex-basis to auto, so that the width of the video wrapper would fall\nback to the full width of the container only stopping if it hit the minimum or maximum width.`
    ),
    mdx(
      "codeblock",
      Object.assign(
        {},
        {
          className: "language-css",
          codestring:
            ".videoWrapper {\n  position: relative;\n  height: 0px;\n  min-width: 320px;\n  max-width: 1200px;\n  flex-basis: auto;\n  flex-grow: 1;\n  margin: 0 auto;\n}",
        }
      ),
      `<pre class="prism-code language-css" style="color: #d6deeb; background-color: #011627; background-color: transparent;"><div class="token-line" style="color: #d6deeb;"><span class="token selector class" style="color: rgb(199, 146, 234); font-style: italic;">.videoWrapper</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(199, 146, 234);">{</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token property" style="color: rgb(128, 203, 196);">position</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> relative</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token property" style="color: rgb(128, 203, 196);">height</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> </span><span class="token number" style="color: rgb(247, 140, 108);">0</span><span class="token unit">px</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token property" style="color: rgb(128, 203, 196);">min-width</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> </span><span class="token number" style="color: rgb(247, 140, 108);">320</span><span class="token unit">px</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token property" style="color: rgb(128, 203, 196);">max-width</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> </span><span class="token number" style="color: rgb(247, 140, 108);">1200</span><span class="token unit">px</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token property" style="color: rgb(128, 203, 196);">flex-basis</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> auto</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token property" style="color: rgb(128, 203, 196);">flex-grow</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> </span><span class="token number" style="color: rgb(247, 140, 108);">1</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain">  </span><span class="token property" style="color: rgb(128, 203, 196);">margin</span><span class="token punctuation" style="color: rgb(199, 146, 234);">:</span><span class="token plain"> </span><span class="token number" style="color: rgb(247, 140, 108);">0</span><span class="token plain"> auto</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><span class="token plain"></span></div><div class="token-line" style="color: #d6deeb;"><span class="token plain"></span><span class="token punctuation" style="color: rgb(199, 146, 234);">}</span></div></pre>`
    ),
    mdx(
      "p",
      null,
      `The thing to notice here is that I had to set the position to relative, otherwise the video would position itself correctly in the page(in relation to the parent container's css).\nThe other thing you'll notice is that I set the margin to `,
      mdx(
        "inlineCode",
        Object.assign(
          {},
          {
            parentName: "p",
          }
        ),
        `0 auto`
      ),
      `. This means that the margin top and bottom were zero pixels while the left and right margins have an equal margin.\nThis allows the video wrapper to continue to stay centered when we hit the maximum width we defined for it.`
    ),
    mdx(
      "h1",
      Object.assign(
        {},
        {
          id: "read-heroku-docs-to-avoid-errors",
        }
      ),
      mdx(
        "a",
        Object.assign(
          {},
          {
            className: "heading-link-anchor",
            href: "#read-heroku-docs-to-avoid-errors",
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
      `Read Heroku docs to avoid errors`
    ),
    mdx(
      "p",
      null,
      `I deployed my application on Heroku, as I had a number of smaller projects already there. The first mistake I made was not setting up my npm script for my server the way Heroku expects. I could never reach my API and couldn't understand why my requests were returning `,
      mdx(
        "inlineCode",
        Object.assign(
          {},
          {
            parentName: "p",
          }
        ),
        `404`
      ),
      `. I finally figured it out a couple days later reading the Heroku docs.`
    ),
    mdx(
      "p",
      null,
      `The other big error that I made was that my YouTube API key had quotes in it when I pasted it into the heroku config. This meant that my app could never connect to the YouTube API. I had to dig to server logs to find out what happened. When I saw that I Was getting a `,
      mdx(
        "inlineCode",
        Object.assign(
          {},
          {
            parentName: "p",
          }
        ),
        `400 Bad Request`
      ),
      `, I figured maybe I should check my Heroku configs to see what was wrong.`
    ),
    mdx(
      "h2",
      Object.assign(
        {},
        {
          id: "conclusions",
        }
      ),
      mdx(
        "a",
        Object.assign(
          {},
          {
            className: "heading-link-anchor",
            href: "#conclusions",
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
      `Conclusions`
    ),
    mdx(
      "p",
      null,
      `Even when starting a fairly small project like the app that I built, it's worth it not to jump straight into coding the app. Read through the docs of the various technologies you want to use to make sure you have a basic understanding of them.\nI had to consult the graphQL docs a lot before I knew what was actually happening with the code that I was using.`
    ),
    mdx(
      "p",
      null,
      `Building small side projects is great way to keep up your miotivation. Finishing the project is really important as well. It gives you a great piece to show off in an interview/job search and helps solidify your skills.`,
      mdx(
        "br",
        Object.assign(
          {},
          {
            parentName: "p",
          }
        )
      ),
      `\n`,
      `I've started all manner of side projects in the last few yesars, but they never went anywhere due to my inability to stick with them.`
    ),
    mdx(
      "p",
      null,
      `When you've finished a project, step back and reflect on what you've learned.\nEach project you build or blog post you write can get you futrthur towards your goal, whether that be a new job or just leveling up your skills.`
    ),
    mdx(
      "p",
      null,
      `gif alt text: characters from the show seinfield celebrating and jumping up and down, waving their arms.`
    ),
    mdx(GifPlayerWrapper, {
      props: "https://media.giphy.com/media/12UlfHpF05ielO/source.gif",
      mdxType: "GifPlayerWrapper",
    })
  );
}
MDXContent.isMDXComponent = true;
