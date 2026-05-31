/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GrammaticalConstruction, GameConfig } from './types';

export const REGULAR_RULES = [
  {
    ending: '-AR',
    suffix: '-ando',
    process: 'Հանում ենք -ar, ավելացնում -ando',
    examples: [
      { infinitive: 'hablar (խոսել)', gerundio: 'hablando (խոսելով / խոսող / խոսում)' },
      { infinitive: 'estudiar (սովորել)', gerundio: 'estudiando (սովորելով / սովորում)' },
      { infinitive: 'bailar (պարել)', gerundio: 'bailando (պարելով / պարում)' }
    ]
  },
  {
    ending: '-ER',
    suffix: '-iendo',
    process: 'Հանում ենք -er, ավելացնում -iendo',
    examples: [
      { infinitive: 'comer (ուտել)', gerundio: 'comiendo (ուտելով / ուտում)' },
      { infinitive: 'beber (խմել)', gerundio: 'bebiendo (խմելով / խմում)' },
      { infinitive: 'aprender (սովորել)', gerundio: 'aprendiendo (սովորելով / սովորում)' }
    ]
  },
  {
    ending: '-IR',
    suffix: '-iendo',
    process: 'Հանում ենք -ir, ավելացնում -iendo',
    examples: [
      { infinitive: 'vivir (ապրել)', gerundio: 'viviendo (ապրելով / ապրում)' },
      { infinitive: 'escribir (գրել)', gerundio: 'escribiendo (գրելով / գրում)' },
      { infinitive: 'salir (դուրս գալ)', gerundio: 'saliendo (դուրս գալով / դուրս գալիս)' }
    ]
  }
];

export const IRREGULAR_VERBS = [
  {
    verb: 'Leer (կարդալ)',
    gerundio: 'leyendo',
    explanation: 'Փոխարինվում է -y-ով՝ leiendo-ի փոխարեն, որպեսզի երեք ձայնավոր իրար հետ չլինեն:',
    exampleSpanish: 'Estoy leyendo un libro.',
    exampleArmenian: 'Ես գիրք եմ կարդում:'
  },
  {
    verb: 'Ir (գնալ)',
    gerundio: 'yendo',
    explanation: 'Բացառիկ անկանոն ձև է՝ iendo-ի փոխարեն:',
    exampleSpanish: 'Estoy yendo a casa.',
    exampleArmenian: 'Ես տուն եմ գնում:'
  },
  {
    verb: 'Dormir (քնել)',
    gerundio: 'durmiendo',
    explanation: 'o-ն դառնում է u արմատական հնչյունափոխության պատճառով:',
    exampleSpanish: 'El niño está durmiendo.',
    exampleArmenian: 'Երեխան քնած է (քնում է):'
  },
  {
    verb: 'Pedir (խնդրել)',
    gerundio: 'pidiendo',
    explanation: 'e-ն դառնում է i արմատական հնչյունափոխության պատճառով:',
    exampleSpanish: 'Estoy pidiendo ayuda.',
    exampleArmenian: 'Ես օգնություն եմ խնդրում:'
  },
  {
    verb: 'Decir (ասել)',
    gerundio: 'diciendo',
    explanation: 'e-ն դառնում է i:',
    exampleSpanish: 'Estoy diciendo la verdad.',
    exampleArmenian: 'Ես ճշմարտությունն եմ ասում:'
  },
  {
    verb: 'Venir (գալ)',
    gerundio: 'viniendo',
    explanation: 'e-ն դառնում է i:',
    exampleSpanish: 'Carlos está viniendo a casa.',
    exampleArmenian: 'Կառլոսը գալիս է տուն:'
  }
];

