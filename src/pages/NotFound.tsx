import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="site-shell flex min-h-screen items-center justify-center">
      <div className="site-container max-w-md text-center">
        <p className="meta">error · 404</p>
        <h1 className="mt-4 font-display text-4xl tracking-tight">Page not found</h1>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          The route you requested doesn’t exist.
        </p>
        <Button asChild className="mt-8">
          <a href="/">Return home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
