import React from 'react';

const User = React.memo(function User({ user, onRemove, onToggle}) {
    const {username, email, id, active} = user;
    
    // useEffect(() => {
    //     console.log('user 값이 설정됨.');
    //     console.log(user);
    //     return () => { 
    //         console.log('user 값이 바뀌기 전');
    //         console.log(user);
    //     }
    // }, [user]); // 첨 컴포넌트가 나타날때 user가 설정되거나 제거 될때의 값을 반환

    return (
        <div>
            <b 
                style={{
                    color: active ? 'green' : 'black',
                    cursor: 'pointer'
                }}
                onClick={() => onToggle(id)}
            >
                {username}
            </b>
            &nbsp;
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    );
});

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {users.map((user) => (
                <User 
                    user={user} 
                    key={user.id} 
                    onRemove={onRemove} 
                    onToggle={onToggle} 
                />
            ))}
        </div>
    );
};

export default React.memo(
    UserList, 
    (prevProps, nextProps) => nextProps.users === prevProps
);
