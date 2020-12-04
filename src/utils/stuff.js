/** @jsx jsx */
import { jsx } from "@emotion/core";
export const ProgressBar = (props) => {
  const getIndicatorPercentageWidth = (currentPos, totalScroll) => {
    return (currentPos / totalScroll) * 100;
  };

  // find the total height of window
  const getScrollHeight = () => {
    // https://javascript.info/size-and-scroll-window#width-height-of-the-document
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };

  const [scrollPositionPecentage, setScrollPositionPercentage] = useState(0);
  useEffect(() => {
    // add throttled listener to update on scroll
    let scrolling = false;
    window.addEventListener(`scroll`, () => {
      const currentPos = window.scrollY;
      const { innerHeight } = window;
      const scrollHeight = getScrollHeight();
      const scrollDistance = scrollHeight - innerHeight;

      if (!scrolling) {
        window.requestAnimationFrame(() => {
          const indicatorWidth = getIndicatorPercentageWidth(
            currentPos,
            scrollDistance
          );

          setScrollPositionPercentage(indicatorWidth);

          scrolling = false;
        });
        scrolling = true;
      }
    });

    const { innerHeight } = window;
    const scrollHeight = getScrollHeight();
    const scrollDistance = scrollHeight - innerHeight;
    const indicatorWidth = getIndicatorPercentageWidth(
      window.scrollY,
      scrollDistance
    );

    setScrollPositionPercentage(indicatorWidth);
  }, []);

  return (
    <progress
      css={{
        zIndex: 1,
        position: "fixed",
        top: 0,
        width: "100%",
        left: 0,
        height: 5,
        appearance: "none",
        background: "#11151da6",
        // "linear-gradient(124deg,#ff24004a,#e81d1d4a,#e8b71d4a,#e3e81d4a,#1de8404a,#1ddde84a,#2b1de84a,#dd00f34a,#dd00f34a)",
        opacity: 1,
        "&::-webkit-progress-value": {
          background:
            "linear-gradient(124deg,#ff2400,#e81d1d,#e8b71d,#e3e81d,#1de840,#1ddde8,#2b1de8,#dd00f3,#dd00f3)",
          backgroundSize: "100vw",
          opacity: 0.4,
        },
        "&::-webkit-progress-bar": {
          // background: "#11151d",
          background: "transparent",
          opacity: 1,
        },
        "&::-moz-progress-bar": {
          background:
            "linear-gradient(124deg,#ff2400,#e81d1d,#e8b71d,#e3e81d,#1de840,#1ddde8,#2b1de8,#dd00f3,#dd00f3)",
          backgroundSize: "100vw",
          opacity: 0.4,
        },
      }}
      value={scrollPositionPecentage}
      max="100"
    >
      70 %
    </progress>
  );
};

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// `wait` milliseconds.
export const debounce = (func, wait) => {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const CopyButton = (props) => {
  const [buttonText, setText] = useState("Copy");
  return (
    <button
      css={{
        color: textColor,
        backgroundColor: "#11151da6",
        transition: "background-color 1s cubic-bezier(.27,1.35,.83,.67)",
        float: "right",
        padding: "1rem",
        "&:hover": {
          backgroundColor: "rgba(51,183,255,.21)",
        },
      }}
      onClick={(e) => {
        navigator.clipboard.writeText(props.content);
        setText("Done");
        setTimeout(() => {
          setText("Copy");
        }, 1000);
      }}
    >
      {buttonText}
    </button>
  );
};

export const Tweetable = () => {
  const [tweetableText, setTweetableText] = useState();
  useEffect(() => {
    // event fires for every selection change
    document.onselectionchange = debounce(() => {
      // toString on the Selection object gives you the selected text
      const text = document.getSelection().toString();
      setTweetableText(text);
    }, 200);
  });
  return tweetableText ? (
    <div
      css={{
        zIndex: 1,
        position: "fixed",
        top: "5px",
        display: "flex",
        flex: 1,
        width: "100%",
        background: "#10151e",
        justifyContent: "center",
        color: "#eef1f7",
        borderBottom: "1px solid rgba(51,183,255,.21)",
      }}
    >
      <div css={{ maxWidth: 400, display: "flex", flexDirection: "column" }}>
        <p css={{ paddingTop: "1rem" }}>{tweetableText}</p>
        <a
          href={
            "https://twitter.com/intent/tweet?text=" +
            encodeURI(tweetableText + " " + window.location.href)
          }
          css={{ color: "#1DA1F2", alignSelf: "flex-end", padding: "1rem" }}
        >
          Tweet this
        </a>
      </div>
    </div>
  ) : null;
};
