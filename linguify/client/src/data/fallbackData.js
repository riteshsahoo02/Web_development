export const modules = [
  {
    key: 'character',
    title: 'Characters',
    desc: 'Learn scripts, pronunciation, and stroke order.',
    path: '/learn/characters'
  },
  {
    key: 'vocabulary',
    title: 'Vocabulary',
    desc: 'Master useful words by category and context.',
    path: '/learn/vocabulary'
  },
  {
    key: 'grammar',
    title: 'Grammar',
    desc: 'Understand patterns that build correct sentences.',
    path: '/learn/grammar'
  },
  {
    key: 'sentence',
    title: 'Sentences',
    desc: 'Practice real daily-use sentence structures.',
    path: '/learn/sentences'
  },
  {
    key: 'listening',
    title: 'Listening',
    desc: 'Improve comprehension using guided audio tasks.',
    path: '/learn/listening'
  },
  {
    key: 'speaking',
    title: 'Speaking',
    desc: 'Speak aloud and compare with target answers.',
    path: '/learn/speaking'
  },
  {
    key: 'conversation',
    title: 'Conversations',
    desc: 'Roleplay scenario-based situations like travel or shopping.',
    path: '/learn/conversations'
  }
]

export const fallbackCharacters = [
  {
    _id: 'fallback-a',
    language: 'Japanese',
    symbol: 'あ',
    romanization: 'a',
    exampleWords: ['あさ', 'あい'],
    order: 1,
    strokeCount: 3,
    strokeTips: ['Start with the short left-to-right stroke.', 'Draw the taller vertical curve second.', 'Finish with the soft loop on the right.']
  },
  {
    _id: 'fallback-i',
    language: 'Japanese',
    symbol: 'い',
    romanization: 'i',
    exampleWords: ['いえ', 'いぬ'],
    order: 2,
    strokeCount: 2,
    strokeTips: ['Make the left stroke shorter.', 'Place the right stroke slightly taller and curved.']
  },
  {
    _id: 'fallback-u',
    language: 'Japanese',
    symbol: 'う',
    romanization: 'u',
    exampleWords: ['うみ', 'うた'],
    order: 3,
    strokeCount: 2,
    strokeTips: ['Draw the top dash lightly.', 'Sweep the main curved stroke down and around.']
  },
  {
    _id: 'fallback-e',
    language: 'Japanese',
    symbol: 'え',
    romanization: 'e',
    exampleWords: ['えき', 'えほん'],
    order: 4,
    strokeCount: 2,
    strokeTips: ['Keep the top line short and clean.', 'The second stroke is longer with a curved finish.']
  }
]

export const fallbackSpeaking = [
  {
    _id: 'speak-1',
    language: 'Japanese',
    prompt: 'Say: Hello',
    expectedAnswer: 'こんにちは',
    translation: 'Hello',
    hint: 'Use the standard daytime greeting.',
    level: 'beginner'
  },
  {
    _id: 'speak-2',
    language: 'Japanese',
    prompt: 'Say: I am a student',
    expectedAnswer: 'わたしはがくせいです',
    translation: 'I am a student',
    hint: 'Combine わたし, がくせい, and です.',
    level: 'beginner'
  }
]

export const fallbackConversations = [
  {
    _id: 'conv-cafe',
    title: 'Ordering at a café',
    situation: 'A longer beginner scenario where you greet the staff, order a drink, and respond politely.',
    level: 'beginner',
    steps: [
      {
        speaker: 'Staff',
        line: 'いらっしゃいませ。',
        translation: 'Welcome.',
        choices: ['こんにちは。', 'みずをください。', 'えきはどこですか。'],
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
        choices: ['みずをください。', 'わたしはがくせいです。', 'ともだちです。'],
        correctChoice: 'みずをください。'
      },
      {
        speaker: 'Staff',
        line: 'ほかにいかがですか。',
        translation: 'Anything else?',
        choices: ['それだけです。', 'えきはどこですか。', 'こんにちは。'],
        correctChoice: 'それだけです。'
      },
      {
        speaker: 'Staff',
        line: 'ありがとうございます。',
        translation: 'Thank you very much.',
        choices: ['ありがとう。', 'いただきます。', 'がんばって。'],
        correctChoice: 'ありがとう。'
      }
    ]
  }
]
