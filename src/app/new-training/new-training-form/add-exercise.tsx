import React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';

interface AddExerciseProps extends React.ComponentProps<'textarea'> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  errors: FieldError | undefined;
}

const AddExercise: React.FC<AddExerciseProps> = () =>
  // {
  //   // register,
  //   // errors,
  // }
  {
    return <p>S</p>;
  };

export default AddExercise;
