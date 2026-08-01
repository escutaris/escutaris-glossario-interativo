import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404: rota inexistente acessada:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-display text-6xl font-bold text-secondary">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-foreground">
          Página não encontrada
        </h1>
        <p className="mt-3 text-muted-foreground">
          O endereço acessado não existe neste glossário.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Voltar ao glossário
        </a>
      </div>
    </div>
  );
};

export default NotFound;
