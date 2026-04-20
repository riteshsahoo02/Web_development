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
  { language: 'Japanese', symbol: 'あ', romanization: 'a', exampleWords: ['あさ', 'あい'], order: 1 },
  { language: 'Japanese', symbol: 'い', romanization: 'i', exampleWords: ['いえ', 'いぬ'], order: 2 },
  { language: 'Japanese', symbol: 'う', romanization: 'u', exampleWords: ['うみ', 'うた'], order: 3 },
  { language: 'Japanese', symbol: 'え', romanization: 'e', exampleWords: ['えき', 'えほん'], order: 4 },
  { language: 'Japanese', symbol: 'お', romanization: 'o', exampleWords: ['おちゃ', 'おと'], order: 5 },
  { language: 'Japanese', symbol: 'か', romanization: 'ka', exampleWords: ['かさ', 'かお'], order: 6 },
  { language: 'Japanese', symbol: 'き', romanization: 'ki', exampleWords: ['きた', 'きっぷ'], order: 7 },
  { language: 'Japanese', symbol: 'く', romanization: 'ku', exampleWords: ['くるま', 'くつ'], order: 8 }
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
  { language: 'Japanese', prompt: 'Say: I am a student', expectedAnswer: 'わたしはがくせいです', translation: 'I am a student', hint: 'Use わたし, がくせい, and です.', level: 'beginner' }
])

await ConversationScenario.insertMany([
  {
    language: 'Japanese',
    title: 'Ordering at a café',
    situation: 'You walk into a café and want to order water politely.',
    level: 'beginner',
    steps: [
      {
        speaker: 'Staff',
        line: 'いらっしゃいませ。',
        translation: 'Welcome.',
        choices: ['こんにちは', 'みずをください', 'ありがとう'],
        correctChoice: 'こんにちは'
      },
      {
        speaker: 'Staff',
        line: 'ごちゅうもんは？',
        translation: 'What would you like to order?',
        choices: ['えきはどこですか。', 'みずをください。', 'わたしはがくせいです。'],
        correctChoice: 'みずをください。'
      }
    ]
  },
  {
    language: 'Japanese',
    title: 'Asking for directions',
    situation: 'You need to ask where the station is.',
    level: 'beginner',
    steps: [
      {
        speaker: 'You',
        line: 'How do you ask where the station is?',
        translation: 'Select the best Japanese sentence.',
        choices: ['えきはどこですか。', 'こんにちは。', 'ほんをよみます。'],
        correctChoice: 'えきはどこですか。'
      }
    ]
  }
])

console.log('Sample data seeded successfully')
await mongoose.connection.close()
