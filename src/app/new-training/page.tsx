'use client';

import React from 'react';
import NewTrainingForm, { TrainingSchema } from './new-training-form';

const NewTraining = () => {
  const handleTraining = (data: TrainingSchema) => {
    console.log('data> ', data);
    alert('Treino cadastrado com sucesso!');
    localStorage.setItem('training-data', JSON.stringify(data));
  };
  return <NewTrainingForm handleTraining={handleTraining} />;
};

export default NewTraining;
