import React from 'react';
import Fruit from './Fruit/Fruit';

const fruits = (props) => {
    return (
        props.fruits.map((fruit, i) => {
            return (
              <Fruit
                key={fruit.id}
                name={fruit.name}
                qty={fruit.qty}
                color={fruit.color}
                click={() => props.clicked(i)}
                changed={(e) => props.changed(e, fruit.id)}
              />
            );
          })
    );
}

export default fruits;