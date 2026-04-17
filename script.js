const projetos = [
  {
    id: 1,
    titulo: "Gestão de Rotinas Administrativas",
    descricao: "Viabilização de atividades da empresa, desde registros simples até operação de tecnologias complexas. Inclui portaria, refeitório e fluxo de ações no complexo produtivo."
  },
  {
    id: 2,
    titulo: "Controle de Inventário Geral",
    descricao: "Execução de inventários diário, mensal e anual. Garantia da representatividade física de ativos, peças, lubrificantes, defensivos, EPIs e sementes nos sistemas."
  },
  {
    id: 3,
    titulo: "Auditorias e Certificações",
    descricao: "Ações administrativas preventivas e corretivas para garantir manutenção/obtenção de certificados e resultados favoráveis em auditorias, sem ressalvas."
  }
];

const containerProjetos = document.getElementById('lista-projetos');

projetos.forEach(proj => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h3>${proj.titulo}</h3>
    <p>${proj.descricao}</p>
  `;
  containerProjetos.appendChild(card);
});
