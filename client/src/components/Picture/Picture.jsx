import React from "react";
import './Picture.css';
import {Link} from  'react-router-dom';

const Picture = ({ thumbnailUrl }) => {
  return ( 
    <div className="PictureContainer">
        <button>
            <Link to = '/' >
              exit
            </Link>
        </button>
        <div className ='Picture'>
          <img src={thumbnailUrl} />
        </div>
    </div>
  );
};

export default Picture;
