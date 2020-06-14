import React from 'react';

import './Components.css';

const Homework = () => {
  return (
    <div className="left-other" >
      <h2 className="ui header">Assignments / Exams</h2>
      <ul className="ui list">
        <li><h3 className="ui header">Assignments / Homework</h3></li>
        <li>Due 8/19: Chapter 1, section 2 problems 1-10 </li>
        <li>Due 8/21: Chapter 1, section 3 problems 1-10 </li>
        <li>Due 8/26: Chapter 1, section 4 problems 1-10 </li>
        <li>Due 8/28: Chapter 1, section 5 problems 1-10 </li>
      </ul>
      <ul className="ui list">
        <li><h3 className="ui header">Quizes / Exams</h3></li>
        <li>Quiz 8/21: Chapter 1, sections 2 and 3  </li>
        <li>Exam 8/28: Chapter 1</li>
      </ul>
    </div>
  );
}

export default Homework;
