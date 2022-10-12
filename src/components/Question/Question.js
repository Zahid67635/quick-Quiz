import Options from '../options/Options';

const Question = ({ ques }) => {

    return (
        <div className='border border-2 my-5 p-3'>
            <h1 className='text-xl font-bold'>{ques.question}</h1>
            {
                ques.options.map(option => <Options key={ques.id} ops={option}></Options>)

            }


        </div>
    );
};

export default Question;