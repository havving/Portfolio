import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, children, number }) => {
    return (
        <div>
            My name is {name}! <br />
            children value is {children} <br />
            My favorite number is {number}
        </div>
    );
};

MyComponent.defaultProps = {
    name: 'default'
};

MyComponent.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number.isRequired
};

// 모듈 내보내기(export)
// 다른 파일에서 이 파일을 import할 때, 위에서 선언한 MyComponent 클래스를 불러오도록 설정
export default MyComponent;