import React from 'react';
import { useState } from 'react';
import store from '../utilities/localStore';
import AddCity from '../components/city-list/AddCity';
import FavoriteList from '../components/city-list/FavoriteList';
//import OwnCity from '../components/city-list/OwnCity'
import { Card, Col, Container, Form, Row } from 'react-bootstrap';

function MyTime() {

 
 
  
  store.list = store.list || [];
  store.save();
  const [stateList,setStateList] = useState(store.list);
  function setAndSaveItems(items) {
    setStateList(items);
    store.list = items;
    store.save();
  }


    return (
      <div className="favoriteSite">
        
        
        <AddCity setAndSaveItems={setAndSaveItems} stateList={stateList} />
        <Container className="MyTime">
          <Row >
            <Col >
              <Card className='p-3'>
                <h3 className='FavoriteText'>Your Choices:</h3>
                <div className="favoriteList">
                 
                  
          <FavoriteList setAndSaveItems={setAndSaveItems} stateList={stateList} />
                  
          </div>
              </Card>
            </Col>
          </Row>
        </Container>

      </div>
      
    );
}
export default MyTime;
