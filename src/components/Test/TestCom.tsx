import React from 'react';
type propsType={
    text:string
}
const TestCom = ({text}:propsType) => {
    return (
        <div>
           <h1>{text}</h1> 
        </div>
    );
};

export default TestCom;