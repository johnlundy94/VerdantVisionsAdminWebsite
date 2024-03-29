import "./QuoteManagePage.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuotes } from "../../store/quotesSlice";
import MainTable from "../../components/MainTable";

function QuoteManagePage() {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.quotes);

  useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]);

  return (
    <div className="quote-manage-page-container">
      <h1>Quote Management</h1>
      {quotes.map((quote, index) => (
        <MainTable
          key={quote.id}
          name={quote.name}
          email={quote.email}
          phone={quote.phone}
          address={quote.address}
          services={quote.services}
          budget={quote.budget}
          description={quote.description}
        />
      ))}
    </div>
  );
}

export default QuoteManagePage;
