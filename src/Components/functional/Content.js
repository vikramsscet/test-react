import React from 'react';

const Content = ({content}) => {
    return(
        content.map(data => {
            return <div key={Math.floor(Math.random()*1000)} className="content">{data}</div>
        })
    );
}

export {Content};