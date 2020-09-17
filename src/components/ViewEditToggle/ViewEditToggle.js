import React from 'react';
import withToggle from '../../hoc/withToggle';


const viewEditToggle = (props) => {
    console.log(props);
    const input = (<input type="text" value={props.title} onChange={props.changed}/>);
    const para = (<p>{props.title}</p>);

    return (
        <div>
             { props.toggleStatus ? para: input }
            <button className={props.btnClass} onClick={props.toggle}>
            { props.toggleStatus ? 'Edit' : 'Save' }
            </button>
        </div>

    );
}

export default withToggle(viewEditToggle);

