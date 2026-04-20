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

await Promise.all([
  Character.deleteMany({}),
  Vocabulary.deleteMany({}),
  Grammar.deleteMany({}),
  Sentence.deleteMany({}),
  ListeningExercise.deleteMany({}),
  SpeakingExercise.deleteMany({}),
  ConversationScenario.deleteMany({})
])

await Character.insertMany([
  {
    language: 'Japanese',
    symbol: 'あ',
    romanization: 'a',
    exampleWords: ['あさ', 'あい'],
    strokeCount: 3,
    strokeTips: ['Start with the small top stroke.', 'Draw the taller center curve next.', 'Finish with the right loop smoothly.'],
    order: 1
  },
  {
    language: 'Japanese',
    symbol: 'い',
    romanization: 'i',
    exampleWords: ['いえ', 'いぬ'],
    strokeCount: 2,
    strokeTips: ['Write the short left stroke first.', 'Place the taller curved right stroke second.'],
    order: 2
  },
  {
    language: 'Japanese',
    symbol: 'う',
    romanization: 'u',
    exampleWords: ['うみ', 'うた'],
    strokeCount: 2,
    strokeTips: ['Add the small top dash first.', 'Sweep the lower curved stroke in one motion.'],
    order: 3
  },
  {
    language: 'Japanese',
    symbol: 'え',
    romanization: 'e',
    exampleWords: ['えき', 'えほん'],
    strokeCount: 2,
    strokeTips: ['Keep the top line neat and light.', 'The second stroke is long and gently curved.'],
    order: 4
  },
  {
    language: 'Japanese',
    symbol: 'お',
    romanization: 'o',
    exampleWords: ['おちゃ', 'おと'],
    strokeCount: 3,
    strokeTips: ['Start with the short top stroke.', 'Draw the long vertical curve through the center.', 'Close with the right-side loop.'],
    order: 5
  },
  {
    language: 'Japanese',
    symbol: 'か',
    romanization: 'ka',
    exampleWords: ['かさ', 'かお'],
    strokeCount: 3,
    strokeTips: ['Left vertical line first.', 'Then add the top-right stroke.', 'Finish with the lower sweeping stroke.'],
    order: 6
  },
  {
    language: 'Japanese',
    symbol: 'き',
    romanization: 'ki',
    exampleWords: ['きた', 'きっぷ'],
    strokeCount: 4,
    strokeTips: ['Top horizontal first.', 'Add the small middle horizontal.', 'Draw the long vertical through them.', 'Finish with the lower side stroke.'],
    order: 7
  },
  {
    language: 'Japanese',
    symbol: 'く',
    romanization: 'ku',
    exampleWords: ['くるま', 'くつ'],
    strokeCount: 1,
    strokeTips: ['Use one clean diagonal curve from top left to bottom right.'],
    order: 8
  }
])

await Vocabulary.insertMany([
  { language: 'Japanese', word: 'こんにちは', translation: 'Hello', romanization: 'konnichiwa', topic: 'greetings', difficulty: 'beginner', examples: ['こんにちは、はじめまして。'] },
  { language: 'Japanese', word: 'ありがとう', translation: 'Thank you', romanization: 'arigatou', topic: 'greetings', difficulty: 'beginner', examples: ['ありがとうございます。'] },
  { language: 'Japanese', word: 'みず', translation: 'Water', romanization: 'mizu', topic: 'food', difficulty: 'beginner', examples: ['みずをください。'] },
  { language: 'Japanese', word: 'えき', translation: 'Station', romanization: 'eki', topic: 'travel', difficulty: 'beginner', examples: ['えきはどこですか。'] },
  { language: 'Japanese', word: 'ともだち', translation: 'Friend', romanization: 'tomodachi', topic: 'people', difficulty: 'beginner', examples: ['ともだちです。'] },
  { language: 'Japanese', word: 'ほん', translation: 'Book', romanization: 'hon', topic: 'objects', difficulty: 'beginner', examples: ['ほんをよみます。'] }
])

await Grammar.insertMany([
  {
    language: 'Japanese',
    title: 'Desu for polite statements',
    explanation: 'Use です (desu) to make polite present-tense statements in beginner Japanese.',
    pattern: 'Noun + です',
    level: 'beginner',
    examples: [{ sentence: 'わたしはがくせいです。', translation: 'I am a student.', breakdown: 'わたし = I, がくせい = student, です = polite ending' }]
  },
  {
    language: 'Japanese',
    title: 'Question with ka',
    explanation: 'Add か (ka) at the end of a sentence to form a polite question.',
    pattern: 'Sentence + か',
    level: 'beginner',
    examples: [{ sentence: 'おげんきですか。', translation: 'How are you?', breakdown: 'A polite question ending with か.' }]
  }
])

