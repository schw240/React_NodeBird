import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import styled from 'styled-components';


import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';


const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`

const AppLayout = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    {/* Antd 디자인 컴포넌트도 인라인 스타일의 경우 리랜더링이 됨
                    따라서 커스텀 디자인을 통해 최적화 해줄 수 있음 */}
                    {/* <Input.Search enterButton style={{ verticalAlign: 'middle' }}></Input.Search> */}
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row>
                {/* xs 모바일
                    sm 태블릿
                    md 작은 데스크탑 */}
                {/* xs 모바일일때는 화면 100% 다 차지,
                데스크탑일때는 25%만 차지 */}
                <Col xs={24} md={6}>
                    {/* 왼쪽 메뉴 */}
                    {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
                </Col>
                <Col xs={24} md={6}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    {/* 오른쪽 메뉴 */}
                    {/* target="_blank"는 보안 위험이 있기에 rel="noreferrer noopener 추가해주어야함" */}
                    <a href="https://www.zerocho.com" target="_blank" rel="noreferrer noopener">Made by Zerocho</a>
                </Col>
            </Row>
            {/* {children} */}
        </div>
    )
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;