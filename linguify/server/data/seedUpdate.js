import dotenv from 'dotenv'
import mongoose from 'mongoose'
import connectDB from '../config/db.js'
import Character from '../models/Character.js'
import Vocabulary from '../models/Vocabulary.js'
import Grammar from '../models/Grammar.js'
import Sentence from '../models/Sentence.js'
import ListeningExercise from '../models/ListeningExercise.js'
import SpeakingExercise from '../models/SpeakingExercise.js'
import ConversationScenario from '../models/ConversationScenario.js'

dotenv.config()
await connectDB()

const characters = [
  {
    language: 'Japanese',
    symbol: 'け',
    romanization: 'ke',
    exampleWords: ['けさ', 'けむり'],
    strokeCount: 3,
    strokeTips: [
      'Draw the short left vertical stroke first.',
      'Add the longer center stroke downward.',
      'Finish with the curved right stroke.'
    ],
    order: 9
  },
  {
    language: 'Japanese',
    symbol: 'こ',
    romanization: 'ko',
    exampleWords: ['こえ', 'こども'],
    strokeCount: 2,
    strokeTips: [
      'Draw the top horizontal line first.',
      'Add the lower longer horizontal line second.'
    ],
    order: 10
  },
  {
    language: 'Japanese',
    symbol: 'さ',
    romanization: 'sa',
    exampleWords: ['さくら', 'さかな'],
    strokeCount: 3,
    strokeTips: [
      'Draw the short upper stroke first.',
      'Add the vertical curve next.',
      'Finish with the right-side stroke.'
    ],
    order: 11
  },
  {
    language: 'Japanese',
    symbol: 'し',
    romanization: 'shi',
    exampleWords: ['しま', 'しお'],
    strokeCount: 1,
    strokeTips: [
      'Write one smooth curved stroke from top to bottom.'
    ],
    order: 12
  },
  {
    language: 'Japanese',
    symbol: 'す',
    romanization: 'su',
    exampleWords: ['すし', 'すな'],
    strokeCount: 2,
    strokeTips: [
      'Draw the top short stroke first.',
      'Add the long looping curved stroke second.'
    ],
    order: 13
  },
  {
    language: 'Japanese',
    symbol: 'せ',
    romanization: 'se',
    exampleWords: ['せかい', 'せんせい'],
    strokeCount: 3,
    strokeTips: [
      'Draw the short top horizontal line.',
      'Add the long vertical crossing stroke.',
      'Finish with the bottom curved stroke.'
    ],
    order: 14
  },
  {
    language: 'Japanese',
    symbol: 'そ',
    romanization: 'so',
    exampleWords: ['そら', 'そと'],
    strokeCount: 2,
    strokeTips: [
      'Draw the short angled top stroke first.',
      'Add the longer flowing curved stroke second.'
    ],
    order: 15
  }
]

