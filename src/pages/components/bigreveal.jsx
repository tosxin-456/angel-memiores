import React, { useEffect } from 'react';
import '../../css/biReveal.css';

function Bigreveal() {
  useEffect(() => {
    let maxTime = 50;
    let maxTimePink = 40;
    let container = document.getElementById('container');
    let singleButterfly = document.getElementById('butterfly');
    let pinkButterfly = document.getElementById('butterflyPink');
    let width = container.clientWidth;
    let height = container.clientHeight;
    let initialTop = container.clientHeight * -1;
    let butterflyCount = 300;
    let pinkButterflyCount = 200;

    for (let i = 0; i < butterflyCount; i++) {
      let ypos = Math.round(Math.random() * height);

      let createButterfly = document.createElement('div');
      createButterfly.innerHTML = singleButterfly.outerHTML;

      let speed = 1400 * (Math.random() * maxTime + 1);
      createButterfly.setAttribute('class', 'createbutterfly' + (3 - Math.floor(speed / 1000 / 8)));

      let speedDelay = 34000;

      container.appendChild(createButterfly);
      createButterfly.animate(
        [
          {
            transform: 'translate3d(' + width + 'px, ' + initialTop + 'px, 0)'
          },
          {
            transform: 'translate3d(-' + Math.random() * 256 + 'px, ' + ypos + 'px, 0)'
          }
        ],
        {
          delay: Math.random() * -speed,
          duration: speedDelay,
          iterations: Infinity
        }
      );
    }

    for (let j = 0; j < pinkButterflyCount; j++) {
      let yposPink = Math.round(Math.random() * height);

      let createButterflyPink = document.createElement('div');
      createButterflyPink.innerHTML = pinkButterfly.outerHTML;

      let speedPink = 1000 * (Math.random() * maxTimePink + 1);
      createButterflyPink.setAttribute('class', 'createbutterflyPink' + (3 - Math.floor(speedPink / 1000 / 8)));

      let speedDelayPink = 20000;

      container.appendChild(createButterflyPink);
      createButterflyPink.animate(
        [
          {
            transform: 'translate3d(' + width + 'px, ' + yposPink + 'px, 0)'
          },
          {
            transform: 'translate3d(-' + Math.random() * 256 + 'px, ' + initialTop + 'px, 0)'
          }
        ],
        {
          delay: Math.random() * -speedPink,
          duration: speedDelayPink,
          iterations: Infinity
        }
      );
    }
  }, []);

  return (
    <div id="hidden">
      <div id="flying" className="butterfly">
        <div id="wingLeft">
          <div id="fly"></div>
          <div id="fly"></div>
        </div>
        <div id="wingRight">
          <div id="fly"></div>
          <div id="fly"></div>
        </div>
      </div>
      <div id="flyingPink" className="butterflyPink">
        <div id="wingLeft">
          <div id="flyPink"></div>
          <div id="flyPink"></div>
        </div>
        <div id="wingRight">
          <div id="flyPink"></div>
          <div id="flyPink"></div>
        </div>
      </div>
    </div>
  );
}

export default Bigreveal;
