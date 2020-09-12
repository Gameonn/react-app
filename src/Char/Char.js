import React from "react";

const char = (props) => {
    const charStyle = {
        padding: '10px 20px',
        border: '1px solid #f98744',
        textAlign: 'center',
        boxshadow: '0 2px 3px #6e2424',
        boxSizing: 'border-box',
        margin: '0 5px',
        fontSize: '22px',
        fontVariantCaps: 'petite-caps',
        fontFamily: 'ui-sans-serif',
        display: 'inline-block',
        boxShadow: '5px 10px 20px #4a5dba inset',
        minHeight: '50px',
        verticalAlign: 'bottom',
        marginBottom: '10px',
        borderRadius: '5px'
    }
    return (
        <span style={charStyle} onClick={props.deleteChar}>
            {props.alphabet}
        </span>
    );
};

export default char;
