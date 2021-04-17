function QuoteCard ( {quote} ) {
    return (
        quote &&
            <div className="QuoteCard">
                <img src={quote.image} alt={quote.character} />
            </div>
    )
}


export default QuoteCard;

