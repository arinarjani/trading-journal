import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function ShowAll() {
  const [allTrades, setAllTrades] = useState([]);

  useEffect(() => {
    grabDataFromDB();
  }, []);

  const grabDataFromDB = async () => {
    console.log('inside ShowAll.js');
    await fetch("/trades")
          .then(data => data.json())
          .then(res => {
            setAllTrades(res.data);
          });
  }

// {/* show the date at the top */}
// {/* show a photo of the trade */}
// {/* show a title for the trade */}
// {/* have a link using the _id to get more details about the trade */}

  if (allTrades.length > 0) {
    return (
      <div className="showAll">
        {allTrades.map(trade => (
            <div className="card">
                <img src={trade.screenshot} alt="trade screenshot" />
                <h3>{trade.title.toUpperCase()}</h3>
                <p>{new Date(trade.timeStamp).toLocaleDateString()}</p>
                <Link to={`/trades/${trade._id}`} className="button">details</Link>
            </div>
        ))}
      </div>
    )
  } else {
    return (
      <div className="showAll">
        <a className="button" href="/trades/new">click here to add a trade</a>
      </div>
    )
  }
}

export default ShowAll;
