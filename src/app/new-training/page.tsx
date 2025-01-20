'use client';

import React from 'react';
import NewTrainingForm, { TrainingSchema } from './new-training-form';

const NewTraining = () => {
  const handleTraining = (data: TrainingSchema) => {
    console.log(data);
  };
  return <NewTrainingForm handleTraining={handleTraining} />;
};

export default NewTraining;
