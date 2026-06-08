import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronRight, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import SectionHeading from '@/components/effects/SectionHeading';
import GlassCard from '@/components/effects/GlassCard';
import { projects, Project } from '@/data/projects';

const categories = ['All', ...new Set(projects.map(p => p.category))];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 neural-bg" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading 
          title="Portfolio"
          subtitle="Showcasing innovative AI solutions and web applications built for startups and enterprises worldwide."
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white'
                  : 'bg-white/5 text-muted hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05 }}
              >
                <GlassCard className="h-full cursor-pointer group" hover={true}>
                  {/* Project Image Placeholder */}
                  <div className={`h-48 rounded-lg bg-gradient-to-br ${project.gradient} mb-6 flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                    <div className="text-center text-white/80 z-10">
                      <div className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Click to view details
                      </div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-purple-400 mb-3">{project.subtitle}</p>
                  <p className="text-sm text-muted mb-4 line-clamp-2">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md text-xs bg-purple-500/10 text-purple-400 border border-purple-500/10">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2.5 py-1 rounded-md text-xs bg-white/5 text-muted">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        className="text-xs text-muted hover:text-purple-400 transition-colors flex items-center gap-1"
                      >
                        {link.label === 'GitHub'
                          ? <FaGithub className="w-3.5 h-3.5" />
                          : <ExternalLink className="w-3.5 h-3.5" />
                        }
                        {link.label}
                      </a>
                    ))}
                  </div>

                  {/* Click to expand */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="mt-4 w-full py-2 rounded-lg bg-white/5 text-sm text-muted hover:text-white hover:bg-white/10 transition-all flex items-center justify-center gap-1"
                  >
                    View Details <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto glass-card rounded-2xl p-8"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-muted hover:text-white hover:bg-white/10 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className={`h-48 rounded-xl bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center mb-6`}>
                  <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                </div>

                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-400 mb-4">
                  {selectedProject.category}
                </span>

                <h3 className="text-xl text-purple-400 mb-4">{selectedProject.subtitle}</h3>
                <p className="text-muted mb-6">{selectedProject.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Problem</h4>
                    <p className="text-sm text-muted">{selectedProject.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Solution</h4>
                    <p className="text-sm text-muted">{selectedProject.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProject.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-muted">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-lg text-xs bg-white/5 text-muted border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Results</h4>
                  <ul className="space-y-2">
                    {selectedProject.results.map((r) => (
                      <li key={r} className="flex items-center gap-2 text-sm text-green-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  {selectedProject.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center gap-2"
                    >
                      {link.label === 'GitHub' ? <FaGithub className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                      {link.label}
                    </a>
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
