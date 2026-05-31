/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { THEORY_CHAPTERS, TheoryChapter } from './theoryData';
import { 
  BookOpen, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  Search, 
  HelpCircle, 
  Compass, 
  BookOpenCheck,
  MessageSquare,
  Bookmark,
  Star,
  Check,
  Menu,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function TheorySection() {
  const [viewMode, setViewMode] = useState<'chapters' | 'full'>('chapters');
  const [activeChapterId, setActiveChapterId] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Retrieve current active chapter
  const currentChapter = THEORY_CHAPTERS.find(ch => ch.id === activeChapterId) || THEORY_CHAPTERS[0];

  // Helper function to check if text matches query
  const matchesQuery = (text: string, query: string) => {
    if (!query) return true;
    return text.toLowerCase().includes(query.toLowerCase());
  };

  // Check if a chapter contains matching search content
  const isChapterMatch = (ch: TheoryChapter, query: string) => {
    if (!query) return true;
    if (ch.title.toLowerCase().includes(query.toLowerCase())) return true;
    if (ch.intro?.toLowerCase().includes(query.toLowerCase())) return true;
    
    // Check inside sections
    return ch.sections.some(sec => {
      if (sec.title?.toLowerCase().includes(query.toLowerCase())) return true;
      if (sec.content?.toLowerCase().includes(query.toLowerCase())) return true;
      if (sec.items?.some(item => item.toLowerCase().includes(query.toLowerCase()))) return true;
      if (sec.conjugations?.some(conj => conj.form.toLowerCase().includes(query.toLowerCase()) || conj.armenian.toLowerCase().includes(query.toLowerCase()))) return true;
      if (sec.examples?.some(ex => ex.spanish.toLowerCase().includes(query.toLowerCase()) || ex.armenian.toLowerCase().includes(query.toLowerCase()) || ex.extra?.toLowerCase().includes(query.toLowerCase()))) return true;
      if (sec.comparison?.some(comp => comp.title.toLowerCase().includes(query.toLowerCase()) || comp.text.toLowerCase().includes(query.toLowerCase()) || comp.example.toLowerCase().includes(query.toLowerCase()) || comp.translation.toLowerCase().includes(query.toLowerCase()))) return true;
      if (sec.dialogue?.some(dial => dial.speaker.toLowerCase().includes(query.toLowerCase()) || dial.spanish.toLowerCase().includes(query.toLowerCase()) || dial.armenian.toLowerCase().includes(query.toLowerCase()))) return true;
      return false;
    });
  };

  // Filtered chapters based on search query
  const filteredChapters = THEORY_CHAPTERS.filter(ch => isChapterMatch(ch, searchQuery));

  const handleNextChapter = () => {
    if (activeChapterId < THEORY_CHAPTERS.length) {
      setActiveChapterId(prev => prev + 1);
    }
  };

  const handlePrevChapter = () => {
    if (activeChapterId > 1) {
      setActiveChapterId(prev => prev - 1);
    }
  };

  // Helper component to render individual sections of a chapter
  const renderChapterSection = (sec: any, secIndex: number) => {
    switch (sec.type) {
      case 'text':
        return (
          <div key={secIndex} className="space-y-2">
            {sec.title && <h4 className="text-sm font-serif font-bold text-slate-800 underline decoration-slate-200 underline-offset-4 decoration-2">{sec.title}</h4>}
            <p className="text-sm text-slate-600 leading-relaxed font-sans">{sec.content}</p>
          </div>
        );

      case 'list':
        return (
          <div key={secIndex} className="space-y-2 bg-[#FDFCFA] rounded-xl p-4 border border-slate-200/50 shadow-3xs">
            {sec.title && <h4 className="text-xs font-bold uppercase tracking-wide text-slate-400">{sec.title}</h4>}
            <ul className="space-y-1.5">
              {sec.items.map((item: string, i: number) => (
                <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                  <span className="font-medium leading-normal">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );

      case 'conjugation':
        return (
          <div key={secIndex} className="space-y-3">
            {sec.title && <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">{sec.title}</h4>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {sec.conjugations?.map((conj: any, i: number) => (
                <div key={i} className="bg-white rounded-lg p-3 border border-slate-200 shadow-3xs flex flex-col justify-center">
                  <span className="text-xs font-bold text-rose-600 font-mono tracking-wide">{conj.form}</span>
                  <span className="text-[11px] text-slate-500 mt-1 font-serif italic leading-relaxed">{conj.armenian}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'examples':
        return (
          <div key={secIndex} className="space-y-2">
            {sec.title && <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{sec.title}</h4>}
            <div className="space-y-2">
              {sec.examples?.map((ex: any, i: number) => (
                <div key={i} className="bg-slate-50/50 p-3 rounded-lg border border-slate-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-slate-300 hover:bg-slate-50 transition-all font-sans">
                  <div className="space-y-0.5">
                    <span className="font-mono font-bold text-slate-900 border-b border-rose-100 pb-0.5 tracking-wide text-sm">{ex.spanish}</span>
                    <p className="text-xs font-medium text-slate-600 mt-1 font-serif leading-relaxed">{ex.armenian}</p>
                  </div>
                  {ex.extra && (
                    <span className="text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-100 self-start sm:self-center shrink-0">
                      {ex.extra}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 'comparison':
        return (
          <div key={secIndex} className="space-y-3">
            {sec.title && <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">{sec.title}</h4>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sec.comparison?.map((comp: any, i: number) => (
                <div key={i} className="bg-amber-50/25 border border-amber-200/70 rounded-xl p-4 flex flex-col justify-between shadow-3xs">
                  <div>
                    <h5 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                      {comp.title}
                    </h5>
                    <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed font-serif uppercase tracking-xs">{comp.text}</p>
                  </div>
                  <div className="mt-4 bg-white rounded-lg p-3 border border-amber-100">
                    <p className="font-mono font-black text-rose-700 text-xs tracking-wide">{comp.example}</p>
                    <p className="text-xs font-semibold text-slate-600 mt-1 font-serif leading-relaxed">{comp.translation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'dialogue':
        return (
          <div key={secIndex} className="space-y-2">
            {sec.title && <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">{sec.title}</h4>}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-3">
              {sec.dialogue?.map((dial: any, i: number) => {
                const isLucia = dial.speaker.toLowerCase() === 'lucía' || dial.speaker.toLowerCase() === 'pregunta';
                return (
                  <div key={i} className={`flex flex-col ${isLucia ? 'items-start' : 'items-end'}`}>
                    <span className="text-[10px] font-bold text-slate-400 mb-0.5 tracking-wider px-1 uppercase block">
                      {dial.speaker}
                    </span>
                    <div className={`max-w-xs md:max-w-md rounded-xl px-3.5 py-2 text-xs border ${
                      isLucia 
                        ? 'bg-rose-50 border-rose-100 text-rose-950 rounded-tl-none' 
                        : 'bg-white border-slate-200 text-slate-900 rounded-tr-none shadow-3xs'
                    }`}>
                      <p className="font-mono font-bold tracking-wide">{dial.spanish}</p>
                      <p className="text-[11px] opacity-80 mt-1 leading-relaxed font-serif italic">{dial.armenian}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 'shortcut':
        return (
          <div key={secIndex} className="bg-linear-to-br from-amber-500 to-rose-600 rounded-2xl p-5 text-white shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-amber-300 text-amber-300 shrink-0" />
              <h4 className="text-sm font-bold uppercase tracking-wider">Ամենաարագ և հեշտ հիշելու ձևը</h4>
            </div>
            <div className="space-y-2 border-t border-white/20 pt-4">
              {sec.examples?.map((ex: any, i: number) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 py-1.5 border-b border-white/10 last:border-0">
                  <span className="font-mono font-extrabold text-xs tracking-wider bg-white/15 px-2.5 py-0.5 rounded-md text-amber-100">{ex.spanish}</span>
                  <span className="text-xs font-serif font-medium text-white/90">{ex.armenian}</span>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6" id="theory-section">
      
      {/* Top Controller Bar */}
      <div className="bg-[#FAF8F6] rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-3xs flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-linear-to-br from-rose-500 to-rose-600 text-white rounded-xl shadow-xs shrink-0">
            <BookOpenCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-serif font-black tracking-tight text-slate-900">
              Gerundio & 5 Կառուցվածքների Ամբողջական Ձեռնարկ
            </h3>
            <p className="text-[10px] sm:text-xs text-slate-500 font-medium">
              Բացատրեմ շատ մանրամասն՝ Gerundio և հետո տարբեր կառուցվածքները՝
            </p>
          </div>
        </div>

        {/* View Toggle Controls */}
        <div className="flex items-center gap-1.5 bg-slate-100/80 p-1 rounded-xl self-start md:self-auto w-full md:w-auto">
          <button
            onClick={() => { setViewMode('chapters'); setMobileMenuOpen(false); }}
            className={`flex-1 md:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              viewMode === 'chapters'
                ? 'bg-white text-rose-600 shadow-3xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
            id="tab-view-chapters"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Գլուխ առ գլուխ</span>
          </button>
          
          <button
            onClick={() => { setViewMode('full'); setMobileMenuOpen(false); }}
            className={`flex-1 md:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              viewMode === 'full'
                ? 'bg-white text-rose-600 shadow-3xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
            id="tab-view-full"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Ամբողջական գիրք</span>
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Search and Chapter bar (Only relevant for chapter mode, collapses on mobile) */}
        {viewMode === 'chapters' && (
          <div className="lg:col-span-4 space-y-4">
            
            {/* Search Input */}
            <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-3xs">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Որոնել բառեր կամ կառույցներ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 text-slate-800 placeholder-slate-400 border border-slate-200/60 rounded-lg text-xs focus:ring-1 focus:ring-rose-500 focus:border-rose-500 outline-hidden transition-all"
                  id="search-input"
                />
              </div>
            </div>

            {/* Mobile Sidebar Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-full flex items-center justify-between bg-white px-4 py-3 border border-slate-200 rounded-xl text-slate-700 text-xs font-bold cursor-pointer hover:bg-slate-55"
              id="mobile-sidebar-toggle"
            >
              <span className="flex items-center gap-2">
                <Menu className="w-4 h-4 text-rose-500" />
                <span>Գլուխների ցանկ ({filteredChapters.length})</span>
              </span>
              <span className="text-rose-600 font-mono font-semibold">Գլուխ {activeChapterId}</span>
            </button>

            {/* Chapters layout list */}
            <div className={`space-y-1.5 bg-white rounded-xl border border-slate-200 p-3 shadow-3xs max-h-120 overflow-y-auto ${mobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
              <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block px-1 mb-2">
                Բովանդակություն / Գլուխներ
              </span>
              {filteredChapters.length === 0 ? (
                <p className="text-xs text-slate-400 p-3 italic text-center">Արդյունքներ չեն գտնվել</p>
              ) : (
                filteredChapters.map((ch) => {
                  const isActive = ch.id === activeChapterId;
                  return (
                    <button
                      key={ch.id}
                      onClick={() => {
                        setActiveChapterId(ch.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2.5 rounded-lg border text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                        isActive
                          ? 'border-rose-300 bg-rose-50/50 text-rose-950 font-bold'
                          : 'border-transparent text-slate-600 hover:bg-slate-55 hover:text-slate-900'
                      }`}
                      id={`btn-chapter-select-${ch.id}`}
                    >
                      <span className="truncate pr-1.5">{ch.id}. {ch.title}</span>
                      {isActive ? (
                        <Check className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                      ) : (
                        <ChevronRight className="w-3 h-3 text-slate-350 shrink-0" />
                      )}
                    </button>
                  );
                })
              )}
            </div>
          </div>
        )}

        {/* Right content view */}
        <div className={viewMode === 'chapters' ? 'lg:col-span-8' : 'lg:col-span-12'}>
          <AnimatePresence mode="wait">
            {viewMode === 'chapters' ? (
              <motion.div
                key={activeChapterId}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.18 }}
                className="bg-white rounded-2xl border border-slate-200 shadow-3xs overflow-hidden flex flex-col justify-between min-h-110"
              >
                {/* Active Chapter Details */}
                <div>
                  <div className="p-5 border-b border-slate-100 bg-linear-to-r from-rose-50/50 to-orange-50/10">
                    <span className="text-[10px] font-bold font-mono tracking-wider uppercase text-rose-600 bg-rose-50 border border-rose-100/60 px-2 py-0.5 rounded-md shadow-3xs">
                      Գլուխ {currentChapter.id} / 17
                    </span>
                    <h2 className="text-lg sm:text-xl font-serif font-bold text-slate-900 mt-2 tracking-tight">
                      {currentChapter.title}
                    </h2>
                    {currentChapter.intro && (
                      <p className="text-xs text-slate-500 mt-2 font-medium leading-relaxed italic border-l-2 border-rose-450 pl-3">
                        {currentChapter.intro}
                      </p>
                    )}
                  </div>

                  {/* Sections list rendering */}
                  <div className="p-5 sm:p-6 space-y-6">
                    {currentChapter.sections.map((sec, secIndex) => renderChapterSection(sec, secIndex))}
                  </div>
                </div>

                {/* Left-Right Pagination buttons */}
                <div className="p-4 bg-slate-50 border-t border-slate-150 flex items-center justify-between">
                  <button
                    onClick={handlePrevChapter}
                    disabled={activeChapterId === 1}
                    className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:hover:text-slate-600 cursor-pointer disabled:cursor-not-allowed transition-all"
                    id="btn-chap-prev"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Նախորդ գլուխ</span>
                  </button>

                  <span className="text-[11px] font-mono font-bold text-slate-400">
                    {activeChapterId} / 17
                  </span>

                  <button
                    onClick={handleNextChapter}
                    disabled={activeChapterId === THEORY_CHAPTERS.length}
                    className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-rose-600 hover:text-rose-900 disabled:opacity-30 disabled:hover:text-rose-600 cursor-pointer disabled:cursor-not-allowed transition-all"
                    id="btn-chap-next"
                  >
                    <span>Հաջորդ գլուխ</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </motion.div>
            ) : (
              // Full Handbook scroll view
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22 }}
                className="space-y-8"
              >
                {THEORY_CHAPTERS.map((ch) => (
                  <div key={ch.id} className="bg-white rounded-2xl border border-slate-200 shadow-3xs overflow-hidden">
                    <div className="p-5 border-b border-slate-100 bg-linear-to-r from-rose-50/50 to-orange-50/10">
                      <span className="text-[10px] font-bold font-mono tracking-wider uppercase text-rose-600 bg-rose-50 border border-rose-100/60 px-2 py-0.5 rounded-md">
                        ԳԼՈՒԽ {ch.id}
                      </span>
                      <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 mt-1.5 tracking-tight">
                        {ch.title}
                      </h3>
                      {ch.intro && (
                        <p className="text-xs text-slate-500 mt-1.5 leading-relaxed italic border-l-2 border-rose-450 pl-3">
                          {ch.intro}
                        </p>
                      )}
                    </div>
                    
                    <div className="p-5 sm:p-6 space-y-5">
                      {ch.sections.map((sec, secIndex) => renderChapterSection(sec, secIndex))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}
