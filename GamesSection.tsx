/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { GAMES_DATA } from './data';
import { GameConfig, QuizQuestion, UserStats } from './types';
import { audioSynth } from './AudioSynth';
import { Play, RotateCcw, ArrowLeft, Trophy, CheckCircle2, XCircle, Heart, Award, ArrowRight, Lightbulb, RefreshCw, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GamesSectionProps {
  stats: UserStats;
  onUpdateStats: (updater: (prev: UserStats) => UserStats) => void;
}

export default function GamesSection({ stats, onUpdateStats }: GamesSectionProps) {
  const [activeGame, setActiveGame] = useState<GameConfig | null>(null);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  
  // For reordering (word scramble) games
  const [shuffledWords, setShuffledWords] = useState<string[]>([]);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);

  // Dialog state
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [quizState, setQuizState] = useState<'lobby' | 'playing' | 'completed' | 'gameover'>('lobby');
  const [sessionPoints, setSessionPoints] = useState<number>(0);
  const [sessionHearts, setSessionHearts] = useState<number>(5);

  const currentQuestion = activeGame ? activeGame.questions[currentIdx] : null;

  // Sound helpers
  const playClick = () => audioSynth.playClick();

  // Initialize Word Scramble question helper
  useEffect(() => {
    if (activeGame && currentQuestion && currentQuestion.type === 'reorder') {
      // options is already array of scrambled words
      setShuffledWords([...currentQuestion.options]);
      setSelectedWords([]);
    }
    setSelectedOpt(null);
    setIsSubmitted(false);
    setShowExplanation(false);
  }, [currentIdx, currentQuestion]);

  const handleStartGame = (game: GameConfig) => {
    playClick();
    setActiveGame(game);
    setCurrentIdx(0);
    setQuizState('playing');
    setSessionPoints(0);
    setSessionHearts(5);
  };

  const handleWordClick = (word: string) => {
    playClick();
    setSelectedWords(prev => [...prev, word]);
    setShuffledWords(prev => prev.filter(w => w !== word));
  };

  const handleRemoveWord = (word: string) => {
    playClick();
    setShuffledWords(prev => [...prev, word]);
    setSelectedWords(prev => prev.filter(w => w !== word));
  };

  const handleResetReorder = () => {
    playClick();
    if (currentQuestion) {
      setShuffledWords([...currentQuestion.options]);
      setSelectedWords([]);
    }
  };

  const handleSubmitAnswer = () => {
    if (isSubmitted || !currentQuestion) return;

    let userAns = '';
    let isAnsCorrect = false;

    if (currentQuestion.type === 'reorder') {
      userAns = selectedWords.join(' ');
      // Correct answer is spaced string, compare case-insensitive or direct
      isAnsCorrect = userAns.trim().toLowerCase() === currentQuestion.correctAnswer.trim().toLowerCase();
    } else {
      if (!selectedOpt) return;
      userAns = selectedOpt;
      isAnsCorrect = selectedOpt === currentQuestion.correctAnswer;
    }

    setIsSubmitted(true);
    setIsCorrect(isAnsCorrect);
    setShowExplanation(true);

    if (isAnsCorrect) {
      audioSynth.playCorrect();
      setSessionPoints(prev => prev + 15);
      onUpdateStats(prev => ({
        ...prev,
        points: prev.points + 15,
        masteredPhrases: Array.from(new Set([...prev.masteredPhrases, currentQuestion.questionArm]))
      }));
    } else {
      audioSynth.playWrong();
      const nextHearts = sessionHearts - 1;
      setSessionHearts(nextHearts);
      if (nextHearts <= 0) {
        setQuizState('gameover');
      }
    }
  };

  const handleNextQuestion = () => {
    playClick();
    if (!activeGame) return;
    
    if (currentIdx + 1 < activeGame.questions.length) {
      setCurrentIdx(prev => prev + 1);
    } else {
      // Game Win!
      audioSynth.playGameComplete();
      setQuizState('completed');
      onUpdateStats(prev => {
        const nextCompleted = Array.from(new Set([...prev.completedGames, activeGame.id]));
        const addedStreak = prev.completedGames.includes(activeGame.id) ? 0 : 1;
        return {
          ...prev,
          completedGames: nextCompleted,
          streak: prev.streak + addedStreak
        };
      });
    }
  };

  const handleReturnLobby = () => {
    playClick();
    setActiveGame(null);
    setQuizState('lobby');
  };

  return (
    <div className="space-y-8" id="games-section">
      <AnimatePresence mode="wait">
        
        {/* LOBBY VIEW - 6 Games Selection */}
        {quizState === 'lobby' && (
          <motion.div
            key="lobby-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            <div className="flex justify-between items-center bg-[#FAF8F6] rounded-2xl p-6 border border-slate-200 shadow-3xs">
              <div>
                <h3 className="text-xl font-serif font-bold text-slate-900 tracking-tight underline decoration-rose-200 underline-offset-4 decoration-2">
                  Ինտերակտիվ Գիտելիքի Ստուգում (6 Խաղեր)
                </h3>
                <p className="text-sm text-slate-600 mt-3 max-w-2xl leading-relaxed font-medium">
                  Արդյո՞ք պատրաստ ես ստուգել գիտելիքներդ Իսպաներեն Gerundio-ի բոլոր 5 կառուցվածքներից: Ընտրի՛ր ստորև տրված խաղերից որևէ մեկը, վաստակի՛ր միավորներ և բացի՛ր մեդալներ:
                </p>
              </div>
              <div className="hidden sm:block shrink-0">
                <span className="p-4 bg-white text-rose-600 rounded-2xl border border-slate-200/80 shadow-3xs flex items-center justify-center font-bold text-base font-mono">
                  {stats.points} 🌟
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GAMES_DATA.map((game) => {
                const isCompleted = stats.completedGames.includes(game.id);
                let colorTheme = 'border-slate-200 border-l-4 hover:border-l-rose-500';
                if (game.color === 'emerald') colorTheme = 'border-l-emerald-500 hover:shadow-emerald-100/30';
                else if (game.color === 'indigo') colorTheme = 'border-l-rose-500 hover:shadow-rose-100/30';
                else if (game.color === 'amber') colorTheme = 'border-l-amber-500 hover:shadow-amber-100/30';
                else if (game.color === 'rose') colorTheme = 'border-l-rose-500 hover:shadow-rose-100/30';
                else if (game.color === 'violet') colorTheme = 'border-l-violet-500 hover:shadow-violet-100/30';
                else if (game.color === 'sky') colorTheme = 'border-l-rose-450 hover:shadow-rose-100/20';

                return (
                  <div
                    key={game.id}
                    className={`bg-white rounded-2xl p-6 border border-slate-200/70 shadow-3xs hover:shadow-xs transition-colors flex flex-col justify-between group ${colorTheme}`}
                    id={`game-card-${game.id}`}
                  >
                    <div>
                      <div className="flex justify-between items-start">
                        <span className="text-3xl p-2 bg-slate-50 border border-slate-100 rounded-xl block shadow-3xs">
                          {game.emoji}
                        </span>
                        {isCompleted && (
                          <span className="text-xs bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Անցած
                          </span>
                        )}
                      </div>

                      <h4 className="text-base font-bold text-slate-900 mt-4 tracking-tight font-serif">
                        Խաղ {game.id}. {game.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed font-medium min-h-[48px]">
                        {game.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-mono">
                        {game.questions.length} Հարցեր
                      </span>
                      <button
                        onClick={() => handleStartGame(game)}
                        className="flex items-center gap-1.5 px-4.5 py-2 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 transition-colors shadow-2xs group-hover:-translate-y-0.5 cursor-pointer"
                        id={`btn-game-start-${game.id}`}
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        Խաղալ
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* ACTIVE GAME HOST (PLAYING MODE) */}
        {quizState === 'playing' && activeGame && currentQuestion && (
          <motion.div
            key="playing-view"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-2xl mx-auto bg-white rounded-3xl border border-gray-150 shadow-sm overflow-hidden"
          >
            {/* Game Dashboard Header */}
            <div className="bg-slate-900 text-white p-6 flex items-center justify-between">
              <button
                onClick={handleReturnLobby}
                className="p-2 hover:bg-white/10 rounded-xl transition-colors cursor-pointer text-slate-300"
                id="btn-return-lobby"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="text-center flex-1 mx-4">
                <span className="text-xs uppercase tracking-wider text-rose-405 font-bold font-serif">
                  {activeGame.title}
                </span>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-mono font-bold mt-1">
                  Հարց {currentIdx + 1} / {activeGame.questions.length}
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <div className="flex items-center gap-1 bg-red-500/15 border border-red-500/20 px-2.5 py-1 rounded-lg animate-pulse">
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                  <span className="text-xs font-bold font-mono text-red-400">{sessionHearts}</span>
                </div>
                <div className="bg-amber-500/15 border border-amber-500/20 px-2.5 py-1 rounded-lg text-amber-400 font-bold font-mono text-xs">
                  {sessionPoints} 🌟
                </div>
              </div>
            </div>

            {/* Progress line */}
            <div className="w-full bg-slate-800 h-1">
              <div
                className="bg-rose-500 h-1 transition-all duration-350"
                style={{ width: `${((currentIdx) / activeGame.questions.length) * 100}%` }}
              ></div>
            </div>

            {/* Question Body */}
            <div className="p-8 space-y-6">
              
              {/* ARM PROMPT OR SCENARIO CARD */}
              <div className="bg-[#FAF8F6] border border-slate-200 p-6 rounded-2xl relative">
                <span className="absolute -top-3 left-4 text-[9px] font-bold uppercase tracking-widest bg-rose-600 text-white px-2.5 py-0.5 rounded-full">
                  Հարցադրում
                </span>
                <p className="text-base font-serif font-bold text-slate-900 whitespace-pre-line leading-relaxed italic mt-1">
                  «{currentQuestion.questionArm}»
                </p>
                {currentQuestion.questionContext && (
                  <p className="text-sm font-mono font-semibold text-rose-700 bg-white p-3 rounded-lg border border-slate-150 mt-3 flex items-center gap-2">
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-100 border border-rose-200 text-rose-850 font-bold uppercase tracking-wider font-sans">ԼՐԱՑՆԵԼ</span>
                    {currentQuestion.questionContext}
                  </p>
                )}
              </div>

              {/* INTERACTION AREA */}

              {/* 1. Word Reordering Layout */}
              {currentQuestion.type === 'reorder' ? (
                <div className="space-y-4">
                  <div className="border border-dashed border-slate-200 rounded-xl p-4 min-h-[72px] bg-slate-50 flex flex-wrap gap-2 items-center justify-center">
                    {selectedWords.length === 0 ? (
                      <span className="text-xs text-slate-400 font-semibold font-sans">
                        Կտտացրո՛ւ ստորև տրված բառերի վրա՝ նախադասությունը կազմելու համար:
                      </span>
                    ) : (
                      selectedWords.map((word, wIdx) => (
                        <button
                          key={wIdx}
                          disabled={isSubmitted}
                          onClick={() => handleRemoveWord(word)}
                          className="px-3.5 py-2 rounded-xl bg-white border border-rose-200 text-rose-900 font-mono font-bold text-xs hover:border-red-400 transition-all shadow-3xs cursor-pointer flex items-center gap-1"
                        >
                          {word}
                        </button>
                      ))
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center pt-2">
                     {shuffledWords.map((word, wIdx) => (
                      <button
                        key={wIdx}
                        disabled={isSubmitted}
                        onClick={() => handleWordClick(word)}
                        className="px-3 py-2 rounded-xl bg-white border border-slate-250 text-slate-700 font-mono text-xs hover:border-rose-450 hover:bg-rose-50/20 active:scale-95 transition-all shadow-3xs cursor-pointer"
                        id={`btn-scrambled-${wIdx}`}
                      >
                        {word}
                      </button>
                    ))}
                  </div>

                  {!isSubmitted && (
                    <div className="flex justify-end gap-2 pt-2">
                      <button
                        onClick={handleResetReorder}
                        className="px-3 py-1.5 text-xs text-slate-500 font-medium border border-slate-200 rounded-lg hover:bg-slate-55 flex items-center gap-1 cursor-pointer"
                        id="btn-scramble-reset"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        Մաքրել
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                /* 2. Multiple Choice Layout */
                <div className="grid grid-cols-1 gap-3">
                  {currentQuestion.options.map((opt, oIdx) => {
                    const isSelected = selectedOpt === opt;
                    let blockStyle = 'border-slate-200 hover:bg-slate-50 hover:border-slate-350';
                    
                    if (isSubmitted) {
                      if (opt === currentQuestion.correctAnswer) {
                        blockStyle = 'bg-emerald-50 border-emerald-450 text-emerald-950 font-semibold';
                      } else if (isSelected) {
                        blockStyle = 'bg-red-50 border-red-400 text-red-950 font-semibold';
                      } else {
                        blockStyle = 'border-slate-100 opacity-60';
                      }
                    } else if (isSelected) {
                      blockStyle = 'bg-rose-50 border-rose-450 text-rose-950 font-bold shadow-3xs';
                    }

                    return (
                      <button
                        key={oIdx}
                        disabled={isSubmitted}
                        onClick={() => {
                          playClick();
                          setSelectedOpt(opt);
                        }}
                        className={`w-full text-left p-4.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer font-sans ${blockStyle}`}
                        id={`btn-opt-${oIdx}`}
                      >
                        <span className="text-sm font-semibold">{opt}</span>
                        {isSubmitted && opt === currentQuestion.correctAnswer && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        )}
                        {isSubmitted && isSelected && opt !== currentQuestion.correctAnswer && (
                          <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Feedback Explanation Frame */}
              <AnimatePresence>
                {showExplanation && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`rounded-2xl p-5 border ${
                      isCorrect ? 'bg-emerald-50/55 border-emerald-100' : 'bg-red-50/55 border-red-100'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-white rounded-xl shadow-3xs shrink-0">
                        {isCorrect ? (
                          <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                        ) : (
                          <XCircle className="w-6 h-6 text-red-600" />
                        )}
                      </div>
                      <div>
                        <h5 className={`text-sm font-black ${isCorrect ? 'text-emerald-900' : 'text-red-900'}`}>
                          {isCorrect ? 'Ճիշտ է՛' : 'Սխալ է...'}
                        </h5>
                        <p className="text-xs text-gray-700 leading-relaxed mt-1">
                          {currentQuestion.explanationArm}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Footer controller buttons */}
              <div className="flex gap-3 justify-between items-center pt-2">
                <div>
                   {!isSubmitted && currentQuestion.hintArm && (
                    <div className="flex items-center gap-1.5 text-xs text-rose-700 font-semibold font-sans">
                      <Lightbulb className="w-4 h-4 shrink-0 text-amber-500 fill-amber-100" />
                      <span>Հուշում. {currentQuestion.hintArm}</span>
                    </div>
                  )}
                </div>

                {!isSubmitted ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={
                      (currentQuestion.type === 'reorder' && selectedWords.length === 0) ||
                      (currentQuestion.type !== 'reorder' && !selectedOpt)
                    }
                    className={`px-6 py-3 rounded-2xl font-bold text-sm bg-rose-600 text-white shadow-xs hover:bg-rose-700 cursor-pointer disabled:opacity-40 disabled:pointer-events-none transition-all`}
                    id="btn-quiz-check"
                  >
                    Ստուգել
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="flex items-center gap-1 px-5 py-3 rounded-2xl font-bold text-sm bg-slate-900 text-white shadow-xs hover:bg-black transition-colors cursor-pointer"
                    id="btn-quiz-next"
                  >
                    {currentIdx + 1 === activeGame.questions.length ? 'Ավարտել' : 'Հաջորդը'}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* COMPLETED SUCCESS SCREEN */}
        {quizState === 'completed' && activeGame && (
          <motion.div
            key="success-view"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-md mx-auto bg-white rounded-3xl border border-slate-200 p-8 shadow-sm text-center space-y-6"
          >
            <div className="mx-auto w-20 h-20 bg-rose-50 border border-rose-100 text-rose-600 rounded-full flex items-center justify-center shadow-3xs">
              <Trophy className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase font-bold text-rose-600 tracking-wider">
                Անցած է՛
              </span>
              <h3 className="text-xl font-serif font-bold text-slate-900">
                Շնորհավորո՛ւմ ենք
              </h3>
              <p className="text-sm text-slate-550 leading-relaxed max-w-sm mx-auto">
                Դուք հաջողությամբ անցաք <span className="font-semibold text-slate-800">«Խաղ {activeGame.id}. {activeGame.title}»</span>-ը և վաստակեցիք նոր միավորներ!
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-150 rounded-2xl p-4 grid grid-cols-2 gap-4">
              <div className="text-center">
                <span className="text-xs text-slate-400 block font-sans font-semibold">Վաստակած միավորներ</span>
                <span className="text-base font-extrabold text-rose-600 font-mono">+{sessionPoints} 🌟</span>
              </div>
              <div className="text-center">
                 <span className="text-xs text-slate-400 block font-sans font-semibold">Պահպանված կյանքեր</span>
                <span className="text-base font-extrabold text-red-500 font-mono">{sessionHearts} ❤️</span>
              </div>
            </div>

            <button
              onClick={handleReturnLobby}
              className="w-full py-3 px-6 rounded-2xl bg-rose-600 text-white font-bold text-sm shadow-xs hover:bg-rose-700 transition-all cursor-pointer"
              id="btn-complete-lobby"
            >
              Վերադառնալ
            </button>
          </motion.div>
        )}

        {/* GAMEOVER SCREEN */}
        {quizState === 'gameover' && activeGame && (
          <motion.div
            key="gameover-view"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-md mx-auto bg-white rounded-3xl border border-slate-200 p-8 shadow-sm text-center space-y-6"
          >
            <div className="mx-auto w-20 h-20 bg-red-50 border border-red-100 text-red-600 rounded-full flex items-center justify-center shadow-3xs">
              <Heart className="w-10 h-10 fill-current" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase font-bold text-red-650 tracking-wider">
                Խաղն ավարտվեց
              </span>
              <h3 className="text-xl font-serif font-bold text-slate-900">
                Սպառեցիք բոլոր կյանքերը
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed max-w-sm mx-auto">
                Մի՛ ընկճվեք: Կրկին կարդացեք տեսական մասը և փորձե՛ք նորից՝ ձեր սխալները հասկանալու համար:
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => handleStartGame(activeGame)}
                className="w-1/2 py-3 px-6 rounded-2xl bg-rose-600 text-white font-bold text-sm shadow-xs hover:bg-rose-700 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                id="btn-retry-game"
              >
                <RotateCcw className="w-4 h-4" />
                Կրկնել
              </button>
              <button
                onClick={handleReturnLobby}
                className="w-1/2 py-3 px-6 rounded-2xl bg-slate-100 text-slate-700 border border-slate-200 font-bold text-sm hover:bg-slate-200/80 transition-all cursor-pointer"
                id="btn-fail-lobby"
              >
                Վերադառնալ
              </button>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
