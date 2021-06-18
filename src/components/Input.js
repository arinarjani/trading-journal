import React, { useState } from "react";
import axios from "axios";

function Input() {
  // all states in one
  const [inputData, setInputData] = useState({
    timeStamp: "",
    title: "",
    screenshot: "",
    reasonToEnter: "",
    reasonToSell: "",
    priceTargetOne: "",
    priceTargetTwo: "",
    summary: "",
    enter: '',
    exit: '',
  });

  // set the text state with the input's value
  const onChange = (e) => {
    // https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
    // console.log('e.target.name:', e.target.name);
    // console.log('e.target.value:', e.target.value);
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value
    });
  };

  // handle the submit to the server
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('event', e);
    // submit data to database via mongoose
    // console.log('state:', state);
    // grab e data
    // post e data

    try {
      // GHETTO WAY OF REDIRECTING...FIND A BETTER WAY ONE DAY
      window.location.href = "/";
      const response = await axios.post('/trades', {data: {inputData}});
      console.log('response', response);
    } catch (error) {
      // errors
      console.log(error);
    }




    // axios.post("/trades", {data: {inputData}})
    //   .then(response => {
    //     // handle success
    //     console.log('inside the first then');
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     // handle error
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // always executed
    //     console.log('inside always executed')
    //   });
  };

  return (
    <div className="input">
      <form onSubmit={onSubmit}>
        <input
          type="date"
          placeholder="Enter the date"
          name="timeStamp"
          value={inputData.timeStamp}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Enter your entry"
          name="enter"
          value={inputData.enter}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Enter your exit"
          name="exit"
          value={inputData.exit}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Enter the title"
          name="title"
          value={inputData.title}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Enter the image url"
          name="screenshot"
          value={inputData.screenshot}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Enter your Reason2Enter"
          name="reasonToEnter"
          value={inputData.reasonToEnter}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Enter your Reason2Sell"
          name="reasonToSell"
          value={inputData.reasonToSell}
          onChange={onChange}
        />
        <input
          type="Number"
          placeholder="Enter your Price Target 1"
          name="priceTargetOne"
          value={inputData.priceTargetOne}
          min="0"
          onChange={onChange}
        />
        <input
          type="Number"
          placeholder="Enter your Price Target 2"
          name="priceTargetTwo"
          value={inputData.priceTargetTwo}
          min="0"
          onChange={onChange}
        />
        <textarea
          name="summary"
          value={inputData.summary}
          placeholder="enter your summary"
          rows="10"
          onChange={onChange}
        ></textarea>
        <button>submit</button>
      </form>
    </div>
  );
}

export default Input;
