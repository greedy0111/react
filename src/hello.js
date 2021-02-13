import React from 'react'; // 리액트 불러와 사용하겠다.

// 컴포넌트 만드는방법 1.함수형태, 2.클래스형태
// 지금은 1.함수형태로 만드는 법 배우기

function Hello({color, name, isSpacial}) { // props 라는 파라미터를 구조분해 시킴.
    return <div style={{color}}>
        {isSpacial && <b>*</b>} 안녕하세요{name}</div>; // xml 형태의 값을 리턴해줘야함. div를 jsx라고 부른다.
}

Hello.defaultProps = {
    name: '이름없음'
}

export default Hello; // Hello 컴포넌트 내보내겠다. 의미