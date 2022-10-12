import React from 'react';

const Options = ({ ops }) => {
    return (
        <div>
            <input type="radio" id={ops} name="fav_language" value="HTML"></input>
            <label for="ops">{ops}</label><br></br>
        </div>
    );
};

export default Options;