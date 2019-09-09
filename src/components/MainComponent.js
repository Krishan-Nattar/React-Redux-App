import React from 'react';
import {connect} from 'react-redux'

const MainComponent = (props) => {
    return ( <div>MainComponent</div> );
}

const mapStateToProps = state =>{
    return { 
        state
    }
}
 
export default connect(mapStateToProps, {})(MainComponent);