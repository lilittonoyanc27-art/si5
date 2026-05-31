/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { UserStats } from './types';
import TheorySection from './TheorySection';
import GamesSection from './GamesSection';
import ProgressStats from './ProgressStats';
import { audioSynth } from './AudioSynth';
import { BookOpen, Sparkles, Trophy, Award, Zap, HelpCircle, Heart, CheckCircle, RefreshCcw, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const LOCAL_STORAGE_KEY = 'spanish_gerundio_user_stats_v1';

export default function App() {
  const [activeTab, setActiveTab] = useState<'theory' | 'games' | 'stats'>('theory');
  const [stats, setStats] = useState<UserStats>({
    points: 0,
    streak: 0,
    completedGames: [],
    masteredPhrases: [],
    heartCount: 5
  });

  const [showWelcome, setShowWelcome] = useState<boolean>(true);

  // Hydrate stats on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed.points === 'number') {
          setStats(parsed);
          // If they have points, we can auto-hide welcome to give them directly to the app
          if (parsed.points > 0) {
            setShowWelcome(false);
          }
        }
      }
    } catch (e) {
      console.warn('LocalStorage load error:', e);
    }
  }, []);

  // Save stats on change
  const updateStats = (updater: (prev: UserStats) => UserStats) => {
    setStats((prev) => {
      const next = updater(prev);
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(next));
      } catch (e) {
        console.warn('LocalStorage save error:', e);
      }
      return next;
    });
  };

  const handleResetProgress = () => {
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch (e) {
      console.warn(e);
    }
    setStats({
      points: 0,
      streak: 0,
      completedGames: [],
      masteredPhrases: [],
      heartCount: 5
    });
    setShowWelcome(true);
    setActiveTab('theory');
  };

  const handleTabChange = (tab: 'theory' | 'games' | 'stats') => {
    audioSynth.playClick();
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-800 font-sans flex flex-col justify-between selection:bg-rose-100 selection:text-rose-900">
      
      {/* Upper navigation bar */}
      <header className="sticky top-0 z-45 bg-white border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-18 items-center">
            
            {/* Visual Logo */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-rose-600 rounded-lg flex items-center justify-center text-white font-bold shadow-xs">
                <span className="font-mono font-black text-sm tracking-tighter">Es</span>
              </div>
              <div>
                <h1 className="text-sm sm:text-base font-bold tracking-tight text-slate-900 flex items-center gap-1.5 font-serif">
                  Gerundio Pro <span className="text-[10px] font-sans font-semibold tracking-wider text-rose-600 bg-rose-50 border border-rose-100 px-1.5 py-0.2 rounded-full">Լեզու</span>
                </h1>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold hidden sm:block">
                  Լեզվի ուսուցման հարթակ
                </p>
              </div>
            </div>

            {/* Middle Nav Controls */}
            <nav className="flex items-center gap-1 bg-slate-50 p-1 rounded-xl border border-slate-100">
              <button
                onClick={() => handleTabChange('theory')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeTab === 'theory'
                    ? 'bg-white text-rose-600 shadow-3xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                id="btn-nav-theory"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Տեսություն</span>
              </button>

              <button
                onClick={() => handleTabChange('games')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeTab === 'games'
                    ? 'bg-white text-rose-600 shadow-3xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                id="btn-nav-games"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>6 Խաղեր</span>
              </button>

              <button
                onClick={() => handleTabChange('stats')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeTab === 'stats'
                    ? 'bg-white text-rose-600 shadow-3xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                id="btn-nav-stats"
              >
                <Trophy className="w-3.5 h-3.5" />
                <span>Առաջընթաց</span>
              </button>
            </nav>

            {/* Topbar User Profile badge */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-amber-50 border border-amber-100 px-3 py-1.5 rounded-full shrink-0">
                <span className="text-xs font-bold text-amber-600 font-mono">{stats.points}</span>
                <span className="text-xs">🌟</span>
              </div>
              {stats.streak > 0 && (
                <div className="hidden sm:flex items-center gap-1 bg-rose-50 border border-rose-100 px-3 py-1.5 rounded-full shrink-0">
                  <span className="text-xs font-bold text-rose-600 font-mono">{stats.streak}</span>
                  <Flame className="w-3.5 h-3.5 text-rose-500 fill-current" />
                </div>
              )}
            </div>

          </div>
        </div>
      </header>

      {/* Main page layout wrapper */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        
        {/* Onboarding welcome block */}
        <AnimatePresence>
          {showWelcome && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0, overflow: 'hidden' }}
              className="bg-white border border-slate-200 rounded-2xl p-6 mb-8 shadow-xs relative overflow-hidden"
              id="welcome-onboarding-panel"
            >
              <div className="absolute right-0 top-0 w-32 h-32 bg-rose-50 opacity-20 hover:opacity-30 rounded-full blur-2xl transform translate-x-12 -translate-y-12"></div>
              <button
                onClick={() => {
                  audioSynth.playClick();
                  setShowWelcome(false);
                }}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200/80 px-2.5 py-1 rounded-lg text-xs transition-colors cursor-pointer font-bold"
                id="btn-hide-welcome"
              >
                Փակել ✕
              </button>

              <div className="max-w-3xl">
                <span className="text-[10px] uppercase tracking-widest bg-rose-50 border border-rose-100 px-2.5 py-1 rounded-md font-bold text-rose-600 shadow-3xs">
                  Բարի Գալուստ Բուլդոկ
                </span>
                <h2 className="text-2xl font-serif font-bold mt-3 tracking-tight text-slate-900 underline decoration-rose-200 underline-offset-4">
                  Իսպաներեն Gerundio խոնարհումներն ու կառուցվածքները
                </h2>
                <p className="text-sm text-slate-650 leading-relaxed mt-3">
                  Իսպաներենում շարունակական գործողությունները կազմվում են <span className="text-rose-600 font-mono font-bold bg-rose-50/50 px-1 py-0.5 rounded">Gerundio</span> (օրինակ՝ hablando, comiendo, viviendo, leyendo) դերբայներով։ Այս հավելվածի օգնությամբ դուք կսովորեք 5 ամենակարևոր կառուցվածքները, որոնք լայնորեն կիրառվում են Իսպանիայում և Լատինական Ամերիկայում, ինչպես նաև կկարողանաք ամրապնդել ձեր գիտելիքները <span className="font-semibold text-rose-700 underline decoration-rose-300 decoration-2">6 ինտերակտիվ խաղերով</span>:
                </p>

                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() => {
                      audioSynth.playClick();
                      setShowWelcome(false);
                    }}
                    className="bg-rose-600 text-white font-bold px-5 py-2.5 rounded-xl text-xs hover:bg-rose-700 transition-colors shadow-2xs cursor-pointer"
                    id="btn-start-exploring"
                  >
                    Սկսե՛լ Սովորել
                  </button>
                  <button
                    onClick={() => {
                      audioSynth.playClick();
                      setActiveTab('games');
                      setShowWelcome(false);
                    }}
                    className="border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 px-5 py-2.5 rounded-xl text-xs transition-colors cursor-pointer font-bold"
                    id="btn-start-games-direct"
                  >
                    Անմիջապես Խաղալ
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content routing based on selection state */}
        <div className="mt-2">
          <AnimatePresence mode="wait">
            
            {activeTab === 'theory' && (
              <motion.div
                key="theory-panel"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <TheorySection />
              </motion.div>
            )}

            {activeTab === 'games' && (
              <motion.div
                key="games-panel"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <GamesSection stats={stats} onUpdateStats={updateStats} />
              </motion.div>
            )}

            {activeTab === 'stats' && (
              <motion.div
                key="stats-panel"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <ProgressStats stats={stats} onResetProgress={handleResetProgress} />
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </main>

      {/* Styled Footer */}
      <footer className="bg-white border-t border-gray-150 py-8 text-center text-xs text-gray-400 mt-12">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="font-semibold text-gray-500">
            © 2026 Իսպաներեն Gerundio - Ուսումնական Հավելված (Իսպաներեն հայախոսների համար) 
          </p>
          <p className="text-[10px] text-gray-400 leading-relaxed max-w-md mx-auto">
            Կառուցվածքներ՝ estar + gerundio • seguir + gerundio • llevar + gerundio • ir + gerundio • venir + gerundio
          </p>
        </div>
      </footer>

    </div>
  );
}
