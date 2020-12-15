import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'


const breakPoints = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    }
    // { width: 1450, itemsToShow: 5 },
    // { width: 1750, itemsToShow: 6 },
  ];
  function Item(props)
  {
      return (
          <Paper>
              <h2>{props.item.name}</h2>
              <p>{props.item.description}</p>
   
              
          </Paper>
      )
  }
  function Slider(props) {
    const { items } = props;
    return (
      <Carousel itemsToShow={3} pagination={false} breakPoints={breakPoints}>
        {breakPoints.map((item, i) => (
         <Item key={i} item={item} />
        ))}
      </Carousel>
    );
  }
  
  export default Slider;
  