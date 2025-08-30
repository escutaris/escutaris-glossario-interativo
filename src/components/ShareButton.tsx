
import React from 'react';
import { Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ShareButton = () => {
  const { toast } = useToast();

  const handleShare = async () => {
    // Obter o URL atual da página
    const currentUrl = window.location.href;

    try {
      // Verificar se a API de compartilhamento do navegador está disponível
      if (navigator.share) {
        await navigator.share({
          title: 'Glossário Interativo de Fatores Psicossociais',
          text: 'Confira este glossário interativo sobre fatores psicossociais para profissionais de SST!',
          url: currentUrl,
        });
        toast({
          title: "Compartilhado com sucesso",
          description: "Obrigado por compartilhar nosso conteúdo!",
          duration: 3000,
        });
      } else {
        // Fallback para copiar o link para a área de transferência
        await navigator.clipboard.writeText(currentUrl);
        toast({
          title: "Link copiado!",
          description: "O link foi copiado para sua área de transferência.",
          duration: 3000,
        });
      }
    } catch (error) {
      console.error('Erro ao compartilhar:', error);
      toast({
        title: "Erro ao compartilhar",
        description: "Não foi possível compartilhar o conteúdo. Tente novamente.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={handleShare}
      className="ml-2"
      aria-label="Compartilhar glossário"
    >
      <Share size={18} className="mr-1" />
      Compartilhar
    </Button>
  );
};

export default ShareButton;
