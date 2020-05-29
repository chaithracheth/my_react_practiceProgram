import React, { Component } from 'react'

const list = ({id,name,url}) =>
{
    return(
        <div>
            <h1>{id}</h1>
            <h1>{name}</h1>
            <img src={url} alt="" height="50%" width="50%" />
        </div>
    )
}
export default list;
