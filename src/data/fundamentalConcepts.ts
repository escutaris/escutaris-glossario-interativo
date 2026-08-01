
import { GlossaryTerm } from '@/types/glossaryTypes';

export const fundamentalConcepts: GlossaryTerm[] = [
  {
    id: "fatores-psicossociais",
    title: "Fatores Psicossociais",
    description: "Aspectos que definem a interação subjetiva entre o trabalhador e seu trabalho, os quais interferem na vivência de bem-estar no trabalho e também nos processos de descompensações na saúde, seja mental ou física. Podem ser sistematizados em dois grupos principais: organização e gestão do trabalho e interações socioprofissionais.",
    example: {
      title: "Exemplo Prático:",
      content: "Um ambiente de trabalho com comunicação clara, suporte da liderança e carga de trabalho adequada promove fatores psicossociais positivos. Por outro lado, pressão excessiva por resultados, falta de autonomia e conflitos interpessoais representam fatores psicossociais negativos."
    },
    aliases: ["FPRT", "fatores psicossociais relacionados ao trabalho"],
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
    aliases: ["FRPRT", "fatores de risco psicossocial"],
    iconName: "icon-burnout"
  },
  {
    id: "perigo-e-risco",
    title: "Perigo e Risco: a diferença que organiza o trabalho técnico",
    description: "Perigo é a fonte com potencial de causar dano, por exemplo uma escala de plantões sem previsibilidade. Risco é a combinação entre a probabilidade de esse dano acontecer e a gravidade das consequências. A distinção sustenta todo o Gerenciamento de Riscos Ocupacionais: identifica-se o perigo, avalia-se o risco e priorizam-se as medidas.",
    example: {
      title: "Exemplo Prático:",
      content: "Numa central de atendimento, o perigo é a exposição diária a clientes hostis sem suporte imediato do supervisor. O risco é avaliado considerando quantas pessoas estão expostas, com que frequência e qual a gravidade esperada, o que orienta se a medida entra como prioridade alta ou moderada no plano."
    },
    iconName: "icon-management"
  },
  {
    id: "gerenciamento-riscos-ocupacionais",
    title: "Gerenciamento de Riscos Ocupacionais (GRO)",
    description: "Processo que inclui a identificação de perigos, avaliação de riscos, estabelecimento de medidas de prevenção e controle, e monitoramento contínuo. A NR-1 passou a incluir expressamente os fatores de riscos psicossociais relacionados ao trabalho neste processo.",
    example: {
      title: "Exemplo Prático:",
      content: "Uma empresa que implementa o GRO deve identificar fatores como pressão por prazos, conflitos entre equipes e sobrecarga de trabalho, avaliar seus impactos, implementar medidas como redistribuição de tarefas e treinamento em gestão de conflitos, e monitorar a eficácia dessas ações."
    },
    aliases: ["GRO"],
    iconName: "icon-management"
  },
  {
    id: "seguranca-psicologica",
    title: "Segurança Psicológica",
    description: "Percepção compartilhada por uma equipe de que é seguro assumir riscos interpessoais: perguntar, discordar, pedir ajuda, apontar um erro ou trazer uma má notícia sem sofrer constrangimento ou retaliação. É um recurso do ambiente, não um traço individual, e por isso pode ser medido por setor e desenvolvido pela liderança. Conceito formulado por Amy Edmondson.",
    example: {
      title: "Exemplo Prático:",
      content: "Numa equipe com boa segurança psicológica, um técnico interrompe um procedimento ao perceber uma inconsistência e é agradecido por isso. Numa equipe com segurança psicológica baixa, a mesma pessoa segue em frente calada, e a falha só aparece quando já virou incidente."
    },
    aliases: ["Edmondson", "psychological safety"],
    iconName: "icon-support"
  },
  {
    id: "demandas-e-recursos",
    title: "Demandas e Recursos do Trabalho",
    description: "Modelo que organiza o ambiente de trabalho em dois conjuntos. Demandas são as exigências que consomem energia, como volume, prazo, esforço emocional e responsabilidade. Recursos são as condições que sustentam o desempenho e protegem a saúde, como autonomia, apoio da chefia, clareza de papéis, reconhecimento e ferramentas adequadas. O adoecimento se torna mais provável quando as demandas crescem sem que os recursos acompanhem.",
    example: {
      title: "Exemplo Prático:",
      content: "Duas equipes têm o mesmo volume de atendimentos. A primeira conta com escala previsível, supervisor acessível e pausas respeitadas. A segunda não conta com nenhum desses recursos. A demanda é idêntica, o risco psicossocial não é."
    },
    aliases: ["JD-R", "modelo demanda-recurso"],
    iconName: "icon-balance"
  },
  {
    id: "fatores-de-protecao",
    title: "Fatores de Proteção",
    description: "Condições organizacionais que reduzem a probabilidade de adoecimento e sustentam o desempenho ao longo do tempo: clareza sobre o que se espera de cada pessoa, previsibilidade das mudanças, apoio efetivo da liderança, participação nas decisões que afetam o próprio trabalho, reconhecimento proporcional ao esforço e canais confiáveis para tratar conflitos. Aparecem no diagnóstico com a mesma importância dos fatores de risco, porque indicam o que já funciona e pode ser ampliado.",
    example: {
      title: "Exemplo Prático:",
      content: "Um setor com indicadores gerais medianos apresenta apoio entre colegas muito acima da média da organização. Essa força vira ponto de partida do plano: o que sustenta esse apoio pode ser nomeado, reconhecido e estendido a outras áreas."
    },
    iconName: "icon-support"
  },
  {
    id: "consequencia",
    title: "Consequência (Doença ou Agravo Psicossocial)",
    description: "Dano concreto à saúde do trabalhador, resultante da exposição a fatores psicossociais não controlados. Exemplos: estresse crônico, depressão, síndrome de burnout, transtornos relacionados ao estresse. A avaliação diagnóstica de qualquer quadro clínico é ato médico e não se confunde com a identificação organizacional dos fatores de risco.",
    iconName: "icon-stress"
  },
  {
    id: "diagnostico-organizacional",
    title: "Diagnóstico Organizacional de Fatores Psicossociais",
    description: "Levantamento estruturado que descreve como os fatores psicossociais se distribuem na organização, por setor, função ou unidade, combinando instrumentos validados, indicadores internos e escuta qualificada. Produz o retrato que sustenta decisões e alimenta o inventário de riscos. Não é diagnóstico clínico e não substitui avaliação individual de saúde.",
    example: {
      title: "Exemplo Prático:",
      content: "O resultado mostra que a organização vai bem em clareza de papéis, e que um setor específico concentra demanda alta com apoio baixo. A leitura por setor é o que transforma um número geral em decisão possível."
    },
    iconName: "icon-assessment"
  }
];
