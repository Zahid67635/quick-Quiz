import React from 'react';

const Options = ({ ops, cCorrect }) => {

    return (
        <div>
            <input type="radio" id={ops} name="questions" value={ops} className='m-2' onChange={e => cCorrect(e.target.value)}></input>
            <label for={ops}>{ops}</label><br></br>


        </div >

    );
};

export default Options;