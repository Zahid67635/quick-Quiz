import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quizes = () => {
    const quizLoad = useLoaderData().data;
    const { questions } = quizLoad;
    return (
        <div >
            <h1 className='text-center text-3xl font-bold p-4'>{quizLoad.name}</h1>
            <div className='mx-36 my-7'>
                {
                    questions.map((question, idx) => <Question key={idx} ques={question}></Question>)
                }
            </div>
            <div className='flex justify-center my-4'>
                <button className='text-center h-12 px-8 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 hover:bg-green-700 focus:shadow-outline focus:outline-none'>Submit</button>
            </div>
        </div>
    );
};

export default Quizes;