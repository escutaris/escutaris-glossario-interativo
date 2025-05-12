import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const IntroSection = () => {
  return <section className="py-6 md:py-10 animate-fade-in">
      <div className="container mx-auto px-4">
        <Card className="bg-white shadow-custom">
          <CardHeader>
            <CardTitle className="text-primary-dark text-2xl md:text-3xl border-b-2 border-primary pb-2">
              Introdução
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-textDark mb-4 text-base md:text-lg">
              Este glossário foi desenvolvido para auxiliar profissionais de Segurança e Saúde no Trabalho (SST) na compreensão e aplicação dos conceitos relacionados aos fatores psicossociais no ambiente laboral, conforme exigido pela atualização da NR-1.
            </p>
            <p className="text-textDark mb-4 text-base md:text-lg">A Portaria MTE nº 1.419/2024 alterou a NR-1 e determina que, a partir de 26 de maio de 2025, todas as empresas brasileiras incluam os riscos psicossociais no PGR - Programa de Gerenciamento de Riscos (antigo PPRA – Programa de Prevenção de Riscos Ambientais). Este material visa facilitar o entendimento dos principais termos técnicos nesta área, contribuindo para uma implementação eficaz das medidas de prevenção e controle.</p>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default IntroSection;