import React, {useState} from 'react';
import {connect} from 'react-redux'
import Loader from 'react-loader-spinner';
import {getData} from '../actions';
import MainComponentData from './MainComponentData';
import { Card, Input, Button } from 'semantic-ui-react';

const MainComponent = (props) => {

  const [search, setSearch] = useState()

  const searchBar = e =>{
    setSearch(e.target.value);
  }
  
    return ( 
        <div>
            <h1>What would you like to know about?</h1>
            <form className="search-form">
            <Input type="text" value={search} onChange={searchBar} placeholder="Search..."/>
            <Button positive onClick={(e)=>{
              e.preventDefault();
              props.getData(search)
              setSearch("")
              }} onSubmit={e=>e.preventDefault()}>
        {props.isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height="30" width="30" />
        ) : (
          "Find News"
        )}
      </Button>
      </form>
      <Card.Group className="group">
      {props.data &&
        props.data.map(article => <MainComponentData key={article.url} article={article} />)}
        </Card.Group>
        </div> 
    );
}

const mapStateToProps = state =>{
    return { 
        data: state.data
    }
}
 
export default connect(mapStateToProps, {getData})(MainComponent);