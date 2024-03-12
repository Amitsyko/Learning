// Section4.jsx

import React from 'react';
import Section5 from './Section5';


export default function Section4() {
  return (  
    <div>
      <div className="container-fluid bg-dark text-white section2">
        <div className="row">
          <div className="col-6">
            <h1>JavaScript</h1>
            <h4>The language for building functional web pages</h4>

            <button type="button" className="btn btn-success mt-3 p-3 w-50 rounded-pill">
              Learn JavaScript
            </button>
            <br />
            <button type="button" className="btn btn-warning mt-3 p-3 w-50 rounded-pill">
              Video Tutorials
            </button>
            <br />
            <button type="button" className="btn btn-dark mt-3 p-3 w-50 rounded-pill border-white">
              JavaScript References
            </button>
          </div>
          <div className="col-6">
           <Section5/>
          </div>
        </div>
      </div>
    </div>
  );
}
