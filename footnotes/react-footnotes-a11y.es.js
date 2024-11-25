import { jsx as c, jsxs as g } from "preact/jsx-runtime";
import { createContext as T } from "preact";
import { useContext as F, useMemo as m, useEffect as I, useState as x, useCallback as u } from "preact/hooks";
import p from "prop-types";
const y = T({}), b = (e) => {
  const { description: n } = e, {
    footnotes: d,
    footnotesTitleId: i,
    getFootnoteRefId: s,
    getFootnoteId: l,
    register: f
  } = F(y), a = m(
    () => s(e),
    [s, e]
  ), t = m(() => l(e), [l, e]), o = m(
    () => ({ idRef: a, idNote: t, description: n }),
    [a, t, n]
  );
  return d.has(o.idRef) || d.set(o.idRef, o), I(() => {
    const r = f(o);
    return () => r();
  }, [f, o]), /* @__PURE__ */ c(
    "a",
    {
      className: e.className,
      style: e.style,
      id: a,
      href: `#${t}`,
      role: "doc-noteref",
      "aria-describedby": i,
      "data-a11y-footnotes-ref": !0,
      children: e.children
    }
  );
};
b.propTypes = {
  description: p.node.isRequired,
  children: p.node.isRequired,
  id: p.string
};
const L = (e) => {
  const { footnotes: n, footnotesTitleId: d } = F(y), { Wrapper: i, Title: s, List: l, ListItem: f, BackLink: a } = e;
  if (n.size === 0) return null;
  const t = Array.from(n.values());
  return /* @__PURE__ */ g(i, { "data-a11y-footnotes-footer": !0, role: "doc-endnotes", children: [
    /* @__PURE__ */ c(s, { "data-a11y-footnotes-title": !0, id: d }),
    /* @__PURE__ */ c(l, { "data-a11y-footnotes-list": !0, children: t.map(({ idNote: o, idRef: r, description: R }, k) => /* @__PURE__ */ g(f, { id: o, "data-a11y-footnotes-list-item": !0, children: [
      R,
      " ",
      /* @__PURE__ */ c(
        a,
        {
          "data-a11y-footnotes-back-link": !0,
          href: "#" + r,
          "aria-label": `Back to reference ${k + 1}`,
          role: "doc-backlink"
        }
      )
    ] }, o)) })
  ] });
};
L.defaultProps = {
  Wrapper: "footer",
  Title: (e) => /* @__PURE__ */ c("h2", { ...e, children: "Footnotes" }),
  List: "ol",
  ListItem: "li",
  BackLink: (e) => /* @__PURE__ */ c("a", { ...e, children: "↩" })
};
function h(e) {
  let n = "";
  return typeof e == "string" ? n += e : Array.isArray(e) ? n += e.map(h).join("") : e.props.children && (n += h(e.props.children)), n;
}
function w(e) {
  return h(e).toLowerCase().replace(/[^a-z0-9-_\s]/g, "").replace(/\s+/g, "-");
}
const C = ({ children: e, footnotesTitleId: n }) => {
  const [d, i] = x(/* @__PURE__ */ new Map()), s = u(
    ({ id: t, children: o }) => t || w(o),
    []
  ), l = u(
    (t) => s(t) + "-ref",
    [s]
  ), f = u(
    (t) => s(t) + "-note",
    [s]
  );
  I(() => i(/* @__PURE__ */ new Map()), []);
  const a = u((t) => (i((o) => {
    const r = new Map(o);
    return r.has(t.idRef) || r.set(t.idRef, t), r;
  }), () => {
    i((o) => {
      const r = new Map(o);
      return r.delete(t.idRef), r;
    });
  }), []);
  return /* @__PURE__ */ c(
    y.Provider,
    {
      value: {
        footnotes: d,
        footnotesTitleId: n,
        getFootnoteRefId: l,
        getFootnoteId: f,
        register: a
      },
      children: e
    }
  );
};
C.defaultProps = {
  footnotesTitleId: "footnotes-label"
};
export {
  b as FootnoteRef,
  L as Footnotes,
  C as FootnotesProvider
};
