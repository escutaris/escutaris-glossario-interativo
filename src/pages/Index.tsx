
import React from 'react';
import GlossaryHeader from '@/components/GlossaryHeader';
import IntroSection from '@/components/IntroSection';
import GlossarySection from '@/components/GlossarySection';
import GlossaryFooter from '@/components/GlossaryFooter';

const Index = () => {
  // Data for the glossary sections
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
    }
  ];

  const specificTerms = [
    {
      id: "estresse-ocupacional",
      title: "Estresse Ocupacional",
      description: "Reação física e emocional que ocorre quando as exigências do trabalho não correspondem às capacidades, recursos ou necessidades do trabalhador. É uma resposta adaptativa do organismo diante de situações percebidas como ameaçadoras.",
      example: {
        title: "Exemplo Prático:",
        content: "Um profissional que constantemente precisa cumprir prazos impossíveis, trabalhar além do horário e ainda é criticado por resultados insuficientes pode desenvolver sintomas como irritabilidade, dificuldade de concentração, alterações no sono e problemas digestivos."
      },
      iconName: "icon-stress"
    },
    {
      id: "burnout",
      title: "Burnout",
      description: "Síndrome resultante do estresse crônico no local de trabalho que não foi gerenciado com sucesso. Caracteriza-se por três dimensões: sentimentos de exaustão, cinismo ou negativismo relacionado ao trabalho, e eficácia profissional reduzida.",
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
      id: "analise-ergonomica",
      title: "Análise Ergonômica do Trabalho (AET)",
      description: "Metodologia que visa compreender o trabalho real (e não apenas o prescrito) e suas condições de realização, incluindo aspectos físicos, cognitivos, organizacionais e psicossociais.",
      example: {
        title: "Exemplo Prático:",
        content: "Uma AET pode revelar que, embora o procedimento formal (trabalho prescrito) estabeleça determinados passos para uma tarefa, na prática (trabalho real) os trabalhadores desenvolvem estratégias diferentes para lidar com variabilidades e imprevistos, o que pode gerar sobrecarga mental."
      },
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
