import { useEffect, useState } from 'react'

export const useLight = (isGreen = true, interval = 2000) => {
    const [timer, setTimer] = useState(interval)
    const [green, setGreen] = useState(isGreen)
    useEffect(() => setTimer(+(Math.random() * (3500 - 500) + 500).toFixed(0)), [green])
    useEffect(() => {
        const id = setInterval(() => setGreen(!green), timer)
        return () => clearInterval(id)
    }, [green, timer])
    return green
}