const vocabularyItems = [
  // Greetings
  {
    language: 'Japanese',
    word: 'こんにちは',
    translation: 'Hello',
    romanization: 'konnichiwa',
    topic: 'greetings',
    difficulty: 'beginner',
    examples: [
      'こんにちは、げんきですか。',
      'こんにちは、わたしはりてしです。'
    ]
  },
  {
    language: 'Japanese',
    word: 'ありがとう',
    translation: 'Thank you',
    romanization: 'arigatou',
    topic: 'greetings',
    difficulty: 'beginner',
    examples: [
      'ありがとう、たすかりました。',
      'ほんとうにありがとう。'
    ]
  },
  {
    language: 'Japanese',
    word: 'さようなら',
    translation: 'Goodbye',
    romanization: 'sayounara',
    topic: 'greetings',
    difficulty: 'beginner',
    examples: [
      'またあした、さようなら。',
      'みなさん、さようなら。'
    ]
  },

  // People
  {
    language: 'Japanese',
    word: 'ともだち',
    translation: 'Friend',
    romanization: 'tomodachi',
    topic: 'people',
    difficulty: 'beginner',
    examples: [
      'かれはわたしのともだちです。',
      'ともだちとえいがをみます。'
    ]
  },
  {
    language: 'Japanese',
    word: 'せんせい',
    translation: 'Teacher',
    romanization: 'sensei',
    topic: 'people',
    difficulty: 'beginner',
    examples: [
      'せんせいはしんせつです。',
      'せんせいにしつもんします。'
    ]
  },
  {
    language: 'Japanese',
    word: 'がくせい',
    translation: 'Student',
    romanization: 'gakusei',
    topic: 'people',
    difficulty: 'beginner',
    examples: [
      'わたしはがくせいです。',
      'あのひとはがくせいです。'
    ]
  },

  // Food / Cafe
  {
    language: 'Japanese',
    word: 'コーヒー',
    translation: 'Coffee',
    romanization: 'koohii',
    topic: 'cafe',
    difficulty: 'beginner',
    examples: [
      'コーヒーをお願いします。',
      'あさにコーヒーをのみます。'
    ]
  },
  {
    language: 'Japanese',
    word: 'おちゃ',
    translation: 'Tea',
    romanization: 'ocha',
    topic: 'cafe',
    difficulty: 'beginner',
    examples: [
      'おちゃをください。',
      'あついおちゃがすきです。'
    ]
  },
  {
    language: 'Japanese',
    word: 'みず',
    translation: 'Water',
    romanization: 'mizu',
    topic: 'cafe',
    difficulty: 'beginner',
    examples: [
      'みずをください。',
      'つめたいみずをのみます。'
    ]
  },
  {
    language: 'Japanese',
    word: 'パン',
    translation: 'Bread',
    romanization: 'pan',
    topic: 'food',
    difficulty: 'beginner',
    examples: [
      'あさごはんにパンをたべます。',
      'このパンはおいしいです。'
    ]
  },
  {
    language: 'Japanese',
    word: 'ケーキ',
    translation: 'Cake',
    romanization: 'keeki',
    topic: 'food',
    difficulty: 'beginner',
    examples: [
      'ケーキもください。',
      'たんじょうびにケーキをたべます。'
    ]
  },
  {
    language: 'Japanese',
    word: 'すし',
    translation: 'Sushi',
    romanization: 'sushi',
    topic: 'food',
    difficulty: 'beginner',
    examples: [
      'すしがだいすきです。',
      'きのうすしをたべました。'
    ]
  },

  // Places
  {
    language: 'Japanese',
    word: 'えき',
    translation: 'Station',
    romanization: 'eki',
    topic: 'places',
    difficulty: 'beginner',
    examples: [
      'えきはどこですか。',
      'えきまであるきます。'
    ]
  },
  {
    language: 'Japanese',
    word: 'がっこう',
    translation: 'School',
    romanization: 'gakkou',
    topic: 'places',
    difficulty: 'beginner',
    examples: [
      'がっこうにいきます。',
      'がっこうはおおきいです。'
    ]
  },
  {
    language: 'Japanese',
    word: 'いえ',
    translation: 'House / Home',
    romanization: 'ie',
    topic: 'places',
    difficulty: 'beginner',
    examples: [
      'いえにかえります。',
      'わたしのいえはしずかです。'
    ]
  },
  {
    language: 'Japanese',
    word: 'みせ',
    translation: 'Shop',
    romanization: 'mise',
    topic: 'places',
    difficulty: 'beginner',
    examples: [
      'そのみせはやすいです。',
      'みせでかいものします。'
    ]
  },

  // Time
  {
    language: 'Japanese',
    word: 'きょう',
    translation: 'Today',
    romanization: 'kyou',
    topic: 'time',
    difficulty: 'beginner',
    examples: [
      'きょうはいそがしいです。',
      'きょうべんきょうします。'
    ]
  },
  {
    language: 'Japanese',
    word: 'あした',
    translation: 'Tomorrow',
    romanization: 'ashita',
    topic: 'time',
    difficulty: 'beginner',
    examples: [
      'あしたえいがをみます。',
      'あしたがっこうへいきます。'
    ]
  },

  // Adjectives
  {
    language: 'Japanese',
    word: 'おおきい',
    translation: 'Big',
    romanization: 'ookii',
    topic: 'adjectives',
    difficulty: 'beginner',
    examples: [
      'おおきいいぬです。',
      'そのへやはおおきいです。'
    ]
  },
  {
    language: 'Japanese',
    word: 'ちいさい',
    translation: 'Small',
    romanization: 'chiisai',
    topic: 'adjectives',
    difficulty: 'beginner',
    examples: [
      'ちいさいねこです。',
      'このほんはちいさいです。'
    ]
  },
  {
    language: 'Japanese',
    word: 'おいしい',
    translation: 'Delicious',
    romanization: 'oishii',
    topic: 'adjectives',
    difficulty: 'beginner',
    examples: [
      'このすしはおいしいです。',
      'おいしいケーキですね。'
    ]
  }
]

