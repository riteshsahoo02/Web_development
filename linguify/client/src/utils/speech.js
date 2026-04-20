export function createSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  if (!SpeechRecognition) return null

  const recognition = new SpeechRecognition()
  recognition.lang = 'ja-JP'
  recognition.interimResults = false
  recognition.maxAlternatives = 1
  return recognition
}

export function scoreTranscript(expected, actual) {
  const clean = (text) => text.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, '').trim()
  const a = clean(expected)
  const b = clean(actual)
  if (!a || !b) return 0
  if (a === b) return 100

  const wordsA = a.split(/\s+/)
  const wordsB = b.split(/\s+/)
  const matches = wordsA.filter((word) => wordsB.includes(word)).length
  return Math.round((matches / Math.max(wordsA.length, wordsB.length)) * 100)
}
export function speakText(text, lang = 'ja-JP') {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return { ok: false, message: 'Speech synthesis is not supported in this browser.' }
  }

  const synth = window.speechSynthesis
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = lang
  utterance.rate = 0.9
  utterance.pitch = 1

  const voices = synth.getVoices()
  const preferredVoice =
    voices.find((voice) => voice.lang === lang) ||
    voices.find((voice) => voice.lang?.startsWith('ja')) ||
    null

  if (preferredVoice) {
    utterance.voice = preferredVoice
  }

  synth.cancel()
  synth.speak(utterance)

  return {
    ok: true,
    message: preferredVoice
      ? `Using voice: ${preferredVoice.name}`
      : 'No dedicated Japanese voice found. Browser default voice was used.'
  }
}
