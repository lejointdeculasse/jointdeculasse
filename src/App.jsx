export default function App() {
  const youtubeUrl = "https://youtube.com/@lejointdeculasse";
  const logoUrl = "/logo-joint-de-culasse.png";
  const contactEmail = "partenariat@jointdeculasse.fr";
  const heroVideo = "https://www.youtube.com/embed/COFDURtc6pU";

  const socials = [
    { name: "YouTube", url: youtubeUrl },
    { name: "Instagram", url: "https://instagram.com/lejointdeculasse" },
    { name: "Facebook", url: "https://facebook.com" },
    { name: "TikTok", url: "https://tiktok.com" },
  ];

  const featuredVideos = [
    {
      title: "Twingo de Course",
      description:
        "Le projet principal : swap, galères, mécanique et vraie vie d'atelier.",
      badge: "Projet principal",
      embed: "https://www.youtube.com/embed/videoseries?list=PLQXI7n6TCD3vosmiZjckCj59lXLFqUDdx",
    },
    {
      title: "On redémarre les bolides",
      description:
        "Des voitures oubliées qu’on tente de faire repartir. Parfois ça marche… parfois non.",
      badge: "Série atelier",
      embed: "https://www.youtube.com/embed/videoseries?list=PLQXI7n6TCD3uchL1YFv0ViZTpwm6CKDOg",
    },
    {
      title: "Mercedes S124",
      description:
        "Un break Mercedes qui va clairement pas rester d’origine. Prépa, modifs, et sûrement quelques surprises.",
      badge: "Projet",
      embed: "https://www.youtube.com/embed/videoseries?list=PLQXI7n6TCD3vlAcZGA2cpjaDdl2wlTN4d",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-neutral-950">
              <img
                src={logoUrl}
                alt="Logo Joint de Culasse"
                className="h-full w-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const fallback = e.currentTarget.nextElementSibling;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <div className="hidden h-full w-full items-center justify-center text-xs font-black uppercase tracking-[0.2em] text-white">
                JDC
              </div>
            </div>
            <div>
              <div className="text-xl font-black uppercase tracking-widest">Joint de Culasse</div>
              <div className="text-xs text-neutral-400">Chaîne auto • Marque • Projets mécaniques</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
            <a href="#videos" className="transition hover:text-white">Vidéos</a>
            <a href="#univers" className="transition hover:text-white">Univers</a>
            <a href="#apropos" className="transition hover:text-white">À propos</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.18em] text-neutral-300">
                Site officiel • jointdeculasse.fr
              </div>

              <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
                Des vraies voitures.
                <br />
                De la vraie mécanique.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-400 md:text-lg">
                Bienvenue chez Joint de Culasse. Ici, on démonte, on teste, on galère,
                on remonte et parfois… ça démarre. Retrouve les vidéos YouTube, les projets,
                l'univers de la marque et les contacts pro au même endroit.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={youtubeUrl}
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
                >
                  Voir la chaîne YouTube
                </a>
                <a
                  href="#videos"
                  className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
                >
                  Voir les vidéos phares
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-neutral-950 p-4 shadow-2xl">
              <div className="aspect-video overflow-hidden rounded-3xl border border-white/10">
                <iframe
                  className="h-full w-full"
                  src={heroVideo}
                  title="Dernière vidéo Joint de Culasse"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-neutral-950/60">
          <div className="mx-auto grid max-w-6xl gap-4 px-4 py-10 md:grid-cols-4">
            {[
              "Chaîne YouTube auto française",
              "Projets mécaniques réels",
              "Marque et identité visuelle forte",
              "Base solide pour SEO et sponsors",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-black p-5 text-sm text-neutral-300">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="videos" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-black md:text-4xl">Les vidéos et séries à découvrir</h2>
            <p className="mt-4 text-neutral-400 leading-7">
              Une sélection claire des formats les plus importants de la chaîne pour donner envie de regarder,
              s'abonner et revenir.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredVideos.map((video) => (
              <article key={video.title} className="rounded-[28px] border border-white/10 bg-neutral-950 p-4">
                <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black">
                  <iframe
                    className="h-full w-full"
                    src={video.embed}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="mt-4 inline-flex rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.15em] text-neutral-400">
                  {video.badge}
                </div>
                <h3 className="mt-4 text-2xl font-bold">{video.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-400">{video.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="univers" className="border-y border-white/10 bg-neutral-950/60">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-2 md:py-20">
            <div className="rounded-[28px] border border-white/10 bg-black p-6 md:p-8">
              <h2 className="text-3xl font-black">L'univers Joint de Culasse</h2>
              <p className="mt-5 text-neutral-300 leading-7">
                Joint de Culasse, c'est une chaîne automobile qui montre la réalité : des projets,
                des erreurs, des essais, des remises en route, des swaps et toute l'ambiance atelier
                qui va avec. Le site sert à renforcer le nom, la marque et la présence en ligne.
              </p>
              <div className="mt-6 space-y-3 text-sm text-neutral-400">
                <div>• vraie mécanique, sans surjeu</div>
                <div>• identité cohérente avec la chaîne YouTube</div>
                <div>• image plus crédible pour les partenaires</div>
                <div>• meilleur point d'entrée quand quelqu'un cherche le nom sur Google</div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-black p-6 md:p-8">
              <h2 className="text-3xl font-black">Réseaux et présence</h2>
              <div className="mt-6 grid gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/10 px-4 py-4 text-neutral-300 transition hover:bg-white/5 hover:text-white"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="apropos" className="mx-auto max-w-4xl px-4 py-16 text-center md:py-20">
          <h2 className="text-3xl font-black">À propos</h2>
          <p className="mt-6 text-neutral-300 leading-8">
            Bienvenue chez Joint de Culasse. Ici, on parle vraies voitures, vraie mécanique et vrais imprévus.
            Le but n'est pas de faire semblant : on montre les projets, les galères, les essais,
            les erreurs et tout ce qui fait vivre la passion auto au quotidien.
          </p>
        </section>

        <section id="contact" className="border-t border-white/10 bg-neutral-950/60">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-20">
            <div className="rounded-[28px] border border-white/10 bg-black p-6 md:p-8">
              <h2 className="text-3xl font-black">Contact pro</h2>
              <p className="mt-4 text-neutral-400 leading-7">
                Pour les partenariats, collaborations, tests produits ou demandes professionnelles autour de la chaîne.
              </p>
              <a href={`mailto:${contactEmail}`} className="mt-6 inline-block text-lg font-semibold text-white underline underline-offset-4">
                {contactEmail}
              </a>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white p-6 text-black md:p-8">
              <div className="text-sm uppercase tracking-[0.15em] text-neutral-500">Marque</div>
              <div className="mt-4 text-3xl font-black leading-tight">Joint de Culasse</div>
              <p className="mt-4 text-sm leading-6 text-neutral-700">
                Une base propre, rapide et optimisée pour mettre en avant tes vidéos YouTube,
                ton identité visuelle et ton nom sur le web.
              </p>
              <a
                href={youtubeUrl}
                className="mt-6 inline-flex rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Aller sur YouTube
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
