import React, { useState } from "react";

import './quotes.css'
import quotesList from "../utils/quotes.json"

const getRandomQuote = () => {
  return quotesList[Math.floor(Math.random() * Math.floor(quotesList.length))]
}

export default function Quotes() {
  const [quote, setQuote] = useState(getRandomQuote());
  const handleClick = (event) => {
    event.preventDefault()
     setQuote(getRandomQuote())
  }
  const tweetString = `"${quote.text}" ${quote.author}`

  return (
    <main id="quote-box">
      <section>
        <h2 id="text">{quote.text}</h2>
        <h3 id="author">{quote.author}</h3>
      </section>

      <footer>
        <a id='tweet-quote' rel="noreferrer noopener" target="_blank" href={`https://www.twitter.com/intent/tweet?hashtags=quotes&text=${tweetString}`}>Tweet Quote</a>
        <button type='button' id="new-quote" onClick={handleClick}>New Quote</button>
      </footer>
    </main>
  );
}
