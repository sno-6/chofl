/* All remaining page sections: proof/stats, company metrics, steps, departments, pricing, FAQ, CTA, footer */

// === SECTION: Proof / Stats ===
function ProofSection() {
  const stats = [{
    n: "7",
    sup: "of 10",
    l: "Leavers caught",
    d: "Out of every ten people in the dataset who had left, the model flagged seven as HIGH risk before being told the outcome."
  }, {
    n: "3×",
    l: "More likely to leave",
    d: "An employee we flag HIGH is roughly three times more likely to be a leaver than one we flag LOW."
  }, {
    n: "86%",
    l: "Ranked in the right order",
    d: "Pick any two employees at random. 86% of the time we correctly rank the leaver above the stayer."
  }, {
    n: "~40%",
    l: "Precision on HIGH",
    d: "Of every ten people flagged HIGH, roughly four end up leaving. That's about 2.5× the dataset's overall attrition rate, so the shortlist is concentrated, not noisy."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "proof"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "section-eyebrow"
  }, "HOW WELL IT WORKS"), /*#__PURE__*/React.createElement(Reveal, {
    delay: 60
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-section"
  }, "The model earns its keep.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("p", {
    className: "body-lg mt-16"
  }, "Four plain-English numbers, all from the same held-out test. No cherry-picking, no claims we can't back up.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 180
  }, /*#__PURE__*/React.createElement("div", {
    className: "metrics-row"
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "metric",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, s.n, s.sup && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.42em",
      marginLeft: 6,
      color: "var(--ink-muted)",
      fontWeight: 500,
      letterSpacing: "0.02em"
    }
  }, s.sup)), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, s.l), /*#__PURE__*/React.createElement("div", {
    className: "desc"
  }, s.d))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "body-md text-muted mt-32",
    style: {
      maxWidth: "72ch"
    }
  }, "In plain terms: if you act on the HIGH list, you'll catch most of the people most at risk of leaving, and you'll find them on a shortlist small enough for an HRBP to actually work through. That's enough to start a real conversation: a raise, a role change, a manager swap.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 260,
    className: "mt-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono mono-sm"
  }, "Validated on the IBM HR Analytics dataset (1,470 anonymised records, snapshot) \xB7 Held-out test set \xB7 No training leakage. Real-world performance varies; figures published as your own data is run."))));
}

// === SECTION: Company at a glance (sparkline row) ===
function CompanyGlance() {
  const vals = [{
    lbl: "TOTAL EMPLOYEES",
    v: "1,470",
    color: "var(--ink-muted)"
  }, {
    lbl: "HIGH RISK",
    v: "319",
    color: "#c5432a"
  }, {
    lbl: "MEDIUM RISK",
    v: "296",
    color: "#e39440"
  }, {
    lbl: "LOW RISK",
    v: "855",
    color: "#2f7a5a"
  }, {
    lbl: "AVG CHOFL SCORE",
    v: "36",
    color: "var(--ink)",
    suffix: "%"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "8px 0 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "section-eyebrow"
  }, "SAMPLE COMPANY AT A GLANCE"), /*#__PURE__*/React.createElement("div", {
    className: "sparks-row"
  }, vals.map((v, i) => /*#__PURE__*/React.createElement(Reveal, {
    className: "spark",
    key: i,
    delay: i * 40
  }, /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, v.lbl), /*#__PURE__*/React.createElement("div", {
    className: "num",
    style: {
      color: v.color
    }
  }, v.v, v.suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      color: "var(--ink-muted)"
    }
  }, v.suffix)), /*#__PURE__*/React.createElement(SmallSpark, {
    color: v.color,
    seed: i
  }))))));
}
function SmallSpark({
  color = "var(--ink)",
  seed = 0
}) {
  // deterministic wave
  const pts = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 24; i++) {
      const x = i / 23 * 100;
      const s = Math.sin(i * 0.6 + seed) * 0.5 + Math.cos(i * 0.3 + seed * 2) * 0.3;
      const y = 14 - (s + 1) * 5;
      arr.push(`${x},${y}`);
    }
    return arr.join(" ");
  }, [seed]);
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 20",
    preserveAspectRatio: "none",
    style: {
      width: "100%",
      height: 20,
      marginTop: 8,
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: pts,
    fill: "none",
    stroke: color,
    strokeWidth: "1.2",
    opacity: "0.7"
  }));
}

