
import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="hello">
      <button
        type="button"
        onClick={() => setCount(count + 1)}
        data-testid="counter-button"
      >
        {count}
      </button>
    </div>
  )
}

export default Counter
