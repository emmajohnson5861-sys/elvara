import React, { useState } from 'react';
import { ArrowRight, Calendar, X, Clock, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { RevealImage } from './RevealImage';
import { ScrollReveal } from './ScrollReveal';
import { AnimatedHeading } from './AnimatedHeading';
import { AnimatedBodyText } from './AnimatedBodyText';

interface Article {
  id: string;
  date: string;
  category: string;
  title: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
}

const ARTICLES: Article[] = [
  {
    id: 'lived-in-minimalism',
    date: '08.02.2026',
    category: 'INTERIOR ARCHITECTURE',
    title: 'THE ART OF LIVED-IN MINIMALISM',
    readTime: '5 MIN READ',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=85',
    excerpt: 'Exploring how subtle textures, natural light, and intentional negative space create homes that feel serene yet deeply personal.',
    content: [
      'Minimalism is often misunderstood as cold or austere. At Elvara Living, we champion "lived-in minimalism"—an approach that honors clean architectural lines while embracing the warmth of human presence.',
      'By pairing hand-troweled limewash walls with raw oak cabinetry and tactile linen upholstery, spaces achieve an acoustic quietude and visual calmness without sacrificing soul or comfort.',
      'The secret lies in restraint: selecting fewer, higher-quality elements that tell a story through age, patina, and shadow.'
    ]
  },
  {
    id: 'organic-textures',
    date: '07.18.2026',
    category: 'MATERIALITY & STYLING',
    title: 'ORGANIC TEXTURES & NATURAL PALETTES',
    readTime: '4 MIN READ',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85',
    excerpt: 'A guide to curating travertine, oiled walnut, and unlacquered brass to establish a grounding connection with the natural world.',
    content: [
      'Materiality forms the emotional baseline of any interior. When we touch a polished travertine tabletop or step onto honed limestone, our senses align with nature.',
      'In our recent residential projects, we combine contrasting tactile elements—smooth matte plaster against coarse boucle, and matte black steel alongside warm brushed brass.',
      'These natural variations reflect light organically across different times of day, creating a living canvas that evolves continuously.'
    ]
  }
];

export const BlogJournalSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="journal" className="w-full bg-[#FAF7F2] py-0">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Description, and Link */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full pt-2">
            <div>
              <ScrollReveal direction="up" delay={0.1}>
                <span className="text-[11px] font-mono tracking-[0.25em] text-[#8C8275] uppercase block mb-3">
                  INSIGHTS & STORIES
                </span>
              </ScrollReveal>

              <AnimatedHeading
                text={"LATEST\nJOURNAL"}
                className="font-serif text-4xl sm:text-5xl text-[#18181B] font-medium leading-[1.12] tracking-tight mb-6"
              />

              <AnimatedBodyText
                text="Discover insights on modern architectural design, curated interior trends, and timeless craftsmanship. We share our design philosophy, recent press recognition, and the creative journey behind Elvara Living."
                className="text-xs sm:text-sm text-[#524E48] font-light leading-relaxed mb-8 max-w-md"
              />
            </div>

            <ScrollReveal direction="up" delay={0.35}>
              <div>
                <a
                  href="#journal"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedArticle(ARTICLES[0]);
                  }}
                  className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-[#18181B] uppercase group hover:text-[#8C8275] transition-colors py-2"
                >
                  <span>READ ALL ARTICLES</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 2 Article Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
            {ARTICLES.map((article, idx) => (
              <ScrollReveal key={article.id} direction="up" delay={0.15 * (idx + 1)}>
                <article
                  onClick={() => setSelectedArticle(article)}
                  className="group cursor-pointer flex flex-col"
                >
                  {/* Image Box */}
                  <div className="w-full aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] overflow-hidden bg-[#EAE4DC] relative mb-5">
                    <RevealImage
                      src={article.image}
                      alt={article.title}
                      direction="up"
                      delay={0.15 * (idx + 1)}
                      className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 z-30 bg-[#18181B]/80 backdrop-blur-xs text-[#FAF7F2] text-[10px] font-mono tracking-widest px-3 py-1.5 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5">
                      <span>READ ARTICLE</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>

                  {/* Article Meta Date */}
                  <div className="text-[11px] font-mono tracking-widest text-[#8C8275] mb-2 flex items-center gap-2">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.category}</span>
                  </div>

                  {/* Article Title */}
                  <h3 className="font-serif text-lg sm:text-xl text-[#18181B] font-medium leading-snug group-hover:text-[#6E6456] transition-colors duration-300">
                    {article.title}
                  </h3>
                </article>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>

      {/* Article Detail Modal / Reader */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#18181B]/80 backdrop-blur-sm p-4 sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#FAF7F2] text-[#18181B] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-none p-6 sm:p-10 relative border border-[#E8E2D9]"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-2 text-[#18181B] hover:text-[#8C8275] hover:bg-[#EAE4DC]/50 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-xs font-mono text-[#8C8275]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {selectedArticle.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {selectedArticle.readTime}
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-4xl font-medium leading-tight">
                  {selectedArticle.title}
                </h2>

                <div className="aspect-[16/9] w-full overflow-hidden bg-[#EAE4DC] my-6">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4 text-sm sm:text-base text-[#3A3834] font-light leading-relaxed">
                  {selectedArticle.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                <div className="pt-6 border-t border-[#E2DACF] flex justify-end">
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(null)}
                    className="px-8 py-3.5 rounded-none bg-[#18181B] text-[#FAF7F2] text-xs font-semibold tracking-widest uppercase hover:bg-[#3A3834] transition-colors cursor-pointer"
                  >
                    CLOSE ARTICLE
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