await Sentence.insertMany([
  { language: 'Japanese', sentence: 'わたしはりてしです。', translation: 'I am Ritesh.', romanization: 'watashi wa Ritesh desu', topic: 'introduction', grammarPoints: ['desu'] },
  { language: 'Japanese', sentence: 'みずをください。', translation: 'Please give me water.', romanization: 'mizu o kudasai', topic: 'food', grammarPoints: ['request'] },
  { language: 'Japanese', sentence: 'えきはどこですか。', translation: 'Where is the station?', romanization: 'eki wa doko desu ka', topic: 'travel', grammarPoints: ['question'] },
  { language: 'Japanese', sentence: 'ありがとう。', translation: 'Thank you.', romanization: 'arigatou', topic: 'greetings', grammarPoints: ['expression'] }
])

await ListeningExercise.insertMany([
  { language: 'Japanese', promptText: 'Choose the meaning of: こんにちは', options: ['Hello', 'Goodbye', 'Water', 'Station'], correctAnswer: 'Hello', difficulty: 'beginner', topic: 'greetings' },
  { language: 'Japanese', promptText: 'Choose the meaning of: みずをください', options: ['Please give me water', 'Where is the station?', 'I am a student', 'Nice to meet you'], correctAnswer: 'Please give me water', difficulty: 'beginner', topic: 'food' }
])

await SpeakingExercise.insertMany([
  { language: 'Japanese', prompt: 'Say: Hello', expectedAnswer: 'こんにちは', translation: 'Hello', hint: 'Use the common daytime greeting.', level: 'beginner' },
  { language: 'Japanese', prompt: 'Say: I am a student', expectedAnswer: 'わたしはがくせいです', translation: 'I am a student', hint: 'Use わたし, がくせい, and です.', level: 'beginner' },
  { language: 'Japanese', prompt: 'Say: Please give me water', expectedAnswer: 'みずをください', translation: 'Please give me water', hint: 'Use みず and ください.', level: 'beginner' }
])

await ConversationScenario.insertMany([
  {
    language: 'Japanese',
    title: 'Ordering at a café',
    situation: 'You walk into a café, greet the staff, order water, and finish the exchange politely.',
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
        choices: ['みずをください。', 'こんにちは。', 'ともだちです。'],
        correctChoice: 'みずをください。'
      },
      {
        speaker: 'Staff',
        line: 'ほかにいかがですか。',
        translation: 'Anything else?',
        choices: ['それだけです。', 'えきはどこですか。', 'おちゃです。'],
        correctChoice: 'それだけです。'
      },
      {
        speaker: 'Staff',
        line: 'かしこまりました。',
        translation: 'Certainly.',
        choices: ['ありがとうございます。', 'がんばって。', 'こんにちは。'],
        correctChoice: 'ありがとうございます。'
      },
      {
        speaker: 'Staff',
        line: 'おまたせしました。',
        translation: 'Thank you for waiting.',
        choices: ['ありがとう。', 'おはよう。', 'いえです。'],
        correctChoice: 'ありがとう。'
      }
    ]
  },
  {
    language: 'Japanese',
    title: 'Asking for directions to the station',
    situation: 'You stop someone on the street, ask where the station is, and confirm the route.',
    level: 'beginner',
    steps: [
      {
        speaker: 'You',
        line: 'How do you politely get someone’s attention?',
        translation: 'Choose the best opening line.',
        choices: ['すみません。', 'ありがとう。', 'いただきます。'],
        correctChoice: 'すみません。'
      },
      {
        speaker: 'Local person',
        line: 'はい？',
        translation: 'Yes?',
        choices: ['えきはどこですか。', 'みずをください。', 'がくせいです。'],
        correctChoice: 'えきはどこですか。'
      },
      {
        speaker: 'Local person',
        line: 'まっすぐいって、みぎです。',
        translation: 'Go straight and turn right.',
        choices: ['ありがとうございます。', 'こんにちは。', 'これです。'],
        correctChoice: 'ありがとうございます。'
      },
      {
        speaker: 'Local person',
        line: 'あるいてごふんぐらいです。',
        translation: 'It is about five minutes on foot.',
        choices: ['ごふんですね。', 'ほんです。', 'ともだちです。'],
        correctChoice: 'ごふんですね。'
      },
      {
        speaker: 'Local person',
        line: 'わかりましたか。',
        translation: 'Did you understand?',
        choices: ['はい、わかりました。', 'いいえ、みずです。', 'こんにちは。'],
        correctChoice: 'はい、わかりました。'
      }
    ]
  }
])

console.log('Sample data seeded successfully')
await mongoose.connection.close()
