/* App shell + tweaks panel integration */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "split",
  "density": "default",
  "accentGreen": "#0e3a2a"
} /*EDITMODE-END*/;
function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply CSS var for accent color
  useEffect(() => {
    document.documentElement.style.setProperty("--green", tweaks.accentGreen || "#0e3a2a");
  }, [tweaks.accentGreen]);
  const densityClass = tweaks.density === "cozy" ? "density-cozy" : tweaks.density === "roomy" ? "density-roomy" : "";
  return /*#__PURE__*/React.createElement("div", {
    className: densityClass
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    variant: tweaks.heroVariant
  }), /*#__PURE__*/React.createElement(LogosStrip, null), /*#__PURE__*/React.createElement(ProofSection, null), /*#__PURE__*/React.createElement(CompanyGlance, null), /*#__PURE__*/React.createElement(HowItWorks, null), /*#__PURE__*/React.createElement(Departments, null), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(CTA, null)), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Hero layout"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Variant",
    value: tweaks.heroVariant,
    options: [{
      value: "split",
      label: "Split"
    }, {
      value: "stacked",
      label: "Stacked"
    }, {
      value: "centered",
      label: "Centered"
    }],
    onChange: v => setTweak("heroVariant", v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Density"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Padding",
    value: tweaks.density,
    options: [{
      value: "cozy",
      label: "Cozy"
    }, {
      value: "default",
      label: "Default"
    }, {
      value: "roomy",
      label: "Roomy"
    }],
    onChange: v => setTweak("density", v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Accent"
  }), /*#__PURE__*/React.createElement(TweakColor, {
    label: "Green",
    value: tweaks.accentGreen,
    onChange: v => setTweak("accentGreen", v)
  })));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));