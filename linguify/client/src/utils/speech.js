export function createSpeechRecognition(lang = 'ja-JP') {
  if (typeof window === 'undefined') return null

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  if (!SpeechRecognition) return null

  const recognition = new SpeechRecognition()
  recognition.lang = lang
  recognition.interimResults = true
  recognition.continuous = false
  recognition.maxAlternatives = 3
  return recognition
}

function clean(text = '') {
  return text
    .toLowerCase()
    .normalize('NFKC')
    .replace(/[。、「」！？!?,.'"”“’‘:;()\-]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function wordSimilarity(a, b) {
  const wordsA = a.split(/\s+/).filter(Boolean)
  const wordsB = b.split(/\s+/).filter(Boolean)
  if (!wordsA.length || !wordsB.length) return 0
  const matches = wordsA.filter((word) => wordsB.includes(word)).length
  return matches / Math.max(wordsA.length, wordsB.length)
}

function charNgramSimilarity(a, b) {
  const charsA = [...a]
  const charsB = [...b]
  if (!charsA.length || !charsB.length) return 0

  const makeNgrams = (chars) => {
    if (chars.length === 1) return [chars[0]]
    const grams = []
    for (let i = 0; i < chars.length - 1; i += 1) grams.push(chars[i] + chars[i + 1])
    return grams
  }

  const ngramsA = makeNgrams(charsA)
  const ngramsB = makeNgrams(charsB)
  const setB = new Set(ngramsB)
  const matches = ngramsA.filter((gram) => setB.has(gram)).length
  return matches / Math.max(ngramsA.length, ngramsB.length)
}

export function scoreTranscript(expected, actual) {
  const a = clean(expected)
  const b = clean(actual)

  if (!a || !b) return 0
  if (a === b) return 100

  const hasSpaces = a.includes(' ') || b.includes(' ')
  const similarity = hasSpaces ? wordSimilarity(a, b) : charNgramSimilarity(a, b)
  return Math.max(0, Math.min(100, Math.round(similarity * 100)))
}
