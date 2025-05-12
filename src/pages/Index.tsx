
import React from 'react';
import GlossaryHeader from '@/components/GlossaryHeader';
import IntroSection from '@/components/IntroSection';
import GlossarySection from '@/components/GlossarySection';
import GlossaryFooter from '@/components/GlossaryFooter';

const Index = () => {
  const fundamentalConcepts = [
    {
      id: "fatores-psicossociais",
      title: "Fatores Psicossociais",
      description: "Aspectos que definem a interação subjetiva entre o trabalhador e seu trabalho, os quais interferem na vivência de bem-estar no trabalho e também nos processos de descompensações na saúde, seja mental ou física. Podem ser sistematizados em dois grupos principais: organização e gestão do trabalho e interações socioprofissionais.",
      example: {
        title: "Exemplo Prático:",
        content: "Um ambiente de trabalho com comunicação clara, suporte da liderança e carga de trabalho adequada promove fatores psicossociais positivos. Por outro lado, pressão excessiva por resultados, falta de autonomia e conflitos interpessoais representam fatores psicossociais negativos."
      },
      iconName: "icon-stress"
    },
    {
      id: "riscos-psicossociais",
      title: "Riscos Psicossociais",
      description: "Referem-se a condições de trabalho que podem afetar negativamente a saúde mental e emocional dos colaboradores. Estão relacionados à organização do trabalho e às interações interpessoais no ambiente laboral, podendo causar estresse, ansiedade, depressão e outros problemas de saúde mental nos trabalhadores.",
      example: {
        title: "Exemplo Prático:",
        content: "Metas excessivas e inatingíveis, jornadas extensas sem pausas adequadas, ausência de suporte da liderança, assédio moral, conflitos interpessoais constantes e falta de autonomia no trabalho são exemplos de riscos psicossociais."
      },
      iconName: "icon-burnout"
    },
    {
      id: "gerenciamento-riscos-ocupacionais",
      title: "Gerenciamento de Riscos Ocupacionais (GRO)",
      description: "Processo que inclui a identificação de perigos, avaliação de riscos, estabelecimento de medidas de prevenção e controle, e monitoramento contínuo. A NR-1 passou a incluir expressamente os fatores de riscos psicossociais relacionados ao trabalho neste processo.",
      example: {
        title: "Exemplo Prático:",
        content: "Uma empresa que implementa o GRO deve identificar fatores como pressão por prazos, conflitos entre equipes e sobrecarga de trabalho, avaliar seus impactos, implementar medidas como redistribuição de tarefas e treinamento em gestão de conflitos, e monitorar a eficácia dessas ações."
      },
      iconName: "icon-management"
    },
    {
      id: "consequencia",
      title: "Consequência (Doença ou Agravo Psicossocial)",
      description: "Dano concreto à saúde do trabalhador, resultante da exposição a fatores psicossociais não controlados. Exemplos: estresse crônico, depressão, síndrome de burnout, transtornos relacionados ao estresse.",
      iconName: "icon-stress"
    }
  ];

  const specificTerms = [
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
      id: "demandas-trabalho",
      title: "Demandas de Trabalho",
      description: "Quantidade, dificuldade e tempo para realizar as tarefas atribuídas. O problema não está no "muito trabalho", mas no desequilíbrio entre o que é exigido e os recursos disponíveis para dar conta — sejam eles cognitivos, emocionais ou organizacionais.",
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
      iconName: "icon-autonomy"
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
    }
  ];

  const evaluationTools = [
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
      id: "aep",
      title: "Avaliação Ergonômica Preliminar (AEP)",
      description: "Metodologia inicial e exploratória que identifica indícios de inadequações ergonômicas nos postos de trabalho, com foco preventivo, orientando a necessidade de uma análise mais aprofundada (AET) se forem encontrados riscos relevantes.",
      example: {
        title: "Exemplo Prático:",
        content: "Uma AEP pode identificar que operadores de produção realizam movimentos repetitivos com o punho em flexão por mais de 4 horas diárias, sem pausas adequadas ou alternância de tarefas, sinalizando risco biomecânico e indicando a necessidade de aprofundamento por meio da AET."
      },
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
      iconName: "icon-ergonomics"
    },
    {
      id: "inventario-riscos",
      title: "Inventário de Riscos Psicossociais",
      description: "Documento que descreve os perigos psicossociais identificados, suas avaliações de risco e medidas de controle previstas.",
      iconName: "icon-inventory"
    },
    {
      id: "apr",
      title: "Avaliação Preliminar de Riscos (APR)",
      description: "Processo inicial de identificação dos fatores de risco, sem aprofundamento analítico, para priorizar intervenções.",
      iconName: "icon-assessment"
    },
    {
      id: "indicadores-saude",
      title: "Indicadores de Saúde Mental e Bem-Estar",
      description: "Dados quantitativos (ex.: afastamentos por transtornos mentais, pesquisas de clima organizacional) usados para mapear sinais de riscos psicossociais.",
      iconName: "icon-assessment"
    },
    {
      id: "entrevistas-individuais",
      title: "Entrevistas Individuais",
      description: "Técnica qualitativa para entender percepções de trabalhadores sobre o ambiente psicossocial.",
      iconName: "icon-individual"
    },
    {
      id: "grupos-focais",
      title: "Grupos Focais",
      description: "Discussões em grupo estruturadas para explorar aspectos psicossociais comuns e pontos críticos.",
      iconName: "icon-support"
    },
    {
      id: "questionarios-padronizados",
      title: "Questionários Padronizados",
      description: "Instrumentos estruturados que avaliam riscos psicossociais com base em escalas específicas (ex.: HSE-IT, JCQ, COPSOQ, ISTAS21).",
      iconName: "icon-assessment"
    },
    {
      id: "observacao-direta",
      title: "Observação Direta das Atividades",
      description: "Técnica em que o avaliador acompanha o trabalho para identificar fatores psicossociais no contexto real.",
      iconName: "icon-ergonomics"
    }
  ];

  const legalAspects = [
    {
      id: "nr1-atualizacao",
      title: "NR-1 (Atualização 2024)",
      description: "Norma Regulamentadora que estabelece as disposições gerais e o campo de aplicação de todas as NRs relativas à segurança e saúde no trabalho. A atualização de 2024 incluiu expressamente os fatores de riscos psicossociais no Gerenciamento de Riscos Ocupacionais (GRO).",
      example: {
        title: "Exemplo Prático:",
        content: "A partir de 26 de maio de 2025, todas as empresas, independentemente do porte, deverão identificar e avaliar riscos psicossociais em seus ambientes de trabalho e, caso identificados, elaborar e implementar planos de ação com medidas preventivas e corretivas."
      },
      iconName: "icon-legal"
    },
    {
      id: "pgr",
      title: "Programa de Gerenciamento de Riscos (PGR)",
      description: "Documento que contém o inventário de riscos ocupacionais e suas respectivas medidas de prevenção e controle. Com a atualização da NR-1, deve incluir também os riscos psicossociais.",
      example: {
        title: "Exemplo Prático:",
        content: "Um PGR completo deve contemplar, além dos riscos físicos, químicos, biológicos e ergonômicos, os riscos psicossociais como sobrecarga de trabalho, falta de autonomia, conflitos interpessoais e assédio moral, estabelecendo medidas específicas para cada um deles."
      },
      iconName: "icon-pgr"
    },
    {
      id: "nr-17",
      title: "NR-17 – Norma Regulamentadora de Ergonomia",
      description: "Define as diretrizes para adaptar as condições de trabalho às características psicofisiológicas dos trabalhadores, visando conforto, segurança, saúde e desempenho eficiente. Inclui aspectos relacionados à organização do trabalho, mobiliário, levantamento e transporte de cargas, uso de máquinas, ferramentas e condições ambientais. A atualização de 2023 reforçou a necessidade de considerar fatores psicossociais nas avaliações ergonômicas.",
      example: {
        title: "Exemplo Prático:",
        content: "Uma análise ergonômica do trabalho deve avaliar não apenas aspectos físicos (como postura e mobiliário), mas também a carga mental, o ritmo de trabalho, pausas e a autonomia do trabalhador na execução das tarefas."
      },
      iconName: "icon-ergonomics"
    },
    {
      id: "iso-45003",
      title: "ISO 45003:2021 – Gestão de Riscos Psicossociais no Trabalho",
      description: "Norma internacional que fornece diretrizes para identificar, avaliar e controlar riscos psicossociais no ambiente de trabalho, promovendo a saúde psicológica e a segurança organizacional. Complementa sistemas de gestão de saúde e segurança ocupacional baseados na ISO 45001, focando especificamente na prevenção de danos à saúde mental.",
      example: {
        title: "Exemplo Prático:",
        content: "Uma empresa que implementa a ISO 45003 estabelece processos para identificar fatores como carga de trabalho excessiva, falta de suporte social e assédio, avaliar seus impactos, e implementar controles como redistribuição de tarefas, programas de apoio e políticas anti-assédio."
      },
      iconName: "icon-international"
    }
  ];

  return (
    <div className="min-h-screen bg-bgLight flex flex-col">
      <GlossaryHeader />
      
      <main className="flex-grow">
        <IntroSection />
        <GlossarySection title="Conceitos Fundamentais" terms={fundamentalConcepts} />
        <GlossarySection title="Termos Específicos" terms={specificTerms} />
        <GlossarySection title="Instrumentos de Avaliação" terms={evaluationTools} />
        <GlossarySection title="Aspectos Legais e Normativos" terms={legalAspects} />
      </main>
      
      <GlossaryFooter />
    </div>
  );
};

export default Index;

