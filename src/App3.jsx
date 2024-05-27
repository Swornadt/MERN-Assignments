import React from 'react';
import IdentityBox from './identityBox';
import { useState } from 'react';

const App3 = () => {
    const [age1, setAge1] = useState('');
    const [age2, setAge2] = useState('');
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const [comparisonResult, setComparisonResult] = useState('');
    const compareAges = () => {
        const intAge1 = parseInt(age1);
        const intAge2 = parseInt(age2);
        if(intAge1 > intAge2){
            const diff = intAge1-intAge2
            console.log(diff)
            setComparisonResult(`${name1} is ${diff} years older than ${name2}`)
        }
        else{
            const diff = intAge2-intAge1
            console.log(diff)
            setComparisonResult(`${name2} is ${diff} years older than ${name1}`)
        }
    };
    return (
        <div>
            <IdentityBox title="1" 
                         onNameChange={setName1} 
                         onAgeChange={setAge1} />
            <IdentityBox title="2" 
                         onNameChange={setName2} 
                         onAgeChange={setAge2}/>
            <button onClick={compareAges}>Compare</button>
            <br/>
            {comparisonResult && <p>{comparisonResult}</p>}    
            
        </div>
    );
}

export default App3;
