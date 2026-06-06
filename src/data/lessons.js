export const lessonsData = [
  {
    id: 'lesson-1',
    order: 1,
    title: 'Приветствия, личные местоимения и простые фразы',
    description: 'Научитесь здороваться, знакомиться, использовать личные местоимения и глагол «работать»',
    sections: [
      {
        type: 'theory',
        title: '1. Приветствия и прощания',
        content: [
          { balkar: 'Ерттен ахшы болсун', russian: 'Доброе утро' },
          { balkar: 'Кюн ахшы болсун', russian: 'Добрый день' },
          { balkar: 'Ингир ахшы болсун', russian: 'Добрый вечер' },
          { balkar: 'Тынч кечели къал', russian: 'Спокойной ночи' },
          { balkar: 'Сау бол', russian: 'Спасибо (букв. «будь здоров») ' },
          { balkar: 'Тюбербиз', russian: 'Увидимся' }
        ]
      },
      {
        type: 'theory',
        title: '2. Личные местоимения',
        content: [
          { balkar: 'мен', russian: 'я' },
          { balkar: 'сен', russian: 'ты' },
          { balkar: 'ол', russian: 'он, она, оно' },
          { balkar: 'биз', russian: 'мы' },
          { balkar: 'сиз', russian: 'вы (вежливое или мн.ч.)' },
          { balkar: 'ала', russian: 'они' }
        ],
        note: 'Важно: в балкарском языке нет рода. «Ол» может означать и «он», и «она», и «оно».'
      },
      {
        type: 'theory',
        title: '3. Глагол «работать» (ишлерге)',
        content: [
          { balkar: 'мен ишлейме', russian: 'я работаю' },
          { balkar: 'сен ишлейсе', russian: 'ты работаешь' },
          { balkar: 'ол ишлейди', russian: 'он работает' },
          { balkar: 'биз ишлейбиз', russian: 'мы работаем' },
          { balkar: 'сиз ишлейсиз', russian: 'вы работаете' },
          { balkar: 'ала ишлейдиле', russian: 'они работают' }
        ],
        note: 'Правило порядка слов: глагол (действие) всегда стоит в конце предложения.'
      },
      {
        type: 'theory',
        title: '4. Простые ответы и вопросы',
        content: [
          { balkar: 'Хау', russian: 'Да' },
          { balkar: 'Угъай', russian: 'Нет' },
          { balkar: 'Хо', russian: 'Хорошо' },
          { balkar: 'Ангыладым', russian: 'Понятно' },
          { balkar: 'Къалайса?', russian: 'Как дела? (букв. «как ты?»)' },
          { balkar: 'Не ишлейсе?', russian: 'Что делаешь?' },
          { balkar: 'Сау бол, хо', russian: 'Спасибо, хорошо' }
        ]
      },
      {
        type: 'dialog',
        title: '5. Примеры диалога',
        dialogs: [
          {
            lines: [
              { speaker: 1, text: 'Ерттен ахшы болсун!' },
              { speaker: 2, text: 'Кюн ахшы болсун! Къалайса?' },
              { speaker: 1, text: 'Хо, сау бол. Сен не ишлейсе?' },
              { speaker: 2, text: 'Мен ишлейме.' },
              { speaker: 1, text: 'Ангыладым. Тюбербиз!' },
              { speaker: 2, text: 'Тюбербиз.' }
            ]
          },
          {
            lines: [
              { speaker: 1, text: 'Ингир ахшы болсун, ата!' },
              { speaker: 2, text: 'Ингир ахшы болсун, къыз! Не ишлейсе?' },
              { speaker: 1, text: 'Мен окъуйма (я читаю).' },
              { speaker: 2, text: 'Хо, аламат!' }
            ]
          }
        ]
      },
      {
        type: 'exercise',
        exerciseType: 'translate',
        title: 'Задание 1: Переведите на балкарский',
        questions: [
          { question: 'Доброе утро, мама!', answer: 'Ерттен ахшы болсун, ана!' },
          { question: 'Ты работаешь?', answer: 'Сен ишлейсе?' },
          { question: 'Я работаю. Спасибо.', answer: 'Мен ишлейме. Сау бол.' },
          { question: 'До свидания (увидимся)!', answer: 'Тюбербиз!' }
        ]
      },
      {
        type: 'exercise',
        exerciseType: 'fill',
        title: 'Задание 2: Дополните предложения',
        questions: [
          { question: '… ишлейме. (Я)', answer: 'мен', options: ['мен', 'сен', 'ол', 'биз'] },
          { question: '… ишлейдиле. (Они)', answer: 'ала', options: ['мен', 'ала', 'ол', 'биз'] },
          { question: '… ишлейсе. (Ты)', answer: 'сен', options: ['мен', 'сен', 'ол', 'биз'] }
        ]
      }
    ]
  },
  {
    id: 'lesson-2',
    order: 2,
    title: 'Семья, вопросы «кто? что?», глаголы «жить, любить, говорить»',
    description: 'Научитесь спрашивать о людях и предметах, использовать новые глаголы, строить отрицание',
    sections: [
      {
        type: 'theory',
        title: '1. Слова по теме «Семья и люди»',
        content: [
          { balkar: 'ата', russian: 'папа' },
          { balkar: 'ана', russian: 'мама' },
          { balkar: 'аппа', russian: 'дедушка' },
          { balkar: 'ынна', russian: 'бабушка' },
          { balkar: 'егеч', russian: 'сестра' },
          { balkar: 'къарындаш', russian: 'брат' },
          { balkar: 'адам', russian: 'человек' },
          { balkar: 'сабий', russian: 'ребёнок' },
          { balkar: 'жаш', russian: 'мальчик' },
          { balkar: 'къыз', russian: 'девочка' },
          { balkar: 'тиширыу', russian: 'женщина' },
          { balkar: 'эр киши', russian: 'мужчина' }
        ]
      },
      {
        type: 'theory',
        title: '2. Вопросительные слова',
        content: [
          { balkar: 'ким?', russian: 'кто?' },
          { balkar: 'не?', russian: 'что?' },
          { balkar: 'къайда?', russian: 'где?' },
          { balkar: 'къайдан?', russian: 'откуда?' },
          { balkar: 'нек?', russian: 'почему? зачем?' },
          { balkar: 'къачан?', russian: 'когда?' }
        ]
      },
      {
        type: 'theory',
        title: '3. Новые глаголы (настоящее время)',
        content: [
          { balkar: 'жашаргъа', russian: 'жить', examples: ['мен жашайма', 'сен жашайсе'] },
          { balkar: 'сюерге', russian: 'любить', examples: ['мен сюеме', 'сен сюейсе'] },
          { balkar: 'айтыргъа', russian: 'говорить', examples: ['мен айтама', 'сен айтаса'] },
          { balkar: 'этерге', russian: 'делать', examples: ['мен этейме', 'сен этейсе'] }
        ],
        note: 'Фраза: Мен сени сюеме – Я тебя люблю. (сени – тебя)'
      },
      {
        type: 'theory',
        title: '4. Отрицание частицей «тюйюл»',
        content: [
          { balkar: 'Сен ата тюйюлсе', russian: 'Ты не папа' },
          { balkar: 'Угъай', russian: 'Нет (отрицательный ответ)' }
        ],
        note: 'Чтобы сказать «не», используется слово тюйюл (тюйюлсе в конце глагольных форм).'
      },
      {
        type: 'theory',
        title: '5. Примеры предложений',
        content: [
          { balkar: 'Ким ол?', russian: 'Кто это? (Ол – он/она)' },
          { balkar: 'Ол мени атам.', russian: 'Это мой папа.' },
          { balkar: 'Къайда ана?', russian: 'Где мама?' },
          { balkar: 'Ана юйде.', russian: 'Мама дома.' },
          { balkar: 'Не этмейсе?', russian: 'Что ты делаешь?' },
          { balkar: 'Мен жашайма.', russian: 'Я живу.' },
          { balkar: 'Мен сени сюеме.', russian: 'Я тебя люблю.' }
        ]
      },
      {
        type: 'exercise',
        exerciseType: 'translate',
        title: 'Задание 1: Переведите на балкарский',
        questions: [
          { question: 'Кто это? Это моя сестра.', answer: 'Ким ол? Ол мени егеч.' },
          { question: 'Где дедушка?', answer: 'Къайда аппа?' },
          { question: 'Я живу хорошо.', answer: 'Мен жашайма хо.' },
          { question: 'Почему ты не работаешь?', answer: 'Нек сен ишлейме тюйюлсе?' }
        ]
      },
      {
        type: 'exercise',
        exerciseType: 'multiple-choice',
        title: 'Задание 2: Выберите правильный перевод',
        questions: [
          { question: 'ата', answer: 'папа', options: ['мама', 'папа', 'сестра', 'брат'] },
          { question: 'егеч', answer: 'сестра', options: ['брат', 'сестра', 'мама', 'папа'] },
          { question: 'ким?', answer: 'кто?', options: ['где?', 'когда?', 'кто?', 'почему?'] }
        ]
      }
    ]
  },
  {
    id: 'lesson-3',
    order: 3,
    title: 'Еда, цвета, прилагательные. Множественное число',
    description: 'Научитесь называть продукты, описывать предметы, использовать множественное число',
    sections: [
      {
        type: 'theory',
        title: '1. Продукты и еда',
        content: [
          { balkar: 'азыкъ', russian: 'еда' },
          { balkar: 'гыржын', russian: 'хлеб' },
          { balkar: 'сют', russian: 'молоко' },
          { balkar: 'шорпа', russian: 'суп' },
          { balkar: 'эт', russian: 'мясо' },
          { balkar: 'чабакъ', russian: 'рыба' },
          { balkar: 'жумуртха', russian: 'яйцо' },
          { balkar: 'бишлякъ', russian: 'сыр' },
          { balkar: 'туз', russian: 'соль' },
          { balkar: 'алма', russian: 'яблоко' },
          { balkar: 'жау', russian: 'масло' },
          { balkar: 'татыулу', russian: 'вкусный' }
        ]
      },
      {
        type: 'theory',
        title: '2. Прилагательные (цвета и качества)',
        content: [
          { balkar: 'акъ', russian: 'белый' },
          { balkar: 'къара', russian: 'чёрный' },
          { balkar: 'къызыл', russian: 'красный' },
          { balkar: 'уллу', russian: 'большой' },
          { balkar: 'гитче', russian: 'маленький' },
          { balkar: 'ариу', russian: 'красивый' },
          { balkar: 'акъыллы', russian: 'умный' },
          { balkar: 'иги', russian: 'хороший' },
          { balkar: 'аман', russian: 'плохой' },
          { balkar: 'жангы', russian: 'новый' },
          { balkar: 'кьызыу', russian: 'горячий' },
          { balkar: 'сууукъ', russian: 'холодный' },
          { balkar: 'жылы', russian: 'тёплый' },
          { balkar: 'кир', russian: 'грязный' },
          { balkar: 'бек', russian: 'очень' },
          { balkar: 'аз', russian: 'мало' },
          { balkar: 'кёп', russian: 'много' }
        ]
      },
      {
        type: 'theory',
        title: '3. Множественное число',
        content: [
          { balkar: 'ата → атала', russian: 'отцы' },
          { balkar: 'ана → анала', russian: 'матери' },
          { balkar: 'жаш → жашла', russian: 'мальчики' },
          { balkar: 'эшик → эшикле', russian: 'двери' },
          { balkar: 'кёз → кёзле', russian: 'глаза' }
        ],
        note: 'Добавляется суффикс -ла или -ле (по гармонии гласных).'
      },
      {
        type: 'theory',
        title: '4. Примеры предложений',
        content: [
          { balkar: 'Алма татыулу.', russian: 'Яблоко вкусное.' },
          { balkar: 'Бир уллу алма.', russian: 'Одно большое яблоко.' },
          { balkar: 'Сют жылы.', russian: 'Молоко тёплое.' },
          { balkar: 'Анала уллула.', russian: 'Матери большие (уважительно).' },
          { balkar: 'Бу не?', russian: 'Что это? (бу – это)' },
          { balkar: 'Бу къызыл алма.', russian: 'Это красное яблоко.' }
        ]
      },
      {
        type: 'theory',
        title: '5. Числительные 1–10',
        content: [
          { balkar: 'бир', russian: '1' },
          { balkar: 'эки', russian: '2' },
          { balkar: 'юч', russian: '3' },
          { balkar: 'тёрт', russian: '4' },
          { balkar: 'беш', russian: '5' },
          { balkar: 'алты', russian: '6' },
          { balkar: 'жети', russian: '7' },
          { balkar: 'сегиз', russian: '8' },
          { balkar: 'тогъуз', russian: '9' },
          { balkar: 'он', russian: '10' }
        ]
      },
      {
        type: 'exercise',
        exerciseType: 'plural',
        title: 'Задание 1: Напишите во множественном числе',
        questions: [
          { question: 'юй (дом)', answer: 'юйле' },
          { question: 'къол (рука)', answer: 'къолла' },
          { question: 'кёз (глаз)', answer: 'кёзле' },
          { question: 'устаз (учитель)', answer: 'устазла' }
        ]
      },
      {
        type: 'exercise',
        exerciseType: 'translate',
        title: 'Задание 2: Переведите на балкарский',
        questions: [
          { question: 'Чёрный хлеб.', answer: 'Къара гыржын.' },
          { question: 'Красное яблоко вкусное.', answer: 'Къызыл алма татыулу.' },
          { question: 'Дома большие.', answer: 'Юйле уллула.' },
          { question: 'Ты очень красивый (ариу).', answer: 'Сен бек ариу.' }
        ]
      }
    ]
  },
  {
    id: 'lesson-4',
    order: 4,
    title: 'Глаголы движения и состояния. Отрицание. Временные понятия',
    description: 'Научитесь выражать действия, спрашивать о времени, использовать отрицательные формы',
    sections: [
      {
        type: 'theory',
        title: '1. Глаголы движения и действия',
        content: [
          { balkar: 'чабаргъа', russian: 'бегать', examples: ['мен чабама', 'сен чабаса'] },
          { balkar: 'жукъларгъа', russian: 'спать', examples: ['мен жукълайма', 'сен жукълайсе'] },
          { balkar: 'ичерге', russian: 'пить', examples: ['мен ичеме', 'сен ичесе'] },
          { balkar: 'олтурургъа', russian: 'сидеть', examples: ['мен олтурама', 'сен олтураса'] },
          { balkar: 'жатаргъа', russian: 'лежать', examples: ['мен жатама', 'сен жатаса'] },
          { balkar: 'къараргъа', russian: 'смотреть', examples: ['мен къарайма', 'сен къарайса'] },
          { balkar: 'эшитирге', russian: 'слышать', examples: ['мен эшитем', 'сен эшитесе'] },
          { balkar: 'окъурургъа', russian: 'учиться, читать', examples: ['мен окъуйма', 'сен окъуйса'] },
          { balkar: 'тохтаргъа', russian: 'останавливаться', examples: ['мен тохтайма', 'сен тохтайса'] }
        ]
      },
      {
        type: 'theory',
        title: '2. Отрицание глаголов',
        content: [
          { balkar: 'мен барама', russian: 'я иду' },
          { balkar: 'мен бармайма', russian: 'я не иду' },
          { balkar: 'сен ишлейсе', russian: 'ты работаешь' },
          { balkar: 'сен ишлемейсе', russian: 'ты не работаешь' },
          { balkar: 'Бу гитче тюйюлсе', russian: 'Это не маленькое' },
          { balkar: 'Мен устаз тюйюлме', russian: 'Я не учитель' }
        ],
        note: 'Правило отрицания для имён и прилагательных: Подлежащее + сказуемое + тюйюл + личное окончание.'
      },
      {
        type: 'theory',
        title: '3. Время и дни',
        content: [
          { balkar: 'кюн', russian: 'день, солнце' },
          { balkar: 'кече', russian: 'ночь' },
          { balkar: 'ерттенлик', russian: 'утро' },
          { balkar: 'ингир', russian: 'вечер' },
          { balkar: 'сагъат', russian: 'час' },
          { balkar: 'бюгюн', russian: 'сегодня' },
          { balkar: 'тамбла', russian: 'завтра' },
          { balkar: 'тюнене', russian: 'вчера' },
          { balkar: 'ыйыкъ', russian: 'неделя' },
          { balkar: 'ай', russian: 'месяц' },
          { balkar: 'жыл', russian: 'год' }
        ]
      },
      {
        type: 'theory',
        title: '4. Наречия и другие слова',
        content: [
          { balkar: 'терк', russian: 'быстро' },
          { balkar: 'тынч', russian: 'медленно, легко' },
          { balkar: 'кьыйын', russian: 'трудно' },
          { balkar: 'анда-мында', russian: 'иногда' },
          { balkar: 'энтда', russian: 'ещё' },
          { balkar: 'аламат', russian: 'превосходно, прекрасно' }
        ]
      },
      {
        type: 'theory',
        title: '5. Примеры предложений',
        content: [
          { balkar: 'Сен терк чабаса?', russian: 'Ты быстро бегаешь?' },
          { balkar: 'Мен кьыйын ишлейме.', russian: 'Я трудно работаю.' },
          { balkar: 'Бюгюн кюн ахшы.', russian: 'Сегодня день хорош.' },
          { balkar: 'Ол жукълайды.', russian: 'Он спит.' },
          { balkar: 'Биз тамбла барабыз.', russian: 'Мы завтра идём.' },
          { balkar: 'Бу ариу тюйюлме.', russian: 'Это не красивое (я считаю).' },
          { balkar: 'Мен сен тюйюлме.', russian: 'Я не ты. (шутливо)' }
        ]
      },
      {
        type: 'exercise',
        exerciseType: 'translate',
        title: 'Задание 1: Переведите на балкарский',
        questions: [
          { question: 'Сегодня я не работаю.', answer: 'Бюгюн мен ишлемейме.' },
          { question: 'Ты быстро бегаешь?', answer: 'Сен терк чабаса?' },
          { question: 'Завтра будет хороший день.', answer: 'Тамбла кюн ахшы боллукъ.' },
          { question: 'Иногда я читаю.', answer: 'Анда-мында мен окъуйма.' }
        ]
      },
      {
        type: 'exercise',
        exerciseType: 'conjugate',
        title: 'Задание 2: Поставьте глаголы в нужную форму',
        questions: [
          { question: 'чабаргъа (сен)', answer: 'сен чабаса' },
          { question: 'окъурургъа (мен)', answer: 'мен окъуйма' },
          { question: 'тохтаргъа (ол)', answer: 'ол тохтайды' }
        ]
      }
    ]
  },
  {
    id: 'lesson-5',
    order: 5,
    title: 'Фразеологизмы, этикет и закрепление',
    description: 'Познакомьтесь с идиомами балкарского языка, повторите пройденное',
    sections: [
      {
        type: 'theory',
        title: '1. Балкарские фразеологизмы',
        content: [
          { balkar: 'Къулакъ салды', russian: 'положил ухо', meaning: 'прислушался' },
          { balkar: 'Отдан кёлек кийди', russian: 'надел рубашку из огня', meaning: 'разозлился' },
          { balkar: 'Арт этегин аллына къаплады', russian: 'задний подол перекинул вперёд', meaning: 'отругал' },
          { balkar: 'Аягъы басханны кёзю кермей', russian: 'глаз не видит, на что нога наступает', meaning: 'быстро бежал, бежал не глядя' },
          { balkar: 'Тилин жутуп къойгъанды', russian: 'словно язык проглотил', meaning: 'молчать (язык проглотить)' },
          { balkar: 'Сёзюню къысхасы', russian: 'короткое его слово', meaning: 'короче говоря, в двух словах' },
          { balkar: 'Аузундан жылы сёз чыкъмайды', russian: 'изо рта теплое слово не выходит', meaning: 'о недружелюбном, грубом человеке' },
          { balkar: 'Баууру суукъ адам', russian: 'человек с холодной печенью', meaning: 'холодный, бессердечный человек' },
          { balkar: 'Жауруну жерге тийди', russian: 'его плечи коснулись земли', meaning: 'сдаться, потерпеть поражение' },
          { balkar: 'Башындан суу айланнганды', russian: 'вода вокруг головы закружилась', meaning: 'потерять голову от чего-либо' }
        ]
      },
      {
        type: 'theory',
        title: '2. Вежливые фразы и обращения',
        content: [
          { balkar: 'Сау бол', russian: 'Спасибо' },
          { balkar: 'Буруч этме', russian: 'Извините (букв. не делайте вину)' },
          { balkar: 'Тынч бол', russian: 'Будь спокоен (прощание)' },
          { balkar: 'Эшик ач!', russian: 'Открой дверь! (повелительное наклонение)' },
          { balkar: 'Къайры бараса?', russian: 'Куда идёшь?' },
          { balkar: 'Мен сени сюеме', russian: 'Я тебя люблю' }
        ]
      },
      {
        type: 'theory',
        title: '3. Повторение грамматики',
        content: [
          { balkar: 'Порядок слов', russian: 'SOV (подлежащее – дополнение – сказуемое)' },
          { balkar: 'Множественное число', russian: '-ла / -ле' },
          { balkar: 'Нет предлогов', russian: 'их роль играют падежные окончания' },
          { balkar: 'Ударение', russian: 'чаще на последний слог, при обращении – на первый' },
          { balkar: 'Отрицание', russian: 'тюйюл + личное окончание' }
        ]
      },
      {
        type: 'reading',
        title: '4. Текст для чтения и перевода',
        content: [
          { balkar: 'Бюгюн эрттенликде мен турдум (я встал). Ана шорпа биширди (сварила суп). Мен шорпа ичеме. Атам ишлеге (на работу) кетди (уехал). Кюн ариу. Жашла чабадыла (бегают). Мен окъуйма. Къыз къарайды. Аламат кюн.', russian: 'Сегодня утром я встал. Мама сварила суп. Я пью суп. Мой папа уехал на работу. День красивый. Мальчики бегают. Я читаю. Девочка смотрит. Прекрасный день.' }
        ]
      },
      {
        type: 'dialog',
        title: '5. Диалог-повторение',
        dialogs: [
          {
            lines: [
              { speaker: 1, text: 'Кюн ахшы болсун! Къалайса?' },
              { speaker: 2, text: 'Бек хо, сау бол. Сен не этейсе?' },
              { speaker: 1, text: 'Мен окъуйма, кече жукълайма. Сен?' },
              { speaker: 2, text: 'Мен чабама. Алам атам юйде.' },
              { speaker: 1, text: 'Ангыладым. Тынч къал!' },
              { speaker: 2, text: 'Тынч бол!' }
            ]
          }
        ]
      },
      {
        type: 'exercise',
        exerciseType: 'translate',
        title: 'Задание 1: Напишите по-балкарски',
        questions: [
          { question: 'Короче говоря, я люблю тебя.', answer: 'Сёзюню къысхасы, мен сени сюеме.' },
          { question: 'Он рассердился (разозлился).', answer: 'Ол отдан кёлек кийди.' },
          { question: 'Почему ты молчишь? (язык проглотил)', answer: 'Нек сен тилин жутуп къойгъанды?' }
        ]
      },
      {
        type: 'exercise',
        exerciseType: 'idiom-match',
        title: 'Задание 2: Соотнесите фразеологизмы с их значениями',
        questions: [
          { balkar: 'Къулакъ салды', meaning: 'прислушался' },
          { balkar: 'Отдан кёлек кийди', meaning: 'разозлился' },
          { balkar: 'Тилин жутуп къойгъанды', meaning: 'молчать' }
        ]
      }
    ]
  }
]