const grammarItems = [
  {
    language: 'Japanese',
    title: 'Topic marker wa',
    explanation: 'Use は to mark the topic of the sentence.',
    pattern: 'Noun + は + ...',
    level: 'beginner',
    examples: [
      {
        sentence: 'わたしはがくせいです。',
        translation: 'I am a student.',
        breakdown: 'わたし = I, は = topic marker, がくせい = student'
      }
    ]
  },
  {
    language: 'Japanese',
    title: 'Object marker o',
    explanation: 'Use を to mark the direct object of an action.',
    pattern: 'Noun + を + Verb',
    level: 'beginner',
    examples: [
      {
        sentence: 'ほんをよみます。',
        translation: 'I read a book.',
        breakdown: 'ほん = book, を = object marker, よみます = read'
      }
    ]
  },
  {
    language: 'Japanese',
    title: 'Possessive no',
    explanation: 'Use の to show possession or connection between two nouns.',
    pattern: 'Noun 1 + の + Noun 2',
    level: 'beginner',
    examples: [
      {
        sentence: 'わたしのほんです。',
        translation: 'It is my book.',
        breakdown: 'わたし = I, の = possessive marker, ほん = book'
      }
    ]
  },
  {
    language: 'Japanese',
    title: 'Location with ni',
    explanation: 'Use に for destinations and specific time or place relations.',
    pattern: 'Place/Time + に',
    level: 'beginner',
    examples: [
      {
        sentence: 'がっこうにいきます。',
        translation: 'I go to school.',
        breakdown: 'がっこう = school, に = to, いきます = go'
      }
    ]
  },
  {
    language: 'Japanese',
    title: 'Polite request with kudasai',
    explanation: 'Use ください after an object or action request to ask politely.',
    pattern: 'Noun + を + ください',
    level: 'beginner',
    examples: [
      {
        sentence: 'みずをください。',
        translation: 'Please give me water.',
        breakdown: 'みず = water, を = object marker, ください = please give'
      }
    ]
  }
]

