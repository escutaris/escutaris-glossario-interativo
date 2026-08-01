
import React from 'react';
import { Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ShareButton = () => {
  const { toast } = useToast();

  const handleShare = async () => {
    const currentUrl = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Glossário de fatores psicossociais no trabalho',
          text: 'Glossário técnico da Escutaris sobre fatores psicossociais e NR-1.',
          url: currentUrl,
        });
        return;
      }

      await navigator.clipboard.writeText(currentUrl);
      toast({
        title: "Link copiado",
        description: "O endereço do glossário está na sua área de transferência.",
        duration: 3000,
      });
    } catch (error) {
      // Cancelar o compartilhamento no celular cai aqui e não é erro
      if (error instanceof DOMException && error.name === 'AbortError') {
        return;
      }

      console.error('Erro ao compartilhar:', error);
      toast({
        title: "Não foi possível compartilhar",
        description: "Copie o endereço direto da barra do navegador.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-secondary/40 hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label="Compartilhar glossário"
    >
      <Share2 size={16} aria-hidden="true" />
      <span className="hidden sm:inline">Compartilhar</span>
    </button>
  );
};

export default ShareButton;
