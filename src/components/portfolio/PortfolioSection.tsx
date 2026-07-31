import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronRight, X, Sparkles } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import SectionHeading from '@/components/effects/SectionHeading';
import GlassCard from '@/components/effects/GlassCard';
import { useModalBehavior } from '@/hooks/useModalBehavior';
import { projects, Project } from '@/data/projects';

/**
 * Project links come in three flavors:
 * - "#..."  -> legacy in-page anchors (e.g. "#contact"); route to the Contact page
 * - "/..."  -> internal routes; client-side <Link>, no new tab
 * - full URL -> external; new tab with rel security attributes
 */
function ProjectLink({
  url,
  label,
  className,
  children,
}: {
  url: string;
  label: string;
  className: string;
  children: ReactNode;
}) {
  if (url.startsWith('#')) {
    return (
      <Link to="/contact" className={className} aria-label={`${label} — go to contact page`}>
        {children}
      </Link>
    );
  }
  if (url.startsWith('/')) {
    return (
      <Link to={url} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

const categories = ['All', ...new Set(projects.map(p => p.category))];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useModalBehavior(!!selectedProject, () => setSelectedProject(null));

  const byCategory = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);
  const q = query.trim().toLowerCase();
  const filtered = q
    ? byCategory.filter(p =>
        [p.title, p.subtitle, p.description, ...p.technologies]
          .join(' ')
          .toLowerCase()
          .includes(q),
      )
    : byCategory;

  return (
    <section 
      id="portfolio" 
      className="relative min-h-screen bg-black py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ overflowX: 'clip' }}
    >
      {/* PRISMA INSPIRED LUXURY BACKGROUND SYSTEM */}
      {/* Studio Noise & Texture Map Layer */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

      {/* High-End Tech Grid Mask Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#E1E0CC05_1px,transparent_1px),linear-gradient(to_bottom,#E1E0CC05_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" 
      />
      
      {/* Ambient Premium Soft Light Radiance Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#E1E0CC]/5 rounded-full blur-[140px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-slate-800/40 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '2.5s' }} />
      
      {/* Micro-Flares and Cinematic Structural Anchors */}
      <div className="absolute top-24 left-12 w-1.5 h-1.5 bg-[#E1E0CC] rounded-full animate-float opacity-30" />
      <div className="absolute top-48 right-24 w-1 h-1 bg-gray-400 rounded-full animate-float opacity-40" style={{ animationDelay: '1.2s' }} />
      <div className="absolute bottom-36 left-20 w-2 h-2 bg-slate-600 rounded-full animate-float opacity-20" style={{ animationDelay: '2.2s' }} />
      <div className="absolute bottom-24 right-16 w-1.5 h-1.5 bg-gray-500 rounded-full animate-float opacity-30" style={{ animationDelay: '3.5s' }} />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <SectionHeading 
          title="Portfolio"
          subtitle="Showcasing innovative AI solutions and web applications built for startups and enterprises worldwide."
        />

        {/* Studio-inspired Minimalist Category Filter Selection Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 sm:mb-20 md:mb-24">
          <div className="bg-[#101010] p-1.5 rounded-full border border-[#E1E0CC]/10 flex flex-wrap gap-1 sm:gap-2 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 uppercase tracking-wider ${
                  activeCategory === cat
                    ? 'bg-[#E1E0CC] text-black shadow-lg font-semibold'
                    : 'text-[#E1E0CC]/70 hover:text-[#E1E0CC] hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project search */}
        <div className="max-w-md mx-auto mb-10">
          <label htmlFor="project-search" className="sr-only">Search projects</label>
          <input
            id="project-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects by name or technology…"
            className="w-full bg-[#101010] border border-neutral-900 focus:border-[#E1E0CC]/30 focus:ring-1 focus:ring-[#E1E0CC]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-300"
          />
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-sm text-gray-500 mb-10" role="status">
            No projects match "{query}". Try a different keyword.
          </p>
        )}

        {/* Project Grid Display with Clean Aesthetic Proportions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ 
                  duration: 0.5, 
                  delay: i * 0.05, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
              >
                <GlassCard 
                  className="h-full cursor-pointer group bg-[#101010]/60 border border-neutral-900 rounded-2xl p-5 md:p-6 flex flex-col justify-between backdrop-blur-sm transition-all duration-500 hover:border-[#E1E0CC]/20" 
                  hover={true}
                >
                  <div>
                    {/* Project Image Box using grayscale configuration matching About image elements */}
                    <div className={`h-48 rounded-xl bg-gradient-to-br ${project.gradient} mb-6 flex items-center justify-center relative overflow-hidden group-hover:contrast-125 transition-all duration-500`}>
                      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                      <div className="text-center text-white/90 z-10">
                        <div className="text-xs font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-1 group-hover:translate-y-0 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#E1E0CC]" /> View details
                        </div>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="px-3 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase bg-black/60 text-[#E1E0CC] backdrop-blur-md border border-[#E1E0CC]/10">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-medium text-[#E1E0CC] mb-1 tracking-tight transition-colors group-hover:text-white uppercase">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-400 mb-3 tracking-wide">{project.subtitle}</p>
                    <p className="text-xs sm:text-sm text-gray-500 mb-5 line-clamp-2 leading-relaxed font-normal">{project.description}</p>

                    {/* Technologies Pills with high-end alpha theme */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#E1E0CC]/5 text-[#E1E0CC]/80 border border-[#E1E0CC]/10 tracking-wide">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/5 text-gray-500 border border-white/5">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    {/* Links Actions */}
                    <div className="flex items-center gap-4 pt-2 border-t border-neutral-900/60" onClick={(e) => e.stopPropagation()}>
                      {project.links.map((link) => (
                        <ProjectLink
                          key={link.label}
                          url={link.url}
                          label={link.label}
                          className="text-xs text-gray-500 hover:text-[#E1E0CC] transition-colors flex items-center gap-1.5 font-medium tracking-wide"
                        >
                          {link.label === 'GitHub'
                            ? <FaGithub className="w-3.5 h-3.5" />
                            : <ExternalLink className="w-3.5 h-3.5" />
                          }
                          {link.label}
                        </ProjectLink>
                      ))}
                    </div>

                    {/* Expand Trigger Button Element with Studio Aesthetics */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="mt-4 w-full py-2.5 rounded-xl bg-[#151515] text-xs text-gray-400 font-medium hover:text-black hover:bg-[#E1E0CC] transition-all duration-300 flex items-center justify-center gap-1 border border-neutral-900 uppercase tracking-wider"
                    >
                      View Details <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Detail Modal Overlay View Component Stack */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
            >
              <div
                className="absolute inset-0 bg-black/95 backdrop-blur-md"
                onClick={() => setSelectedProject(null)}
                aria-hidden="true"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                role="dialog"
                aria-modal="true"
                aria-label={`${selectedProject.title} — project details`}
                className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[#0A0A0A] border border-[#E1E0CC]/10 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl custom-scrollbar"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                  className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#101010] transition-all border border-neutral-800 z-20"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className={`h-48 sm:h-56 rounded-xl bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center mb-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-white z-10 px-4 text-center tracking-tight uppercase">
                    {selectedProject.title}
                  </h2>
                </div>

                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase bg-[#E1E0CC]/10 text-[#E1E0CC] border border-[#E1E0CC]/20 mb-4">
                  {selectedProject.category}
                </span>

                <h3 className="text-base sm:text-lg text-gray-300 font-normal tracking-wide mb-4">{selectedProject.subtitle}</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-8 font-normal">{selectedProject.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 border-t border-b border-neutral-900 py-6">
                  <div>
                    <h4 className="text-[#E1E0CC] font-medium mb-2 text-xs sm:text-sm uppercase tracking-wider">Problem</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{selectedProject.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-[#E1E0CC] font-medium mb-2 text-xs sm:text-sm uppercase tracking-wider">Solution</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{selectedProject.solution}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-[#E1E0CC] font-medium mb-3 text-xs sm:text-sm uppercase tracking-wider">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {selectedProject.features.map((f) => (
                      <div key={f} className="flex items-center gap-2.5 text-xs text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E1E0CC] opacity-60 flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-[#E1E0CC] font-medium mb-3 text-xs sm:text-sm uppercase tracking-wider">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span key={t} className="px-3 py-1.5 rounded-lg text-xs bg-neutral-900 text-gray-400 border border-neutral-800 font-medium tracking-wide">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8 bg-[#101010] border border-neutral-900 p-4 rounded-xl">
                  <h4 className="text-[#E1E0CC] font-medium mb-3 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-1.5">
                     Results &amp; Impact
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.results.map((r) => (
                      <li key={r} className="flex items-start gap-2.5 text-xs text-gray-400 leading-normal">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-1.5 flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {selectedProject.links.map((link) => (
                    <ProjectLink
                      key={link.label}
                      url={link.url}
                      label={link.label}
                      className="px-6 py-3 rounded-xl bg-[#E1E0CC] text-black font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center gap-2"
                    >
                      {link.label === 'GitHub' ? <FaGithub className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                      {link.label}
                    </ProjectLink>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}