// === SECTION: How it works — three steps ===
function HowItWorks() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "how"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "section-eyebrow"
  }, "HOW IT WORKS"), /*#__PURE__*/React.createElement(Reveal, {
    delay: 60
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-section"
  }, "Three steps. No black box.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("p", {
    className: "body-lg mt-16"
  }, "Drop in your HR data, get a scored shortlist, and read the exact reasons each person is flagged.")), /*#__PURE__*/React.createElement("div", {
    className: "steps"
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 180
  }, /*#__PURE__*/React.createElement("div", {
    className: "step-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "step-num"
  }, "STEP 01"), /*#__PURE__*/React.createElement("h4", null, "Connect your HR data"), /*#__PURE__*/React.createElement("p", null, "Drop in a CSV with whatever HR data you already have: pay, tenure, hours, performance, engagement, last-raise date, anything. No rigid template, no minimum set of fields. The bot works with what you give it."), /*#__PURE__*/React.createElement("div", {
    className: "chip-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "compensation"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "tenure"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "satisfaction"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "commute"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "role"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "whatever you've got")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("div", {
    className: "step-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "step-num"
  }, "STEP 02"), /*#__PURE__*/React.createElement("h4", null, "Get everyone scored"), /*#__PURE__*/React.createElement("p", null, "Interpretable logistic regression, not a neural net you can't defend. Every employee gets a 0\u2013100 score and a HIGH / MED / LOW flag you can filter, group, and export."), /*#__PURE__*/React.createElement("div", {
    className: "chip-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip green"
  }, "LOW 58%"), /*#__PURE__*/React.createElement("span", {
    className: "chip amber"
  }, "MED 22%"), /*#__PURE__*/React.createElement("span", {
    className: "chip red"
  }, "HIGH 20%")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 300
  }, /*#__PURE__*/React.createElement("div", {
    className: "step-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "step-num"
  }, "STEP 03"), /*#__PURE__*/React.createElement("h4", null, "See the why, act on it"), /*#__PURE__*/React.createElement("p", null, "Every flag comes with its top three drivers: \"overtime + 58/wk\", \"no raise in 22mo\", \"satisfaction dropped\". Your HR business partners get a one-page brief for each HIGH flag."), /*#__PURE__*/React.createElement("div", {
    className: "reason-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "overtime"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "+ 58 h/wk")), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "last raise"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "22 mo ago")), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "1:1 cadence"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "dropped"))), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      color: "var(--ink-faint)"
    }
  }, "EXPORTS: CSV \xB7 PDF BRIEF"))))));
}

// === SECTION: Departments ===
function Departments() {
  const depts = [{
    name: "Sales",
    pct: 45,
    color: "#c5432a",
    employees: "442 EMPLOYEES",
    low: 141,
    med: 106,
    high: 195
  }, {
    name: "Human Resources",
    pct: 41,
    color: "#e39440",
    employees: "63 EMPLOYEES",
    low: 22,
    med: 15,
    high: 26
  }, {
    name: "Research & Development",
    pct: 31,
    color: "#2f7a5a",
    employees: "961 EMPLOYEES",
    low: 692,
    med: 175,
    high: 94
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    style: {
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "section-eyebrow"
  }, "DEPARTMENT DEEP DIVE"), /*#__PURE__*/React.createElement(Reveal, {
    delay: 60
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-section"
  }, "See where the risk lives.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("p", {
    className: "body-lg mt-16"
  }, "The same company, three departments. Sales is hemorrhaging. R&D is steady. HR is tiny but volatile.")), /*#__PURE__*/React.createElement("div", {
    className: "dept-grid"
  }, depts.map((d, i) => {
    const total = d.low + d.med + d.high;
    return /*#__PURE__*/React.createElement(Reveal, {
      delay: 180 + i * 80,
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "dept-card"
    }, /*#__PURE__*/React.createElement("div", {
      className: "head"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lbl"
    }, d.name), /*#__PURE__*/React.createElement("div", {
      className: "emp"
    }, d.employees)), /*#__PURE__*/React.createElement("div", {
      className: "score"
    }, /*#__PURE__*/React.createElement("span", {
      className: "big",
      style: {
        color: d.color
      }
    }, d.pct), /*#__PURE__*/React.createElement("span", {
      className: "unit",
      style: {
        color: d.color
      }
    }, "%"), /*#__PURE__*/React.createElement("span", {
      className: "cap"
    }, "AVG CHOFL SCORE")), /*#__PURE__*/React.createElement("div", {
      className: "bar-track",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        gap: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: `${d.low / total * 100}%`,
        background: "#2f7a5a"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        width: `${d.med / total * 100}%`,
        background: "#e39440"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        width: `${d.high / total * 100}%`,
        background: "#c5432a"
      }
    }))), /*#__PURE__*/React.createElement("div", {
      className: "bar-distrib"
    }, /*#__PURE__*/React.createElement("span", null, d.low, " LOW"), /*#__PURE__*/React.createElement("span", null, d.med, " MED"), /*#__PURE__*/React.createElement("span", null, d.high, " HIGH"))));
  }))));
}

