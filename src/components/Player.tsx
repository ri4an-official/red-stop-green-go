import { IPlayer } from '../models/types/IPlayer'

export const Player = ({ x, y }: IPlayer) => (
    <svg className='player'>
        <circle cx={x} cy={y} r='20' stroke='black' strokeWidth='3' fill='black' />
    </svg>
)
