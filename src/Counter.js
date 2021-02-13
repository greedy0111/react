import React, {useState} from 'react'; // useState 함수 부르기

function Counter() {
    const [number, setNumber] = useState(2);
    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1); // 함수형으로 업데이트도 가능하다.
    }
    const onDecrease = () => {
        setNumber(number - 1);
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