import React, { useState } from "react";
import "./style.css";

function DragDrop(props) {
  function allowDrop(e) {
    e.preventDefault();
  }

  function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
  }

  function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
  }
  return (
    <div className="container">
      <div
        className="empty"
        onDrop={(e) => drop(e)}
        onDragOver={(e) => allowDrop(e)}
      >
        <img
          id="drag1"
          draggable="true"
          onDragStart={(e) => drag(e)}
          alt="anh co the keo tha"
        />
      </div>
      <div
        className="empty"
        onDrop={(e) => drop(e)}
        onDragOver={(e) => allowDrop(e)}
      ></div>
      <div
        className="empty"
        onDrop={(e) => drop(e)}
        onDragOver={(e) => allowDrop(e)}
      ></div>
      <div
        className="empty"
        onDrop={(e) => drop(e)}
        onDragOver={(e) => allowDrop(e)}
      ></div>
      <div
        className="empty"
        onDrop={(e) => drop(e)}
        onDragOver={(e) => allowDrop(e)}
      ></div>
    </div>
  );
}

export default DragDrop;
