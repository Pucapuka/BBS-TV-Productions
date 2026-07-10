import { createFileRoute } from "@tanstack/react-router";
import React, { useEffect, useMemo, useState } from "react";
import dombosco1 from "@/assets/dombosco-1.jpg";
import dombosco2 from "@/assets/dombosco-2.jpg";
import skilled1 from "@/assets/skilled-1.jpg";
import skilled2 from "@/assets/skilled-2.jpg";

function AlternatingLogo({ a, b, alt }: { a: string; b: string; alt: string }) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const id = setInterval(() => setOn((v) => !v), 2500);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative h-28 w-full overflow-hidden bg-white">
      <img src={a} alt={alt} className="absolute inset-0 h-full w-full object-contain p-3 transition-opacity duration-700" style={{ opacity: on ? 0 : 1 }} />
      <img src={b} alt={alt} className="absolute inset-0 h-full w-full object-contain p-3 transition-opacity duration-700" style={{ opacity: on ? 1 : 0 }} />
    </div>
  );
}

type Lang = "pt" | "en" | "es" | "it";

const CONTENT: Record<Lang, {
  nav: { about: string; team: string; work: string; partners: string; broadcasts: string };
  masthead: { edition: string; date: string; issue: string };
  hero: { kicker: string; title: string; lede: string; standfirst: string };
  live: string;
  about: { eyebrow: string; heading: string; p1: string; p2: string; p3: string; pull: string };
  team: { eyebrow: string; heading: string; role1: string; bio1: string; role2: string; bio2: string };
  work: { eyebrow: string; heading: string; items: { tag: string; title: string; body: string }[] };
  broadcasts: { eyebrow: string; heading: string; note: string; empty: string };
  partners: { eyebrow: string; heading: string; note: string };
  closer: string;
  footer: { address: string; company: string };
}> = {
  pt: {
    nav: { about: "Sobre", team: "Equipe", work: "Trabalhos", partners: "Parcerias", broadcasts: "Transmissões" },
    masthead: { edition: "Edição Especial", date: "Santa Catarina · Maranhão · Londres", issue: "Vol. I" },
    hero: {
      kicker: "Produção Audiovisual · Jornalismo · Cultura",
      title: "Onde o rigor britânico encontra a alma brasileira.",
      lede: "A BBS TV Productions é uma empresa dinâmica de produção audiovisual, parte do BBS Group Idiomas LTDA., registrada em Santa Catarina, com filial no Maranhão e atividades em Londres.",
      standfirst: "Seguimos princípios britânicos e brasileiros de excelência, criatividade e respeito cultural.",
    },
    live: "No ar agora",
    about: {
      eyebrow: "Editorial",
      heading: "Sobre a BBS TV Productions",
      p1: "Nascida de uma sugestão dos alunos para criar um canal em inglês sobre cultura local, produzimos conteúdo de alta qualidade que conecta estudantes brasileiros de inglês ao mundo, celebrando com orgulho o rico patrimônio e o povo do Maranhão.",
      p2: "Nossa equipe, treinada no Reino Unido, possui ampla experiência em jornalismo, estudos culturais, política e marketing. Sabemos como criar conteúdos de impacto que fazem marcas se destacarem.",
      p3: "Combinamos disciplina editorial britânica com o calor narrativo brasileiro — reportagem, roteiro e imagem a serviço da cultura e da educação.",
      pull: "Fazemos jornalismo com sotaque de dois países e olhar para o mundo.",
    },
    team: {
      eyebrow: "Redação",
      heading: "Nossa Equipe",
      role1: "Pesquisador e produtor britânico · Diretor no BBS Group Idiomas LTDA.",
      bio1: "Graduado pela University of Essex em Política. Com vasto conhecimento em jornalismo, culturas e política, Anthony lidera pesquisa e produção com visão internacional.",
      role2: "Produtora e roteirista britânico-brasileira · Administradora no BBS Group Idiomas LTDA.",
      bio2: "Mestre em Jornalismo pela Goldsmiths, University of London. Melanie une a excelência jornalística britânica ao profundo conhecimento da cultura brasileira.",
    },
    work: {
      eyebrow: "Reportagens & Produções",
      heading: "Nossos Trabalhos e Parcerias",
      items: [
        { tag: "Documentário", title: "Um Gringo no Maranhão", body: "Tema escolhido pelos alunos de inglês em parceria com o pesquisador Anthony Smith. Uma celebração orgulhosa da cultura, tradições e vida local do Maranhão." },
        { tag: "Educação", title: "Vídeos educativos", body: "Produção de vídeos educativos especialmente criados para estudantes de inglês em todo o Brasil." },
        { tag: "Distribuição", title: "Multiplataforma", body: "Conteúdo veiculado em televisão local, redes sociais, rádio e plataformas internacionais — notícia, conhecimento e resgate de cultura." },
      ],
    },
    broadcasts: {
      eyebrow: "No ar",
      heading: "Transmissões de Vídeo",
      note: "Programas embutidos do YouTube. Novos episódios serão adicionados aqui.",
      empty: "Espaço reservado para o próximo programa",
    },
    partners: {
      eyebrow: "Expediente",
      heading: "Parcerias",
      note: "Com Dom Bosco BBS e Skill Idiomas.",
    },
    closer: "Temos orgulho do povo local e levamos sua marca junto com a nossa trajetória de qualidade e autenticidade.",
    footer: {
      address: "Rua Heitor Liberato, 1220 · São João · Itajaí — Santa Catarina · CEP 88304-101",
      company: "BBS Group Idiomas LTDA. · Santa Catarina · Maranhão · Londres",
    },
  },
  en: {
    nav: { about: "About", team: "Team", work: "Work", partners: "Partners", broadcasts: "Broadcasts" },
    masthead: { edition: "Special Edition", date: "Santa Catarina · Maranhão · London", issue: "Vol. I" },
    hero: {
      kicker: "Production · Journalism · Culture",
      title: "Where British rigour meets the Brazilian soul.",
      lede: "BBS TV Productions is a dynamic media production company, part of BBS Group Idiomas LTDA., registered in Santa Catarina, Brazil, with a branch in Maranhão and activities in London.",
      standfirst: "We combine British and Brazilian principles of excellence, creativity, and cultural respect.",
    },
    live: "On air now",
    about: {
      eyebrow: "Editorial",
      heading: "About BBS TV Productions",
      p1: "Inspired by a student suggestion to create an English-language channel focused on local culture, we produce high-quality content that connects Brazilian English learners with global perspectives while proudly celebrating the rich heritage and people of Maranhão.",
      p2: "Our UK-trained team brings extensive experience in journalism, cultural studies, politics, and marketing. We know how to create impactful content that makes brands stand out.",
      p3: "We combine British editorial discipline with Brazilian narrative warmth — reporting, scriptwriting and image at the service of culture and education.",
      pull: "Journalism with the accent of two nations and the eye of the world.",
    },
    team: {
      eyebrow: "Newsroom",
      heading: "Our Team",
      role1: "British researcher and producer · Director at BBS Group Idiomas LTDA.",
      bio1: "Graduated from the University of Essex in Politics. With rich knowledge in journalism, cultures, and politics, Anthony leads research and production with international insight.",
      role2: "British-Brazilian producer and scriptwriter · Administrator at BBS Group Idiomas LTDA.",
      bio2: "Master in Journalism from Goldsmiths, University of London. Melanie brings together British journalistic excellence with deep Brazilian cultural understanding.",
    },
    work: {
      eyebrow: "Features & Productions",
      heading: "Our Work & Partnerships",
      items: [
        { tag: "Documentary", title: "Um Gringo no Maranhão", body: "Theme chosen by English students together with researcher Anthony Smith. A proud celebration of local culture, traditions and daily life in Maranhão." },
        { tag: "Education", title: "Educational videos", body: "Educational videos specially created for English students across Brazil." },
        { tag: "Distribution", title: "Multiplatform", body: "Content distributed on local television, social media, radio and international platforms — featuring news, knowledge, music and culture." },
      ],
    },
    broadcasts: {
      eyebrow: "On air",
      heading: "Video Broadcasts",
      note: "Programmes embedded from YouTube. New episodes will be added here.",
      empty: "Reserved space for the next programme",
    },
    partners: {
      eyebrow: "Colophon",
      heading: "Partnerships",
      note: "With Dom Bosco BBS and Skill Idiomas.",
    },
    closer: "We are proud of the local people and carry your brand forward with our trajectory of quality and authenticity.",
    footer: {
      address: "Rua Heitor Liberato, 1220 · São João · Itajaí — Santa Catarina · CEP 88304-101",
      company: "BBS Group Idiomas LTDA. · Santa Catarina · Maranhão · London",
    },
  },
  es: {
    nav: { about: "Sobre", team: "Equipo", work: "Trabajos", partners: "Socios", broadcasts: "Transmisiones" },
    masthead: { edition: "Edición Especial", date: "Santa Catarina · Maranhão · Londres", issue: "Vol. I" },
    hero: {
      kicker: "Producción · Periodismo · Cultura",
      title: "Donde el rigor británico se encuentra con el alma brasileña.",
      lede: "BBS TV Productions es una empresa dinámica de producción audiovisual, parte de BBS Group Idiomas LTDA., registrada en Santa Catarina, Brasil, con sucursal en Maranhão y actividades en Londres.",
      standfirst: "Combinamos principios británicos y brasileños de excelencia, creatividad y respeto cultural.",
    },
    live: "En vivo ahora",
    about: {
      eyebrow: "Editorial",
      heading: "Sobre BBS TV Productions",
      p1: "Inspirados por la sugerencia de estudiantes de crear un canal en inglés sobre cultura local, producimos contenido de alta calidad que conecta a los estudiantes brasileños de inglés con perspectivas globales, celebrando con orgullo el rico patrimonio y la gente de Maranhão.",
      p2: "Nuestro equipo, formado en el Reino Unido, cuenta con amplia experiencia en periodismo, estudios culturales, política y marketing. Sabemos crear contenidos de impacto que hacen destacar a las marcas.",
      p3: "Combinamos la disciplina editorial británica con la calidez narrativa brasileña — reportaje, guion e imagen al servicio de la cultura y la educación.",
      pull: "Periodismo con acento de dos países y mirada al mundo.",
    },
    team: {
      eyebrow: "Redacción",
      heading: "Nuestro Equipo",
      role1: "Investigador y productor británico · Director en BBS Group Idiomas LTDA.",
      bio1: "Graduado por la University of Essex en Política. Con amplio conocimiento en periodismo, culturas y política, Anthony lidera la investigación y producción con visión internacional.",
      role2: "Productora y guionista británico-brasileña · Administradora en BBS Group Idiomas LTDA.",
      bio2: "Máster en Periodismo por Goldsmiths, University of London. Melanie une la excelencia periodística británica al profundo conocimiento de la cultura brasileña.",
    },
    work: {
      eyebrow: "Reportajes y Producciones",
      heading: "Nuestros Trabajos y Alianzas",
      items: [
        { tag: "Documental", title: "Um Gringo no Maranhão", body: "Tema elegido por los estudiantes de inglés junto al investigador Anthony Smith. Una celebración orgullosa de la cultura, tradiciones y vida local de Maranhão." },
        { tag: "Educación", title: "Videos educativos", body: "Producción de videos educativos creados especialmente para estudiantes de inglés en todo Brasil." },
        { tag: "Distribución", title: "Multiplataforma", body: "Contenido difundido en televisión local, redes sociales, radio y plataformas internacionales — noticia, conocimiento y rescate cultural." },
      ],
    },
    broadcasts: {
      eyebrow: "Al aire",
      heading: "Transmisiones de Video",
      note: "Programas incrustados desde YouTube. Nuevos episodios se añadirán aquí.",
      empty: "Espacio reservado para el próximo programa",
    },
    partners: {
      eyebrow: "Créditos",
      heading: "Alianzas",
      note: "Con Dom Bosco BBS y Skill Idiomas.",
    },
    closer: "Estamos orgullosos de la gente local y llevamos su marca junto con nuestra trayectoria de calidad y autenticidad.",
    footer: {
      address: "Rua Heitor Liberato, 1220 · São João · Itajaí — Santa Catarina · CEP 88304-101",
      company: "BBS Group Idiomas LTDA. · Santa Catarina · Maranhão · Londres",
    },
  },
  it: {
    nav: { about: "Chi siamo", team: "Squadra", work: "Lavori", partners: "Partner", broadcasts: "Trasmissioni" },
    masthead: { edition: "Edizione Speciale", date: "Santa Catarina · Maranhão · Londra", issue: "Vol. I" },
    hero: {
      kicker: "Produzione · Giornalismo · Cultura",
      title: "Dove il rigore britannico incontra l'anima brasiliana.",
      lede: "BBS TV Productions è una dinamica società di produzione audiovisiva, parte di BBS Group Idiomas LTDA., registrata a Santa Catarina, in Brasile, con una filiale a Maranhão e attività a Londra.",
      standfirst: "Uniamo i principi britannici e brasiliani di eccellenza, creatività e rispetto culturale.",
    },
    live: "In onda ora",
    about: {
      eyebrow: "Editoriale",
      heading: "Chi è BBS TV Productions",
      p1: "Nata da un suggerimento degli studenti di creare un canale in inglese dedicato alla cultura locale, produciamo contenuti di alta qualità che collegano gli studenti brasiliani di inglese al mondo, celebrando con orgoglio il ricco patrimonio e la gente di Maranhão.",
      p2: "Il nostro team, formato nel Regno Unito, vanta una vasta esperienza in giornalismo, studi culturali, politica e marketing. Sappiamo creare contenuti d'impatto che fanno risaltare i marchi.",
      p3: "Uniamo la disciplina editoriale britannica al calore narrativo brasiliano — reportage, sceneggiatura e immagine al servizio della cultura e dell'educazione.",
      pull: "Facciamo giornalismo con l'accento di due nazioni e lo sguardo rivolto al mondo.",
    },
    team: {
      eyebrow: "Redazione",
      heading: "Il Nostro Team",
      role1: "Ricercatore e produttore britannico · Direttore presso BBS Group Idiomas LTDA.",
      bio1: "Laureato in Scienze Politiche presso la University of Essex. Con una ricca conoscenza di giornalismo, culture e politica, Anthony guida ricerca e produzione con visione internazionale.",
      role2: "Produttrice e sceneggiatrice anglo-brasiliana · Amministratrice presso BBS Group Idiomas LTDA.",
      bio2: "Master in Giornalismo alla Goldsmiths, University of London. Melanie unisce l'eccellenza giornalistica britannica alla profonda conoscenza della cultura brasiliana.",
    },
    work: {
      eyebrow: "Reportage & Produzioni",
      heading: "I Nostri Lavori e Partnership",
      items: [
        { tag: "Documentario", title: "Um Gringo no Maranhão", body: "Tema scelto dagli studenti di inglese insieme al ricercatore Anthony Smith. Una celebrazione orgogliosa della cultura, delle tradizioni e della vita locale di Maranhão." },
        { tag: "Educazione", title: "Video educativi", body: "Produzione di video educativi creati appositamente per gli studenti di inglese in tutto il Brasile." },
        { tag: "Distribuzione", title: "Multipiattaforma", body: "Contenuti diffusi su televisione locale, social media, radio e piattaforme internazionali — notizie, conoscenza e recupero culturale." },
      ],
    },
    broadcasts: {
      eyebrow: "In onda",
      heading: "Trasmissioni Video",
      note: "Programmi incorporati da YouTube. Qui verranno aggiunti nuovi episodi.",
      empty: "Spazio riservato al prossimo programma",
    },
    partners: {
      eyebrow: "Colophon",
      heading: "Partnership",
      note: "Con Dom Bosco BBS e Skill Idiomas.",
    },
    closer: "Siamo orgogliosi della gente locale e portiamo avanti il vostro marchio con la nostra traiettoria di qualità e autenticità.",
    footer: {
      address: "Rua Heitor Liberato, 1220 · São João · Itajaí — Santa Catarina · CEP 88304-101",
      company: "BBS Group Idiomas LTDA. · Santa Catarina · Maranhão · Londra",
    },
  },
};

