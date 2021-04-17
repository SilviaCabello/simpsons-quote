function QuoteCard({ quote }) {
  return (
    quote && (
      <div className="QuoteCard">
        <img src={quote.image} alt={quote.character} />
        <h3>Name: {quote.character}</h3>
        <p>Quote: {quote.quote}</p>
      </div>
    )
  );
}

export default QuoteCard;
