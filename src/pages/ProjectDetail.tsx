import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import { Reveal, MagneticButton } from "@/components/ui/primitives";
import { ArrowLeft, ArrowRight, Target, CheckCircle2, Tag } from "lucide-react";
import { projects } from "@/data/projects";
import MatrixRain from "@/components/three/MatrixRain";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <Navigate to="/projects" replace />;

  return (
    <Layout>
      <Seo
        title={project.title}
        description={project.summary}
        path={`/projects/${project.slug}`}
        type="article"
      />
      <section className="relative overflow-hidden pb-6 pt-10 lg:pt-16">
        <div className="pointer-events-none absolute inset-0">
          <MatrixRain density={0.4} speed={0.85} className="opacity-50" />
          <div className="absolute inset-0 cyber-grid-bg opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        </div>
        <div className="container relative">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} /> Back to projects
          </Link>
          <Reveal className="mt-6">
            <span className="eyebrow">{project.category}</span>
            <h1 className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-tight text-balance sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              {project.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground"
                >
                  <Tag size={11} /> {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section pt-8">
        <div className="container grid gap-8 lg:grid-cols-3">
          <Reveal className="lg:col-span-3">
            <div className="glass-card p-8">
              <h2 className="font-display text-xl font-semibold">Context</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {project.context}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="lg:col-span-2">
            <div className="glass-card h-full p-8">
              <h2 className="flex items-center gap-2 font-display text-xl font-semibold">
                <Target size={20} className="text-primary" /> Approach
              </h2>
              <ul className="mt-4 space-y-3">
                {project.approach.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="leading-relaxed text-muted-foreground">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-card h-full p-8">
              <h2 className="flex items-center gap-2 font-display text-xl font-semibold">
                <CheckCircle2 size={20} className="text-primary" /> Outcome
              </h2>
              <ul className="mt-4 space-y-3">
                {project.outcome.map((o) => (
                  <li key={o} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2
                      size={15}
                      className="mt-0.5 shrink-0 text-primary"
                    />
                    <span className="leading-relaxed text-muted-foreground">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal className="container mt-12 text-center">
          <MagneticButton to="/book-consultation">
            Start a similar project
            <ArrowRight size={16} />
          </MagneticButton>
        </Reveal>
      </section>
    </Layout>
  );
}
