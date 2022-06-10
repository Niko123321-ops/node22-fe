import React, { useEffect, useState } from 'react';
import axios from 'axios';
import App from '../App';
import Card from './Card';

const Cards = () => {
  const [cards, setCards] = useState([]);

  const  loadCards = async () => {
    const res = await axios.get('http://localhost:8080/post', {withCredentials: true})
    if (res.status == 200){
      setCards(res.data);
    }
  }

  useEffect( () => {
    loadCards();
  }, []);

  if(cards.length == 0){
    return(
      <h1>Ni objav</h1>
    )
  }
  if(cards.length > 0){
    return (
      <>
        <h1>Neki</h1>
        {cards.map((card:any, i) => {
          return <Card card={card} key = {i} />
        })
        }
      </>
    )
  }
  return(<></>);

}

export default Cards;