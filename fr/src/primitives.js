function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Shared primitives used across sections */
var {
  useState,
  useEffect,
  useRef,
  useMemo
} = React;
window.useState = useState;
window.useEffect = useEffect;
window.useRef = useRef;
window.useMemo = useMemo;

// Intersection-observer scroll reveal
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let fired = false;
    const reveal = () => {
      if (fired) return;
      fired = true;
      el.classList.add("is-in");
    };
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          reveal();
          io.unobserve(el);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -60px 0px"
    });
    io.observe(el);
    // Safety net: if IO never fires (offscreen iframe, headless environments,
    // embeds inside CSS containment, etc.) reveal anyway after a short delay
    // so content always shows up.
    const timer = setTimeout(reveal, 250);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, []);
  return ref;
}
function Reveal({
  as: Tag = "div",
  delay = 0,
  children,
  ...rest
}) {
  const ref = useReveal();
  const style = {
    ...(rest.style || {}),
    transitionDelay: delay ? `${delay}ms` : undefined
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref
  }, rest, {
    style: style,
    className: `reveal ${rest.className || ""}`
  }), children);
}
function Logo({
  height = 22
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "logo",
    "aria-label": "Chofl"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/chofl-logo.png",
    alt: "Chofl",
    style: {
      height,
      width: "auto",
      display: "block"
    }
  }));
}
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const lang = window.CHOFL_LANG || "en";
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 6);
    on();
    window.addEventListener("scroll", on, {
      passive: true
    });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    className: `nav ${scrolled ? "is-scrolled" : ""}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap nav-inner"
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("nav", {
    className: "nav-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#proof"
  }, "Preuves"), /*#__PURE__*/React.createElement("a", {
    href: "#how"
  }, "Comment ça marche"), /*#__PURE__*/React.createElement("a", {
    href: "#faq"
  }, "FAQ")), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary",
    href: "#cta"
  }, "Rejoindre la liste d'attente"), /*#__PURE__*/React.createElement("div", {
    className: "lang-switch"
  }, lang === "fr" ? /*#__PURE__*/React.createElement("a", {
    href: "/",
    className: "lang-link"
  }, "EN") : /*#__PURE__*/React.createElement("span", {
    className: "lang-current"
  }, "EN"), /*#__PURE__*/React.createElement("span", {
    className: "lang-sep"
  }, "|"), lang === "fr" ? /*#__PURE__*/React.createElement("span", {
    className: "lang-current"
  }, "FR") : /*#__PURE__*/React.createElement("a", {
    href: "/fr",
    className: "lang-link"
  }, "FR"))));
}
function AvatarStack() {
  return /*#__PURE__*/React.createElement("span", {
    className: "avatar-stack"
  }, /*#__PURE__*/React.createElement("span", {
    className: "av av-a"
  }), /*#__PURE__*/React.createElement("span", {
    className: "av av-b"
  }), /*#__PURE__*/React.createElement("span", {
    className: "av av-c"
  }), /*#__PURE__*/React.createElement("span", {
    className: "av av-d"
  }), /*#__PURE__*/React.createElement("span", {
    className: "av av-e"
  }));
}

// Export
Object.assign(window, {
  useReveal,
  Reveal,
  Logo,
  Nav,
  AvatarStack
});