// === SECTION: Pricing ===
function Pricing() {
  const tiers = [{
    name: "Starter",
    price: "$0",
    per: "up to 50 employees",
    desc: "For teams under 250, kicking the tires.",
    features: ["Monthly scoring refresh", "31 default signals", "CSV import + weekly digest", "Community support"],
    cta: "Start free",
    variant: "ghost"
  }, {
    name: "Team",
    price: "$4",
    per: "per employee / month",
    desc: "For HR teams running monthly talent reviews.",
    features: ["Weekly scoring + on-demand refresh", "Driver explanations per flag", "Workday & BambooHR sync", "Slack & email alerts", "Role-based access control"],
    cta: "Join waitlist",
    variant: "primary",
    featured: true
  }, {
    name: "Custom",
    price: "Custom",
    per: "annual",
    desc: "For large orgs with compliance and custom signals.",
    features: ["Nightly scoring + custom signals", "SSO, SCIM, audit logs", "Private model weights + self-host", "Dedicated success manager", "SLA & DPA"],
    cta: "Talk to us",
    variant: "ghost"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "pricing"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "section-eyebrow"
  }, "PRICING"), /*#__PURE__*/React.createElement(Reveal, {
    delay: 60
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-section"
  }, "Priced per employee. Not per seat.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("p", {
    className: "body-lg mt-16"
  }, "You only pay for the workforce you're scoring. No consultants, no six-month onboarding.")), /*#__PURE__*/React.createElement("div", {
    className: "pricing-grid"
  }, tiers.map((t, i) => /*#__PURE__*/React.createElement(Reveal, {
    delay: 180 + i * 80,
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: `price-card ${t.featured ? "featured" : ""}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "tier"
  }, t.name), /*#__PURE__*/React.createElement("div", {
    className: "price-main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "price-amt"
  }, t.price), /*#__PURE__*/React.createElement("span", {
    className: "price-per"
  }, t.per)), /*#__PURE__*/React.createElement("div", {
    className: "tier-desc"
  }, t.desc), /*#__PURE__*/React.createElement("ul", null, t.features.map((f, j) => /*#__PURE__*/React.createElement("li", {
    key: j
  }, f))), /*#__PURE__*/React.createElement("button", {
    className: `btn ${t.variant === "primary" ? "btn-primary" : "btn-ghost"}`
  }, t.cta)))))));
}

// === SECTION: FAQ ===
function FAQ() {
  const items = [{
    q: "What data do I actually need to give you?",
    a: "Whatever you've already got. Drop in any HR export: pay, tenure, hours, performance, last-raise date, engagement scores. Chofl works with whatever's there. The more signal you give it, the sharper the score, but there's no minimum and no rigid template. No emails, no Slack messages, no keystrokes, no productivity surveillance."
  }, {
    q: "How do I know it's actually accurate?",
    a: "We measured Chofl against 1,470 anonymised employee records with known outcomes: people we already knew had stayed or left. For every ten who left, the model flagged seven as HIGH risk without seeing the outcome. Pick any two employees at random and the model puts the leaver above the stayer 86% of the time. Every claim on this page is a held-out test result, not a marketing number."
  }, {
    q: "Do my employees have to know they're being scored?",
    a: "That's your call and depends on where you operate. Most customers add a line to their employee handbook explaining that aggregated retention analytics are run on HR data, without naming individuals. We give you template language. Chofl never produces an automated decision. A manager always reads and acts on the flag."
  }, {
    q: "What does an HR team actually do with a HIGH flag?",
    a: "Each flag comes with the top three reasons it was raised: \"no raise in 22 months,\" \"overtime trending up,\" \"satisfaction score dropped.\" That's enough for an HRBP to schedule a real conversation, propose a role change, fix a comp gap, or swap a manager. It's a prompt for a human, not an action on its own."
  }, {
    q: "How is this different from an engagement survey or a pulse tool?",
    a: "Surveys ask people how they feel and hope for honest answers. Chofl reads the patterns in your HR data: pay drift, hours, promotion gaps, tenure curves. It gives you an individual score, ranked, with reasons. It complements a survey but it doesn't depend on people filling one in."
  }];
  const [open, setOpen] = useState(0);
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "section-eyebrow"
  }, "QUESTIONS, ANSWERED"), /*#__PURE__*/React.createElement(Reveal, {
    delay: 60
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-section"
  }, "What people ask ", /*#__PURE__*/React.createElement("br", {
    className: "hide-sm"
  }), "before signing up.")), /*#__PURE__*/React.createElement("div", {
    className: "faq-grid"
  }, items.map((it, i) => /*#__PURE__*/React.createElement(Reveal, {
    delay: 120 + i * 40,
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: `faq-item ${open === i ? "open" : ""}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq-q",
    onClick: () => setOpen(open === i ? -1 : i)
  }, /*#__PURE__*/React.createElement("span", null, it.q), /*#__PURE__*/React.createElement("span", {
    className: "ic"
  })), /*#__PURE__*/React.createElement("div", {
    className: "faq-a"
  }, it.a)))))));
}

