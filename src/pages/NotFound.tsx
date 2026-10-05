import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5">
      <div className="max-w-md text-center space-y-4">
        <p className="text-sm text-muted-foreground">404</p>
        <h1 className="text-2xl font-semibold tracking-tight">Page not found</h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Button asChild className="mt-2">
          <a href="/">Back home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
