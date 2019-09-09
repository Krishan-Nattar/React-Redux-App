import React from 'react';

const MainComponentData = (props) => {
    console.log(props.article);
    return ( <div>{props.article.title}</div> );
}
 
export default MainComponentData;