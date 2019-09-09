import React from 'react';

const MainComponentData = (props) => {
    // console.log('right here');
    console.log(props);
    return ( <div>{props.ship}</div> );
}
 
export default MainComponentData;