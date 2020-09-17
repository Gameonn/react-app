import React from 'react';
import withToggle from '../../hoc/withToggle';

const collapseToggle = (props) => (
  <div>
    <p>This is a random list</p>
    <button  className={props.btnClass} onClick={props.toggle}>
      { props.toggleStatus ? 'Collapse' : 'Expand' }
    </button>
    { props.toggleStatus && (
        <div>
          { props.list.map(item => (
              <p key={item.id}>{ item.name }</p>
            ))
          }
        </div>
      )
    }
  </div>
)

export default withToggle(collapseToggle)