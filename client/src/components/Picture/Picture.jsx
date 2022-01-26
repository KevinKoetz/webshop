import React from "react";
import './Picture.css';
import {Link} from  'react-router-dom';

const Picture = ({ thumbnailUrl }) => {
  return ( 
    <div className="Picture">
        <button>
            <Link to = '/' >
              exit
            </Link>
        </button>
        <div className ='details'>
          <img src={thumbnailUrl} />
        </div>
    </div>
  );
};

export default Picture;
