import React, { useState } from 'react';
import { Cards } from '../Cards/Cards';
import { dataEn, dataFr } from './data';
import styles from './QuizComponent.module.css';
import { useRouter } from 'next/router';

const QuizComponent = () => {

    const router = useRouter();
    let {locale} = router;

    let toggle = locale === "en-US" ? dataEn: dataFr;

    const handleLanguage = () => {
        switch (locale) {
            case "en-US": {
                router.push("/fr", "/fr", {locale: "en-US"});
                break;
            }
            case "fr":{
                router.push("/en-US", "/en-US", {locale: "fr"});
                break;
            }
        }

    }

    const [questionNumber, setQuestionNumber] = useState(1);
    
    return (
        <div className={styles.quizContainer}>
            {/* Select language */}
            <div className={styles.languageContainer}>
                Language: {locale}
                <div className={styles.language} onClick={handleLanguage}>
                    Change
                </div>
            </div>
            {/* card element for each question */}
            <Cards data={toggle} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} />
        </div>
    )
}

export default QuizComponent