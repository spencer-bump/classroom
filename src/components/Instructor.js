import React from 'react';

import './Components.css';
import photo from '../images/Spencer_Portrait.jpg';

const Instructor = () => {
  return (
    <div className="teacher">
      <h2 className="ui header">Teacher</h2>
      <ul>
        <li><h3 className="ui header">Spencer Eldred</h3><img className="ui small image" src={photo} /></li>
        <li>email: seldred@tobehired.com</li>
        <li>phone: (xxx) 555-1212</li>
        <li>Periods: 1, 2, 4, 5, 6, 7</li>
        <li>Available for conference upon request.</li>
      </ul>
    </div>
  );
}

export default Instructor;
