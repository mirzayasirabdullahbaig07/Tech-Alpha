import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  Github,
  Layout,
  Linkedin,
  Mail,
  Menu,
  Play,
  Shield,
  Sparkles,
  Users,
  X,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Tech Alpha — We turn AI ideas into timeless ventures" },
      {
        name: "description",
        content:
          "Tech Alpha helps founders and teams turn AI ideas into elegant products, automation systems, and launch-ready experiences.",
      },
      {
        property: "og:title",
        content: "Tech Alpha — We turn AI ideas into timeless ventures",
      },
      {
        property: "og:description",
        content:
          "Tech Alpha helps founders and teams turn AI ideas into elegant products, automation systems, and launch-ready experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About me", href: "#about" },
];

const portfolioItems = [
  {
    title: "Executive AI Presence",
    description:
      "Elegant product storytelling, polished visuals, and a premium digital story that brings founders closer to their audience.",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Founder Automation Studio",
    description:
      "Automations and intelligent workflows that turn repetitive work into strategic leverage for fast-moving teams.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "AI Product Launch System",
    description:
      "Launch-ready systems built to guide ideas from concept to early traction with clarity and confidence.",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80",
  },
];

const projectItems = [
  {
    title: "AI Landing Experience",
    description: "A refined starter experience for ambitious startups that need a strong first impression.",
    link: "https://yasirinsights.com/",
  },
  {
    title: "Automation Toolkit",
    description: "A modular system for founders who need operations support without unnecessary complexity.",
    link: "https://github.com/mirzayasirabdullahbaig07",
  },
  {
    title: "Insight & Analytics Lab",
    description: "A practical research space for experiments, exploration, and product discovery.",
    link: "https://www.kaggle.com/mirzayasirabdullah07",
  },
];

const services = [
  {
    title: "AI Strategy",
    description: "Clear roadmaps for turning an idea into a credible, practical product direction.",
    icon: <Layout className="h-5 w-5" />,
  },
  {
    title: "Product Build Support",
    description: "Execution support for landing pages, prototypes, and founder-facing experiences.",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    title: "Automation & Growth",
    description: "Systems that reduce manual effort and free founders to focus on what truly matters.",
    icon: <BarChart3 className="h-5 w-5" />,
  },
];

