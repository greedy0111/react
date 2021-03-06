import React from 'react';

function CreateUser({ username, email, onChange, onCreate }) {
    console.log('CreateUser') // 리즈 누른다고 CreateUser 리랜더링 안되는거 확인함.
    return (
        <div>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            />
            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default React.memo(CreateUser);
