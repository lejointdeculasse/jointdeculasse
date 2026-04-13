const projects = [
  {
    title: "Twingo de Course",
    badge: "Série principale",
    description:
      "On part d’une Twingo pas prête du tout… et on essaie d’en faire un vrai projet qui roule. Et ça ne se passe jamais comme prévu.",
    embed: "https://www.youtube.com/embed/videoseries?list=VIDEO_ID_1",
  },
  {
    title: "Projet S124",
    badge: "Projet en cours",
    description:
      "Ce break Mercedes ne va clairement pas rester d’origine. Prépa, modifs et quelques surprises au passage.",
    embed: "https://www.youtube.com/embed/videoseries?list=VIDEO_ID_2",
  },
  {
    title: "Remise en route",
    badge: "Atelier",
    description:
      "Des voitures oubliées depuis des années… et on tente de les refaire démarrer. Parfois ça marche, parfois c’est la galère.",
    embed: "https://www.youtube.com/embed/videoseries?list=VIDEO_ID_3",
  },
];

export default function App() {
  const youtubeUrl = "https://youtube.com/@lejointdeculasse";
  const subscribeUrl = "https://youtube.com/@lejointdeculasse?sub_confirmation=1";
  const contactEmail = "partenariat@jointdeculasse.fr";
  const heroPlaylist = "https://www.youtube.com/embed/videoseries?list=VIDEO_ID_MAIN";

  return (
    <div className="site">
      <header className="topbar">
        <a href="#top" className="brand">
          <div className="logoWrap">
            <img
              src="/logo-joint-de-culasse.png"
              alt="Logo Joint de Culasse"
              className="logo"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const fallback = e.currentTarget.nextElementSibling;
                if (fallback) fallback.style.display = "flex";
              }}
            />
            <div className="logoFallback">JDC</div>
          </div>
          <div>
            <div className="brandTitle">Joint de Culasse</div>
            <div className="brandSub">Chaîne auto • Projets • Univers mécanique</div>
          </div>
        </a>

        <nav className="nav">
          <a href="#videos">Vidéos</a>
          <a href="#apropos">À propos</a>
          <a href="#partenariats">Partenariats</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="heroText">
            <div className="pill">Site officiel • jointdeculasse.fr</div>
            <h1>
              On a tenté un truc…
              <br />
              franchement on n’aurait peut-être pas dû.
            </h1>
            <p>
              Ici on démonte, on teste, on galère… et parfois ça démarre.
              Si tu aimes les vrais projets auto, les imprévus et les séries qui évoluent
              épisode après épisode, suis l’aventure sur YouTube.
            </p>

            <div className="heroActions">
              <a href={youtubeUrl} target="_blank" rel="noreferrer" className="btn btnPrimary">
                Regarder sur YouTube
              </a>
              <a href={subscribeUrl} target="_blank" rel="noreferrer" className="btn btnSubscribe">
                S’abonner
              </a>
              <a href="#videos" className="btn btnGhost">
                Voir la série principale
              </a>
            </div>
          </div>

          <div className="heroMedia card">
            <div className="videoFrame">
              <iframe
                src={heroPlaylist}
                title="Playlist principale Joint de Culasse"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="highlights sectionSlim">
          <div className="highlight">Fil rouge qui donne envie de revenir</div>
          <div className="highlight">Projets mécaniques réels</div>
          <div className="highlight">Univers auto cohérent avec la chaîne</div>
          <div className="highlight">Point d’entrée clair vers YouTube</div>
        </section>

        <section id="videos" className="section">
          <div className="sectionIntro">
            <h2>Si tu veux voir si ça démarre vraiment… c’est ici</h2>
            <p>
              Le site doit donner envie de cliquer vite, puis laisser YouTube faire le reste :
              regarder, enchaîner les épisodes et revenir pour la suite.
            </p>
          </div>

          <div className="cards">
            {projects.map((project) => (
              <article key={project.title} className="card projectCard">
                <div className="videoFrame">
                  <iframe
                    src={project.embed}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="badge">{project.badge}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="apropos" className="section sectionAlt">
          <div className="split">
            <div className="card textCard">
              <h2>À propos</h2>
              <p>
                Bienvenue chez Joint de Culasse. Ici, on parle vraies voitures, vraie mécanique et
                vrais imprévus. Le but n’est pas de faire semblant : on montre les projets, les
                galères, les essais, les erreurs et tout ce qui fait vivre la passion auto au quotidien.
              </p>
            </div>

            <div className="card textCard">
              <h2>Pourquoi ce site existe</h2>
              <p>
                Le site sert à renforcer le nom, centraliser les playlists importantes, donner un
                point d’entrée clair depuis Google et offrir une base plus crédible pour les contacts
                pro et les partenaires.
              </p>
            </div>
          </div>
        </section>

        <section id="partenariats" className="section sectionAlt">
          <div className="split">
            <div className="card textCard">
              <h2>Travailler avec Joint de Culasse</h2>
              <p>
                Ici, pas de placement forcé. Je teste, j’utilise et je parle uniquement de produits
                qui ont du sens dans mes projets. L’objectif : du concret, utile pour la mécanique
                et crédible pour la communauté.
              </p>
              <ul className="list">
                <li>tests produits en conditions réelles</li>
                <li>intégration naturelle dans les projets</li>
                <li>visibilité sur YouTube et réseaux</li>
                <li>collaboration possible sur le long terme</li>
              </ul>
            </div>

            <div className="card sponsorCard">
              <div className="miniLabel">Contact pro</div>
              <h2>Partenariats</h2>
              <p>Une idée, un produit ou un projet ? On en parle.</p>
              <a href={`mailto:${contactEmail}`} className="btn btnDark">
                {contactEmail}
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="split">
            <div className="card textCard">
              <h2>Contact</h2>
              <p>
                Pour les partenariats, collaborations, tests produits ou demandes professionnelles
                autour de la chaîne.
              </p>
              <a href={`mailto:${contactEmail}`} className="mailLink">
                {contactEmail}
              </a>
            </div>

            <div className="card ctaCard">
              <div className="miniLabel dark">Marque</div>
              <h2>Joint de Culasse</h2>
              <p>
                Une base propre, rapide et optimisée pour mettre en avant tes vidéos YouTube, ton
                identité visuelle et ton nom sur le web.
              </p>
              <div className="heroActions">
                <a href={youtubeUrl} target="_blank" rel="noreferrer" className="btn btnDark">
                  Aller sur YouTube
                </a>
                <a href={subscribeUrl} target="_blank" rel="noreferrer" className="btn btnSubscribe">
                  S’abonner
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
