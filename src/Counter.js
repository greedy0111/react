import React, {useReducer} from 'react'; // useState 함수 부르기

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            throw new Error('Unhandled action'); // 애러가 생긴다면 콘솔에서 확인 가능. return state 해도 됨.
    }
}

function Counter() {
    
    const [number, dispatch] = useReducer(reducer, 0); // userReducer hook

    const onIncrease = () => {
        dispatch({
            type: 'INCREMENT'
        })
    }
    const onDecrease = () => {
        dispatch({
            type: 'DECREMENT'
        })
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;