export const Route = createFileRoute("/")({
  component: Index,
});

function FlagBR() {
  return (
    <svg viewBox="0 0 60 42" className="h-4 w-6 shrink-0" aria-hidden>
      <rect width="60" height="42" fill="#009c3b" />
      <polygon points="30,4 56,21 30,38 4,21" fill="#ffdf00" />
      <circle cx="30" cy="21" r="7.5" fill="#002776" />
      <path d="M22.5 22.5 Q30 18 37.5 22.5" stroke="#fff" strokeWidth="1.2" fill="none" />
    </svg>
  );
}
function FlagUK() {
  return (
    <svg viewBox="0 0 60 42" className="h-4 w-6 shrink-0" aria-hidden>
      <rect width="60" height="42" fill="#012169" />
      <path d="M0,0 L60,42 M60,0 L0,42" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,42 M60,0 L0,42" stroke="#C8102E" strokeWidth="2.5" />
      <path d="M30,0 V42 M0,21 H60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 V42 M0,21 H60" stroke="#C8102E" strokeWidth="4" />
    </svg>
  );
}
function FlagES() {
  return (
    <svg viewBox="0 0 60 42" className="h-4 w-6 shrink-0" aria-hidden>
      <rect width="60" height="42" fill="#AA151B" />
      <rect y="10.5" width="60" height="21" fill="#F1BF00" />
    </svg>
  );
}
function FlagIT() {
  return (
    <svg viewBox="0 0 60 42" className="h-4 w-6 shrink-0" aria-hidden>
      <rect width="20" height="42" fill="#008C45" />
      <rect x="20" width="20" height="42" fill="#F4F5F0" />
      <rect x="40" width="20" height="42" fill="#CD212A" />
    </svg>
  );
}

