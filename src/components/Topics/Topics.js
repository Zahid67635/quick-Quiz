import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const loadedTopics = useLoaderData().data;
    console.log(loadedTopics);
    return (
        <div className='grid md:grid-cols-3 gap-5 p-8 grid-cols-1'>
            {
                loadedTopics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
            }
        </div>
    );
};

export default Topics;