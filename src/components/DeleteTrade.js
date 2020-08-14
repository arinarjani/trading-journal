import React from 'react';
import axios from 'axios';

const DeleteTrade = (props) => {

    const tradeData = props.location.state.tradeData;

    console.log('tradeData - Delete', tradeData);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // axios.delete(`/trades/${tradeData._id}`, {tradeData})
        //     .then(response => {
        //         console.log(response)
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });

        try {
            // GHETTO WAY OF REDIRECTING...FIND A BETTER WAY ONE DAY
            window.location.href = "/";
            const response = await axios.delete(`/trades/${tradeData._id}`, {data: {tradeData}});
            console.log('response', response);
          } catch (error) {
            // errors
            console.log(error);
          }

        // axios
        //     .delete(`/trades/${tradeData._id}`, {
        //         data: {tradeData}
        //     })
        //     .then(response => {
        //         console.log('inside first then');
        //         console.log(response);
        //         console.log('inside first then');
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
    }

    return (
        <div className="showAll">
            <h1>Are you sure you want to delete?</h1>
            <form onSubmit={handleSubmit}>
                <button>Delete</button>
            </form>
        </div>
    )
}

export default DeleteTrade;