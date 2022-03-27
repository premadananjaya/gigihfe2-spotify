import React from 'react';

const Gabungan = ({img,album,name}) =>{
    return <div>
        <img src={img}/>
        <p>{album}</p>
        <p>{name}</p>
    </div>
}

export default Gabungan;