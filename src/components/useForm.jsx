import React from 'react';
const useForm = () => {
     const [value, setValue] = React.useState('');
     const [error, setError] = React.useState(null);
     const [score, setScore] = React.useState(0);

     const checkValue = (selectedValue, correctAnswer) => {
          if (!selectedValue) {
               setError('Insira um valor');
               return false;
          } else if (selectedValue === correctAnswer) {
               setError(null);
               setScore(score + 1);
               return true;
          } else {
               return true;
          }
     };
     return {
          value,
          error,
          setValue,
          checkValue,
          score,
     };
};
export default useForm;
