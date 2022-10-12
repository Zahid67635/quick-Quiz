import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const loadedTopics = useLoaderData().data;
    console.log(loadedTopics);
    return (
        <div className='grid grid-cols-3 gap-5 p-5'>
            {
                loadedTopics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
            }
        </div>
    );
};

export default Topics;