import { useEffect, useState } from 'react'

export const usePoints = () => {
    const [score, setScore] = useState(0)
    const [record, setRecord] = useState(0)
    useEffect(() => {
        if (score > record) setRecord(score)
    }, [record, score])

    return { score, setScore, record }
}
