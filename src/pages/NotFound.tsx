import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import { MagneticButton } from "@/components/ui/primitives";
import { Home, ShieldAlert } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <Seo title="Page not found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="flex min-h-[60vh] items-center">
        <div className="container text-center">
          <ShieldAlert className="mx-auto text-primary" size={56} />
          <h1 className="mt-6 font-display text-6xl font-extrabold gradient-text">404</h1>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            This page seems to have gone off the grid. Let's get you back to safety.
          </p>
          <MagneticButton to="/" className="mt-8">
            <Home size={16} /> Back to home
          </MagneticButton>
        </div>
      </section>
    </Layout>
  );
}