const founderHighlights = [
  "Mirza Yasir Abdullah Baig is the founder of Tech Alpha, a boutique AI studio focused on elegant execution.",
  "He combines product thinking, engineering discipline, and modern AI tools to build experiences that feel premium and useful.",
  "His work is centered on helping founders move from raw ideas to clear, high-impact digital products.",
];

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-[#050505] text-stone-100">
      <header className="sticky top-0 z-50 w-full border-b border-amber-400/20 bg-black/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-2 font-semibold text-white">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400 text-black shadow-lg shadow-amber-400/20">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="text-lg tracking-[0.2em]">TECH ALPHA</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-stone-400 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-amber-300">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button asChild variant="ghost" size="sm" className="border border-amber-400/20 text-amber-300 hover:bg-amber-400/10">
              <a href="https://github.com/mirzayasirabdullahbaig07" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
            <Button asChild size="sm" className="bg-amber-400 text-black hover:bg-amber-300">
              <a href="mailto:yasirabdullah4549@gmail.com">Book a call</a>
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen((prev) => !prev)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-amber-400/20 bg-black/95 px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-3 text-sm font-medium text-stone-400">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-300">
                  {item.label}
                </a>
              ))}
              <hr className="border-amber-400/20" />
              <a href="https://github.com/mirzayasirabdullahbaig07" target="_blank" rel="noopener noreferrer" className="text-white">
                GitHub
              </a>
              <a href="mailto:yasirabdullah4549@gmail.com" className="text-white">
                Book a call
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-sm font-medium text-amber-300">
                  <Zap className="h-4 w-4" />
                  We turn AI ideas into timeless ventures
                </div>
                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Classic strategy. Smart AI. Elegant execution.
                </h1>
                <p className="mt-6 text-lg leading-8 text-stone-400">
                  Tech Alpha creates refined AI products, automation systems, and launch-ready experiences for founders who want substance over noise.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="gap-2 bg-amber-400 text-black hover:bg-amber-300">
                    <a href="mailto:yasirabdullah4549@gmail.com">
                      Hire us <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="gap-2 border-amber-400/30 text-amber-300 hover:bg-amber-400/10">
                    <a href="https://topmate.io/mirzayasirabdullahbaig/" target="_blank" rel="noopener noreferrer">
                      <Play className="h-4 w-4" /> Book 1:1 call
                    </a>
                  </Button>
                </div>
                <div className="mt-8 flex flex-wrap gap-6 text-sm text-stone-400">
                  <div>
                    <p className="text-2xl font-semibold text-white">10+</p>
                    <p>AI experiences built</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-white">24/7</p>
                    <p>hands-on support</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-white">100%</p>
                    <p>founder-first focus</p>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-[2rem] border border-amber-400/20 bg-zinc-950/80 p-4 shadow-[0_20px_80px_rgba(245,158,11,0.12)] backdrop-blur"
              >
                <div className="rounded-[1.5rem] border border-amber-400/20 bg-[linear-gradient(135deg,rgba(245,158,11,0.16),rgba(0,0,0,0.95))] p-5">
                  <div className="flex items-center justify-between rounded-2xl border border-amber-400/20 bg-black/70 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
                        <Bot className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Founder's studio</p>
                        <p className="text-sm text-stone-400">Design, AI, and product execution</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
                      Open
                    </span>
                  </div>

                  <div className="mt-4 rounded-2xl border border-amber-400/20 bg-black/80 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-white">Current focus</p>
                        <p className="text-sm text-stone-400">Premium AI systems with calm, deliberate delivery</p>
                      </div>
                      <div className="rounded-full bg-amber-400/10 px-3 py-1 text-sm font-semibold text-amber-300">
                        Premium
                      </div>
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-stone-800">
                      <div className="h-2 w-[90%] rounded-full bg-gradient-to-r from-amber-400 to-yellow-500" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-amber-400/20 bg-zinc-950/60">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">About the founder</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Mirza Yasir Abdullah Baig, founder of Tech Alpha.
                </h2>
                <p className="mt-4 text-lg text-stone-400">
                  He is the visionary behind Tech Alpha, building thoughtful AI-powered experiences that combine clarity, design, and execution.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-amber-400/20 bg-black/70 p-6 shadow-[0_20px_60px_rgba(245,158,11,0.06)]">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Who he is</p>
                    <p className="text-sm text-stone-400">Founder • builder • AI strategist</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-stone-300">
                  {founderHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-t border-amber-400/20 bg-black/50">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Services</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                What Tech Alpha provides.
              </h2>
              <p className="mt-4 text-lg text-stone-400">
                Every engagement is crafted to turn vision into polished digital reality with calm, confident execution.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <Card key={service.title} className="border-amber-400/20 bg-zinc-950/60 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300">
                      {service.icon}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">{service.title}</h3>
                    <p className="mt-2 text-stone-400">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="border-t border-amber-400/20 bg-zinc-950/70">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Portfolio</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                A timeless collection of AI-led digital work.
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {portfolioItems.map((item) => (
                <Card key={item.title} className="overflow-hidden border-amber-400/20 bg-black/70">
                  <img src={item.image} alt={item.title} className="h-44 w-full object-cover" />
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-stone-400">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="border-t border-amber-400/20 bg-black/50">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Projects</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Recent work shaped for founders and modern teams.
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {projectItems.map((project) => (
                <a key={project.title} href={project.link} target="_blank" rel="noopener noreferrer" className="group block">
                  <Card className="h-full border-amber-400/20 bg-zinc-950/70 transition hover:-translate-y-1 hover:border-amber-300/50">
                    <CardContent className="flex h-full flex-col p-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300">
                        <Users className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-white">{project.title}</h3>
                      <p className="mt-2 text-sm text-stone-400">{project.description}</p>
                      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-amber-300">
                        Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="border-t border-amber-400/20 bg-zinc-950/60">
          <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Questions, answered plainly.
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="fit">
                <AccordionTrigger className="text-left text-white">What kind of work do you take on?</AccordionTrigger>
                <AccordionContent className="text-stone-400">
                  We build AI landing experiences, automation systems, and premium product strategies for founders who need fast execution with strong design.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="collab">
                <AccordionTrigger className="text-left text-white">How do collaborations usually work?</AccordionTrigger>
                <AccordionContent className="text-stone-400">
                  We start with the challenge, shape the right scope, and build in a feedback loop that keeps the work focused and practical.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="timeline">
                <AccordionTrigger className="text-left text-white">How quickly can something be delivered?</AccordionTrigger>
                <AccordionContent className="text-stone-400">
                  Depending on scope, we can often move from concept to a first polished version in days rather than weeks.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-amber-400/20 bg-zinc-950 p-8 text-center shadow-[0_20px_80px_rgba(245,158,11,0.06)] sm:p-12 lg:p-16">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let’s build something refined and lasting.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-400">
              If you are ready to turn an AI idea into a serious digital product, we would love to help.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="gap-2 bg-amber-400 text-black hover:bg-amber-300">
                <a href="mailto:yasirabdullah4549@gmail.com">
                  Hire us <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-amber-400/30 text-amber-300 hover:bg-amber-400/10">
                <a href="https://topmate.io/" target="_blank" rel="noopener noreferrer">
                  Book 1:1 call
                </a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-stone-400">
              <a href="mailto:yasirabdullah4549@gmail.com" className="flex items-center gap-2 font-medium text-white transition hover:text-amber-300">
                <Mail className="h-4 w-4" /> yasirabdullah4549@gmail.com
              </a>
              <a href="https://linkedin.com/in/mirza-yasir-abdullah-baig" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-medium text-white transition hover:text-amber-300">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href="https://github.com/mirzayasirabdullahbaig07" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-medium text-white transition hover:text-amber-300">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href="https://www.kaggle.com/mirzayasirabdullah07" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-medium text-white transition hover:text-amber-300">
                <Sparkles className="h-4 w-4" /> Kaggle
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-amber-400/20 bg-black/80">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <a href="/" className="flex items-center gap-2 font-semibold text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-400 text-black">
                <Sparkles className="h-4 w-4" />
              </div>
              Tech Alpha
            </a>
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-stone-400">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="transition hover:text-amber-300">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="transition hover:text-amber-300">
                Contact
              </a>
            </nav>
            <div className="text-center text-sm text-stone-400">
              <p>© {new Date().getFullYear()} Tech Alpha.</p>
              <a href="https://yasirinsights.com/" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-medium text-white transition hover:text-amber-300">
                Built for modern AI ventures
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
