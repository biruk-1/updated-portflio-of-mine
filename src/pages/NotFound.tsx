import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6 px-4 animate-fade-in">
        <h1 className="text-9xl font-bold text-gradient">404</h1>
        <h2 className="text-3xl font-bold">Page Not Found</h2>
        <p className="text-xl text-muted-foreground max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Button size="lg" asChild className="mt-8">
          <a href="/">
            <Home className="mr-2 h-5 w-5" />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