export const CONSTRUCTIONS: GrammaticalConstruction[] = [
  {
    id: 'estar',
    name: 'Estar + Gerundio',
    spanName: 'estar + gerundio',
    color: 'emerald',
    meaning: 'Գործողությունը կատարվում է հենց հիմա կամ տվյալ պահին (ներկա կամ անցյալ):',
    armenianMeaning: 'անում եմ / անում էի',
    conjugations: [
      { subject: 'Yo', form: 'estoy', armenian: 'ես հիմա' },
      { subject: 'Tú', form: 'estás', armenian: 'դու հիմա' },
      { subject: 'Él/Ella/Usted', form: 'está', armenian: 'նա հիմա' },
      { subject: 'Nosotros', form: 'estamos', armenian: 'մենք հիմա' },
      { subject: 'Vosotros', form: 'estáis', armenian: 'դուք հիմա' },
      { subject: 'Ellos/Ellas/Ustedes', form: 'están', armenian: 'նրանք հիմա' }
    ],
    explanation: `Օգտագործում ենք, երբ ուզում ենք շեշտել, որ գործողությունը հենց հիմա՝ խոսելու պահին ընթացքի մեջ է (Presente Continuo): Կարող է օգտագործվել նաև անցյալում (\`estaba + gerundio\`)՝ ցույց տալու համար, որ անցյալի կոնկրետ պահին գործողությունը ընթացքի մեջ էր:`,
    examples: [
      { spanish: 'Estoy estudiando.', armenian: 'Ես հիմա սովորում եմ / սովորելու ընթացքի մեջ եմ:' },
      { spanish: 'Ella está hablando por teléfono.', armenian: 'Նա հիմա հեռախոսով խոսում է:' },
      { spanish: 'Estamos viendo una película.', armenian: 'Մենք ֆիլմ ենք դիտում:' },
      { spanish: 'Ayer a las cinco estaba estudiando.', armenian: 'Երեկ ժամը հինգին ես սովորում էի (անցյալի տվյալ պահին):', explanation: 'Estaba + Gerundio անցյալի ձևն է' },
      { spanish: 'Cuando me llamaste, estaba durmiendo.', armenian: 'Երբ դու զանգեցիր, ես քնած էի:', explanation: 'Կատարված անցյալ գործողության պահին ընթացող գործողություն' }
    ],
    irregularTip: 'Սովորական Presente-ի (Estudio español - Ես սովորում եմ իսպաներեն ընդհանրապես որպես սովորություն) և Estar + Gerundio-ի (Estoy estudiando español - Ես հենց հիմա սովորում եմ) միջև տարբերությունը շատ կարևոր է:'
  },
  {
    id: 'seguir',
    name: 'Seguir + Gerundio',
    spanName: 'seguir + gerundio',
    color: 'indigo',
    meaning: 'Շարունակել անել ինչ-որ բան, որը սկսվել է անցյալում:',
    armenianMeaning: 'դեռ անում եմ / շարունակում եմ անել',
    conjugations: [
      { subject: 'Yo', form: 'sigo', armenian: 'ես դեռ / շարունակում եմ' },
      { subject: 'Tú', form: 'sigues', armenian: 'դու դեռ / շարունակում ես' },
      { subject: 'Él/Ella/Usted', form: 'sigue', armenian: 'նա դեռ / շարունակում է' },
      { subject: 'Nosotros', form: 'seguimos', armenian: 'մենք դեռ / շարունակում ենք' },
      { subject: 'Vosotros', form: 'seguís', armenian: 'դուք դեռ / շարունակում եք' },
      { subject: 'Ellos/Ellas/Ustedes', form: 'siguen', armenian: 'նրանք դեռ / շարունակում են' }
    ],
    explanation: `Այս կառույցը ցույց է տալիս, որ գործողությունը սկսվել է նախկինում և մինչև հիմա անդադար շարունակվում է: Ժխտականում նշանակում է՝ «այլևս չեմ անում» (\`no sigo estudiando\`):`,
    examples: [
      { spanish: 'Sigo estudiando español.', armenian: 'Ես շարունակում եմ իսպաներեն սովորել (դեռ սովորում եմ):' },
      { spanish: 'Lucía sigue trabajando.', armenian: 'Լուսիան շարունակում է աշխատել:' },
      { spanish: 'Ellos siguen viviendo en Madrid.', armenian: 'Նրանք դեռ ապրում են Մադրիդում:' },
      { spanish: 'No sigo estudiando francés.', armenian: 'Ես այլևս ֆրանսերեն չեմ սովորում (չեմ շարունակում սովորել):', explanation: 'Ժխտական կառույց' }
    ]
  },
  {
    id: 'llevar',
    name: 'Llevar + Gerundio',
    spanName: 'llevar + ժամանակ + gerundio',
    color: 'amber',
    meaning: 'Արդեն որոշակի ժամանակ է, ինչ կատարվում է տվյալ գործողությունը:',
    armenianMeaning: 'արդեն ... ժամանակ է, ինչ անում եմ',
    conjugations: [
      { subject: 'Yo', form: 'llevo (+ ժամանակ)', armenian: 'ես արդեն ... ժամանակ է' },
      { subject: 'Tú', form: 'llevas (+ ժամանակ)', armenian: 'դու արդեն ... ժամանակ է' },
      { subject: 'Él/Ella/Usted', form: 'lleva (+ ժամանակ)', armenian: 'նա արդեն ... ժամանակ է' },
      { subject: 'Nosotros', form: 'llevamos (+ ժամանակ)', armenian: 'մենք արդեն ... ժամանակ է' },
      { subject: 'Vosotros', form: 'lleváis (+ ժամանակ)', armenian: 'դուք արդեն ... ժամանակ է' },
      { subject: 'Ellos/Ellas/Ustedes', form: 'llevan (+ ժամանակ)', armenian: 'նրանք արդեն ... ժամանակ է' }
    ],
    explanation: `Շատ յուրօրինակ իսպաներեն կառույց: Բառացի նշանակում է՝ «տանել որոշակի ժամանակ՝ անելով մի բան»: Օրինակ՝ \`Llevo dos años estudiando español.\` -> «Ես տանում եմ 2 տարի սովորելով», բայց հայերեն թարգմանվում է բնական՝ «Արդեն երկու տարի է, ինչ սովորում եմ իսպաներեն»:`,
    examples: [
      { spanish: 'Llevo tres meses aprendiendo español.', armenian: 'Արդեն երեք ամիս է՝ իսպաներեն եմ սովորում:', literal: 'Llevo + tres meses + aprendiendo' },
      { spanish: 'Lucía lleva dos años viviendo en España.', armenian: 'Լուսիան արդեն երկու տարի է՝ ապրում է Իսպանիայում:' },
      { spanish: '¿Cuánto tiempo llevas viviendo aquí?', armenian: 'Արդեն ինչքա՞ն ժամանակ է՝ այստեղ ես ապրում:', explanation: 'Հարցական կառույց՝ ¿Cuánto tiempo + llevar...?' },
      { spanish: 'Llevo tres años viviendo aquí.', armenian: 'Արդեն երեք տարի է՝ այստեղ եմ ապրում:' }
    ]
  },
  {
    id: 'ir',
    name: 'Ir + Gerundio',
    spanName: 'ir + gerundio',
    color: 'rose',
    meaning: 'Գործողությունը կատարվում է կամաց-կամաց, աստիճանաբար, ընթացքում զարգանալով:',
    armenianMeaning: 'կամաց-կամաց / աստիճանաբար անում եմ',
    conjugations: [
      { subject: 'Yo', form: 'voy', armenian: 'ես կամաց-կամաց' },
      { subject: 'Tú', form: 'vas', armenian: 'դու կամաց-կամաց' },
      { subject: 'Él/Ella/Usted', form: 'va', armenian: 'նա աստիճանաբար' },
      { subject: 'Nosotros', form: 'vamos', armenian: 'մենք կամաց-կամաց' },
      { subject: 'Vosotros', form: 'vais', armenian: 'դուք կամաց-կամաց' },
      { subject: 'Ellos/Ellas/Ustedes', form: 'van', armenian: 'նրանք աստիճանաբար' }
    ],
    explanation: `Սա չի նշանակում պարզապես «հիմա եմ անում»։ Այն ցույց է տալիս դինամիկ զարգացում, էվոլյուցիա և աստիճանական առաջընթաց։ Օրինակ՝ \`Voy entendiendo.\` -> «Կամաց-կամաց սկսում եմ հասկանալ (միանգամից չէ, այլ աստիճանաբար)»:`,
    examples: [
      { spanish: 'Voy aprendiendo español.', armenian: 'Ես կամաց-կամաց իսպաներեն եմ սովորում (աստիճանաբար առաջ եմ գնում):' },
      { spanish: 'Voy entendiendo la gramática.', armenian: 'Ես կամաց-կամաց հասկանում եմ քերականությունը:' },
      { spanish: 'Lucía va mejorando su español.', armenian: 'Լուսիան աստիճանաբար բարելավում է իր իսպաներենը:' },
      { spanish: 'El clima va cambiando.', armenian: 'Եղանակը աստիճանաբար փոխվում է:' }
    ]
  },
  {
    id: 'venir',
    name: 'Venir + Gerundio',
    spanName: 'venir + gerundio',
    color: 'violet',
    meaning: 'Գործողությունը սկսվել է անցյալում, շարունակվել մինչև հիմա և ունի երկար, կուտակային ընթացք:',
    armenianMeaning: 'արդեն որոշ ժամանակ է (շարունակաբար) անում եմ',
    conjugations: [
      { subject: 'Yo', form: 'vengo', armenian: 'ես արդեն որոշ ժամանակ է՝' },
      { subject: 'Tú', form: 'vienes', armenian: 'դու արդեն որոշ ժամանակ է՝' },
      { subject: 'Él/Ella/Usted', form: 'viene', armenian: 'նա արդեն որոշ ժամանակ է՝' },
      { subject: 'Nosotros', form: 'venimos', armenian: 'մենք արդեն որոշ ժամանակ է՝' },
      { subject: 'Vosotros', form: 'venís', armenian: 'դուք արդեն որոշ ժամանակ է՝' },
      { subject: 'Ellos/Ellas/Ustedes', form: 'vienen', armenian: 'նրանք արդեն որոշ ժամանակ է՝' }
    ],
    explanation: `Այս ձևը ցույց է տալիս, որ գործողությունը անցյալում սկսվելուց հետո աստիճանաբար «եկել-հասել է» մինչև ներկա պահը: Հաճախ օգտագործվում է \`desde\` (ինչ-որ պահից սկսած) բառի կամ \`últimamente\` (վերջին շրջանում) բառի հետ:`,
    examples: [
      { spanish: 'Vengo estudiando español desde enero.', armenian: 'Ես հունվարից ի վեր (շարունակաբար) իսպաներեն եմ սովորում:', explanation: 'Շեշտում է երկար ընթացքը անցյալից ներկա' },
      { spanish: 'Venimos hablando de este tema desde ayer.', armenian: 'Մենք երեկվանից խոսում ենք այս թեմայի մասին:' },
      { spanish: 'Carlos viene trabajando mucho últimamente.', armenian: 'Կառլոսը վերջին ժամանակներս շատ է աշխատում:' },
      { spanish: 'Los precios vienen subiendo.', armenian: 'Գները վերջին շրջանում (շարունակաբար) բարձրանում են:' }
    ],
    irregularTip: 'Venir + Gerundio-ն նման է Llevar + Gerundio-ին, բայց Llevar-ի դեպքում պարտադիր նշում ենք կոնկրետ ժամանակահատվածը (լրացումը), իսկ Venir-ի դեպքում ավելի շատ շեշտում ենք անցյալից սկսված անդադար գործընթացը:'
  }
];

