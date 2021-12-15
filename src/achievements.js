import React from 'react';
import JSONDATA from './sorted_achievements.json';


function Achieve() {
  return (
    <div className="table">
      <p>Achievements</p>
      <div className="tbody">
        {JSONDATA.map((val, key) => {
        console.log(val)
          return (
            <div className="user row" key={key} style={{ display: 'flex' ,justifyContent:"space-evenly" , backgroundColor:"yellow",margin:"2px"}}>
              <p className="Rank">
                <i>{val['headline']}</i>
              </p>
              <p className="stdname" id="stdname">
                <i>{val['date']}</i>
              </p>
              <p className="stdname" id="stdname">
                <i>{val['description']}</i>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Achieve;