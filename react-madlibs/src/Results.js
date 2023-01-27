import React from 'react';

const Results = ({word1, word2, word3, word4}) => {
    return (
        <div className='Results'>
            <div className='Results-story'>
                I want to be a<span>{word1}</span>, so that <span>my {word2}</span> can be <span>{word3}</span> and <span>{word4}</span>.
            </div>
        </div>
    )
}

export default Results;