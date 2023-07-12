import React, { useEffect } from 'react';
import './YourComponent.css';

const YourComponent = () => {

  useEffect(() => {
    const centerShelfs = () => {
      const topShelfPosition = document.body.clientHeight / 2;
  
      document.querySelector(".shelf.top").style.top = `${topShelfPosition}px`;
      document.querySelector(".shelf.middle").style.top = `${topShelfPosition + 200}px`;
      document.querySelector(".shelf.bottom").style.top = `${topShelfPosition + 400}px`;
    };
  
    const moveToShelf = (e) => {
      e.preventDefault();
      document.body.className = '';
      document.body.classList.add(e.target.id);
    };
  
    window.addEventListener("resize", centerShelfs);
    document.querySelectorAll(".nav a").forEach((link) => {
      link.addEventListener("click", moveToShelf);
    });
  
    centerShelfs();
  
    setTimeout(() => {
      document.body.classList.add("view-middle-shelf");
    }, 500);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("resize", centerShelfs);
      document.querySelectorAll(".nav a").forEach((link) => {
        link.removeEventListener("click", moveToShelf);
      });
    };
  }, []);

  return (
    <div>
      <div className="header">
        <ul className="nav">
          <li><a href="/" id="view-top-shelf">Shelf 1</a></li>
          <li><a href="/" id="view-middle-shelf">Shelf 2</a></li>
          <li><a href="/" id="view-bottom-shelf">Shelf 3</a></li>
        </ul>
      </div>
      <div className="scene">
        {/* camera */}
        <div className="roll-camera">
          <div className="move-camera">
            <div className="wallpaper"></div>
            {/* shelf */}
            <div className="shelf top">
              <div className="face top"></div>
              <div className="face front">
                <a href="#" data-img-url="C:\Users\solle\Desktop\CCC_Dark\src\assets\0.jpg" className="photocard">
                  <img src="C:\Users\solle\Desktop\CCC_Dark\src\assets\0.jpg" alt="" />
                </a>
                <a href="#" className="photocard">
                  <img src="https://raw.githubusercontent.com/peterwestendorp/shelves/master/photos/3.jpg" alt="" />
                </a>
                <a href="#" className="photocard">
                  <img src="https://raw.githubusercontent.com/peterwestendorp/shelves/master/photos/1.jpg" alt="" />
                </a>
              </div>
              <div className="face back"></div>
              <div className="face left"></div>
              <div className="face bottom"></div>
            </div>
            {/* /shelf */}
    
            {/* shelf */}
            <div className="shelf middle">
              <div className="face top"></div>
              <div className="face front">
                <a href="#" data-img-url="./images/i.jpg" className="photocard">
                  <img src="https://raw.githubusercontent.com/peterwestendorp/shelves/master/photos/1.jpg" alt="" />
                </a>
                <a href="#" className="photocard">
                  <img src="https://raw.githubusercontent.com/peterwestendorp/shelves/master/photos/2.jpg" alt="" />
                </a>
                <a href="#" className="photocard">
                  <img src="https://raw.githubusercontent.com/peterwestendorp/shelves/master/photos/3.jpg" alt="" />
                </a>
              </div>
              <div className="face back"></div>
              <div className="face left"></div>
              <div className="face bottom"></div>
            </div>
            {/* /shelf*/}
    
            {/* shelf */}
            <div className="shelf bottom">
              <div className="face top"></div>
              <div className="face front">
                <a href="#" data-img-url="./images/1.jpg" className="photocard">
                  <img src="https://raw.githubusercontent.com/peterwestendorp/shelves/master/photos/3.jpg" alt="" />
                </a>
                <a href="#" className="photocard">
                  <img src="https://raw.githubusercontent.com/peterwestendorp/shelves/master/photos/1.jpg" alt="" />
                </a>
                <a href="#" className="photocard">
                  <img src="https://raw.githubusercontent.com/peterwestendorp/shelves/master/photos/2.jpg" alt="" />
                </a>
              </div>
              <div className="face back"></div>
              <div className="face left"></div>
              <div className="face bottom"></div>
            </div>
            {/* /shelf*/}
          </div>
          {/* /camera */}
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
