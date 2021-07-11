import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux'

// redux 쓰는 이유 
// 기존에는 컴포넌트에서 값을 전해줄 때 부모 컴포넌트에서 자식 컴포넌트로 전해주었지만
// 매번 전달하는 과정을 단순화하기위해
// redux를 사용해 중앙에서 값을 전달해주도록 함

const configureStore = () => {
    const store = createStore(reducer, enhancer);
    return store;
};

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development',
});

export default wrapper;