import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성된 사용자 수를 세는중...')
  return users.filter(user => user.active).length; // true 값만 가져옴
}
function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs; // 현재값 밖으로 빼줌
  const onChange = useCallback (e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }, [inputs]);

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
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    // setUsers(users.concat(user));
    setUsers(users => [...users, user]); // 기존 배열 복사, 새로운 배열 등록 

    setInputs({ // 초기화 버튼 클릭시 초기화
      username: '',
      email: ''
    });
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback(id => {
    setUsers(users => users.filter(user => user.id !== id)); // 불변성 필요
  }, []);

  const onToggle = useCallback(id => {
    setUsers(users => users.map( // 불변성 필요
      user => user.id === id ? {...user, active: !user.active} : user // ... 불변성 필요
    )) 
  }, []);
  // 값을 등록할 때 : onCreate
  // spread를 사용하거나, concat 함수 사용.
  
  // 값을 제거 할 때 : onRemove
  // filter 함수 사용.
  
  // 특정 값만 업데이트 해줄 때 : onToggle
  // map 함수 사용.
  const count = useMemo(() => countActiveUsers(users), [users]); // [users]값이 바뀌어야만 새로 연산해주겠다. 그렇지 않으면 재사용 
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default App;