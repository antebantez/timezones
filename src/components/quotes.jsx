import React, { useState, useEffect } from 'react';
import QuotesData from '../../public/json/quotes.json'

//Get random quote from our quotes.json file
let quote = QuotesData[Math.floor(Math.random() * (QuotesData.length - 1))].quote;

//function for the fade in & out effect
const toggleHidden = (setIsHidden) => {
  setIsHidden(true);
  setTimeout(function () {
    //get new random quote
    quote = QuotesData[Math.floor(Math.random() * (QuotesData.length - 1))].quote;
    setIsHidden(false);
}, 2000);
}


//function that exports the qoutes and sets the interval time
//for each quote.
export default function quotes() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const interval = setInterval(toggleHidden, 10000, setIsHidden);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer>
      <h3 className={`quote ${isHidden ? 'hide' : ''}`}>{quote}</h3>
    </footer>
  )
}