const LANG_META: Record<Lang, { native: string; Flag: () => React.ReactElement }> = {
  pt: { native: "Português (Brasil)", Flag: FlagBR },
  en: { native: "English (UK)", Flag: FlagUK },
  es: { native: "Español", Flag: FlagES },
  it: { native: "Italiano", Flag: FlagIT },
};

function LangBar({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="flex items-center gap-1">
      {(Object.keys(LANG_META) as Lang[]).map((code) => {
        const M = LANG_META[code];
        const active = code === lang;
        return (
          <button
            key={code}
            onClick={() => setLang(code)}
            aria-label={M.native}
            aria-pressed={active}
            title={M.native}
            className={`flex items-center gap-1.5 px-1.5 py-1 transition-all ${
              active
                ? "outline outline-1 outline-paper"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <M.Flag />
            <span>{code.toUpperCase()}</span>
          </button>
        );
      })}
    </div>
  );
}

// YouTube programme embeds — add/replace video IDs as programmes go on air.
const BROADCASTS: { id: string | null; title: string; tag: string }[] = [
  { id: null, title: "Um Gringo no Maranhão", tag: "EP · 01" },
  { id: null, title: "BBS TV · Educational", tag: "EP · 02" },
  { id: null, title: "Coming soon", tag: "EP · 03" },
];

function Index() {
  const [lang, setLang] = useState<Lang>("pt");
  const t = CONTENT[lang];
  const today = useMemo(() => {
    const locales: Record<Lang, string> = { pt: "pt-BR", en: "en-GB", es: "es-ES", it: "it-IT" };
    return new Date().toLocaleDateString(locales[lang], { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  }, [lang]);

  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* Top bar */}
      <div className="rule-b bg-ink text-paper">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-2 text-[11px] font-mono-x uppercase tracking-[0.18em]">
          <div className="flex items-center gap-3">
            <span className="live-dot inline-block h-2 w-2 rounded-full bg-red-500" />
            <span>{t.live}</span>
            <span className="hidden sm:inline opacity-60">·</span>
            <span className="hidden sm:inline capitalize opacity-80" style={{ letterSpacing: "0.1em" }}>{today}</span>
          </div>
          <LangBar lang={lang} setLang={setLang} />
        </div>
      </div>

      {/* Masthead */}
      <header className="rule-b">
        <div className="mx-auto max-w-[1400px] px-4">
          <div className="grid grid-cols-3 items-end gap-4 pt-8 pb-4 text-[11px] font-mono-x uppercase tracking-[0.18em] text-muted-foreground">
            <div>{t.masthead.edition}</div>
            <div className="text-center">{t.masthead.issue}</div>
            <div className="text-right">{lang.toUpperCase()}</div>
          </div>
          <div className="flex flex-col items-center pb-6">
            <h1 className="font-display text-center text-[14vw] leading-[0.9] tracking-[-0.04em] sm:text-[110px]">
              BBS <span className="italic font-normal">TV</span> Productions
            </h1>
            <div className="mt-3 flex items-center gap-3 text-[11px] font-mono-x uppercase tracking-[0.24em] text-muted-foreground">
              <span className="h-px w-10 bg-ink" />
              <span>Broadcast · Reportage · Culture</span>
              <span className="h-px w-10 bg-ink" />
            </div>
          </div>
        </div>
        <div className="rule-t">
          <nav className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-3 text-[12px] font-mono-x uppercase tracking-[0.22em]">
            <a href="#about" className="hover:italic">{t.nav.about}</a>
            <span className="opacity-30">·</span>
            <a href="#team" className="hover:italic">{t.nav.team}</a>
            <span className="opacity-30">·</span>
            <a href="#work" className="hover:italic">{t.nav.work}</a>
            <span className="opacity-30">·</span>
            <a href="#broadcasts" className="hover:italic">{t.nav.broadcasts}</a>
            <span className="opacity-30">·</span>
            <a href="#partners" className="hover:italic">{t.nav.partners}</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="rule-b">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-4 py-12 lg:grid-cols-12 lg:gap-10 lg:py-16">
          <div className="lg:col-span-8 lg:border-r lg:border-ink lg:pr-10">
            <div className="eyebrow mb-6 text-muted-foreground">{t.hero.kicker}</div>
            <h2 className="font-display text-[clamp(2.4rem,5.5vw,5.2rem)] leading-[0.95] tracking-[-0.02em]">
              {t.hero.title}
            </h2>
            <p className="mt-8 max-w-3xl font-display text-2xl italic leading-snug text-ink/80">
              {t.hero.standfirst}
            </p>
          </div>
          <aside className="lg:col-span-4">
            <div className="eyebrow mb-4 text-muted-foreground">Lede</div>
            <p className="text-[15px] leading-relaxed">{t.hero.lede}</p>
            <div className="mt-6 flex items-center gap-3 text-[11px] font-mono-x uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px flex-1 bg-ink" />
              <span>BR · UK</span>
              <span className="h-px flex-1 bg-ink" />
            </div>
          </aside>
        </div>
      </section>

      {/* Ticker */}
      <div className="overflow-hidden rule-b bg-ink text-paper">
        <div className="marquee-track flex whitespace-nowrap py-3 font-mono-x text-[12px] uppercase tracking-[0.28em]">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-8 pr-8">
              <span>■ Santa Catarina</span><span>■ Maranhão</span><span>■ London</span>
              <span>◆ Um Gringo no Maranhão</span><span>◆ Educational Films</span>
              <span>◆ Broadcast · Radio · Web</span><span>◆ Dom Bosco BBS</span>
              <span>◆ Skill Idiomas</span><span>◆ BBS Group Idiomas LTDA.</span>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <section id="about" className="rule-b">
        <div className="mx-auto max-w-[1400px] px-4 py-16">
          <div className="grid grid-cols-12 items-start gap-8">
            <div className="col-span-12 lg:col-span-3">
              <div className="eyebrow text-muted-foreground">{t.about.eyebrow}</div>
              <h3 className="font-display mt-3 text-4xl leading-tight tracking-tight">{t.about.heading}</h3>
              <div className="mt-6 h-1 w-16 bg-ink" />
            </div>
            <div className="col-span-12 grid gap-8 lg:col-span-9 lg:grid-cols-2">
              <p className="drop-cap text-[16px] leading-[1.65]">{t.about.p1}</p>
              <p className="text-[16px] leading-[1.65]">{t.about.p2}</p>
              <div className="lg:col-span-2 rule-t pt-8">
                <blockquote className="font-display text-3xl italic leading-snug md:text-4xl">
                  <span className="mr-2 align-top text-5xl leading-none">“</span>{t.about.pull}
                </blockquote>
              </div>
              <p className="lg:col-span-2 text-[16px] leading-[1.65] text-ink/80">{t.about.p3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="rule-b">
        <div className="mx-auto max-w-[1400px] px-4 py-16">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div className="eyebrow text-muted-foreground">{t.team.eyebrow}</div>
              <h3 className="font-display mt-3 text-5xl tracking-tight">{t.team.heading}</h3>
            </div>
            <div className="hidden md:block font-mono-x text-[11px] uppercase tracking-[0.22em] text-muted-foreground">02 · Editors</div>
          </div>
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
            {[
              { name: "Anthony Smith", num: "01", role: t.team.role1, bio: t.team.bio1, initials: "AS" },
              { name: "Melanie Newstead", num: "02", role: t.team.role2, bio: t.team.bio2, initials: "MN" },
            ].map((p, i) => (
              <article
                key={p.name}
                className={`group relative p-8 lg:p-10 border-t border-ink ${i === 0 ? "md:border-r" : ""}`}
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="font-mono-x text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Nº {p.num}</div>
                  <div className="flex h-24 w-24 items-center justify-center border border-ink font-display text-4xl">
                    {p.initials}
                  </div>
                </div>
                <h4 className="font-display mt-6 text-4xl leading-tight">{p.name}</h4>
                <p className="mt-2 text-[13px] font-mono-x uppercase tracking-[0.14em] text-muted-foreground">{p.role}</p>
                <p className="mt-5 text-[15.5px] leading-[1.7]">{p.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="rule-b bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-4 py-16">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div className="eyebrow opacity-70">{t.work.eyebrow}</div>
              <h3 className="font-display mt-3 text-5xl tracking-tight">{t.work.heading}</h3>
            </div>
            <div className="hidden md:block font-mono-x text-[11px] uppercase tracking-[0.22em] opacity-70">
              {String(t.work.items.length).padStart(2, "0")} · Titles
            </div>
          </div>
          <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
            {t.work.items.map((it, i) => (
              <article
                key={it.title}
                className={`p-8 border-t border-paper/30 ${i < t.work.items.length - 1 ? "md:border-r md:border-paper/30" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <span className="inline-block h-2 w-2 rounded-full bg-paper" />
                  <span className="font-mono-x text-[11px] uppercase tracking-[0.22em] opacity-80">{it.tag}</span>
                </div>
                <h4 className="font-display mt-6 text-3xl leading-tight">{it.title}</h4>
                <p className="mt-4 text-[15px] leading-[1.7] opacity-90">{it.body}</p>
                <div className="mt-8 font-display text-6xl italic opacity-30">0{i + 1}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Broadcasts */}
      <section id="broadcasts" className="rule-b">
        <div className="mx-auto max-w-[1400px] px-4 py-16">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div className="eyebrow text-muted-foreground">{t.broadcasts.eyebrow}</div>
              <h3 className="font-display mt-3 text-5xl tracking-tight">{t.broadcasts.heading}</h3>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink/70">{t.broadcasts.note}</p>
            </div>
            <div className="hidden md:block font-mono-x text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              YT · LIVE
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BROADCASTS.map((b, i) => (
              <article key={i} className="border border-ink">
                <div className="flex items-center justify-between border-b border-ink px-4 py-2 font-mono-x text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  <span>{b.tag}</span>
                  <span>16:9 · HD</span>
                </div>
                <div className="relative aspect-video w-full bg-ink">
                  {b.id ? (
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={`https://www.youtube-nocookie.com/embed/${b.id}`}
                      title={b.title}
                      loading="lazy"
                      allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-[repeating-linear-gradient(45deg,transparent_0_14px,rgba(255,255,255,0.06)_14px_15px)] text-paper">
                      <div className="text-center px-6">
                        <div className="font-display text-3xl italic">▶ YouTube</div>
                        <div className="mt-2 font-mono-x text-[10px] uppercase tracking-[0.22em] opacity-70">
                          {t.broadcasts.empty}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="px-4 py-3">
                  <h4 className="font-display text-xl leading-tight">{b.title}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Partners + TV placeholder */}
      <section id="partners" className="rule-b">
        <div className="mx-auto max-w-[1400px] px-4 py-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-5">
              <div className="eyebrow text-muted-foreground">{t.partners.eyebrow}</div>
              <h3 className="font-display mt-3 text-5xl tracking-tight">{t.partners.heading}</h3>
              <p className="mt-6 text-lg">{t.partners.note}</p>
              <div className="mt-8 grid grid-cols-2 gap-0 border border-ink">
                <div className="border-r border-ink">
                  <AlternatingLogo a={dombosco1} b={dombosco2} alt="Dom Bosco Imperatriz" />
                </div>
                <div>
                  <AlternatingLogo a={skilled1} b={skilled2} alt="Skill.Ed Learning Center" />
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <div className="eyebrow text-muted-foreground">Broadcast Partner</div>
              <div className="mt-3 relative flex aspect-[16/9] w-full items-center justify-center border border-ink bg-[repeating-linear-gradient(45deg,transparent_0_14px,rgba(0,0,0,0.05)_14px_15px)]">
                <div className="absolute left-3 top-3 font-mono-x text-[10px] uppercase tracking-[0.22em] text-muted-foreground">CH · TBD</div>
                <div className="absolute right-3 top-3 font-mono-x text-[10px] uppercase tracking-[0.22em] text-muted-foreground">16:9 · HD</div>
                <img
                  src="/logo.png"
                  alt="BBS TV Productions"
                  className="max-h-[75%] max-w-[75%] object-contain"
                />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono-x text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  <span>■ ■ ■</span><span>On Air</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closer */}
      <section className="rule-b">
        <div className="mx-auto max-w-[1200px] px-4 py-20 text-center">
          <div className="mx-auto h-1 w-16 bg-ink" />
          <p className="mx-auto mt-8 max-w-4xl font-display text-3xl leading-snug italic md:text-5xl">
            “{t.closer}”
          </p>
          <div className="mx-auto mt-8 h-1 w-16 bg-ink" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-paper">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 px-4 py-10 md:grid-cols-3">
          <div>
            <div className="font-display text-3xl">BBS TV Productions</div>
            <div className="mt-2 font-mono-x text-[11px] uppercase tracking-[0.22em] opacity-70">Est. · UK × BR</div>
          </div>
          <address className="not-italic font-mono-x text-[12px] uppercase tracking-[0.22em] opacity-80 md:text-center">
            {t.footer.address}
          </address>
          <div className="font-mono-x text-[12px] uppercase tracking-[0.22em] opacity-80 md:text-right">
            {t.footer.company}
          </div>
        </div>
      </footer>
    </div>
  );
}
