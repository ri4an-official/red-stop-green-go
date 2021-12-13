import { useState } from 'react'
export const usePlayer = (y = 100, step = 10) => {
    const [cordY, setCordY] = useState(y)
    return { cordY, setCordY, step: () => setCordY(cordY - step) }
}
