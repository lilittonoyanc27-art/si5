/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TheoryChapter {
  id: number;
  title: string;
  intro?: string;
  sections: {
    type: 'text' | 'list' | 'conjugation' | 'examples' | 'comparison' | 'dialogue' | 'shortcut';
    title?: string;
    content?: string;
    items?: string[];
    conjugations?: { form: string; armenian: string }[];
    examples?: { spanish: string; armenian: string; extra?: string }[];
    comparison?: { title: string; text: string; example: string; translation: string }[];
    dialogue?: { speaker: string; spanish: string; armenian: string }[];
  }[];
}

export const THEORY_CHAPTERS: TheoryChapter[] = [
  {
    id: 1,
    title: 'Ի՞նչ է Gerundio-ն',
    intro: 'Gerundio-ն իսպաներենում բայի հատուկ ձև է, որը ցույց է տալիս, որ գործողությունը ընթացքի մեջ է։',
    sections: [
      {
        type: 'list',
        title: 'Հայերենում հաճախ թարգմանվում է՝',
        items: [
          'անում եմ',
          'անում էի',
          'անելով',
          'շարունակաբար անում եմ'
        ]
      },
      {
        type: 'examples',
        title: 'Օրինակներ՝',
        examples: [
          { spanish: 'Estoy estudiando.', armenian: 'Ես սովորում եմ։ / Ես հիմա սովորելու ընթացքի մեջ եմ։' },
          { spanish: 'Estaba comiendo.', armenian: 'Ես ուտում էի։ / Այդ պահին ուտելու ընթացքի մեջ էի։' },
          { spanish: 'Voy aprendiendo español.', armenian: 'Ես կամաց-կամաց իսպաներեն եմ սովորում։' }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Ինչպես կազմել Gerundio',
    sections: [
      {
        type: 'text',
        title: '-AR բայեր',
        content: 'Եթե բայը վերջանում է -ar, հանում ենք -ar և ավելացնում -ando։'
      },
      {
        type: 'list',
        title: 'Բայի փոփոխությունը՝',
        items: [
          'hablar → hablando (խոսել → խոսելով / խոսում)',
          'estudiar → estudiando (սովորել → սովորելով / սովորում)',
          'bailar → bailando (պարել → պարելով / պարում)'
        ]
      },
      {
        type: 'examples',
        title: '-AR օրինակներ՝',
        examples: [
          { spanish: 'Estoy hablando.', armenian: 'Ես խոսում եմ։' },
          { spanish: 'Estoy studying español.', armenian: 'Ես իսպաներեն եմ սովորում։' },
          { spanish: 'Lucía está bailando.', armenian: 'Լուսիան պարում է։' }
        ]
      },
      {
        type: 'text',
        title: '-ER բայեր',
        content: 'Եթե բայը վերջանում է -er, հանում ենք -er և ավելացնում -iendo։'
      },
      {
        type: 'list',
        title: 'Բայի փոփոխությունը՝',
        items: [
          'comer → comiendo (ուտել → ուտելով / ուտում)',
          'beber → bebiendo (խմել → խմելով / խմում)',
          'aprender → aprendiendo (սովորել → սովորելով / սովորում)'
        ]
      },
      {
        type: 'examples',
        title: '-ER օրինակներ՝',
        examples: [
          { spanish: 'Estoy comiendo.', armenian: 'Ես ուտում եմ։' },
          { spanish: 'Carlos está bebiendo agua.', armenian: 'Կառլոսը ջուր է խմում։' },
          { spanish: 'Estoy aprendiendo español.', armenian: 'Ես իսպաներեն եմ սովորում։' }
        ]
      },
      {
        type: 'text',
        title: '-IR բայեր',
        content: 'Եթե բայը վերջանում է -ir, հանում ենք -ir և ավելացնում -iendo։'
      },
      {
        type: 'list',
        title: 'Բայի փոփոխությունը՝',
        items: [
          'vivir → viviendo (ապրել → ապրելով / ապրում)',
          'escribir → escribiendo (գրել → գրելով / գրում)',
          'salir → saliendo (դուրս գալ → դուրս գալով / դուրս գալիս)'
        ]
      },
      {
        type: 'examples',
        title: '-IR օրինակներ՝',
        examples: [
          { spanish: 'Estoy viviendo en Armenia.', armenian: 'Ես ապրում եմ Հայաստանում։' },
          { spanish: 'Estoy escribir una frase.', armenian: 'Ես նախադասություն եմ գրում։' },
          { spanish: 'Estamos saliendo de casa.', armenian: 'Մենք տնից դուրս ենք գալիս։' }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Անկանոն Gerundio-ներ',
    intro: 'Որոշ բայեր մի փոքր փոխվում են։',
    sections: [
      {
        type: 'examples',
        examples: [
          { spanish: 'Leer → leyendo', armenian: 'Estoy leyendo un libro. (Ես գիրք եմ կարդում։ Ոչ թե՝ leiendo։)' },
          { spanish: 'Ir → yendo', armenian: 'Estoy yendo a casa. (Ես տուն եմ գնում։ Ոչ թե՝ iendo։)' },
          { spanish: 'Dormir → durmiendo', armenian: 'El niño está durmiendo. (Երեխան քնած է։)' },
          { spanish: 'Pedir → pidiendo', armenian: 'Estoy pidiendo ayuda. (Ես օգնություն եմ խնդրում։)' },
          { spanish: 'Decir → diciendo', armenian: 'Estoy diciendo la verdad. (Ես ճշմարտությունն եմ ասում։)' },
          { spanish: 'Venir → viniendo', armenian: 'Carlos está viniendo a casa. (Կառլոսը գալիս է տուն։)' }
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Ամենակարևոր կառուցվածքը՝ estar + gerundio',
    intro: 'Կառուցվածք՝ estar + gerundio. Օգտագործում ենք, երբ ուզում ենք ասել՝ գործողությունը կատարվում է հենց հիմա կամ տվյալ պահին։',
    sections: [
      {
        type: 'conjugation',
        title: 'Ներկա ժամանակում խոնարհումը՝',
        conjugations: [
          { form: 'estoy + gerundio', armenian: 'ես հիմա անում եմ' },
          { form: 'estás + gerundio', armenian: 'դու հիմա անում ես' },
          { form: 'está + gerundio', armenian: 'նա հիմա անում է' },
          { form: 'estamos + gerundio', armenian: 'մենք հիմա անում ենք' },
          { form: 'estáis + gerundio', armenian: 'դուք հիմա անում եք' },
          { form: 'están + gerundio', armenian: 'նրանք հիմա անում են' }
        ]
      },
      {
        type: 'examples',
        title: 'Օրինակներ՝',
        examples: [
          { spanish: 'Estoy estudiando.', armenian: 'Ես հիմա սովորում եմ։' },
          { spanish: 'Estás comiendo.', armenian: 'Դու հիմա ուտում ես։' },
          { spanish: 'Ella está hablando por teléfono.', armenian: 'Նա հիմա հեռախոսով խոսում է։' },
          { spanish: 'Estamos viendo una película.', armenian: 'Մենք ֆիլմ ենք դիտում։' },
          { spanish: 'Ellos están jugando al fútbol.', armenian: 'Նրանք ֆուտբոլ են խաղում։' }
        ]
      },
      {
        type: 'dialogue',
        title: 'Հարցական ձև՝',
        dialogue: [
          { speaker: 'Pregunta', spanish: '¿Qué estás haciendo?', armenian: 'Ի՞նչ ես անում։' },
          { speaker: 'Respuesta', spanish: 'Estoy estudiando.', armenian: 'Ես սովորում եմ։' },
          { speaker: 'Pregunta', spanish: '¿Estás comiendo?', armenian: 'Դու ուտո՞ւմ ես։' },
          { speaker: 'Respuesta', spanish: 'Sí, estoy comiendo.', armenian: 'Այո, ուտում եմ։' }
        ]
      },
      {
        type: 'examples',
        title: 'Ժխտական ձև՝',
        examples: [
          { spanish: 'No estoy estudiando.', armenian: 'Ես չեմ սովորում։' },
          { spanish: 'No está hablando.', armenian: 'Նա չի խոսում։' },
          { spanish: 'No estamos jugando.', armenian: 'Մենք չենք խաղում։' }
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'Estar + gerundio անցյալում',
    intro: 'Եթե ուզում ենք ասել՝ անցյալում տվյալ պահին ինչ-որ բան էինք անում, օգտագործում ենք՝ estaba + gerundio',
    sections: [
      {
        type: 'examples',
        title: 'Օրինակներ՝',
        examples: [
          { spanish: 'Ayer a las cinco estaba estudiando.', armenian: 'Երեկ ժամը հինգին ես սովորում էի։' },
          { spanish: 'Cuando me llamaste, estaba durmiendo.', armenian: 'Երբ դու զանգեցիր, ես քնած էի։' },
          { spanish: 'Carlos estaba comiendo cuando llegó Lucía.', armenian: 'Կառլոսը ուտում էր, երբ Լուսիան եկավ։' }
        ]
      }
    ]
  },
  {
    id: 6,
    title: 'Estar + gerundio vs սովորական Presente',
    sections: [
      {
        type: 'comparison',
        comparison: [
          {
            title: 'Սովորական Presente',
            text: 'Սա կարող է լինել սովորություն կամ ընդհանուր փաստ։ Օրինակ՝ Ես սովորում եմ իսպաներեն ընդհանրապես։',
            example: 'Estudio español.',
            translation: 'Ես իսպաներեն եմ սովորում։'
          },
          {
            title: 'Estar + gerundio',
            text: 'Սա ընդգծում է, որ գործողությունը հենց հիմա ընթացքի մեջ է։',
            example: 'Estoy estudiando español.',
            translation: 'Ես հիմա իսպաներեն եմ սովորում։'
          }
        ]
      }
    ]
  },
  {
    id: 7,
    title: 'Seguir + gerundio',
    intro: 'Իմաստը՝ seguir + gerundio նշանակում է՝ շարունակել անել ինչ-որ բան։ Հայերեն՝ դեռ անում եմ / շարունակում եմ անել',
    sections: [
      {
        type: 'conjugation',
        title: 'Կառուցվածք՝ seguir + gerundio',
        conjugations: [
          { form: 'sigo estudiando', armenian: 'ես շարունակում եմ սովորել' },
          { form: 'sigues estudiando', armenian: 'դու շարունակում ես սովորել' },
          { form: 'sigue estudiando', armenian: 'նա շարունակում է սովորել' },
          { form: 'seguimos estudiando', armenian: 'մենք շարունակում ենք սովորել' },
          { form: 'siguen estudiando', armenian: 'նրանք շարունակում են սովորել' }
        ]
      },
      {
        type: 'examples',
        title: 'Օրինակներ՝',
        examples: [
          { spanish: 'Sigo estudiando español.', armenian: 'Ես շարունակում եմ իսպաներեն սովորել։' },
          { spanish: 'Lucía sigue trabajando.', armenian: 'Լուսիան շարունակում է աշխատել։' },
          { spanish: 'Carlos sigue jugando al fútbol.', armenian: 'Կառլոսը շարունակում է ֆուտբոլ խաղալ։' },
          { spanish: 'Seguimos aprendiendo palabras nuevas.', armenian: 'Մենք շարունակում ենք նոր բառեր սովորել։' },
          { spanish: 'Ellos siguen viviendo en Madrid.', armenian: 'Նրանք դեռ ապրում են Մադրիդում։' }
        ]
      },
      {
        type: 'text',
        title: 'Շատ կարևոր նշում՝',
        content: 'seguir + gerundio ցույց է տալիս, որ գործողությունը սկսել է առաջ և հիմա էլ շարունակվում է։'
      },
      {
        type: 'examples',
        examples: [
          { spanish: 'Hace dos años empecé a estudiar español. Ahora sigo estudiando español.', armenian: 'Երկու տարի առաջ սկսեցի իսպաներեն սովորել։ Հիմա շարունակում եմ սովորել իսպաներեն։' }
        ]
      }
    ]
  },
  {
    id: 8,
    title: 'Seguir + gerundio ժխտականում',
    sections: [
      {
        type: 'examples',
        title: 'Օրինակներ՝',
        examples: [
          { spanish: 'No sigo estudiando francés.', armenian: 'Ես այլևս ֆրանսերեն չեմ սովորում։' },
          { spanish: 'Ella no sigue trabajando aquí.', armenian: 'Նա այլևս այստեղ չի աշխատում։' },
          { spanish: 'Carlos no sigue jugando.', armenian: 'Կառլոսը այլևս չի խաղում։' }
        ]
      }
    ]
  },
  {
    id: 9,
    title: 'Llevar + gerundio',
    intro: 'Իմաստը՝ llevar + ժամանակ + gerundio նշանակում է՝ արդեն ինչքան ժամանակ է անում եմ ինչ-որ բան։ Հայերեն՝ արդեն ... ժամանակ է, ինչ անում եմ',
    sections: [
      {
        type: 'examples',
        title: 'Կառուցվածք՝ llevar + ժամանակ + gerundio',
        examples: [
          { spanish: 'Llevo dos años estudiando español.', armenian: 'Արդեն երկու տարի է՝ իսպաներեն եմ սովորում։ (Բառացի՝ «Ես տանում եմ երկու տարի՝ սովորելով իսպաներեն»։ Բայց հայերեն բնական՝ Արդեն երկու տարի է՝ սովորում եմ իսպաներեն։)' }
        ]
      },
      {
        type: 'conjugation',
        title: 'Llevar-ի ձևերը՝',
        conjugations: [
          { form: 'yo llevo', armenian: 'ես արդեն ... ժամանակ է' },
          { form: 'tú llevas', armenian: 'դու արդեն ... ժամանակ է' },
          { form: 'él / ella lleva', armenian: 'նա արդեն ... ժամանակ է' },
          { form: 'nosotros llevamos', armenian: 'մենք արդեն ... ժամանակ է' },
          { form: 'ellos llevan', armenian: 'նրանք արդեն ... ժամանակ է' }
        ]
      },
      {
        type: 'examples',
        title: 'Օրինակներ՝',
        examples: [
          { spanish: 'Llevo tres meses aprendiendo español.', armenian: 'Արդեն երեք ամիս է՝ իսպաներեն եմ սովորում։' },
          { spanish: 'Llevas una hora hablando por teléfono.', armenian: 'Արդեն մեկ ժամ է՝ հեռախոսով ես խոսում։' },
          { spanish: 'Lucía lleva dos años viviendo en España.', armenian: 'Լուսիան արդեն երկու տարի է՝ ապրում է Իսպանիայում։' },
          { spanish: 'Carlos lleva veinte minutos esperando.', armenian: 'Կառլոսը արդեն քսան րոպե է՝ սպասում է։' },
          { spanish: 'Llevamos una semana studying/estudiando este tema.', armenian: 'Մենք արդեն մեկ շաբաթ է՝ այս թեման ենք սովորում։' },
          { spanish: 'Ellos llevan mucho tiempo trabajando juntos.', armenian: 'Նրանք արդեն երկար ժամանակ է՝ միասին աշխատում են։' }
        ]
      },
      {
        type: 'comparison',
        title: 'Շատ կարևոր տարբերություն՝',
        comparison: [
          { title: 'Estar', text: 'Հենց հիմա', example: 'Estoy estudiando español.', translation: 'Ես հիմա իսպաներեն եմ սովորում։' },
          { title: 'Seguir', text: 'Շարունակություն', example: 'Sigo estudiando español.', translation: 'Ես շարունակում եմ իսպաներեն սովորել։' },
          { title: 'Llevar', text: 'Տևողություն', example: 'Llevo dos años estudiando español.', translation: 'Արդեն երկու տարի է՝ իսպաներեն եմ սովորում։' }
        ]
      }
    ]
  },
  {
    id: 10,
    title: 'Llevar + gerundio հարցական ձև',
    sections: [
      {
        type: 'dialogue',
        dialogue: [
          { speaker: 'Pregunta', spanish: '¿Cuánto tiempo llevas estudiando español?', armenian: 'Արդեն ինչքա՞ն ժամանակ է՝ իսպաներեն ես սովորում։' },
          { speaker: 'Respuesta', spanish: 'Llevo seis meses estudiando español.', armenian: 'Արդեն վեց ամիս է՝ իսպաներեն եմ սովորում։' },
          { speaker: 'Pregunta', spanish: '¿Cuánto tiempo llevas viviendo aquí?', armenian: 'Արդեն ինչքա՞ն ժամանակ է՝ այստեղ ես ապրում։' },
          { speaker: 'Respuesta', spanish: 'Llevo tres años viviendo aquí.', armenian: 'Արդեն երկրորդ/երեք տարի է՝ այստեղ եմ ապրում։' }
        ]
      }
    ]
  },
  {
    id: 11,
    title: 'Ir + gerundio',
    intro: 'Իմաստը՝ ir + gerundio նշանակում է, որ գործողությունը կատարվում է կամաց-կամաց, աստիճանաբար, ընթացքում զարգանալով։ Հայերեն՝ կամաց-կամաց անում եմ / աստիճանաբար անում եմ',
    sections: [
      {
        type: 'conjugation',
        title: 'Կառուցվածք՝ ir + gerundio',
        conjugations: [
          { form: 'voy aprendiendo', armenian: 'կամաց-կամաց սովորում եմ' },
          { form: 'vas entendiendo', armenian: 'կամաց-կամաց հասկանում ես' },
          { form: 'va mejorando', armenian: 'աստիճանաբար լավանում է' },
          { form: 'vamos avanzando', armenian: 'կամաց-կամաց առաջ ենք գնում' },
          { form: 'van cambiando', armenian: 'աստիճանաբար փոխվում են' }
        ]
      },
      {
        type: 'examples',
        title: 'Օրինակներ՝',
        examples: [
          { spanish: 'Voy aprendiendo español.', armenian: 'Ես կամաց-կամաց իսպաներեն եմ սովորում։' },
          { spanish: 'Voy entendiendo la gramática.', armenian: 'Ես կամաց-կամաց հասկանում եմ քերականությունը։' },
          { spanish: 'Lucía va mejorando su español.', armenian: 'Լուսիան աստիճանաբար բարելավում է իր իսպաներենը։' },
          { spanish: 'El clima va cambiando.', armenian: 'Եղանակը աստիճանաբար փոխվում է։' },
          { spanish: 'Vamos avanzando poco a poco.', armenian: 'Մենք կամաց-կամաց առաջ ենք գնում։' },
          { spanish: 'Los estudiantes van aprendiendo palabras nuevas.', armenian: 'Ուսանողները աստիճանաբար նոր բառեր են սովորում։' }
        ]
      },
      {
        type: 'comparison',
        title: 'Շատ կարևոր՝ ir + gerundio չի նշանակում պարզապես «հիմա անում եմ»։ Այն ցույց է տալիս ընթացք, զարգացում, փոփոխություն։ Համեմատենք՝',
        comparison: [
          { title: 'Estar', text: 'Այս պահին', example: 'Estoy aprendiendo español.', translation: 'Ես հիմա իսպաներեն եմ սովորում։' },
          { title: 'Ir + Gerundio', text: 'Զարգացում / Աստիճանաբար', example: 'Voy aprendiendo español.', translation: 'Ես կամաց-կամաց իսպաներեն եմ սովորում։' }
        ]
      }
    ]
  },
  {
    id: 12,
    title: 'Venir + gerundio',
    intro: 'Իմաստը՝ venir + gerundio նշանակում է, որ գործողությունը սկսվել է անցյալում և շարունակվում է մինչև հիմա։ Այն հաճախ ցույց է տալիս երկար ընթացք։ Հայերեն՝ արդեն որոշ ժամանակ է՝ անում եմ / մինչև հիմա անում եմ (Այն մի քիչ նման է llevar + gerundio ձևին, բայց ավելի շատ ընդգծում է ընթացքը մինչև այս պահը)։',
    sections: [
      {
        type: 'conjugation',
        title: 'Կառուցվածք՝ venir + gerundio',
        conjugations: [
          { form: 'vengo estudiando', armenian: 'ես արդեն որոշ ժամանակ է՝ սովորում եմ' },
          { form: 'vienes trabajando', armenian: 'դու արդեն որոշ ժամանակ է՝ աշխատում ես' },
          { form: 'viene diciendo', armenian: 'նա արդեն որոշ ժամանակ է՝ ասում է' },
          { form: 'venimos hablando', armenian: 'մենք արդեն որոշ ժամանակ է՝ խոսում ենք' },
          { form: 'vienen buscando', armenian: 'նրանք արդեն որոշ ժամանակ է՝ փնտրում են' }
        ]
      },
      {
        type: 'examples',
        title: 'Օրինակներ՝',
        examples: [
          { spanish: 'Vengo estudiando español desde enero.', armenian: 'Ես հունվարից ի վեր իսպաներեն եմ սովորում։' },
          { spanish: 'Venimos hablando de este tema desde ayer.', armenian: 'Մենք երեկվանից խոսում ենք այս թեմայի մասին։' },
          { spanish: 'Carlos viene trabajando mucho últimamente.', armenian: 'Կառլոսը վերջին ժամանակներում շատ է աշխատում։' },
          { spanish: 'Los precios vienen subiendo.', armenian: 'Գները վերջին շրջանում բարձրանում են։' },
          { spanish: 'Ella viene practicando todos los días.', armenian: 'Նա արդեն որոշ ժամանակ է՝ ամեն օր պարապում է։' }
        ]
      }
    ]
  },
  {
    id: 13,
    title: 'Venir + gerundio vs llevar + gerundio',
    sections: [
      {
        type: 'comparison',
        comparison: [
          {
            title: 'Llevar + gerundio',
            text: 'Կոնկրետ ասում ենք՝ ինչքան ժամանակ։',
            example: 'Llevo dos meses estudiando español.',
            translation: 'Արդեն երկու ամիս է՝ իսպաներեն եմ սովորում։'
          },
          {
            title: 'Venir + gerundio',
            text: 'Ավելի շատ շեշտում է ընթացքը մինչև հիմա (անկախ ճշգրիտ ժամանակից)։',
            example: 'Vengo estudiando español desde enero.',
            translation: 'Հունվարից ի վեր իսպաներեն եմ սովորում։'
          }
        ]
      }
    ]
  },
  {
    id: 14,
    title: 'Ամփոփ տարբերություն',
    sections: [
      {
        type: 'comparison',
        comparison: [
          {
            title: 'Estar + gerundio',
            text: 'Գործողությունը հիմա կամ անցյալում տվյալ պահին ընթացքի մեջ է։',
            example: 'Estoy estudiando. / Estaba estudiando.',
            translation: 'Ես հիմա սովորում եմ։ / Ես այդ պահին սովորում էի։'
          },
          {
            title: 'Seguir + gerundio',
            text: 'Գործողությունը շարունակվում է։',
            example: 'Sigo estudiando.',
            translation: 'Ես շարունակում եմ սովորել։'
          },
          {
            title: 'Llevar + ժամանակ + gerundio',
            text: 'Ասում ենք՝ արդեն ինչքան ժամանակ է անում ենք։',
            example: 'Llevo dos años estudiando.',
            translation: 'Արդեն երկու տարի է՝ սովորում եմ։'
          },
          {
            title: 'Ir + gerundio',
            text: 'Գործողությունը աստիճանաբար է կատարվում։',
            example: 'Voy aprendiendo.',
            translation: 'Կամաց-կամաց սովորում եմ։'
          },
          {
            title: 'Venir + gerundio',
            text: 'Գործողությունը գալիս է անցյալից մինչև հիմա, երկար ընթացք ունի։',
            example: 'Vengo estudiando desde enero.',
            translation: 'Հունվարից ի վեր սովորում եմ։'
          }
        ]
      }
    ]
  },
  {
    id: 15,
    title: 'Բոլորը մեկ օրինակով',
    intro: 'Վերցնենք նույն բայը՝ aprender español (սովորել իսպաներեն)։',
    sections: [
      {
        type: 'examples',
        examples: [
          { spanish: 'Estoy aprendiendo español.', armenian: 'Ես հիմա իսպաներեն եմ սովորում։', extra: 'Estar + gerundio' },
          { spanish: 'Sigo aprendiendo español.', armenian: 'Ես շարունակում եմ իսպաներեն սովորել։', extra: 'Seguir + gerundio' },
          { spanish: 'Llevo un año aprendiendo español.', armenian: 'Արդեն մեկ տարի է՝ իսպաներեն եմ սովորում։', extra: 'Llevar + gerundio' },
          { spanish: 'Voy aprendiendo español poco a poco.', armenian: 'Ես կամաց-կամաց իսպաներեն եմ սովորում։', extra: 'Ir + gerundio' },
          { spanish: 'Vengo aprendiendo español desde el año pasado.', armenian: 'Անցյալ տարվանից ի վեր իսպաներեն եմ սովորում։', extra: 'Venir + gerundio' }
        ]
      }
    ]
  },
  {
    id: 16,
    title: 'Փոքր երկխոսություն',
    sections: [
      {
        type: 'dialogue',
        dialogue: [
          { speaker: 'Lucía', spanish: '¿Qué estás haciendo?', armenian: 'Ի՞նչ ես անում։' },
          { speaker: 'Carlos', spanish: 'Estoy studying español.', armenian: 'Իսպաներեն եմ սովորում։' },
          { speaker: 'Lucía', spanish: '¿Sigues studying/estudiando todos los días?', armenian: 'Դու դեռ ամեն օր շարունակո՞ւմ ես սովորել։' },
          { speaker: 'Carlos', spanish: 'Sí, sigo estudiando todos los días.', armenian: 'Այո, շարունակում եմ ամեն օր սովորել։' },
          { speaker: 'Lucía', spanish: '¿Cuánto tiempo llevas studying español?', armenian: 'Արդեն ինչքա՞ն ժամանակ է՝ իսպաներեն ես սովորում։' },
          { speaker: 'Carlos', spanish: 'Llevo seis meses studying español.', armenian: 'Արդեն վեց ամիս է՝ իսպաներեն եմ սովորում։' },
          { speaker: 'Lucía', spanish: 'Muy bien. Vas mejorando mucho.', armenian: 'Շատ լավ։ Դու շատ ես աստիճանաբար լավանում։' }
        ]
      }
    ]
  },
  {
    id: 17,
    title: 'Ամենահեշտ հիշելու ձևը',
    sections: [
      {
        type: 'shortcut',
        examples: [
          { spanish: 'Estoy estudiando.', armenian: 'Հիմա սովորում եմ։' },
          { spanish: 'Sigo studying.', armenian: 'Շարունակում եմ սովորել։' },
          { spanish: 'Llevo dos meses studying.', armenian: 'Արդեն երկու ամիս է՝ սովորում եմ։' },
          { spanish: 'Voy aprendiendo.', armenian: 'Կամաց-կամաց սովորում եմ։' },
          { spanish: 'Vengo estudiando desde enero.', armenian: 'Հունվարից ի վեր սովորում եմ։' }
        ]
      }
    ]
  }
];
