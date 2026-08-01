
import { GlossaryTerm } from '@/types/glossaryTypes';

export const legalAspects: GlossaryTerm[] = [
  {
    id: "nr1-atualizacao",
    title: "NR-1 e os Fatores de Risco Psicossociais",
    description: "Norma Regulamentadora que estabelece as disposições gerais e o campo de aplicação de todas as NRs relativas à segurança e saúde no trabalho. A Portaria MTE nº 1.419/2024 alterou o capítulo 1.5 e incluiu expressamente os fatores de riscos psicossociais relacionados ao trabalho no Gerenciamento de Riscos Ocupacionais. A Portaria MTE nº 765/2025 estabeleceu um período de atuação educativa e orientativa da fiscalização, encerrado em 25 de maio de 2026. Desde 26 de maio de 2026 a fiscalização é punitiva, com emissão de autos de infração.",
    example: {
      title: "Exemplo Prático:",
      content: "Toda empresa que possua empregados, independentemente do porte, precisa identificar e avaliar os fatores de risco psicossociais presentes em seus ambientes de trabalho, registrar o resultado no inventário de riscos e manter plano de ação com medidas de prevenção e controle, com prazos, responsáveis e acompanhamento."
    },
    aliases: ["NR-1", "NR1", "Portaria 1.419/2024", "Portaria 765/2025"],
    iconName: "icon-legal"
  },
  {
    id: "pgr",
    title: "Programa de Gerenciamento de Riscos (PGR)",
    description: "Documento que reúne o inventário de riscos ocupacionais e o plano de ação com as respectivas medidas de prevenção e controle. Com a atualização da NR-1, contempla também os riscos psicossociais, que passam a ser tratados com o mesmo rigor metodológico aplicado aos demais riscos.",
    example: {
      title: "Exemplo Prático:",
      content: "Um PGR completo contempla, além dos riscos físicos, químicos, biológicos e ergonômicos, fatores como sobrecarga, falta de autonomia, conflitos e assédio, com medidas específicas, prazos definidos, responsáveis nomeados e critérios de verificação de eficácia."
    },
    aliases: ["PGR", "inventário de riscos", "plano de ação"],
    iconName: "icon-pgr"
  },
  {
    id: "nr-28",
    title: "NR-28 – Fiscalização e Penalidades",
    description: "Norma que define como se dá a fiscalização do cumprimento das Normas Regulamentadoras e estabelece a gradação das multas conforme a infração cometida e o porte da empresa. É a norma pela qual se aplicam as penalidades relacionadas ao descumprimento das obrigações da NR-1, inclusive quanto aos fatores psicossociais.",
    aliases: ["NR-28", "multa", "autuação"],
    iconName: "icon-legal"
  },
  {
    id: "nr-17",
    title: "NR-17 – Ergonomia",
    description: "Define as diretrizes para adaptar as condições de trabalho às características psicofisiológicas dos trabalhadores, visando conforto, segurança, saúde e desempenho eficiente. Inclui aspectos relacionados à organização do trabalho, mobiliário, levantamento e transporte de cargas, uso de máquinas, ferramentas e condições ambientais. A atualização de 2023 reforçou a necessidade de considerar fatores psicossociais nas avaliações ergonômicas.",
    example: {
      title: "Exemplo Prático:",
      content: "Uma análise ergonômica do trabalho deve avaliar não apenas aspectos físicos, como postura e mobiliário, mas também a carga mental, o ritmo de trabalho, as pausas e a autonomia do trabalhador na execução das tarefas."
    },
    aliases: ["NR-17", "ergonomia"],
    iconName: "icon-ergonomics"
  },
  {
    id: "nr-07",
    title: "NR-7 – PCMSO",
    description: "Norma que institui o Programa de Controle Médico de Saúde Ocupacional, sob responsabilidade de médico do trabalho, com foco na vigilância da saúde dos trabalhadores. Os achados do gerenciamento de riscos, inclusive os psicossociais, orientam o planejamento do PCMSO, e os dados de saúde coletados no programa ajudam a verificar a eficácia das medidas adotadas.",
    aliases: ["NR-7", "PCMSO", "exame ocupacional"],
    iconName: "icon-legal"
  },
  {
    id: "lei-14457",
    title: "Lei nº 14.457/2022 – CIPA e Prevenção do Assédio",
    description: "Alterou a denominação e as atribuições da CIPA, que passou a ser Comissão Interna de Prevenção de Acidentes e de Assédio, e estabeleceu medidas obrigatórias de prevenção e combate ao assédio sexual e demais formas de violência no trabalho, entre elas canal de recebimento de denúncias, procedimentos de apuração e ações de capacitação periódica.",
    aliases: ["CIPA", "CIPA-A", "Lei 14.457"],
    iconName: "icon-legal"
  },
  {
    id: "lei-14831",
    title: "Lei nº 14.831/2024 – Certificado Empresa Promotora da Saúde Mental",
    description: "Instituiu certificação voluntária concedida a empresas que adotam programas consistentes de promoção da saúde mental, incluindo ações de prevenção, capacitação de lideranças, canais de apoio e transparência sobre as práticas adotadas. Funciona como reconhecimento público, e não substitui as obrigações previstas nas Normas Regulamentadoras.",
    aliases: ["Lei 14.831", "certificado saúde mental"],
    iconName: "icon-legal"
  },
  {
    id: "cat-ntep",
    title: "CAT e Nexo Técnico Epidemiológico (NTEP)",
    description: "A Comunicação de Acidente de Trabalho registra acidentes e doenças relacionadas ao trabalho, incluindo adoecimento mental. O Nexo Técnico Epidemiológico Previdenciário associa determinada doença à atividade econômica da empresa a partir de dados estatísticos, o que pode levar ao reconhecimento da natureza ocupacional do afastamento e a repercussões previdenciárias e trabalhistas.",
    aliases: ["CAT", "NTEP", "B91", "nexo causal"],
    iconName: "icon-legal"
  },
  {
    id: "lgpd-dados-saude",
    title: "LGPD e Dados de Saúde na Avaliação Psicossocial",
    description: "A Lei Geral de Proteção de Dados classifica informações de saúde como dado pessoal sensível, com regras próprias de tratamento. Em avaliações psicossociais, isso orienta decisões práticas: coletar apenas o necessário, informar com clareza a finalidade, preservar o anonimato das respostas, definir quem tem acesso ao quê e estabelecer prazo de guarda dos dados.",
    example: {
      title: "Exemplo Prático:",
      content: "O relatório entregue à direção apresenta resultados por setor e por dimensão. Respostas individuais não são compartilhadas com gestores, e grupos pequenos demais para preservar o anonimato são agrupados antes da análise."
    },
    aliases: ["LGPD", "dados sensíveis", "privacidade"],
    iconName: "icon-legal"
  },
  {
    id: "iso-45003",
    title: "ISO 45003:2021 – Gestão de Riscos Psicossociais no Trabalho",
    description: "Norma internacional que fornece diretrizes para identificar, avaliar e controlar riscos psicossociais no ambiente de trabalho, promovendo a saúde psicológica e a segurança organizacional. Complementa sistemas de gestão baseados na ISO 45001 e oferece um repertório de medidas que dialoga bem com as exigências da NR-1.",
    example: {
      title: "Exemplo Prático:",
      content: "Uma empresa que adota a ISO 45003 estabelece processos para identificar fatores como carga de trabalho excessiva, falta de suporte social e assédio, avaliar seus impactos e implementar controles como redistribuição de tarefas, formação de lideranças e políticas de convivência."
    },
    aliases: ["ISO 45003", "ISO 45001"],
    iconName: "icon-international"
  }
];
