import React, { useEffect, useState } from 'react';
import styles from './Cards.module.css';

interface props {
    data: any;
    questionNumber:number;
}

export const Cards = ({data, questionNumber}: props) => {

    const [questions, setQuestions] = useState<any>(1);
    
    useEffect(() => {
      setQuestions(data[questionNumber - 1]);
    }, [data, questionNumber]);

  return (
    <div className={styles.cards}>
            <div className={styles.question}>
                {questions?.question}
            </div>
            <div className={styles.answers}>
                
                {/* set of questions */}
                {questions?.answers?.map((i:any)=>(
                    <div key={i.key} className={i.key === 1 ? styles.answer1 : (
                        i.key === 2 ? styles.answer2 : (
                            i.key === 3 ? styles.answer3 : (
                                i.key === 4 ? styles.answer4 : ''
                            )
                        )
                    )}>
                        {/* radio button */}
                        <div className={i.correct === true ? styles.radioCorrect : styles.radio}></div>
                        {/* option text */}
                        {i.text}
                    </div>
                ))}
            </div>
    </div>
  )
}
