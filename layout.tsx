const services = [
  {
    number: "01",
    title: "Ambiente e clima",
    text: "Diagnósticos ambientais, adaptação climática, educação ambiental e soluções ajustadas aos territórios.",
  },
  {
    number: "02",
    title: "Água, saneamento e higiene",
    text: "Estudos WASH, planeamento participativo, qualidade da água e apoio à sustentabilidade dos serviços.",
  },
  {
    number: "03",
    title: "Gestão de projetos",
    text: "Conceção, planeamento, monitoria, avaliação, relatórios técnicos e coordenação de iniciativas de desenvolvimento.",
  },
  {
    number: "04",
    title: "Desenvolvimento organizacional",
    text: "Estratégias, planos operacionais, procedimentos, capacitação de equipas e melhoria da gestão institucional.",
  },
  {
    number: "05",
    title: "Pesquisa e análise de dados",
    text: "Inquéritos, diagnósticos, análise de dados, sistematização de experiências e produção de conhecimento aplicado.",
  },
  {
    number: "06",
    title: "Formação e facilitação",
    text: "Formações práticas, workshops participativos e facilitação de processos com comunidades e organizações.",
  },
];

const strengths = [
  "Conhecimento do contexto guineense",
  "Experiência de terreno e coordenação",
  "Abordagem participativa e inclusiva",
  "Soluções realistas e orientadas a resultados",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Página inicial">
          <span>Juvinal Silva</span>
          <small>Consultoria</small>
        </a>
        <nav aria-label="Navegação principal">
          <a className="active" href="#inicio">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre</a>
          <a href="#experiencia">Experiência</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="header-cta" href="#contacto">Vamos conversar <span>↗</span></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-content">
          <div className="service-tags" aria-label="Áreas principais">
            <span>Ambiente</span><i />
            <span>Organizações</span><i />
            <span>Projetos</span>
          </div>
          <p className="eyebrow">Consultoria ambiental e organizacional</p>
          <h1>Soluções que ligam território, pessoas e resultados</h1>
          <p className="hero-copy">
            Transformo desafios ambientais e institucionais em projetos viáveis,
            sustentáveis e bem geridos, com conhecimento do contexto e foco no impacto.
          </p>
          <p className="experience-badge"><strong>+6 anos</strong><span>de experiência prática</span></p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contacto">Falar sobre o seu projeto <span>→</span></a>
            <a className="text-link" href="#servicos">Conhecer os serviços <span>→</span></a>
          </div>
        </div>
        <div className="hero-visual" role="img" aria-label="Composição territorial inspirada na costa e nos mangais da Guiné-Bissau">
          <div className="contour contour-one" />
          <div className="contour contour-two" />
          <p>Guiné-Bissau · África Ocidental</p>
        </div>
      </section>

      <section className="intro section" id="servicos">
        <div className="section-label"><span>01</span> Como posso apoiar</div>
        <div className="section-heading">
          <h2>Competências que respondem a desafios reais</h2>
          <p>Serviços pensados para organizações, empresas, projetos de cooperação, instituições públicas e iniciativas comunitárias.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="card-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href="#contacto" aria-label={`Pedir informação sobre ${service.title}`}>Explorar serviço <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="sobre">
        <div className="about-panel">
          <div className="section-label light"><span>02</span> Quem está por detrás</div>
          <p className="about-kicker">Conhecimento técnico. Experiência de terreno. Visão estratégica.</p>
          <h2>Juvinal Silva Santos Júnior</h2>
          <p className="about-copy">
            Gestor de projetos e consultor com formação em Ciências do Mar e Ambiente,
            especialização em Gestão Ambiental e pós-graduação em Alterações Climáticas
            e Mitigação de Riscos. Atua nas áreas de WASH, sustentabilidade, pesquisa
            aplicada, desenvolvimento comunitário e fortalecimento organizacional.
          </p>
          <a className="button button-light" href="#experiencia">Conhecer a experiência <span>→</span></a>
        </div>
        <div className="strengths-panel">
          <p className="mini-title">O que diferencia esta abordagem</p>
          <div className="strength-list">
            {strengths.map((strength, index) => (
              <div key={strength}><span>0{index + 1}</span><p>{strength}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="experience section" id="experiencia">
        <div className="section-label"><span>03</span> Experiência aplicada</div>
        <div className="experience-grid">
          <div>
            <h2>Do diagnóstico à execução</h2>
            <p>Uma atuação que combina rigor técnico, coordenação de parceiros e proximidade com as comunidades.</p>
          </div>
          <div className="experience-list">
            <article><span>WASH</span><h3>Planeamento de água e saneamento</h3><p>Diagnósticos, inquéritos, qualidade da água, processos participativos e apoio à gestão sustentável de sistemas.</p></article>
            <article><span>AMBIENTE</span><h3>Clima e desenvolvimento territorial</h3><p>Investigação ambiental, adaptação climática, sustentabilidade e soluções construídas a partir do território.</p></article>
            <article><span>GESTÃO</span><h3>Projetos e organizações</h3><p>Planeamento, administração, monitoria, facilitação, documentação institucional e articulação multissetorial.</p></article>
          </div>
        </div>
      </section>

      <section className="process section">
        <div className="section-label"><span>04</span> Método de trabalho</div>
        <div className="process-grid">
          <h2>Um processo simples, participativo e orientado para a ação.</h2>
          <ol>
            <li><span>01</span><div><h3>Escutar e compreender</h3><p>Analisamos o desafio, os atores, o território e os resultados pretendidos.</p></div></li>
            <li><span>02</span><div><h3>Desenhar a solução</h3><p>Definimos uma abordagem realista, responsabilidades, recursos e indicadores.</p></div></li>
            <li><span>03</span><div><h3>Executar e acompanhar</h3><p>Transformamos o plano em ação com rigor, participação e aprendizagem contínua.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="contact section" id="contacto">
        <p className="eyebrow">Tem um desafio ou projeto em preparação?</p>
        <h2>Vamos transformar a sua ideia numa solução com impacto.</h2>
        <p>Disponível para consultorias, parcerias, estudos, formações e apoio técnico na Guiné-Bissau e noutros contextos.</p>
        <div className="contact-actions">
          <a className="button button-primary" href="mailto:juvinalsilvasantosjunior@gmail.com">Enviar e-mail <span>↗</span></a>
          <a className="contact-link" href="https://wa.me/245955448245?text=Ol%C3%A1%20Juvinal%2C%20gostaria%20de%20falar%20sobre%20um%20projeto." target="_blank" rel="noreferrer">WhatsApp <span>↗</span></a>
          <a className="contact-link" href="https://www.linkedin.com/in/juvinal-j%C3%BAnior/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
        </div>
        <p className="contact-meta">+245 955 448 245 · Bissau · Bolama · Trabalho remoto</p>
      </section>

      <footer>
        <div className="brand footer-brand"><span>Juvinal Silva</span><small>Consultoria ambiental e organizacional</small></div>
        <p>Estratégia, território e impacto.</p>
        <div><a href="#inicio">Voltar ao topo ↑</a></div>
      </footer>
    </main>
  );
}