const sentenceItems = [
  // Greetings
  {
    language: 'Japanese',
    sentence: 'こんにちは。',
    translation: 'Hello.',
    romanization: 'konnichiwa',
    topic: 'greetings',
    grammarPoints: ['basic greeting']
  },
  {
    language: 'Japanese',
    sentence: 'おはようございます。',
    translation: 'Good morning.',
    romanization: 'ohayou gozaimasu',
    topic: 'greetings',
    grammarPoints: ['polite greeting']
  },
  {
    language: 'Japanese',
    sentence: 'ありがとうございます。',
    translation: 'Thank you very much.',
    romanization: 'arigatou gozaimasu',
    topic: 'greetings',
    grammarPoints: ['polite phrase']
  },

  // Self introduction
  {
    language: 'Japanese',
    sentence: 'わたしはりてしです。',
    translation: 'I am Ritesh.',
    romanization: 'watashi wa riteshi desu',
    topic: 'introduction',
    grammarPoints: ['topic marker wa', 'desu']
  },
  {
    language: 'Japanese',
    sentence: 'わたしはがくせいです。',
    translation: 'I am a student.',
    romanization: 'watashi wa gakusei desu',
    topic: 'introduction',
    grammarPoints: ['topic marker wa', 'desu']
  },
  {
    language: 'Japanese',
    sentence: 'インドからきました。',
    translation: 'I came from India.',
    romanization: 'indo kara kimashita',
    topic: 'introduction',
    grammarPoints: ['kara = from']
  },

  // School
  {
    language: 'Japanese',
    sentence: 'がっこうにいきます。',
    translation: 'I go to school.',
    romanization: 'gakkou ni ikimasu',
    topic: 'school',
    grammarPoints: ['ni', 'verb masu']
  },
  {
    language: 'Japanese',
    sentence: 'にほんごをべんきょうします。',
    translation: 'I study Japanese.',
    romanization: 'nihongo o benkyou shimasu',
    topic: 'school',
    grammarPoints: ['object marker o']
  },
  {
    language: 'Japanese',
    sentence: 'せんせいはしんせつです。',
    translation: 'The teacher is kind.',
    romanization: 'sensei wa shinsetsu desu',
    topic: 'school',
    grammarPoints: ['topic marker wa']
  },

  // Home
  {
    language: 'Japanese',
    sentence: 'いえにかえります。',
    translation: 'I return home.',
    romanization: 'ie ni kaerimasu',
    topic: 'home',
    grammarPoints: ['ni', 'verb masu']
  },
  {
    language: 'Japanese',
    sentence: 'わたしのいえはおおきいです。',
    translation: 'My house is big.',
    romanization: 'watashi no ie wa ookii desu',
    topic: 'home',
    grammarPoints: ['possessive no', 'adjective']
  },
  {
    language: 'Japanese',
    sentence: 'へやでほんをよみます。',
    translation: 'I read a book in the room.',
    romanization: 'heya de hon o yomimasu',
    topic: 'home',
    grammarPoints: ['de', 'object marker o']
  },

  // Food / Cafe
  {
    language: 'Japanese',
    sentence: 'コーヒーをお願いします。',
    translation: 'Coffee, please.',
    romanization: 'koohii o onegaishimasu',
    topic: 'cafe',
    grammarPoints: ['object marker o', 'polite request']
  },
  {
    language: 'Japanese',
    sentence: 'みずをください。',
    translation: 'Please give me water.',
    romanization: 'mizu o kudasai',
    topic: 'cafe',
    grammarPoints: ['kudasai']
  },
  {
    language: 'Japanese',
    sentence: 'このケーキはおいしいです。',
    translation: 'This cake is delicious.',
    romanization: 'kono keeki wa oishii desu',
    topic: 'food',
    grammarPoints: ['adjective']
  },
  {
    language: 'Japanese',
    sentence: 'すしがだいすきです。',
    translation: 'I love sushi.',
    romanization: 'sushi ga daisuki desu',
    topic: 'food',
    grammarPoints: ['ga']
  },

  // Travel
  {
    language: 'Japanese',
    sentence: 'えきはどこですか。',
    translation: 'Where is the station?',
    romanization: 'eki wa doko desu ka',
    topic: 'travel',
    grammarPoints: ['question ka']
  },
  {
    language: 'Japanese',
    sentence: 'でぐちはあちらです。',
    translation: 'The exit is over there.',
    romanization: 'deguchi wa achira desu',
    topic: 'travel',
    grammarPoints: ['location']
  },
  {
    language: 'Japanese',
    sentence: 'でんしゃでいきます。',
    translation: 'I go by train.',
    romanization: 'densha de ikimasu',
    topic: 'travel',
    grammarPoints: ['de = by means']
  },

  // Shopping
  {
    language: 'Japanese',
    sentence: 'これはいくらですか。',
    translation: 'How much is this?',
    romanization: 'kore wa ikura desu ka',
    topic: 'shopping',
    grammarPoints: ['question ka']
  },
  {
    language: 'Japanese',
    sentence: 'それをください。',
    translation: 'Please give me that.',
    romanization: 'sore o kudasai',
    topic: 'shopping',
    grammarPoints: ['demonstrative', 'kudasai']
  },
  {
    language: 'Japanese',
    sentence: 'カードでいいですか。',
    translation: 'Is card okay?',
    romanization: 'kaado de ii desu ka',
    topic: 'shopping',
    grammarPoints: ['question ka']
  },

  // Time
  {
    language: 'Japanese',
    sentence: 'きょうはいそがしいです。',
    translation: 'Today is busy.',
    romanization: 'kyou wa isogashii desu',
    topic: 'time',
    grammarPoints: ['topic marker wa']
  },
  {
    language: 'Japanese',
    sentence: 'あしたともだちにあいます。',
    translation: 'I will meet a friend tomorrow.',
    romanization: 'ashita tomodachi ni aimasu',
    topic: 'time',
    grammarPoints: ['ni', 'future context']
  },

  // Feelings
  {
    language: 'Japanese',
    sentence: 'わたしはうれしいです。',
    translation: 'I am happy.',
    romanization: 'watashi wa ureshii desu',
    topic: 'feelings',
    grammarPoints: ['adjective']
  },
  {
    language: 'Japanese',
    sentence: 'すこしつかれました。',
    translation: 'I am a little tired.',
    romanization: 'sukoshi tsukaremashita',
    topic: 'feelings',
    grammarPoints: ['past polite']
  },

  // Daily verbs
  {
    language: 'Japanese',
    sentence: 'まいにちにほんごをれんしゅうします。',
    translation: 'I practice Japanese every day.',
    romanization: 'mainichi nihongo o renshuu shimasu',
    topic: 'daily life',
    grammarPoints: ['object marker o']
  },
  {
    language: 'Japanese',
    sentence: 'テレビをみます。',
    translation: 'I watch TV.',
    romanization: 'terebi o mimasu',
    topic: 'daily life',
    grammarPoints: ['object marker o']
  },
  {
    language: 'Japanese',
    sentence: 'おんがくをききます。',
    translation: 'I listen to music.',
    romanization: 'ongaku o kikimasu',
    topic: 'daily life',
    grammarPoints: ['object marker o']
  }
]

