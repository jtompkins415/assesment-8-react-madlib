import React, {useState} from 'react';
import MadlibForm from './MadlibForm';
import Results from './Results';


const Madlib = () => {
    const [word1, setWord1] = useState('');
    const [word2, setWord2] = useState('');
    const [word3, setWord3] = useState('');
    const [word4, setWord4] = useState('');

    return (
       <div className='Madlib'>
        <h1>MADLIBS!</h1>
        <MadlibForm />
        <Results 
			word1={word1}
			word2={word2}
			word3={word3}
			word4={word4}
			/>
       </div> 
    )
}

export default Madlib;