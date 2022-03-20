import './styles/global.css'
import { Light } from './components/Light'
import { Player } from './components/Player'
import { useLight } from './models/hooks/useLight'
import { usePlayer } from './models/hooks/usePlayer'
import { usePoints } from './models/hooks/usePoints'

const startValue = 520,
    winNum = 20
export const App = () => {
    const isGreen = useLight()
    const { cordY, step, setCordY } = usePlayer(startValue)
    const { score, record, setScore } = usePoints()
    // Тише едешь - дальше будешь
    const go = () => {
        if (cordY <= winNum) {
            alert('You win!')
            setCordY(startValue)
            setScore(0)
            return
        }
        if (isGreen) {
            step()
            setScore(score + 10)
            return
        } else {
            alert('You lose!')
            setCordY(startValue)
            setScore(0)
        }
    }
    return (
        <div
            className='app'
            onKeyDown={(e) => (e.key === 'Space' || e.key === 'Enter') && go()}
        >
            <div className='game' onClick={go}>
                <Light isGreen={isGreen} />
                <Player x={205} y={cordY} />
            </div>
            <div className='points'>
                <div>
                    Score: <b>{score}</b>
                </div>
                <div>
                    Record: <b>{record}</b>
                </div>
            </div>
        </div>
    )
}
