import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs; // 현재값 밖으로 빼줌
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([ // 컴포넌트의 상태로 관리
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false,
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    // setUsers(users.concat(user));
    setUsers([...users, user]); // 기존 배열 복사, 새로운 배열 등록 

    setInputs({ // 초기화 버튼 클릭시 초기화
      username: '',
      email: ''
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id)); // 불변성 필요
  }

  const onToggle = id => {
    setUsers(users.map( // 불변성 필요
      user => user.id === id ? {...user, active: !user.active} : user // ... 불변성 필요
    )) 
  }
  // 값을 등록할 때 : onCreate
  // spread를 사용하거나, concat 함수 사용.
  
  // 값을 제거 할 때 : onRemove
  // filter 함수 사용.
  
  // 특정 값만 업데이트 해줄 때 : onToggle
  // map 함수 사용.
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;