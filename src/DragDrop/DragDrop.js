import React from "react";
import "./style.css";

function DragDrop(props) {
  const handleAllowDrop = (e) => {
    e.preventDefault();
  };

  const handleDrag = (e) => {
    //Gửi dữ liệu
    e.dataTransfer.setData("text", e.target.id);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    //Lấy dữ liệu
    const data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));

    //Xoá className hovered sau khi người dùng thả ảnh.
    e.target.setAttribute("class", "empty");
  };

  //Xử lý khi người dùng đang kéo ảnh vào ô chứa.
  const handleDragEnter = (e) => {
    e.target.setAttribute("class", "empty hovered");
  };

  //Xử lý khi người dùng đang kéo ảnh rời khỏi ô chứa.
  const handleDragLeave = (e) => {
    e.target.setAttribute("class", "empty");
  };

  return (
    <div className="container">
      <div
        className="empty"
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleAllowDrop(e)}
        onDragLeave={(e) => handleDragLeave(e)}
        onDragEnter={(e) => handleDragEnter(e)}
        // onMouseOut={handleMouseOut}
      >
        <img
          id="drag1"
          src="https://source.unsplash.com/random/150x150"
          draggable="true"
          onDragStart={(e) => handleDrag(e)}
          alt="anh co the keo tha"
        />
      </div>
      <div
        className="empty"
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleAllowDrop(e)}
        onDragLeave={(e) => handleDragLeave(e)}
        onDragEnter={(e) => handleDragEnter(e)}
      ></div>
      <div
        className="empty"
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleAllowDrop(e)}
        onDragLeave={(e) => handleDragLeave(e)}
        onDragEnter={(e) => handleDragEnter(e)}
      ></div>
      <div
        className="empty"
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleAllowDrop(e)}
        onDragLeave={(e) => handleDragLeave(e)}
        onDragEnter={(e) => handleDragEnter(e)}
      ></div>
      <div
        className="empty"
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleAllowDrop(e)}
        onDragLeave={(e) => handleDragLeave(e)}
        onDragEnter={(e) => handleDragEnter(e)}
      ></div>
    </div>
  );
}

export default DragDrop;
