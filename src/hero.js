/* Hero section with risk-distribution chart */

// Each bar represents a risk bucket, 0-100 scoring, colored by risk severity
const RISK_BINS = [{
  label: "0-9",
  count: 82,
  color: "#2f7a5a"
}, {
  label: "10-19",
  count: 118,
  color: "#3a8f66"
}, {
  label: "20-29",
  count: 164,
  color: "#5aa573"
}, {
  label: "30-39",
  count: 202,
  color: "#95c070"
}, {
  label: "40-49",
  count: 188,
  color: "#d9cc3e"
}, {
  label: "50-59",
  count: 156,
  color: "#e6b847"
}, {
  label: "60-69",
  count: 134,
  color: "#e39440"
}, {
  label: "70-79",
  count: 148,
  color: "#d86a2d"
}, {
  label: "80-89",
  count: 178,
  color: "#c5432a"
}, {
  label: "90-99",
  count: 100,
  color: "#8f2420"
}];
function DistributionChart({
  title = "1,470 employees",
  headline = "36%"
}) {
  const max = Math.max(...RISK_BINS.map(b => b.count));
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setAnimated(true);
          io.unobserve(el);
        }
      });
    }, {
      threshold: 0.25
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "chart-card",
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "chart-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mono mono-sm",
    style: {
      color: "var(--ink-faint)"
    }
  }, "EMPLOYEE RISK DISTRIBUTION"), /*#__PURE__*/React.createElement("div", {
    className: "chart-title",
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, title.split(" ")[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-muted)",
      fontWeight: 400,
      fontSize: 15
    }
  }, title.replace(/^\S+\s/, "")))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono mono-sm",
    style: {
      color: "var(--ink-faint)"
    }
  }, "HIGH / CRITICAL"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: "-0.02em",
      marginTop: 6
    }
  }, headline))), /*#__PURE__*/React.createElement("div", {
    className: "chart",
    "aria-hidden": "true"
  }, RISK_BINS.map((b, i) => {
    const h = animated ? b.count / max * 100 : 0;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "bar",
      style: {
        height: `${h}%`,
        background: b.color,
        transition: `height ${400 + i * 60}ms cubic-bezier(.2,.7,.2,1)`
      },
      title: `${b.label} — ${b.count} employees`
    });
  })), /*#__PURE__*/React.createElement("div", {
    className: "chart-legend"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sw"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      background: "#2f7a5a"
    }
  }), "Stable \xB7 564"), /*#__PURE__*/React.createElement("span", {
    className: "sw"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      background: "#d9cc3e"
    }
  }), "Watch \xB7 344"), /*#__PURE__*/React.createElement("span", {
    className: "sw"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      background: "#e39440"
    }
  }), "Elevated \xB7 134"), /*#__PURE__*/React.createElement("span", {
    className: "sw"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      background: "#c5432a"
    }
  }), "High \xB7 326"), /*#__PURE__*/React.createElement("span", {
    className: "sw"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      background: "#8f2420"
    }
  }), "Critical \xB7 100")));
}
function Hero({
  variant = "split"
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: `hero variant-${variant}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-left"
  }, /*#__PURE__*/React.createElement(Reveal, {
    as: "div",
    className: "hero-eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "NOW IN PRIVATE BETA \xB7 WAITLIST OPEN")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("h1", {
    className: "h-display",
    style: {
      marginTop: 22
    }
  }, "Know who's about to leave \u2014", /*#__PURE__*/React.createElement("br", {
    className: "hide-sm"
  }), " before they tell you.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160
  }, /*#__PURE__*/React.createElement("p", {
    className: "body-lg",
    style: {
      marginTop: 26
    }
  }, "Chofl scores every employee 0\u2013100 on how likely they are to leave. Not vibes. One interpretable model, one focussed shortlist for HR to act on.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240,
    className: "hero-cta-row"
  }, /*#__PURE__*/React.createElement("form", {
    className: "input-row",
    onSubmit: async e => {
      e.preventDefault();
      const form = e.currentTarget;
      const input = form.querySelector("input");
      const email = input.value;
      try {
        await fetch("https://app.kit.com/forms/9368076/subscriptions", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ email_address: email }),
          mode: "no-cors"
        });
        window.location.href = "/thanks";
      } catch (err) {
        window.alert("Something went wrong. Please try again.");
      }
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "email_address",
    placeholder: "you@company.com",
    required: true
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    type: "submit"
  }, "Join waitlist")))), /*#__PURE__*/React.createElement("div", {
    className: "hero-right"
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 160,
    className: "chart-wrap"
  }, /*#__PURE__*/React.createElement(DistributionChart, null))))));
}
function LogosStrip() {
  return /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logos-strip"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Benchmarked on"), /*#__PURE__*/React.createElement("span", {
    className: "ul-link"
  }, "IBM HR Analytics"), /*#__PURE__*/React.createElement("span", {
    className: "ul-link"
  }, "1,470 employees"), /*#__PURE__*/React.createElement("span", {
    className: "ul-link"
  }, "Sales \xB7 R&D \xB7 HR"), /*#__PURE__*/React.createElement("span", {
    className: "ul-link"
  }, "Open methodology")), /*#__PURE__*/React.createElement("hr", {
    className: "rule"
  }));
}
Object.assign(window, {
  Hero,
  LogosStrip,
  DistributionChart
});
