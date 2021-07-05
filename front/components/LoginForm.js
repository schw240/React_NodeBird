// useCallback은 함수를 캐싱 useMemo는 값을 캐싱 
import React, { useState, useCallback, useMemo } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/Link';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
    margin-top: 10px;
`;

const FormWrapper = styled(Form)`
    padding: 10px;
`

const LoginForm = ({ setIsLoggedIn }) => {

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    // 컴포넌트에 props로 넘겨주는 함수는 꼭 useCallback 사용해주기(최적화)
    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const style = useMemo(() => ({ marginTop: 10 }), []);


    // const onSubmitForm = (e) => {
    //     // 리액트에서는 아래와 같이 preventDefault()를 적용시키지만
    //     // Antd는 이미 적용이 되어있으므로 사용하지 않음
    //     // e.preventDefault();
    // }
    const onSubmitForm = useCallback(() => {
        console.log(id, password);
        setIsLoggedIn(true);
    }, [id, password]);

    // 리액트에서는 return 부분이 virtual DOM
    return (
        // submit이 되면 onFinish 호출
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-id">비밀번호</label>
                <br />
                <Input 
                    name="user-password" 
                    type="password"
                    value={password}
                    onChange={onChangePassword} 
                    required />
            </div>
            {/* 인라인 스타일을 그냥 넣게 되면 새로운 객체라고 판단하고
                바뀐게 없는데 리랜더링을 하게 됨 
                하지만 성능에 크게 영향이 없다면
                인라인으로 작성해도 됨. 너무 집착할 필요는 없음*/}
            {/* <div style={{ marginTop: '10px' }}> */}
            {/* <ButtonWrapper> */}
            {/* 만약 스타일컴포넌트를 사용하기 싫다면 아래와 같이 useMemo 사용해서 인라인 방식 사용 */}
            <ButtonWrapper style={style}>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            {/* </div> */}
            </ButtonWrapper>
            <div>
                
            </div>
        </FormWrapper>
    );
}

export default LoginForm;