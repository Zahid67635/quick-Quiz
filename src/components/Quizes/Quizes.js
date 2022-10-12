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
                    questions.map(question => <Question key={question.id} ques={question}></Question>)
                }
            </div>
        </div>
    );
};

export default Quizes;