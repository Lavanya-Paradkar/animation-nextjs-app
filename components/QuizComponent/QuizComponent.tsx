import React, { useState } from 'react';
import { Cards } from '../Cards/Cards';
import styles from './QuizComponent.module.css';

const QuizComponent = ({toggle}: any) => {

    const [questionNumber, setQuestionNumber] = useState(1);
    return (
        <div className={styles.quizContainer}>

            {/* card element for questions */}
            <Cards data={toggle} questionNumber={questionNumber} />
        </div>
    )
}

export default QuizComponent