import React, { useState, useEffect } from 'react'
import QuotesData from '../../public/json/quotes.json'

let quote = QuotesData[Math.floor(Math.random() * (QuotesData.length - 1))].quote;

const toggleHidden = (setIsHidden) => {
  setIsHidden(true);
  setTimeout(function () {
    quote = QuotesData[Math.floor(Math.random() * (QuotesData.length - 1))].quote;
    setIsHidden(false);
}, 2000);
}

export default function quotes() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const interval = setInterval(toggleHidden, 20000, setIsHidden);
  }, []);

  return (
    <footer>
      <h3 className={`quote ${isHidden ? 'hide' : ''}`}>{quote}</h3>
    </footer>
  )
}
