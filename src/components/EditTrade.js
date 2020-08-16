import React, { useState } from "react";
import axios from "axios";

const EditTrade = (props) => {
    const [editData, setEditData] = useState(props.location.state.tradeData);

    const onChange = (e) => {
        // https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
        // console.log('e.target.name:', e.target.name);
        // console.log('e.target.value:', e.target.value);
        setEditData({
          ...editData,
          [e.target.name]: e.target.value
        });
      };

      console.log('editData: ', editData)
    
      // handle the submit to the server
      const onSubmit = async (e) => {
        e.preventDefault();
        // submit data to database via mongoose
        // console.log('state:', state);
        // grab e data
        // post e data

        try {
          // GHETTO WAY OF REDIRECTING...FIND A BETTER WAY ONE DAY
          window.location.href = "/";
          const response = await axios.put(`/trades/${editData._id}`, { data: {editData} });
          console.log('response', response);
        } catch (error) {
          // errors
          console.log(error);
        }

        // axios
        //   .put(`/trades/${editData._id}`, {
        //     data: {editData}
        //   })
        //   .then(response => {
        //     console.log(response);
        //     window.location = '/';
        //   })
        //   .catch(error => {
        //     console.log(error);
        //   });
      };

  return (
    <div className="input">
      <form onSubmit={onSubmit}>
        <input
          type="date"
          placeholder="Enter the date"
          name="timeStamp"
          value={new Date(editData.timeStamp).toLocaleDateString('en-GB').split('/').reverse().join('-')}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Enter your entry"
          name="entry"
          value={editData.enter}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Enter your exit"
          name="exit"
          value={editData.exit}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Enter the title"
          name="title"
          value={editData.title}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Enter the image url"
          name="screenshot"
          value={editData.screenshot}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Enter your Reason2Enter"
          name="reasonToEnter"
          value={editData.reasonToEnter}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Enter your Reason2Sell"
          name="reasonToSell"
          value={editData.reasonToSell}
          onChange={onChange}
        />
        <input
          type="Number"
          placeholder="Enter your Price Target 1"
          name="priceTargetOne"
          value={editData.priceTargetOne}
          min="0"
          onChange={onChange}
        />
        <input
          type="Number"
          placeholder="Enter your Price Target 2"
          name="priceTargetTwo"
          value={editData.priceTargetTwo}
          min="0"
          onChange={onChange}
        />
        <textarea
          name="summary"
          value={editData.summary}
          placeholder="enter your summary"
          rows="10"
          onChange={onChange}
        ></textarea>
        <button>submit</button>
      </form>
    </div>
  )
}

export default EditTrade;
