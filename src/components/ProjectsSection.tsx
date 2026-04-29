import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import TiltCard from './TiltCard';
import GradientText from './GradientText';

const PROJECTS = [
  {
    title: 'Desain Sosial Media Restoran',
    desc: 'mendesain berbagai konten media sosial menarik untuk berbagai platform seperti Instagram, Tiktok, Dan Whatsapp',
    tags: ['Canva','Tiktok','Instagram','Graphic Design'],
    year: '2026',
    color: '#f94e4e',
    link: 'https://drive.google.com/file/d/1HYQTkCKbRxk-2MlhnvEEua6MJWnkDgqX/view?usp=drivesdk',
    image: '/projects/menu.jpeg'
  },
  {
    title: 'Project Website CRUD',
    desc: 'Project sekolah Website CRUD sederhana menggunakan Laravel ',
    tags: ['Laravel','PHP','MySQL','Bootstrap'],
    year: '2025',
    color: '#5227FF',
    link: '#',
    image: '/projects/crud.jpeg'
  },
  {
    title: 'Membuat Game 2D berbasis Unity',
    desc: 'Sebuah game 2D sederhana bernama Aetheria yang dibuat menggunakan Unity.',
    tags: ['Unity','C++','C#','Game Development'],
    year: '2026',
    color: '#38bdf8',
    link: 'https://github.com/RaiStillLearning/Aetheria2D.git',
    image: '/projects/game.png'
  },
  {
    title: 'Membuat Website SaaS sederhana',
    desc: 'Sebuah Website SaaS sederhana bernama Vidary yang digunakan untuk streaming video dengan integrasi API platform video populer.',
    tags: ['React','API','TailwindCSS'],
    year: '2026',
    color: '#FF9FFC',
    link: 'https://github.com/RaiStillLearning/Vidary',
    image: '/projects/vidary.png'
  },

];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="projects" className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="section-line" />
            <span className="text-xs font-mono tracking-widest uppercase" style={{ color: '#B19EEF' }}>
              Work
            </span>
          </div>

          <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tight leading-tight">
            <GradientText colors={['#ffffff', '#888888', '#444444']} animationSpeed={12}>
              Selected
            </GradientText>
            <span className="ml-3" style={{ color: '#1e1e1e' }}>Projects.</span>
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className="block group"
            >
              <TiltCard className="h-full">
                <div className="h-full flex flex-col rounded-2xl glass-card overflow-hidden border border-white/10 hover:border-white/30 transition">

                  {/* IMAGE */}
                  <div className="h-40 w-full overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 flex flex-col flex-1">
                    
                    <div className="flex justify-between items-center mb-5">
                      <span className="font-mono text-xs" style={{ color: '#3a3a3a' }}>
                        {p.year}
                      </span>
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: p.color, boxShadow: `0 0 8px ${p.color}60` }}
                      />
                    </div>

                    <h3 className="font-display font-bold text-lg mb-2.5 group-hover:text-white transition-colors" style={{ color: '#ccc' }}>
                      {p.title}
                    </h3>

                    <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: '#555' }}>
                      {p.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md text-xs font-mono"
                          style={{
                            background: `${p.color}10`,
                            color: p.color,
                            border: `1px solid ${p.color}20`
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <motion.div className="mt-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs font-mono" style={{ color: p.color }}>
                        View Project
                      </span>
                      <motion.span
                        style={{ color: p.color }}
                        animate={{ x: [0, 3, 0] }}
                        transition={{ repeat: Infinity, duration: 1.4 }}
                      >
                        →
                      </motion.span>
                    </motion.div>

                  </div>
                </div>
              </TiltCard>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}