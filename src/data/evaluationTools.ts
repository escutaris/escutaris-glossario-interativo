
import { GlossaryTerm } from '@/types/glossaryTypes';

export const evaluationTools: GlossaryTerm[] = [
  {
    id: "protocolo-avaliacao",
    title: "Protocolo de Avaliação dos Riscos Psicossociais no Trabalho",
    description: "Conjunto de procedimentos e ferramentas utilizados para identificar, avaliar e monitorar os fatores de riscos psicossociais no ambiente laboral, considerando aspectos da organização, condições e relações sociais de trabalho.",
    example: {
      title: "Exemplo Prático:",
      content: "Um protocolo pode incluir questionários validados, entrevistas com trabalhadores, observação das atividades e análise de indicadores como absenteísmo, rotatividade e afastamentos por transtornos mentais."
    },
    iconName: "icon-assessment"
  },
  {
    id: "hse-it",
    title: "HSE Management Standards Indicator Tool (HSE-IT)",
    description: "Questionário desenvolvido pelo Health and Safety Executive, do Reino Unido, com 35 itens que cobrem sete dimensões da organização do trabalho: demandas, controle, apoio da chefia, apoio dos colegas, relacionamentos, clareza de função e gestão da mudança. Gera média por dimensão e permite comparar setores entre si e com parâmetros de referência, o que o torna adequado ao inventário de riscos exigido pela NR-1.",
    example: {
      title: "Exemplo Prático:",
      content: "Uma organização aplica o HSE-IT e encontra clareza de função bem avaliada em toda a empresa, com demandas e apoio da chefia concentrando o desgaste em dois setores operacionais. O plano passa a tratar esses dois setores, e não a empresa inteira de forma genérica."
    },
    aliases: ["HSE", "Management Standards", "HSE-IT"],
    iconName: "icon-assessment"
  },
  {
    id: "escam",
    title: "ESCAM (Escala Subjetiva de Carga Mental de Trabalho)",
    description: "Instrumento de 20 itens organizado em cinco blocos: demandas cognitivas, características da tarefa, organização do tempo, ritmo de trabalho e consequências percebidas para a saúde. Mede a carga mental como ela é vivida por quem executa o trabalho. Sua leitura é de dupla ponta: valores muito altos indicam sobrecarga e valores muito baixos indicam subcarga, e nenhum dos extremos representa um bom resultado.",
    example: {
      title: "Exemplo Prático:",
      content: "Um setor administrativo apresenta demanda cognitiva alta combinada com pouco tempo para executar e pausas raras. Outro setor apresenta pontuação muito baixa em toda a escala, o que aponta esvaziamento de tarefas. Os dois cenários entram no plano, por caminhos diferentes."
    },
    aliases: ["carga mental", "ESCAM"],
    iconName: "icon-mental-load"
  },
  {
    id: "escala-seguranca-psicologica",
    title: "Escala de Segurança Psicológica",
    description: "Conjunto reduzido de itens, formulado por Amy Edmondson, que mede o quanto uma equipe considera seguro assumir riscos interpessoais, como admitir erro, pedir ajuda ou discordar. Por ser um fenômeno de equipe, a leitura é feita por grupo de trabalho, e não como média geral da organização.",
    example: {
      title: "Exemplo Prático:",
      content: "Duas equipes da mesma diretoria apresentam resultados opostos na escala. A diferença localiza a conversa na prática de cada liderança, em vez de produzir um diagnóstico difuso sobre a cultura da empresa."
    },
    aliases: ["Edmondson", "segurança psicológica"],
    iconName: "icon-support"
  },
  {
    id: "jcq-karasek",
    title: "Modelo Demanda-Controle (JCQ / Job Stress Scale)",
    description: "Modelo formulado por Robert Karasek que combina o nível de exigência do trabalho com o grau de controle que a pessoa tem sobre como executá-lo, com o apoio social incorporado em versões posteriores. A combinação define quadrantes, entre eles o trabalho de alta exigência, com demanda alta e controle baixo, associado ao maior risco à saúde. No Brasil circula em versão reduzida conhecida como Job Stress Scale.",
    example: {
      title: "Exemplo Prático:",
      content: "Dois cargos exigem ritmo intenso. No primeiro, a pessoa decide a ordem das tarefas e negocia prazos. No segundo, cumpre roteiro fixo sem margem de decisão. A demanda é semelhante, o risco associado é maior no segundo."
    },
    aliases: ["Karasek", "demanda-controle", "JCQ", "JSS"],
    iconName: "icon-balance"
  },
  {
    id: "eri-siegrist",
    title: "Escala Esforço-Recompensa (ERI)",
    description: "Instrumento baseado no modelo de Johannes Siegrist, que compara o esforço exigido pelo trabalho com as recompensas recebidas em salário, estima, estabilidade e perspectiva de carreira. Inclui uma escala de comprometimento excessivo, que capta a dificuldade de se desligar das demandas.",
    aliases: ["Siegrist", "effort-reward imbalance", "ERI"],
    iconName: "icon-balance"
  },
  {
    id: "copsoq",
    title: "COPSOQ (Copenhagen Psychosocial Questionnaire)",
    description: "Questionário de origem dinamarquesa, disponível em versões de diferentes extensões, que cobre amplo conjunto de dimensões psicossociais, incluindo exigências quantitativas e emocionais, influência no trabalho, sentido, previsibilidade, qualidade da liderança, conflitos e saúde percebida. Usado em pesquisa e em vigilância de saúde ocupacional em vários países.",
    aliases: ["COPSOQ", "ISTAS21"],
    iconName: "icon-assessment"
  },
  {
    id: "matriz-de-risco",
    title: "Matriz de Risco",
    description: "Ferramenta que cruza a probabilidade de ocorrência com a severidade das consequências para classificar cada risco identificado em níveis e ordenar prioridades. Aplicada aos fatores psicossociais, considera também quantas pessoas estão expostas e há quanto tempo, o que orienta o que entra primeiro no plano de ação.",
    example: {
      title: "Exemplo Prático:",
      content: "Um fator com severidade alta que atinge um setor inteiro há dois anos é priorizado à frente de um fator de severidade semelhante restrito a poucas pessoas e de aparecimento recente."
    },
    iconName: "icon-management"
  },
  {
    id: "amostragem-anonimato",
    title: "Amostragem, Anonimato e Corte Mínimo por Grupo",
    description: "Cuidados metodológicos que sustentam a confiabilidade e a segurança da coleta: taxa de resposta suficiente para representar cada área, participação voluntária, anonimato preservado e definição de um número mínimo de respondentes para que um grupo seja reportado separadamente. Setores muito pequenos são agrupados, de modo que ninguém seja identificável no resultado.",
    example: {
      title: "Exemplo Prático:",
      content: "Um setor com quatro pessoas não recebe recorte próprio no relatório. Seus dados compõem a leitura da diretoria à qual pertence, o que permite usar a informação sem expor quem respondeu."
    },
    aliases: ["taxa de resposta", "confidencialidade", "sigilo"],
    iconName: "icon-assessment"
  },
  {
    id: "aep",
    title: "Avaliação Ergonômica Preliminar (AEP)",
    description: "Metodologia inicial e exploratória que identifica indícios de inadequações ergonômicas nos postos de trabalho, com foco preventivo, orientando a necessidade de uma análise mais aprofundada (AET) se forem encontrados riscos relevantes.",
    example: {
      title: "Exemplo Prático:",
      content: "Uma AEP pode identificar que operadores de produção realizam movimentos repetitivos com o punho em flexão por mais de 4 horas diárias, sem pausas adequadas ou alternância de tarefas, sinalizando risco biomecânico e indicando a necessidade de aprofundamento por meio da AET."
    },
    aliases: ["AEP"],
    iconName: "icon-ergonomics"
  },
  {
    id: "analise-ergonomica",
    title: "Análise Ergonômica do Trabalho (AET)",
    description: "Metodologia que visa compreender o trabalho real (e não apenas o prescrito) e suas condições de realização, incluindo aspectos físicos, cognitivos, organizacionais e psicossociais.",
    example: {
      title: "Exemplo Prático:",
      content: "Uma AET pode revelar que, embora o procedimento formal (trabalho prescrito) estabeleça determinados passos para uma tarefa, na prática (trabalho real) os trabalhadores desenvolvem estratégias diferentes para lidar com variabilidades e imprevistos, o que pode gerar sobrecarga mental."
    },
    aliases: ["AET"],
    iconName: "icon-ergonomics"
  },
  {
    id: "inventario-riscos",
    title: "Inventário de Riscos Psicossociais",
    description: "Documento que descreve os perigos psicossociais identificados, suas avaliações de risco e medidas de controle previstas. Integra o PGR e precisa registrar a fonte da informação, a data da avaliação e a periodicidade de revisão.",
    iconName: "icon-inventory"
  },
  {
    id: "apr",
    title: "Avaliação Preliminar de Riscos (APR)",
    description: "Processo inicial de identificação dos fatores de risco, sem aprofundamento analítico, para priorizar intervenções.",
    aliases: ["APR"],
    iconName: "icon-assessment"
  },
  {
    id: "indicadores-saude",
    title: "Indicadores de Saúde Mental e Bem-Estar",
    description: "Dados já existentes na organização que ajudam a mapear sinais de riscos psicossociais, como afastamentos por transtornos mentais, tempo médio de afastamento, rotatividade, horas extras, registros de conflitos e resultados de pesquisas de clima. Combinados aos instrumentos aplicados, dão profundidade ao diagnóstico.",
    iconName: "icon-assessment"
  },
  {
    id: "entrevistas-individuais",
    title: "Entrevistas Individuais",
    description: "Técnica qualitativa para compreender a percepção de trabalhadores sobre o ambiente psicossocial, útil para explicar resultados quantitativos e revelar situações que o questionário não alcança.",
    iconName: "icon-individual"
  },
  {
    id: "grupos-focais",
    title: "Grupos Focais",
    description: "Discussões em grupo estruturadas para explorar aspectos psicossociais comuns e pontos críticos, e para construir com as equipes as medidas que têm chance real de funcionar no dia a dia.",
    iconName: "icon-support"
  },
  {
    id: "questionarios-padronizados",
    title: "Questionários Padronizados",
    description: "Instrumentos estruturados, com propriedades psicométricas conhecidas, que avaliam fatores psicossociais por meio de escalas definidas. Exemplos em uso no Brasil: HSE-IT, ESCAM, escalas de segurança psicológica, Job Stress Scale, ERI e COPSOQ.",
    iconName: "icon-assessment"
  },
  {
    id: "observacao-direta",
    title: "Observação Direta das Atividades",
    description: "Técnica em que o avaliador acompanha o trabalho para identificar fatores psicossociais no contexto real, observando ritmo, interrupções, condições de pausa e formas de cooperação entre as pessoas.",
    iconName: "icon-ergonomics"
  }
];
