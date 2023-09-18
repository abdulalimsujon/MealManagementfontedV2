import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const CircularProgress = (props) => {

  
const pp =props.rate;
  return (
    <div style={{ width: 200, height: 200 }}>
      
      <CircularProgressbar
  value={pp}
  text={`${pp}%`}
  styles={{
    // Customize the root svg element
    root: {},
    // Customize the path, i.e. the "completed progress"
    path: {
      // Path color
      stroke: `rgba(186, 24, 212, ${pp / 100})`,
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: 'butt',
      // Customize transition animation
      transition: 'stroke-dashoffset 0.5s ease 0s',
      // Rotate the path
      transform: 'rotate(0.25turn)',
      transformOrigin: 'center center',
    },
    // Customize the circle behind the path, i.e. the "total progress"
    trail: {
      // Trail color
      stroke: '##781787',
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: 'butt',
      // Rotate the trail
      transform: 'rotate(0.50turn)',
      transformOrigin: 'center center',
    },
    // Customize the text
    text: {
      // Text color
      fill: '#BC2CD2',
      // Text size
      fontSize: '5px',
    },
    // Customize background - only used when the `background` prop is true
    background: {
      fill: '##781787',
    },
  }}
/>;
    </div>
  );
};

export default CircularProgress;