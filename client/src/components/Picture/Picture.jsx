import React from 'react';

const Picture = ({thumbnailUrl}) => {
    return ( 
        <div><img src={thumbnailUrl} /></div>
     );
}
 
export default Picture;