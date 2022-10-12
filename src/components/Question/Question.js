import Options from '../options/Options';


const Question = ({ ques }) => {
    let correctAns = false;
    const checkCorrect = (ans) => {
        if (ques.correctAnswer === ans) {
            correctAns = true;
        }
        return correctAns;

    }

    return (
        <div className='border-2 my-5 p-3'>
            <h1 className='text-xl font-bold my-2'>{ques.question}</h1>
            {
                ques.options.map(option => <Options key={ques.id} ops={option} cCorrect={checkCorrect} correctAns={correctAns}></Options>)

            }
            <br />
            <div>
                <p><b>Correct ans: </b>{ques.correctAnswer}</p>
            </div>



        </div>
    );
};

export default Question;