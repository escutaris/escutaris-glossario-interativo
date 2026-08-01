
import { GlossaryTerm } from '@/types/glossaryTypes';

export const specificTerms: GlossaryTerm[] = [
  {
    id: "estresse-ocupacional",
    title: "Estresse Ocupacional",
    description: "Reação física e emocional que ocorre quando as exigências do trabalho não correspondem às capacidades, recursos ou necessidades do trabalhador. É uma resposta adaptativa do organismo diante de situações percebidas como ameaçadoras. Os seus efeitos são sentidos quando estas situações ocorrem por longos períodos de tempo.",
    example: {
      title: "Exemplo Prático:",
      content: "Um profissional que constantemente precisa cumprir prazos impossíveis, trabalhar além do horário e ainda é criticado por resultados insuficientes pode desenvolver sintomas como irritabilidade, dificuldade de concentração, alterações no sono e problemas digestivos."
    },
    iconName: "icon-stress"
  },
  {
    id: "burnout",
    title: "Burnout",
    description: "Síndrome resultante do estresse crônico no local de trabalho que não foi gerenciado com sucesso. Caracteriza-se por três dimensões: sentimentos de exaustão, cinismo ou negativismo relacionado ao trabalho, e eficácia profissional reduzida. É um diagnóstico de exceção na psiquiatria ocupacional após afastar transtornos mentais comuns com quem divide sintomas similares a exemplo do Transtorno depressivo maior.",
    example: {
      title: "Exemplo Prático:",
      content: "Um profissional de saúde que trabalha em condições de sobrecarga constante, com recursos insuficientes e exposição a situações emocionalmente desgastantes, pode desenvolver exaustão física e emocional, despersonalização no atendimento aos pacientes e sensação de incompetência profissional."
    },
    aliases: ["esgotamento profissional", "CID-11 QD85"],
    iconName: "icon-burnout"
  },
  {
    id: "assedio-moral",
    title: "Assédio Moral",
    description: "Conduta abusiva (gesto, palavra, comportamento, atitude) que, por sua repetição ou sistematização, atenta contra a dignidade ou integridade psíquica ou física de uma pessoa, ameaçando seu emprego ou degradando o clima de trabalho.",
    example: {
      title: "Exemplo Prático:",
      content: "Um gestor que constantemente humilha um subordinado em público, atribui tarefas impossíveis de serem realizadas, isola-o dos colegas ou desqualifica seu trabalho sem justificativa técnica está praticando assédio moral."
    },
    iconName: "icon-harassment"
  },
  {
    id: "assedio-sexual",
    title: "Assédio Sexual",
    description: "Conduta de conotação sexual não desejada pela pessoa que a recebe, manifestada por palavras, gestos, contato físico ou insinuações, que constrange, humilha ou condiciona vantagens e permanência no emprego. Pode ocorrer com ou sem relação hierárquica e exige da organização canal de recebimento de denúncias, apuração e medidas de proteção a quem denuncia.",
    example: {
      title: "Exemplo Prático:",
      content: "Comentários repetidos sobre o corpo de uma colega, convites insistentes após recusa explícita e insinuação de que a renovação do contrato depende de aceitar um encontro configuram assédio sexual e demandam apuração formal."
    },
    iconName: "icon-harassment"
  },
  {
    id: "violencia-no-trabalho",
    title: "Violência no Trabalho por Terceiros",
    description: "Agressões verbais, ameaças, intimidações ou violência física praticadas por pessoas externas à organização, como clientes, usuários, pacientes, passageiros ou acompanhantes. É um fator de risco psicossocial próprio de atividades de atendimento ao público e exige medidas organizacionais, não apenas orientação individual.",
    example: {
      title: "Exemplo Prático:",
      content: "Atendentes de uma unidade de saúde recebem ofensas diárias em filas de espera. As medidas eficazes envolvem organização do fluxo, informação clara sobre tempo de atendimento, protocolo de acionamento de apoio e registro dos episódios, e não apenas treinamento de controle emocional."
    },
    iconName: "icon-harassment"
  },
  {
    id: "carga-mental",
    title: "Carga Mental",
    description: "A carga mental no trabalho é o resultado do esforço cognitivo e psíquico exigido do trabalhador para realizar suas atividades, envolvendo tanto o processamento de informações quanto os impactos emocionais e afetivos. Ela se divide em carga cognitiva (ligada à complexidade e volume das tarefas) e carga psíquica (relacionada às exigências emocionais e subjetivas do ambiente de trabalho).",
    example: {
      title: "Exemplo Prático:",
      content: "Baixa Carga Psíquica: Um operador de monitoramento assiste passivamente às câmeras de segurança durante horas, sem estímulos emocionais ou interação social, vivenciando um trabalho monótono e emocionalmente esvaziado.\nAlta Carga Psíquica: Uma enfermeira atua diariamente em situações de sofrimento humano intenso, toma decisões críticas sob pressão e lida com perdas constantes, o que exige forte envolvimento emocional e grande esforço para manter o equilíbrio mental."
    },
    iconName: "icon-mental-load"
  },
  {
    id: "sobrecarga-e-subcarga",
    title: "Sobrecarga e Subcarga",
    description: "A carga de trabalho tem duas pontas. Sobrecarga é a exigência que ultrapassa os recursos disponíveis, com efeitos conhecidos sobre sono, atenção e saúde. Subcarga é a exigência abaixo da capacidade da pessoa, com ociosidade prolongada, tarefas sem sentido aparente ou uso mínimo das competências, e também produz adoecimento, desmotivação e sensação de inutilidade. A condição desejável fica no meio da régua, e não no extremo mais baixo.",
    example: {
      title: "Exemplo Prático:",
      content: "Ao ler um resultado de carga mental, uma pontuação muito baixa em um setor não significa o melhor cenário possível. Pode indicar esvaziamento de função, o que pede investigação tanto quanto uma pontuação muito alta."
    },
    aliases: ["subcarga", "ociosidade"],
    iconName: "icon-mental-load"
  },
  {
    id: "demandas-trabalho",
    title: "Demandas de Trabalho",
    description: 'Quantidade, dificuldade e tempo para realizar as tarefas atribuídas. O problema não está no "muito trabalho", mas no desequilíbrio entre o que é exigido e os recursos disponíveis para dar conta, sejam eles cognitivos, emocionais ou organizacionais.',
    example: {
      title: "Exemplo Prático:",
      content: "Alta demanda: Um analista precisa entregar relatórios diários com alto grau de detalhamento, atende a múltiplas reuniões consecutivas e ainda responde mensagens fora do horário de expediente, com metas que não cabem no tempo disponível. Acumula atividades de 2 a 3 colegas que não estão mais no setor.\nBaixa demanda: Um técnico passa a maior parte do expediente sem tarefas atribuídas, com longos períodos de ociosidade. Ele sente que suas habilidades são desperdiçadas e se questiona sobre sua utilidade para a equipe.\nDemanda moderada ou adequada: nível de exigência compatível com as capacidades e recursos do trabalhador. Essa é a condição ideal, pois favorece engajamento, produtividade e saúde."
    },
    iconName: "icon-management"
  },
  {
    id: "falta-autonomia",
    title: "Falta de Autonomia",
    description: "Refere-se à limitação do trabalhador em tomar decisões sobre como, quando e com que meios realizar suas atividades, reduzindo seu senso de controle e aumentando o risco de estresse.",
    example: {
      title: "Exemplo Prático:",
      content: "Um trabalhador experiente é obrigado a seguir um roteiro rígido e inflexível para realizar suas tarefas, sem permissão para adaptar processos ou tomar decisões básicas, mesmo quando sabe que existem formas mais eficientes e seguras de executar a atividade. Ele é visto como um simples executor de tarefas."
    },
    aliases: ["controle sobre o trabalho", "latitude decisória"],
    iconName: "icon-autonomy"
  },
  {
    id: "suporte-social",
    title: "Suporte Social no Trabalho",
    description: "Apoio prático e emocional disponível na chefia e entre colegas: orientação diante de dúvidas, ajuda em picos de demanda, escuta em situações difíceis e reconhecimento cotidiano. Funciona como amortecedor da exposição a demandas altas e costuma ser um dos fatores mais sensíveis à ação da liderança no curto prazo.",
    example: {
      title: "Exemplo Prático:",
      content: "Dois setores enfrentam o mesmo pico de demanda no fechamento do mês. No setor em que o coordenador reorganiza prioridades e assume parte das tarefas, o pico passa. No setor em que cada pessoa se vira sozinha, o pico deixa afastamentos."
    },
    aliases: ["apoio da chefia", "apoio dos colegas"],
    iconName: "icon-support"
  },
  {
    id: "justica-organizacional",
    title: "Justiça Organizacional",
    description: "Diz respeito à percepção de equidade nos processos, decisões e relações no ambiente de trabalho, sendo essencial para o engajamento e o bem-estar dos colaboradores.",
    example: {
      title: "Exemplo Prático:",
      content: "Dois funcionários com o mesmo cargo e desempenho recebem avaliações diferentes: um é promovido por ter proximidade com a chefia, enquanto o outro não recebe reconhecimento, gerando sentimento de injustiça e desvalorização."
    },
    iconName: "icon-balance"
  },
  {
    id: "esforco-recompensa",
    title: "Desequilíbrio Esforço-Recompensa",
    description: "Situação em que o esforço investido no trabalho não encontra contrapartida proporcional em salário, estabilidade, perspectiva de carreira, estima ou reconhecimento. O modelo, formulado por Johannes Siegrist, associa esse desequilíbrio persistente a maior risco cardiovascular e de transtornos mentais comuns, sobretudo quando combinado a comprometimento excessivo com o trabalho.",
    example: {
      title: "Exemplo Prático:",
      content: "Uma equipe assume por dois anos as atribuições de um setor extinto, sem revisão de cargo, sem adicional e sem previsão de recomposição do quadro. O esforço subiu, a recompensa não acompanhou, e o desgaste aparece nos indicadores de saúde e de rotatividade."
    },
    aliases: ["ERI", "Siegrist"],
    iconName: "icon-balance"
  },
  {
    id: "reconhecimento",
    title: "Reconhecimento no Trabalho",
    description: "Retorno concreto sobre a contribuição de uma pessoa ou equipe, por meio de feedback consistente, visibilidade do trabalho realizado, oportunidades de desenvolvimento e coerência entre o que se cobra e o que se valoriza. Não se resume a premiação ou elogio pontual, e sustenta sentido no trabalho.",
    iconName: "icon-support"
  },
  {
    id: "organizacao-trabalho",
    title: "Organização do Trabalho",
    description: "Envolve a forma como as tarefas, responsabilidades e fluxos de trabalho são estruturados, podendo gerar sobrecarga, ineficiência ou conflitos quando mal planejada.",
    example: {
      title: "Exemplo Prático:",
      content: "Em uma equipe, os prazos são sempre mal planejados, faltam recursos para executar as tarefas, as demandas chegam de forma desordenada e as prioridades mudam constantemente sem explicação, o que causa sobrecarga e frustração."
    },
    iconName: "icon-organization"
  },
  {
    id: "ambiguidade-papeis",
    title: "Ambiguidade de Papéis",
    description: "Ocorre quando há falta de clareza sobre as atribuições, responsabilidades e expectativas relacionadas ao cargo, gerando insegurança e ansiedade.",
    example: {
      title: "Exemplo Prático:",
      content: "Um colaborador assume uma nova função sem receber orientação clara sobre suas responsabilidades e metas. Ele não sabe quem deve reportar suas ações, nem quais tarefas são prioridade, o que gera insegurança e ansiedade diária."
    },
    iconName: "icon-management"
  },
  {
    id: "conflito-papeis",
    title: "Conflito de Papéis",
    description: "Surge quando há exigências contraditórias ou incompatíveis entre as funções atribuídas ao trabalhador, dificultando o cumprimento das tarefas e comprometendo a saúde mental.",
    example: {
      title: "Exemplo Prático:",
      content: "Um coordenador é cobrado para manter a equipe motivada e acolhedora, mas ao mesmo tempo recebe ordens da direção para cobrar metas inatingíveis com rigor, sendo pressionado a adotar uma postura contraditória."
    },
    iconName: "icon-stress"
  },
  {
    id: "gestao-da-mudanca",
    title: "Previsibilidade e Gestão da Mudança",
    description: "Grau em que as pessoas recebem informação suficiente e a tempo sobre mudanças que afetam seu trabalho, como reestruturações, troca de sistemas, revisão de metas ou alteração de escalas. Mudança comunicada com antecedência e com espaço para dúvidas reduz insegurança; mudança anunciada por rumor produz o efeito oposto.",
    example: {
      title: "Exemplo Prático:",
      content: "Uma empresa anuncia a fusão de dois setores na véspera da implantação. As equipes passam semanas sem saber quem responde pelo quê, e o desgaste aparece antes mesmo de qualquer efeito real da mudança."
    },
    aliases: ["comunicação de mudanças"],
    iconName: "icon-organization"
  },
  {
    id: "tempo-de-trabalho",
    title: "Tempo de Trabalho e Direito à Desconexão",
    description: "Conjunto de aspectos ligados a jornada, escalas, turnos, pausas, trabalho noturno, sobreaviso e disponibilidade fora do expediente. A possibilidade de se desconectar do trabalho no período de descanso sustenta a recuperação física e mental, e sua ausência mantém o organismo em estado de alerta prolongado.",
    example: {
      title: "Exemplo Prático:",
      content: "Uma equipe recebe mensagens de demanda em grupo de aplicativo às 22h e nos fins de semana, com expectativa implícita de resposta imediata. O expediente termina no papel e continua na prática, o que impede a recuperação entre jornadas."
    },
    aliases: ["desconexão", "jornada", "teletrabalho"],
    iconName: "icon-organization"
  },
  {
    id: "trabalho-emocional",
    title: "Trabalho Emocional",
    description: "Esforço exigido para gerenciar as próprias emoções conforme o que a função espera, como manter cordialidade diante de hostilidade, sustentar entusiasmo em atendimento comercial ou conter reações em situações de sofrimento. Quando essa exigência é constante e não reconhecida, torna-se fonte relevante de desgaste.",
    example: {
      title: "Exemplo Prático:",
      content: "Profissionais de atendimento a famílias em situação de perda precisam sustentar acolhimento durante todo o turno. Sem pausas reais, supervisão e espaço de elaboração, o custo aparece em exaustão e afastamentos."
    },
    iconName: "icon-mental-load"
  },
  {
    id: "sofrimento-moral",
    title: "Sofrimento Moral",
    description: "Angústia que surge quando a pessoa sabe qual seria a conduta correta, mas o contexto de trabalho impede que ela aja de acordo com seus valores profissionais, por falta de recursos, imposição de metas ou ordens conflitantes. Frequente em saúde, assistência social, educação e segurança, e distinto do estresse por volume de tarefas.",
    example: {
      title: "Exemplo Prático:",
      content: "Uma equipe de saúde precisa decidir a quem oferecer um recurso escasso, sabendo que a decisão deixará alguém sem atendimento adequado. A dor não vem da quantidade de trabalho, e sim do conflito com aquilo que a profissão considera certo."
    },
    aliases: ["moral injury", "dano moral ocupacional"],
    iconName: "icon-stress"
  },
  {
    id: "absenteismo-presenteismo",
    title: "Absenteísmo e Presenteísmo",
    description: "Absenteísmo é a ausência ao trabalho, por afastamento, falta ou atraso. Presenteísmo é a presença física sem condições plenas de desempenho, com dor, sofrimento psíquico ou exaustão. Os dois indicadores caminham juntos na leitura de riscos psicossociais, e o presenteísmo costuma anteceder o afastamento.",
    example: {
      title: "Exemplo Prático:",
      content: "Um setor apresenta poucos afastamentos e queda consistente de produtividade, com aumento de erros e retrabalho. O indicador de ausência não acende, e ainda assim há sinal claro para investigar."
    },
    iconName: "icon-assessment"
  },
  {
    id: "rotatividade",
    title: "Rotatividade (Turnover)",
    description: "Movimentação de entrada e saída de pessoas em um período. Quando concentrada em setores ou lideranças específicas, funciona como indicador indireto de fatores psicossociais, sobretudo se acompanhada de pedidos de demissão voluntários e de transferências solicitadas.",
    aliases: ["turnover"],
    iconName: "icon-assessment"
  }
];
