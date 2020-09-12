import React from "react";

const validation = (props) => {

    let validationMsg = 'Text too short';
    if(props.stringLen > 5)
        validationMsg = 'Text long enough';


    return (
        <div>
            <h5>{validationMsg}</h5>
        </div>
        )
};

export default validation;