const listeningItems = [
  {
    language: 'Japanese',
    promptText: 'Choose the meaning of: コーヒーをお願いします',
    options: ['Coffee, please', 'Where is the station?', 'I am a student', 'This is my book'],
    correctAnswer: 'Coffee, please',
    difficulty: 'beginner',
    topic: 'cafe'
  }
]

const speakingItems = [
  {
    language: 'Japanese',
    prompt: 'Say: Coffee, please',
    expectedAnswer: 'コーヒーをお願いします',
    translation: 'Coffee, please',
    hint: 'Use コーヒー and おねがいします.',
    level: 'beginner'
  }
]

const conversationItems = [
  {
    language: 'Japanese',
    title: 'Ordering at a café',
    situation: 'Practice ordering a drink and snack politely in a Japanese café.',
    level: 'beginner',
    steps: [
      {
        speaker: 'Staff',
        line: 'いらっしゃいませ。',
        translation: 'Welcome.',
        choices: ['こんにちは。', 'えきはどこですか。', 'がくせいです。'],
        correctChoice: 'こんにちは。'
      },
      {
        speaker: 'Staff',
        line: 'こちらでおめしあがりですか。',
        translation: 'Will you eat here?',
        choices: ['はい、おねがいします。', 'ほんをよみます。', 'さようなら。'],
        correctChoice: 'はい、おねがいします。'
      },
      {
        speaker: 'Staff',
        line: 'ごちゅうもんは？',
        translation: 'What would you like to order?',
        choices: ['コーヒーをお願いします。', 'ともだちです。', 'こんにちは。'],
        correctChoice: 'コーヒーをお願いします。'
      },
      {
        speaker: 'Staff',
        line: 'ほかにいかがですか。',
        translation: 'Anything else?',
        choices: ['ケーキもお願いします。', 'えきはどこですか。', 'みせです。'],
        correctChoice: 'ケーキもお願いします。'
      },
      {
        speaker: 'Staff',
        line: 'かしこまりました。',
        translation: 'Certainly.',
        choices: ['ありがとうございます。', 'おはよう。', 'がんばって。'],
        correctChoice: 'ありがとうございます。'
      },
      {
        speaker: 'Staff',
        line: 'おまたせしました。',
        translation: 'Thank you for waiting.',
        choices: ['ありがとう。', 'いえです。', 'ともだちです。'],
        correctChoice: 'ありがとう。'
      }
    ]
  },
  {
    language: 'Japanese',
    title: 'Shopping at a store',
    situation: 'Ask about an item, its price, and finish the purchase politely.',
    level: 'beginner',
    steps: [
      {
        speaker: 'Staff',
        line: 'いらっしゃいませ。',
        translation: 'Welcome.',
        choices: ['こんにちは。', 'みずをください。', 'えきです。'],
        correctChoice: 'こんにちは。'
      },
      {
        speaker: 'Staff',
        line: 'なにをおさがしですか。',
        translation: 'What are you looking for?',
        choices: ['ほんをさがしています。', 'コーヒーです。', 'ありがとう。'],
        correctChoice: 'ほんをさがしています。'
      },
      {
        speaker: 'Staff',
        line: 'こちらです。',
        translation: 'It is here.',
        choices: ['ありがとうございます。', 'さようなら。', 'おちゃです。'],
        correctChoice: 'ありがとうございます。'
      },
      {
        speaker: 'Staff',
        line: 'おかいけいは1000えんです。',
        translation: 'The total is 1000 yen.',
        choices: ['カードでいいですか。', 'ともだちです。', 'ほんをよみます。'],
        correctChoice: 'カードでいいですか。'
      }
    ]
  }
]

async function upsertMany(model, items, getFilter) {
  for (const item of items) {
    await model.updateOne(
      getFilter(item),
      { $set: item },
      { upsert: true }
    )
  }
}

await upsertMany(Character, characters, (item) => ({
  language: item.language,
  symbol: item.symbol
}))

await upsertMany(Vocabulary, vocabularyItems, (item) => ({
  language: item.language,
  word: item.word
}))

await upsertMany(Grammar, grammarItems, (item) => ({
  language: item.language,
  title: item.title
}))

await upsertMany(Sentence, sentenceItems, (item) => ({
  language: item.language,
  sentence: item.sentence
}))

await upsertMany(ListeningExercise, listeningItems, (item) => ({
  language: item.language,
  promptText: item.promptText
}))

await upsertMany(SpeakingExercise, speakingItems, (item) => ({
  language: item.language,
  prompt: item.prompt
}))

await upsertMany(ConversationScenario, conversationItems, (item) => ({
  language: item.language,
  title: item.title
}))

console.log('Update seed completed successfully')
await mongoose.connection.close()