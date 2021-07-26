import React, {useState} from 'react';

const Quiz=()=> {

  const [answer, setAnswer]=useState('')

  const cap=['London','Paris','Berlin']

  const check = ()=>{
    for(let i=0;i<cap.length;i++){
      if(cap[i]==='Paris'){
        setAnswer('Correct')
      }else{
        setAnswer('Wrong!')
      }
    }
  }

  return (
    <div >
 <h2>What is the capital of France?</h2>
 <button onClick={check}>{cap[0]}</button>
 <button onClick={check}>{cap[1]}</button>
 <button onClick={check}>{cap[2]}</button>
 <p>{answer}</p>
    </div>
  );
}

export default Quiz;