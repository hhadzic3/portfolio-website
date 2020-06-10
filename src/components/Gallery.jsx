
import React from 'react';

import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
export default () => {
return (
<div id="portfolio">
      <div className="container-fluid p-0">
          <div className="row no-gutters">
              <div className="col-lg-4 col-sm-6">
                      <img className="img-fluid" src={img1} alt="" />
              </div>
              <div className="col-lg-4 col-sm-6">
                      <img className="img-fluid" src={img2} alt="" />
              </div>
              <div className="col-lg-4 col-sm-6">
                    <img className="img-fluid" src={img3} alt="" />  
              </div>
          </div>
      </div>
  </div>
)}