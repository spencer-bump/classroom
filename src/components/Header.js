import React from 'react';
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className="ui  pointing menu" >
      <Link to="/" className="item" >
        Algebra 1
      </Link>
      <Link to="/instructor" className="item" >
        Teacher
      </Link>
      <Link to="/homework" className="item" >
        Assignments / Exams
      </Link>
      <div className="right menu">
        Spencer Eldred
      </div>
    </div>
  );
}

export default Header;
