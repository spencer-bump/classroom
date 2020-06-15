import React from 'react';
import './Components.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3 className="ui header">Links</h3>
      <div className="ui relaxed divided list">
        <div className="item">
          <i className="large compass outline middle aligned icon"></i>
          <div className="content">
          <a className="header" href="https://www.iteach.net/" target="_blank">iTeach</a>
            <div className="description">iTeach is an online teacher certification program.</div>
          </div>
        </div>
        <div className="item">
          <i className="large university middle aligned icon"></i>
          <div className="content">
            <a className="header" href="https://sites.google.com/kkhs.k12.hi.us/kingkekaulike" target="_blank">King Kekaulike High School</a>
            <div className="description">Home of Na Ali'i</div>
          </div>
        </div>
        <div className="item">
          <i className="large calendar outline middle aligned icon"></i>
          <div className="content">
            <a className="header" href="https://sites.google.com/kkhs.k12.hi.us/kingkekaulike/about/bell-schedule-and-calendar" target="_blank">King Kekaulike Calendar</a>
            <div className="description">King Kekaulike School Calendar</div>
          </div>
        </div>
        <div className="item">
          <i className="large bell outline middle aligned icon"></i>
          <div className="content">
            <a className="header" href="https://drive.google.com/file/d/1uQ4YQc6YRsfhQOX-30C9B7lv8oVS30JX/view" target="_blank">King Kekaulike Bell Schedule</a>
            <div className="description">Kink Kekaulike Bell Schedule</div>
          </div>
        </div>
         <div className="item">
          <i className="large linkify middle aligned icon"></i>
          <div className="content">
            <a className="header" href="https://www.khanacademy.org/" target="_blank">Kahn Academy</a>
            <div className="description">We’re a nonprofit with the mission to provide a free, world-class education for anyone, anywhere.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
