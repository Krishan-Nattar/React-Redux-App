import React, {useState} from 'react';
import {connect} from 'react-redux'
import Loader from 'react-loader-spinner';
import {getData} from '../actions';
import MainComponentData from './MainComponentData';

const MainComponent = (props) => {

  const [search, setSearch] = useState()

  const searchBar = e =>{
    setSearch(e.target.value);
  }
  
    return ( 
        <div>
            <h1>What would you like to know about?</h1>
            <form>
            <input type="text" value={search} onChange={searchBar}/>
            <button onClick={(e)=>{
              e.preventDefault();
              props.getData(search)
              setSearch("")
              }} onSubmit={e=>e.preventDefault()}>
        {props.isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height="30" width="30" />
        ) : (
          "Find News"
        )}
      </button>
      </form>
      {props.data &&
        props.data.map(article => <MainComponentData key={article.url} article={article} />)}
        </div> 
    );
}

const mapStateToProps = state =>{
    return { 
        data: state.data
    }
}
 
export default connect(mapStateToProps, {getData})(MainComponent);