/* All remaining page sections: proof/stats, company metrics, steps, departments, pricing, FAQ, CTA, footer */

// === SECTION: Proof / Stats ===
function ProofSection() {
  const stats = [{
    n: "7",
    sup: "sur 10",
    l: "Départs détectés",
    d: "Sur dix personnes ayant effectivement quitté l'entreprise dans le jeu de données, le modèle en a signalé sept comme à risque ÉLEVÉ avant de connaître l'issue."
  }, {
    n: "3×",
    l: "Plus susceptibles de partir",
    d: "Un collaborateur signalé ÉLEVÉ est environ trois fois plus susceptible d'être un départ qu'un collaborateur signalé FAIBLE."
  }, {
    n: "86%",
    l: "Classés dans le bon ordre",
    d: "Prenez deux collaborateurs au hasard. Dans 86 % des cas, nous classons correctement celui qui part au-dessus de celui qui reste."
  }, {
    n: "~40%",
    l: "Précision sur les profils ÉLEVÉS",
    d: "Sur dix personnes signalées ÉLEVÉ, environ quatre finissent par partir. C'est 2,5× le taux d'attrition global du jeu de données — la liste est concentrée, pas bruitée."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "proof"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "section-eyebrow"
  }, "CE QUE ÇA DONNE EN PRATIQUE"), /*#__PURE__*/React.createElement(Reveal, {
    delay: 60
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-section"
  }, "Le modèle fait ses preuves.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("p", {
    className: "body-lg mt-16"
  }, "Quatre chiffres simples, tous issus du même jeu de test. Pas de cherry-picking, pas d'affirmations qu'on ne peut pas étayer.")), /*#__PURE__*/React.createElement(Reveal, {
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
  }, "En clair : si vous agissez sur la liste ÉLEVÉ, vous identifierez la majorité des collaborateurs les plus à risque, sur une liste assez courte pour qu'un HRBP puisse réellement la travailler. C'est suffisant pour engager une vraie conversation : une revalorisation, un changement de poste, un changement de manager.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 260,
    className: "mt-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono mono-sm"
  }, "Validé sur le jeu de données IBM HR Analytics (1 470 enregistrements anonymisés, snapshot) \xB7 Jeu de test isolé \xB7 Sans fuite d'entraînement. Les performances en conditions réelles varient ; les chiffres seront publiés au fur et à mesure que vos propres données seront traitées."))));
}

// === SECTION: Company at a glance (sparkline row) ===
function CompanyGlance() {
  const vals = [{
    lbl: "EFFECTIF TOTAL",
    v: "1 470",
    color: "var(--ink-muted)"
  }, {
    lbl: "RISQUE ÉLEVÉ",
    v: "319",
    color: "#c5432a"
  }, {
    lbl: "RISQUE MOYEN",
    v: "296",
    color: "#e39440"
  }, {
    lbl: "RISQUE FAIBLE",
    v: "855",
    color: "#2f7a5a"
  }, {
    lbl: "SCORE CHOFL MOYEN",
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
  }, "APERÇU D'UNE ENTREPRISE EXEMPLE"), /*#__PURE__*/React.createElement("div", {
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
  }, "COMMENT ÇA MARCHE"), /*#__PURE__*/React.createElement(Reveal, {
    delay: 60
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-section"
  }, "Trois étapes. Aucune boîte noire.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("p", {
    className: "body-lg mt-16"
  }, "Déposez vos données RH, obtenez une liste de priorités scorée, et lisez les raisons exactes pour lesquelles chaque personne est signalée.")), /*#__PURE__*/React.createElement("div", {
    className: "steps"
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 180
  }, /*#__PURE__*/React.createElement("div", {
    className: "step-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "step-num"
  }, "ÉTAPE 01"), /*#__PURE__*/React.createElement("h4", null, "Connectez vos données RH"), /*#__PURE__*/React.createElement("p", null, "Déposez un CSV avec les données RH dont vous disposez déjà : rémunération, ancienneté, heures travaillées, performance, engagement, date de dernière augmentation, etc. Pas de modèle imposé, pas de champs obligatoires. L'outil fonctionne avec ce que vous lui donnez."), /*#__PURE__*/React.createElement("div", {
    className: "chip-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "rémunération"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "ancienneté"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "satisfaction"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "trajet domicile-travail"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "poste"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "ce que vous avez")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("div", {
    className: "step-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "step-num"
  }, "ÉTAPE 02"), /*#__PURE__*/React.createElement("h4", null, "Obtenez un score pour chaque collaborateur"), /*#__PURE__*/React.createElement("p", null, "Une régression logistique interprétable, pas un réseau de neurones indéfendable. Chaque collaborateur reçoit un score de 0 à 100 et un indicateur ÉLEVÉ / MOYEN / FAIBLE que vous pouvez filtrer, regrouper et exporter."), /*#__PURE__*/React.createElement("div", {
    className: "chip-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip green"
  }, "FAIBLE 58%"), /*#__PURE__*/React.createElement("span", {
    className: "chip amber"
  }, "MOYEN 22%"), /*#__PURE__*/React.createElement("span", {
    className: "chip red"
  }, "ÉLEVÉ 20%")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 300
  }, /*#__PURE__*/React.createElement("div", {
    className: "step-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "step-num"
  }, "ÉTAPE 03"), /*#__PURE__*/React.createElement("h4", null, "Comprenez le pourquoi, passez à l'action"), /*#__PURE__*/React.createElement("p", null, "Chaque signalement est accompagné de ses trois principaux facteurs : « heures sup + 58 h/sem », « pas d'augmentation depuis 22 mois », « satisfaction en baisse ». Vos HRBPs reçoivent une fiche synthétique d'une page pour chaque profil ÉLEVÉ."), /*#__PURE__*/React.createElement("div", {
    className: "reason-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "heures sup"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "+ 58 h/sem")), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "dernière augmentation"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "il y a 22 mois")), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "fréquence des points individuels"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "en baisse"))), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      color: "var(--ink-faint)"
    }
  }, "EXPORTS: CSV \xB7 FICHE PDF"))))));
}

// === SECTION: Departments ===
function Departments() {
  const depts = [{
    name: "Ventes",
    pct: 45,
    color: "#c5432a",
    employees: "442 COLLABORATEURS",
    low: 141,
    med: 106,
    high: 195
  }, {
    name: "Ressources Humaines",
    pct: 41,
    color: "#e39440",
    employees: "63 COLLABORATEURS",
    low: 22,
    med: 15,
    high: 26
  }, {
    name: "Recherche & Développement",
    pct: 31,
    color: "#2f7a5a",
    employees: "961 COLLABORATEURS",
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
  }, "COMPRENDRE UN SCORE CHOFL"), /*#__PURE__*/React.createElement(Reveal, {
    delay: 60
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-section"
  }, "Ce que signifie un Chofl Score.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("p", {
    className: "body-lg mt-16",
    style: { maxWidth: "72ch" }
  }, "Le Chofl Score est un nombre de 0 à 100 qui estime la probabilité qu'un collaborateur quitte l'entreprise, à partir des tendances que le modèle a identifiées dans des données historiques d'attrition. Plus le score est élevé, plus le risque est important. Le score est conçu pour classer, pas pour prédire une probabilité exacte de départ. Son rôle principal est de faire remonter les profils les plus préoccupants en tête d'une liste triée. Les équipes RH agissent sur les premiers de la liste plutôt que de chercher à interpréter les valeurs absolues."))));
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
