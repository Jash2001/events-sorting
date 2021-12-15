import React from 'react';
import JSONDATA from './fileoutputName.json';
import { useState } from 'react';

function SearchandTable() {
  var flag;
  return (
    <div className="table">
      <p>On going</p>
      <div className="tbody">
        {JSONDATA['ongoing'].map((val, key) => {
        console.log(val)
          return (
            <div className="user row" key={key} style={{ display: 'flex' ,justifyContent:"space-evenly" , backgroundColor:"yellow",margin:"2px"}}>
              <p className="Rank">
                <i>{val['headline']}</i>
              </p>
              <p className="stdname" id="stdname">
                <i>{val['start-date']}</i>
              </p>
            </div>
          );
        })}
      </div>
      <p>upcoming</p>
      <div className="tbody">
        {JSONDATA['upcoming'].map((val, key) => {
        console.log(val)
          return (
            <div className="user row" key={key} style={{display: 'flex' ,justifyContent:"space-evenly" , backgroundColor:"green",margin:"2px"}}>
              <p className="Rank">
                <i>{val['headline']}</i>
              </p>
              <p className="stdname" id="stdname">
                <i>{val['start-date']}</i>
              </p>
            </div>
          );
        })}
      </div>
        <p> Completed </p>
      <div className="tbody">
        {JSONDATA['completed'].map((val, key) => {
        console.log(val)
          return (
            <div className="user row" key={key} style={{ display: 'flex' ,justifyContent:"space-evenly" , backgroundColor:"red",margin:"2px"}}>
              <p className="Rank">
                <i>{val['headline']}</i>
              </p>
              <p className="stdname" id="stdname">
                <i>{val['start-date']}</i>
              </p>
            </div>
          );
        })}
      </div>
    </div>
    
  );
}

export default SearchandTable;