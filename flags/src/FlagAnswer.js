import React from 'react';
import StyleButton from './StyledButton';
import './FlagAnswer.css';

const FlagAnswer = ({ correct, answer, onNext }) => (
   <div className="flag-answer">
      {correct ?
         `Correct!: ${answer}` :
         `Incorret! Correect Answer: ${answer}`}
      <StyleButton text="NEXT" onClick={onNext} />
   </div>
);

export default FlagAnswer;