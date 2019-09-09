import React from 'react';
import {connect} from 'react-redux'
import Loader from 'react-loader-spinner';
import {getData} from '../actions';
import MainComponentData from './MainComponentData';

const MainComponent = (props) => {
    console.log(props);
    return ( 
        <div>
            <h1>Main Component</h1>
            <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height="30" width="30" />
        ) : (
          "Get Main Data"
        )}
      </button>
      {props.data &&
        props.data.map(ship => <MainComponentData key={ship} ship={ship} />)}
        </div> 
    );
}

const mapStateToProps = state =>{
    return { 
        data: state.data
    }
}
 
export default connect(mapStateToProps, {getData})(MainComponent);