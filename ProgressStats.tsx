/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { UserStats } from './types';
import { GAMES_DATA } from './data';
import { Award, Zap, Shield, Sparkles, Dumbbell, Flame, CheckCircle2, Bookmark, BookOpen } from 'lucide-react';

interface ProgressStatsProps {
  stats: UserStats;
  onResetProgress?: () => void;
}

export default function ProgressStats({ stats, onResetProgress }: ProgressStatsProps) {
  const completedCount = stats.completedGames.length;
  const completionPercent = Math.round((completedCount / GAMES_DATA.length) * 100);

  const BADGES = [
    {
      id: 'b1',
      name: 'Gerundio Նորեկ',
      desc: 'Առաջին անգամ հաջողությամբ ավարտի՛ր որևէ խաղ:',
      icon: Shield,
      unlocked: completedCount >= 1,
      color: 'bg-blue-50 text-blue-600 border-blue-105'
    },
    {
      id: 'b2',
      name: 'Կառուցողական Վարպետ',
      desc: 'Ավարտի՛ր Word Scramble (Խաղ 3) նախադասություններ կազմելու խաղը:',
      icon: Dumbbell,
      unlocked: stats.completedGames.includes(3),
      color: 'bg-amber-50 text-amber-600 border-amber-105'
    },
    {
      id: 'b3',
      name: 'Երկխոսության Ասպետ',
      desc: 'Ավարտի՛ր Լուսիայի և Կառլոսի Երկխոսությունը (Խաղ 4-ը):',
      icon: Sparkles,
      unlocked: stats.completedGames.includes(4),
      color: 'bg-rose-50 text-rose-600 border-rose-105'
    },
    {
      id: 'b4',
      name: 'Սրբագրիչ',
      desc: 'Հերոսաբար գտի՛ր քերականական բոլոր կոպիտ սխալները Խաղ 5-ում:',
      icon: Award,
      unlocked: stats.completedGames.includes(5),
      color: 'bg-violet-50 text-violet-600 border-violet-105'
    },
    {
      id: 'b5',
      name: 'Կայծակնային Թարգմանիչ',
      desc: 'Հաջողությամբ ավարտի՛ր Արագ Թարգմանության Մարտահրավերը (Խաղ 6-ը):',
      icon: Zap,
      unlocked: stats.completedGames.includes(6),
      color: 'bg-sky-50 text-sky-600 border-sky-101'
    },
    {
      id: 'b6',
      name: 'Gerundio Գերագույն Մագիստրոս',
      desc: 'Ավարտի՛ր բոլոր 6 ստուգողական խաղերը:',
      icon: BookOpen,
      unlocked: completedCount >= 6,
      color: 'bg-rose-50 text-rose-600 border-rose-220'
    }
  ];

  return (
    <div className="space-y-8" id="progress-section">
      
      {/* Primary stats widget grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Metric 1: Total Points */}
        <div className="bg-[#FAF8F6] rounded-2xl p-6 border border-slate-200 shadow-3xs flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
              Ընդհանուր միավորներ
            </span>
            <h4 className="text-3xl font-black text-rose-600 font-mono tracking-tight">
              {stats.points} 🌟
            </h4>
            <p className="text-xs text-rose-700 font-semibold font-sans">
              +{stats.masteredPhrases.length * 15} հաջող պատասխաններից
            </p>
          </div>
          <div className="p-4 bg-white border border-slate-200 text-rose-600 rounded-2xl shadow-3xs">
            <Award className="w-8 h-8" />
          </div>
        </div>

        {/* Metric 2: Streak info */}
        <div className="bg-[#FAF8F6] rounded-2xl p-6 border border-slate-200 shadow-3xs flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
              Օրական սովորելու շղթա
            </span>
            <h4 className="text-3xl font-black text-slate-900 font-mono tracking-tight flex items-center gap-1.5">
              {stats.streak} <span className="text-amber-550 text-2xl animate-bounce">🔥</span>
            </h4>
            <p className="text-xs text-slate-500 font-medium">
              Միավորների անընդհատ ստացումներ
            </p>
          </div>
          <div className="p-4 bg-white border border-slate-200 text-amber-500 rounded-2xl shadow-3xs">
            <Zap className="w-8 h-8 fill-amber-50" />
          </div>
        </div>

        {/* Metric 3: Circle completion indicator */}
        <div className="bg-[#FAF8F6] rounded-2xl p-6 border border-slate-200 shadow-3xs flex items-center justify-between">
          <div className="space-y-1 flex-1">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
              Ավարտված խաղեր
            </span>
            <h4 className="text-3xl font-black text-slate-900 font-mono tracking-tight">
              {completedCount} / {GAMES_DATA.length}
            </h4>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-24 bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-2" style={{ width: `${completionPercent}%` }}></div>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 font-mono">{completionPercent}%</span>
            </div>
          </div>
          <div className="p-4 bg-white border border-slate-200 text-emerald-600 rounded-2xl shadow-3xs shrink-0 ml-2">
            <CheckCircle2 className="w-8 h-8" />
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left column: Achievements (Badges) */}
        <div className="lg:col-span-8 space-y-4">
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block px-1">
            Իմ Ձեռքբերումները (Badge achievements)
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BADGES.map((badge) => {
              const IconComp = badge.icon;
              return (
                <div
                  key={badge.id}
                  className={`border rounded-2xl p-4 flex gap-4 transition-colors items-start bg-white shadow-3xs ${
                    badge.unlocked ? 'border-slate-200' : 'border-slate-100 opacity-55'
                  }`}
                  id={`badge-card-${badge.id}`}
                >
                  <div className={`p-3 rounded-xl shrink-0 border shadow-3xs ${
                    badge.unlocked ? badge.color : 'bg-slate-50 text-slate-300 border-slate-100'
                  }`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className={`text-sm font-bold ${badge.unlocked ? 'text-slate-905 font-serif' : 'text-slate-400'}`}>
                      {badge.name}
                    </h5>
                    <p className="text-[11px] text-slate-550 mt-1 leading-relaxed">
                      {badge.desc}
                    </p>
                    {badge.unlocked ? (
                      <span className="text-[10px] inline-block font-bold text-emerald-650 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md mt-2">
                        Բացված է՛
                      </span>
                    ) : (
                      <span className="text-[10px] inline-block font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md mt-2">
                        Փակ է
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right column: Mastered sentences / summary */}
        <div className="lg:col-span-4 space-y-4">
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block px-1">
            Յուրացված արտահայտություններ
          </span>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-3xs space-y-4">
            {stats.masteredPhrases.length === 0 ? (
              <div className="text-center py-8 space-y-2">
                <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
                <p className="text-xs text-slate-400 leading-relaxed max-w-[200px] mx-auto font-sans font-medium">
                  Դուք դեռ չունեք յուրացված արտահայտություններ: Ավարտե՛ք խաղերն ու ստուգումները դրանք ակտիվացնելու համար:
                </p>
              </div>
            ) : (
              <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {stats.masteredPhrases.map((phrase, idx) => (
                  <div key={idx} className="bg-[#FAF8F6] p-3 rounded-xl border border-slate-150 flex items-start gap-2.5">
                    <Bookmark className="w-3.5 h-3.5 text-rose-650 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 leading-relaxed font-semibold">
                      {phrase}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Total recap message card */}
            <div className="bg-slate-900 text-slate-50 p-4.5 rounded-xl border border-slate-950 flex flex-col justify-between shadow-3xs">
              <div>
                <span className="text-[9px] uppercase font-bold tracking-widest text-rose-450">
                  Խորհուրդ
                </span>
                <p className="text-xs font-serif text-slate-200 mt-2 leading-relaxed italic">
                  «Gerundio»-ն իսպաներենի կմախքային կառույցներից է, որը կիրառվում է գրեթե ցանկացած խոսակցության մեջ: Կրկնի՛ր ստացված գիտելիքներդ ամեն օր:
                </p>
              </div>
            </div>

            {/* Reset helper */}
            {onResetProgress && (
              <button
                onClick={() => {
                  if (confirm('Համոզվա՞ծ եք, որ ուզում եք զրոյացնել ձեր ողջ առաջընթացը:')) {
                    onResetProgress();
                  }
                }}
                className="w-full text-center text-xs text-red-650 hover:text-red-750 font-bold hover:underline py-2 border border-dashed border-red-100 rounded-xl hover:bg-red-50/20 cursor-pointer"
                id="btn-progress-reset"
              >
                Զրոյացնել Առաջընթացը
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
