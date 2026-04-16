const projetos = [
  {
    titulo: "Gestão de Rotinas Administrativas",
    descricao: "Viabilização de atividades da empresa, desde registros simples até operação de tecnologias complexas. Inclui portaria, refeitório e fluxo de ações no complexo produtivo.",
    link: "#"
  },
  {
    titulo: "Controle de Inventário Geral",
    descricao: "Execução de inventários diário, mensal e anual. Garantia da representatividade física de ativos, peças, lubrificantes, defensivos, EPIs e sementes nos sistemas.",
    link: "#"
  },
  {
    titulo: "Auditorias e Certificações",
    descricao: "Ações administrativas preventivas e corretivas para garantir manutenção/obtenção de certificados e resultados favoráveis em auditorias, sem ressalvas.",
    link: "#"
  }
];

const container = document.getElementById("lista-projetos");

projetos.forEach(proj => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <h3>${proj.titulo}</h3>
    <p>${proj.descricao}</p>
    ${proj.link !== "#" ? `<a href="${proj.link}" target="_blank">Ver mais</a>` : ""}
  `;
  container.appendChild(card);
});