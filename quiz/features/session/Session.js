import { useDispatch } from 'react-redux'
import {
    increment
} from './sessionSlice'

export default function Session() {
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Session</h3>

            <button onClick={() => dispatch(increment())}>
                Increment
            </button>
        </div>
    )
}