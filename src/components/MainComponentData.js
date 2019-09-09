import React from 'react';
import {Card, Image, Icon} from 'semantic-ui-react';

const MainComponentData = (props) => {
    return ( 
        <Card>
        <Image src={props.article.urlToImage} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{props.article.title}</Card.Header>
          <Card.Meta>
            <span className='date'>{props.article.author}</span>
          </Card.Meta>
          <Card.Description>
            {props.article.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href={props.article.url} target ="_blank">
            <Icon name='newspaper outline' />
            Read Article
          </a>
        </Card.Content>
      </Card>
     );
}
 
export default MainComponentData;