// === SECTION: Dark CTA ===
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    className: "wrap",
    id: "cta",
    style: {
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "cta-dark"
  }, /*#__PURE__*/React.createElement("h2", null, "Spot attrition ", /*#__PURE__*/React.createElement("br", null), "before it spots you."), /*#__PURE__*/React.createElement("p", null, "Chofl gives HR teams a ranked, explainable shortlist of who is most at risk of leaving, so retention conversations happen while there's still time to have them."), /*#__PURE__*/React.createElement("form", {
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
        window.location.href = window.CHOFL_THANKS_URL || "/thanks";
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
  }, "Join waitlist \u2192")))));
}

// === SECTION: Score definition (between Hero and Proof) ===
function ScoreDefinition() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "section-eyebrow"
  }, "READING A CHOFL SCORE"), /*#__PURE__*/React.createElement(Reveal, {
    delay: 60
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-section"
  }, "What a Chofl Score actually means.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("p", {
    className: "body-lg mt-16",
    style: { maxWidth: "72ch" }
  }, "The Chofl Score is a 0-100 number that estimates how likely an employee is to leave, based on patterns the model learned from historical attrition data. Higher scores mean higher risk. The score is designed for ranking. Its main job is to surface the most concerning employees at the top of a sorted list, not to predict an exact probability of departure. HR teams act on the top of the list rather than trying to interpret the absolute numbers."))));
}

// === FOOTER ===
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("div", {
    className: "footer-about"
  }, "Attrition risk intelligence for HR teams who'd rather catch it early."))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9  Chofl  \xB7 Made for HR teams"), /*#__PURE__*/React.createElement("span", null, "v0.3 \xB7 IBM benchmark \xB7 Interpretable logistic model"))));
}
Object.assign(window, {
  ProofSection,
  ScoreDefinition,
  CompanyGlance,
  HowItWorks,
  Departments,
  Pricing,
  FAQ,
  CTA,
  Footer
});