export const GAMES_DATA: GameConfig[] = [
  {
    id: 1,
    title: 'Կազմե՛ք Gerundio-ն',
    description: 'Տրված են անորոշ դերբայներ (Infinitive): Ընտրի՛ր կամ կազմի՛ր դրանց համապատասխան ճիշտ Gerundio ձևը regular կամ irregular կանոններով:',
    emoji: '📝',
    color: 'emerald',
    questions: [
      {
        id: 'g1_q1',
        type: 'conjugation',
        questionArm: 'Կազմե՛ք «hablar» (խոսել) բայի Gerundio ձևը:',
        options: ['hablando', 'habliendo', 'hablyendo', 'hablado'],
        correctAnswer: 'hablando',
        explanationArm: 'Քանի որ «hablar»-ը վերջանում է -AR-ով, մենք հեռացնում ենք -AR-ը և ավելացնում -ando վերջավորությունը: Ստացվում է hablando (խոսելիս / խոսելով):',
        hintArm: '-AR բայերի համար ավելացնում ենք -ando:'
      },
      {
        id: 'g1_q2',
        type: 'conjugation',
        questionArm: 'Կազմե՛ք «comer» (ուտել) բայի Gerundio ձևը:',
        options: ['comando', 'comiendo', 'comyendo', 'comido'],
        correctAnswer: 'comiendo',
        explanationArm: '«comer»-ը վերջանում է -ER-ով, ուստի հեռացնում ենք -ER-ը և ավելացնում -iendo վերջավորությունը: Ստացվում է comiendo:',
        hintArm: '-ER բայերի համար ավելացնում ենք -iendo:'
      },
      {
        id: 'g1_q3',
        type: 'conjugation',
        questionArm: 'Ինչպե՞ս կլինի «leer» (կարդալ) բայի Gerundio ձևը (ուշադրությո՛ւն անկանոնությանը):',
        options: ['leiendo', 'leyendo', 'leando', 'luyendo'],
        correctAnswer: 'leyendo',
        explanationArm: '«leer» բայի դեպքում, -iendo-ի «i» տառը գտնվելով երկու ձայնավորների միջև, վերածվում է «y»-ի, որպեսզի հեշտ արտասանվի: Ճիշտ ձևն է leyendo (ոչ թե leiendo):',
        hintArm: 'Երեք ձայնավոր իրար հետ չեն մնում, i-ն դառնում է y:'
      },
      {
        id: 'g1_q4',
        type: 'conjugation',
        questionArm: 'Կազմե՛ք «vivir» (ապրել) բայի Gerundio-ն:',
        options: ['vivando', 'viviendo', 'vivyendo', 'vivido'],
        correctAnswer: 'viviendo',
        explanationArm: '«vivir»-ը վերջանում է -IR-ով, ուստի հանում ենք -IR-ը և ավելացնում -iendo: Ստացվում է viviendo:',
        hintArm: '-IR բայերի համար ավելացնում ենք -iendo:'
      },
      {
        id: 'g1_q5',
        type: 'conjugation',
        questionArm: 'Կազմե՛ք «dormir» (քնել) բայի Gerundio ձևը (ուշադի՛ր եղեք ձայնավորի փոփոխությանը):',
        options: ['dormiendo', 'durmiendo', 'durmando', 'dormando'],
        correctAnswer: 'durmiendo',
        explanationArm: '«dormir» բայը անկանոն է, Gerundio կազմելիս արմատական «o» ձայնավորը վերածվում է «u»-ի: Ճիշտ ձևն է durmiendo:',
        hintArm: 'o-ն դառնում է u:'
      },
      {
        id: 'g1_q6',
        type: 'conjugation',
        questionArm: 'Կազմե՛ք «ir» (գնալ) բայի Gerundio ձևը:',
        options: ['iendo', 'yendo', 'irando', 'igo'],
        correctAnswer: 'yendo',
        explanationArm: '«ir» բայը չափազանց անկանոն է, նրա Gerundio ձևը դառնում է «yendo»:',
        hintArm: 'Բացառիկ կարճ անկանոն ձև է:'
      }
    ]
  },
  {
    id: 2,
    title: 'Ընտրի՛ր ճիշտ օժանդակ բայը',
    description: 'Հիմնվելով նախադասության հայերեն իմաստի և երանգների վրա, ընտրի՛ր ճիշտ օժանդակ բայը (estar, seguir, llevar, ir, venir):',
    emoji: '🎯',
    color: 'indigo',
    questions: [
      {
        id: 'g2_q1',
        type: 'multiple-choice',
        questionArm: '«Ես շարունակում եմ իսպաներեն սովորել»:',
        questionContext: '___ estudiando español.',
        options: ['Estoy', 'Sigo', 'Llevo', 'Voy'],
        correctAnswer: 'Sigo',
        explanationArm: '«Շարունակել» իմաստը իսպաներենում արտահայտվում է «seguir + gerundio» կառույցով: Առաջին դեմքով «seguir»-ը դառնում է «sigo»:',
        hintArm: '«Շարունակել» կամ «դեռ անել» = seguir.'
      },
      {
        id: 'g2_q2',
        type: 'multiple-choice',
        questionArm: '«Արդեն երկու տարի է՝ իսպաներեն եմ սովորում»:',
        questionContext: '___ dos años estudiando español.',
        options: ['Sigo', 'Estoy', 'Llevo', 'Vengo'],
        correctAnswer: 'Llevo',
        explanationArm: '«Արդեն ... ժամանակ է, ինչ անում եմ» կառույցի համար օգտագործում ենք «llevar + ժամանակ + gerundio»: Առաջին դեմքով՝ Llevo:',
        hintArm: 'Եթե տրված է կոնկրետ ժամանակահատված (dos años), օգտագործում ենք llevar:'
      },
      {
        id: 'g2_q3',
        type: 'multiple-choice',
        questionArm: '«Ես կամաց-կամաց իսպաներեն եմ սովորում»:',
        questionContext: '___ aprendiendo español poco a poco.',
        options: ['Voy', 'Vengo', 'Estoy', 'Sigo'],
        correctAnswer: 'Voy',
        explanationArm: '«Կամաց-կամաց, աստիճանաբար» գործողության զարգացումը ցույց է տրվում «ir + gerundio» կառույցով: Առաջին դեմքով՝ Voy:',
        hintArm: 'Աստիճանաբար առաջընթաց = ir.'
      },
      {
        id: 'g2_q4',
        type: 'multiple-choice',
        questionArm: '«Ես հունվարից ի վեր (շարունակաբար) իսպաներեն եմ սովորում»:',
        questionContext: '___ estudiando español desde enero.',
        options: ['Llevo', 'Sigo', 'Vengo', 'Voy'],
        correctAnswer: 'Vengo',
        explanationArm: 'Գործողությունը, որը սկսվել է անցյալում (հունվարին) և շարունակաբար գալիս է մինչև հիմա, արտահայտվում է «venir + gerundio» կառույցով (Vengo estudiando...):',
        hintArm: 'Անցյալից սկսված և մինչև հիմա ձգվող գործընթաց = venir:'
      },
      {
        id: 'g2_q5',
        type: 'multiple-choice',
        questionArm: '«Ես հիմա (այս պահին) իսպաներեն եմ սովորում»:',
        questionContext: '___ estudiando español.',
        options: ['Estoy', 'Sigo', 'Llevo', 'Voy'],
        correctAnswer: 'Estoy',
        explanationArm: 'Տվյալ պահին կատարվող գործողության համար օգտագործում ենք հիմնական «estar + gerundio» կառույցը: Առաջին դեմքով՝ Estoy:',
        hintArm: 'Հենց հիմա, այս պահին = estar.'
      }
    ]
  },
  {
    id: 3,
    title: 'Կառուցի՛ր նախադասությունը',
    description: 'Դասավորի՛ր խառը տրված իսպաներեն բառերը ճիշտ քերականական հաջորդականությամբ, որպեսզի ստանաս հայերեն նախադասության ճիշտ թարգմանությունը:',
    emoji: '🧱',
    color: 'amber',
    questions: [
      {
        id: 'g3_q1',
        type: 'reorder',
        questionArm: '«Արդեն երեք ամիս է՝ իսպաներեն եմ սովորում»:',
        options: ['estudiando', 'tres', 'Llevo', 'español', 'meses'],
        correctAnswer: 'Llevo tres meses estudiando español',
        explanationArm: 'Կառուցվածքը պետք է լինի՝ Llevar + ժամանակ + Gerundio + լրացում: Այսինքն՝ Llevo (օժանդակ բայ) + tres meses (ժամանակ) + estudiando (gerundio) + español (լրացում):',
        hintArm: 'Սկսի՛ր Llevo-ով, ապա դիր ժամանակահատվածը:'
      },
      {
        id: 'g3_q2',
        type: 'reorder',
        questionArm: '«Ես շարունակում եմ իսպաներեն սովորել»:',
        options: ['español', 'estudiando', 'Sigo'],
        correctAnswer: 'Sigo estudiando español',
        explanationArm: 'Կառույցը՝ Seguir + Gerundio + լրացում: Sigo + estudiando + español:',
        hintArm: 'Seguir բայը խոնարհվում է որպես Sigo:'
      },
      {
        id: 'g3_q3',
        type: 'reorder',
        questionArm: '«Եղանակը աստիճանաբար փոխվում է»:',
        options: ['cambiando', 'clima', 'El', 'va'],
        correctAnswer: 'El clima va cambiando',
        explanationArm: '«El clima» (Ենթակա) + «va» (ir-ի 3-րդ դեմք) + «cambiando» (cambiar բայի gerundio): Ստացվում է «El clima va cambiando» (Եղանակը աստիճանաբար փոխվում է):',
        hintArm: '«El clima»-ն դիր սկզբում, ապա աստիճանաբար զարգանալու բայը:'
      },
      {
        id: 'g3_q4',
        type: 'reorder',
        questionArm: '«Երբ դու զանգեցիր, ես քնած էի»:',
        options: ['llamaste', 'durmiendo', 'Cuando', 'estaba', 'me'],
        correctAnswer: 'Cuando me llamaste estaba durmiendo',
        explanationArm: '«Cuando me llamaste» (Երբ ինձ զանգեցիր/զանգեցիր) + «estaba durmiendo» (ես քնած էի / քնում էի [անցյալի տվյալ պահին]):',
        hintArm: '«Cuando me llamaste»-ից հետո օգտագործի՛ր estar-ի անցյալ ձևը + gerund">"!'
      }
    ]
  },
  {
    id: 4,
    title: 'Լրացրո՛ւ երկխոսությունը',
    description: 'Կարդա՛ Լուսիայի և Կառլոսի երկխոսությունը և օգնի՛ր ճիշտ լրացնել բաց թողնված հատվածները՝ համատեքստին համապատասխան:',
    emoji: '💬',
    color: 'rose',
    questions: [
      {
        id: 'g4_q1',
        type: 'dialogue',
        questionArm: 'Լուսիա. - ¿Qué estás haciendo? (Ի՞նչ ես անում)\nԿառլոս. - ___ español. (Իսպաներեն եմ սովորում-հենց հիմա/ընթացքի մեջ եմ)',
        options: ['Sigo estudiando', 'Estoy estudiando', 'Llevo estudiando', 'Voy estudiando'],
        correctAnswer: 'Estoy estudiando',
        explanationArm: 'Հարցին, թե «Հենց հիմա ինչ ես անում» (¿Qué estás haciendo?), տրվում է ուղիղ պատասխան estar + gerundio կառույցով՝ «Estoy estudiando» (սովորում եմ):',
        hintArm: '«¿Qué estás haciendo?»-ին պատասխանում ենք «Estoy...»-ով:'
      },
      {
        id: 'g4_q2',
        type: 'dialogue',
        questionArm: 'Լուսիա. - ¿Sigues estudiando todos los días? (Դեռ ամեն օր շարունակո՞ւմ ես սովորել)\nԿառլոս. - Sí, ___ todos los días. (Այո, շարունակում եմ ամեն օր սովորել)',
        options: ['estoy estudiando', 'sigo estudiando', 'llevo estudiando', 'vengo estudiando'],
        correctAnswer: 'sigo estudiando',
        explanationArm: 'Լուսիան հարցնում է ¿Sigues estudiando...? (շարունակո՞ւմ ես): Կառլոսը հաստատում է՝ «sigo estudiando» (շարունակում եմ սովորել):',
        hintArm: 'Հարցի մեջ արդեն կա «seguir» բայը:'
      },
      {
        id: 'g4_q3',
        type: 'dialogue',
        questionArm: 'Լուսիա. - ¿Cuánto tempo llevas estudiando español? (Արդեն ինչքա՞ն ժամանակ է՝ իսպաներեն ես սովորում)\nԿառլոս. - ___ seis meses estudiando español. (Արդեն վեց ամիս է՝ սովորում եմ)',
        options: ['Llevo', 'Estoy', 'Sigo', 'Vengo'],
        correctAnswer: 'Llevo',
        explanationArm: 'Երբ հարցնում են «¿Cuánto tiempo llevas...?», պատասխանում ենք նույն «llevar» բայով՝ «Llevo + ժամանակ (seis meses) + gerundio»:',
        hintArm: 'Օգտագործի՛ր «llevar»-ի 1-ին դեմքը:'
      }
    ]
  },
  {
    id: 5,
    title: 'Գտի՛ր սխալը և ուղղի՛ր',
    description: 'Այս նախադասություններում թույլ են տրվել քերականական սխալներ (սխալ Gerundio, սխալ օժանդակ բայ կամ բառերի սխալ դասավորություն): Գտի՛ր ճիշտ տարբերակը:',
    emoji: '🔍',
    color: 'violet',
    questions: [
      {
        id: 'g5_q1',
        type: 'spot-mistake',
        questionArm: 'Գտի՛ր սխալը այս նախադասության մեջ. «Estoy leiendo un libro.» (Ես գիրք եմ կարդում):',
        options: ['Estoy leyendo un libro.', 'Sigo leiendo un libro.', 'Estoy lerndo un libro.', 'Llevo leiendo un libro.'],
        correctAnswer: 'Estoy leyendo un libro.',
        explanationArm: '«leer» բայի Gerundio-ն «leyendo» է (-y-ով): «leiendo» տարբերակը սխալ է, քանի որ «i»-ն ձայնավորների միջև պետք է դառնա «y»:',
        hintArm: 'Leer բայը Gerundio-ում ունի «y» տառը:'
      },
      {
        id: 'g5_q2',
        type: 'spot-mistake',
        questionArm: 'Գտի՛ր սխալը այս նախադասության մեջ. «Llevo estudiando dos años.» (Արդեն երկու տարի է, ինչ սովորում եմ):',
        options: ['Llevo dos años estudiando.', 'Sigo dos años estudiando.', 'Vengo dos años estudiando.', 'Estoy dos años estudiando.'],
        correctAnswer: 'Llevo dos años estudiando.',
        explanationArm: 'Llevar-ով կառույցում ժամանակահատվածը (dos años) պետք է գրվի անմիջապես «llevar» բայից հետո, իսկ Gerundio-ն (estudiando) գալիս է վերջում: Ճիշտ է՝ «Llevo dos años estudiando.»:',
        hintArm: 'Կառույցն է՝ llevar + [ԺԱՄԱՆԱԿ] + gerundio:'
      },
      {
        id: 'g5_q3',
        type: 'spot-mistake',
        questionArm: 'Գտի՛ր սխալը այս նախադասության մեջ. «Sigo a estudiar español.» (Ես դեռ շարունակում եմ իսպաներեն սովորել):',
        options: ['Sigo estudiando español.', 'Sigo para estudiar español.', 'Llevo estudiando español.', 'Sigo estudiado español.'],
        correctAnswer: 'Sigo estudiando español.',
        explanationArm: '«seguir» բայից հետո երբեք չի դրվում «a» կամ որևէ նախդիր: Ճիշտ կառույցն է անմիջապես \`seguir + gerundio\`՝ «Sigo estudiando español.»:',
        hintArm: 'Seguir-ից հետո ոչ մի նախդիր մի՛ դիր, միանգամից gerundio.'
      },
      {
        id: 'g5_q4',
        type: 'spot-mistake',
        questionArm: 'Գտի՛ր սխալը այս նախադասության մեջ. «Carlos está iendo a casa.» (Կառլոսը տուն է գնում):',
        options: ['Carlos está yendo a casa.', 'Carlos sigue iendo a casa.', 'Carlos va yendo a casa.', 'Carlos está yendo para casa.'],
        correctAnswer: 'Carlos está yendo a casa.',
        explanationArm: '«ir» բայի Gerundio ձևը «yendo» է: «iendo» բառ գոյություն չունի իսպաներենում, այն կոպիտ սխալ է:',
        hintArm: 'Ir բայի Gerundio-ն սկսվում է Y տառով:'
      }
    ]
  },
  {
    id: 6,
    title: 'Արագ թարգմանության մարտահրավեր',
    description: 'Թարգմանի՛ր հայերեն արտահայտությունները իսպաներենի: Փորձի՛ր ճիշտ պատասխանել բոլորին՝ առանց սխալվելու:',
    emoji: '⚡',
    color: 'sky',
    questions: [
      {
        id: 'g6_q1',
        type: 'multiple-choice',
        questionArm: '«Մենք ֆիլմ ենք դիտում» (Այս պահին):',
        options: ['Estamos viendo una película.', 'Seguimos viendo una película.', 'Llevamos viendo una película.', 'Vamos viendo una película.'],
        correctAnswer: 'Estamos viendo una película.',
        explanationArm: 'Հենց հիմա կատարվող գործողություն՝ «Estamos viendo una película» (estar + gerundio):',
        hintArm: 'Մենք հիմա = estamos + ver-ի gerundio-ն:'
      },
      {
        id: 'g6_q2',
        type: 'multiple-choice',
        questionArm: '«Կառլոսը արդեն քսան րոպե է՝ սպասում է»:',
        options: ['Carlos lleva veinte minutos esperando.', 'Carlos sigo esperando veinte minutos.', 'Carlos está esperando veinte minutos.', 'Carlos viene esperando veinte minutos.'],
        correctAnswer: 'Carlos lleva veinte minutos esperando.',
        explanationArm: 'Արդեն որոշակի ժամանակ է՝ «Carlos lleva veinte minutos esperando» (Llevar-ի 3-րդ դեմք + veinte minutos [ժամանակ] + esperando [gerundio]):',
        hintArm: 'Carlos-ի համար խոնարհում ենք lleva, դնում ժամանակը, ապա esperar-ի gerundio-ն:'
      },
      {
        id: 'g6_q3',
        type: 'multiple-choice',
        questionArm: '«Մենք երեկվանից խոսում ենք այս թեմայի մասին»:',
        options: ['Venimos hablando de este tema desde ayer.', 'Llevamos hablando de este tema ayer.', 'Estamos hablando de este tema desde ayer.', 'Seguimos hablando de este tema ayer.'],
        correctAnswer: 'Venimos hablando de este tema desde ayer.',
        explanationArm: 'Անցյալից (երեկվանից) սկսված և մինչև հիմա շարունակվող երկար գործընթաց՝ «Venimos hablando de este tema desde ayer.» (venir + gerundio):',
        hintArm: 'Մենք երեկվանից = venimos + hablar-ի gerundio:'
      },
      {
        id: 'g6_q4',
        type: 'multiple-choice',
        questionArm: '«Մենք կամաց-կամաց առաջ ենք գնում»:',
        options: ['Vamos avanzando poco a poco.', 'Estamos avanzando poco a poco.', 'Seguimos avanzando poco a poco.', 'Venimos avanzando de poco.'],
        correctAnswer: 'Vamos avanzando poco a poco.',
        explanationArm: 'Աստիճանաբար զարգացող գործողություն՝ «Vamos avanzando poco a poco» (ir + gerundio-յի «vamos» ձևը):',
        hintArm: 'Մենք աստիճանաբար = vamos + avanzar-ի gerundio:'
      }
    ]
  }
];
