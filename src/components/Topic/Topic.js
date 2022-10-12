import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'
const Topic = ({ topic }) => {
    return (
        <div>
            <div className='cardd border-solid border-2 border-indigo-600'>
                <img src={topic.logo} alt="" />
                <div className='flex justify-between p-5'>
                    <h3 className='text-2xl font-bold'>{topic.name}</h3>
                    <h4 className='text-xl font-bold'>Total quiz: {topic.total}</h4>
                    <Link to={`/quizes/${topic.id}`}><button className='w-36 h-10 bg-green-500 hover:bg-green-700 text-white font-bold rounded'>Start Quiz</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Topic;