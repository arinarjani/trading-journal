import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// must use {match} and no something like {url_params}
const TradeDetail = ({match}) => {
    const [tradeData, setTradeData] = useState({});

    useEffect(() => {
        grabDataFromDB();
    }); // used to have [], but got Line 10:8:  React Hook useEffect has a missing dependency: 'grabDataFromDB'. Either include it or 
        //remove the dependency array  react-hooks/exhaustive-deps
    
      const grabDataFromDB = async () => {
        try {
          const response = await fetch(`/trades/${match.params.id}`);
          const trade = await response.json();
          console.log('trade.trade: ', trade.trade);
          setTradeData(trade.trade);
        } catch (error) {
          // you should do some error handling here
        }
      }

    if (Object.keys(tradeData).length > 0) {
      return (
        <div className="mb-20">
            <h1>{tradeData.title.toUpperCase()}</h1>
            <img src={tradeData.screenshot} alt="trade screenshot" />
            <p><b>Reason to Enter</b>: {tradeData.reasonToEnter}</p>
            <p><b>Entry</b>: {tradeData.enter}</p>
            <p><b>Sale</b>: {tradeData.exit}</p>
            <p><b>Reason to Sell</b>: {tradeData.reasonToSell}</p>
            <p><b>Price target 1</b>: ${tradeData.priceTargetOne}</p>
            <p><b>Price Target 2</b>: ${tradeData.priceTargetTwo}</p>
            <p><b>Summary</b>: {tradeData.summary}</p>
            <div className="edit-delete">
              <Link
                to={{
                  pathname: `/trades/${match.params.id}/edit`,
                  state: { tradeData }
                }}
                className="button mr-1"
              >Edit</Link>
              <Link
                to={{
                  pathname: `/trades/${match.params.id}/delete`,
                  state: { tradeData }
                }}
                className="button"
              >Delete</Link>
            </div>
        </div>
      )
    } else {
      return (
        <p>loading...</p>
      )
    }
}

export default TradeDetail;