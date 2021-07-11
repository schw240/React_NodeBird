import React from 'react';
import PropTypes from 'prop-types'
import 'antd/dist/antd.css';
import Head from 'next/head';

import wrapper from '../store/configureStore';

// index.js의 부모로 index의 컴포넌트가 Component로 들어가서 실행
const NodeBird = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"></meta>
                <title>NodeBird</title>
            </Head>
            <Component />
        </>
    )
};

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(NodeBird);