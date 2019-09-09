import React from 'react';
import {connect} from 'react-redux'

const MainComponent = (props) => {
    console.log(props.data);
    return ( 
        <div>
            <h1>MainComponent</h1>
        </div> 
    );
}

const mapStateToProps = state =>{
    return { 
        data: state.data
    }
}
 
export default connect(mapStateToProps, {})(MainComponent);