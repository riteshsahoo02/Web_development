import { useEffect, useRef, useState } from 'react'

export default function StrokePracticeCanvas({ symbol }) {
  const canvasRef = useRef(null)
  const drawingRef = useRef(false)
  const resetBoardRef = useRef(() => {})
  const [hasDrawn, setHasDrawn] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return

    const ratio = window.devicePixelRatio || 1
    const size = 320
    canvas.width = size * ratio
    canvas.height = size * ratio
    canvas.style.width = `${size}px`
    canvas.style.height = `${size}px`
    context.setTransform(ratio, 0, 0, ratio, 0, 0)

    const redrawBoard = () => {
      context.clearRect(0, 0, size, size)
      context.fillStyle = '#fff7f9'
      context.fillRect(0, 0, size, size)

      context.strokeStyle = 'rgba(207, 70, 116, 0.18)'
      context.lineWidth = 1
      context.setLineDash([5, 5])
      context.beginPath()
      context.moveTo(size / 2, 16)
      context.lineTo(size / 2, size - 16)
      context.moveTo(16, size / 2)
      context.lineTo(size - 16, size / 2)
      context.stroke()
      context.setLineDash([])

      context.font = '180px Inter, system-ui, sans-serif'
      context.textAlign = 'center'
      context.textBaseline = 'middle'
      context.fillStyle = 'rgba(228, 93, 139, 0.10)'
      context.fillText(symbol || 'あ', size / 2, size / 2 + 12)

      context.lineCap = 'round'
      context.lineJoin = 'round'
      context.lineWidth = 10
      context.strokeStyle = '#cf4674'
    }

    resetBoardRef.current = redrawBoard
    redrawBoard()
    setHasDrawn(false)
  }, [symbol])

  const getPoint = (event) => {
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    const point = 'touches' in event ? event.touches[0] : event
    return {
      x: point.clientX - rect.left,
      y: point.clientY - rect.top
    }
  }

  const startDrawing = (event) => {
    event.preventDefault()
    const context = canvasRef.current?.getContext('2d')
    if (!context) return
    const { x, y } = getPoint(event)
    drawingRef.current = true
    context.beginPath()
    context.moveTo(x, y)
    setHasDrawn(true)
  }

  const draw = (event) => {
    if (!drawingRef.current) return
    event.preventDefault()
    const context = canvasRef.current?.getContext('2d')
    if (!context) return
    const { x, y } = getPoint(event)
    context.lineTo(x, y)
    context.stroke()
  }

  const stopDrawing = () => {
    drawingRef.current = false
  }

  const clearCanvas = () => {
    resetBoardRef.current()
    setHasDrawn(false)
  }

  return (
    <div className="rounded-[2rem] border border-brand-100 bg-white/95 p-5 shadow-card">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Stroke practice</p>
          <p className="mt-2 text-sm text-ink-700/70">Trace over the guide character, then try writing it from memory.</p>
        </div>
        <button onClick={clearCanvas} className="secondary-btn px-4 py-2 text-sm">
          {hasDrawn ? 'Clear board' : 'Reset guide'}
        </button>
      </div>

      <div className="mt-5 flex justify-center">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="touch-none rounded-[1.5rem] border border-brand-100 bg-[#fff7f9]"
        />
      </div>
    </div>
  )
}
