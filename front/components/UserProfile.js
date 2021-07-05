import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';

const UserProfile = ({ setIsLoggedIn }) => {
    const onLogOut = useCallback(() => {
        setIsLoggedIn(false);
    }, []);
    return (
        <Card
            actions={[
                // 리액트에서 배열을 사용할 때 key 붙여주기
                <div key="twit">짹짹<br/>0</div>,
                <div key="followings">팔로잉<br/>0</div>,
                <div key="followers">팔로워<br/>0</div>
            ]}
        >
            <Card.Meta
                avatar={<Avatar>Zc</Avatar>}
                title="ZeroCho"
            >
            </Card.Meta>
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    )
}   

export default UserProfile;