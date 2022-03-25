import React from 'react'

const Gif = ({title, url}) => {
    return <div>
        <div>
            <label>{title}</label>
        </div>
        <img src={url} />
    </div>
}

export default Gif;