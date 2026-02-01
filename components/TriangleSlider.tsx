'use client'

import { useState, useCallback } from 'react'

interface Constraint {
  name: string
  value: number
}

export function TriangleSlider() {
  const [constraints, setConstraints] = useState<Constraint[]>([
    { name: 'Speed', value: 50 },
    { name: 'Quality', value: 50 },
    { name: 'Cost', value: 50 },
  ])

  const totalBudget = 150
  const maxPerConstraint = 100

  const handleChange = useCallback((index: number, newValue: number) => {
    setConstraints((prev) => {
      const updated = [...prev]
      const oldValue = updated[index].value
      const delta = newValue - oldValue

      // Calculate how much the others need to decrease
      const otherIndices = [0, 1, 2].filter((i) => i !== index)
      const otherTotal = otherIndices.reduce((sum, i) => sum + updated[i].value, 0)

      if (otherTotal - delta < 0) {
        // Can't take enough from others
        newValue = oldValue + otherTotal
      }

      updated[index].value = newValue

      // Distribute the delta across other constraints proportionally
      const actualDelta = updated[index].value - oldValue
      if (actualDelta !== 0 && otherTotal > 0) {
        let remaining = actualDelta
        for (const i of otherIndices) {
          const proportion = updated[i].value / otherTotal
          const decrease = Math.round(actualDelta * proportion)
          const newOtherValue = Math.max(0, Math.min(maxPerConstraint, updated[i].value - decrease))
          remaining -= updated[i].value - newOtherValue
          updated[i].value = newOtherValue
        }
        // Handle rounding errors
        if (remaining !== 0) {
          for (const i of otherIndices) {
            const adjustment = Math.min(remaining, updated[i].value)
            updated[i].value -= adjustment
            remaining -= adjustment
            if (remaining <= 0) break
          }
        }
      }

      return updated
    })
  }, [])

  const getMessage = () => {
    const [speed, quality, cost] = constraints.map((c) => c.value)

    if (speed >= 70 && quality >= 70) {
      return "Fast + High quality = Expensive. You're paying premium for speed and excellence."
    }
    if (speed >= 70 && cost <= 30) {
      return "Fast + Cheap = Quality suffers. Technical debt incoming."
    }
    if (quality >= 70 && cost <= 30) {
      return "High quality + Cheap = Slow. Good things take time when budget is tight."
    }
    if (speed >= 70) {
      return "Prioritizing speed. Something else has to give."
    }
    if (quality >= 70) {
      return "Prioritizing quality. Respect."
    }
    if (cost <= 30) {
      return "Keeping costs low. Constraints breed creativity."
    }
    return "Balanced approach. The hardest path—everything is a tradeoff."
  }

  return (
    <div className="interactive-widget">
      <h4>The Iron Triangle</h4>
      <p style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: '#666' }}>
        Drag the sliders. Watch the tradeoffs. You can't have it all.
      </p>

      {constraints.map((constraint, index) => (
        <div key={constraint.name} style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
            <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>{constraint.name}</label>
            <span style={{ fontSize: '0.85rem', color: '#666' }}>{constraint.value}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={constraint.value}
            onChange={(e) => handleChange(index, parseInt(e.target.value, 10))}
          />
        </div>
      ))}

      <div style={{
        marginTop: '1.5rem',
        padding: '1rem',
        background: '#f5f5f5',
        fontSize: '0.9rem',
        lineHeight: 1.5
      }}>
        {getMessage()}
      </div>
    </div>
  )
}
