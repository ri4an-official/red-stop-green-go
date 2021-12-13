import { ILight } from '../models/types/ILight'

export const Light = ({ isGreen }: ILight) => (
    <div className={`light ${isGreen ? 'green' : 'red'}`} />
)
