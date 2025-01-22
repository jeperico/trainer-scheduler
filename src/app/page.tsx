'use client';

import TrainingCard from '@/components/TrainingCard';
import ITraining from '@/interfaces/training';
import { get } from '@/provider/api';
import React from 'react';

const Home = () => {
  const fetchData = get('faker-training-data');
  return (
    <main className="mx-auto w-[90vw] max-w-[1240px] p-4 grid grid-cols-2 gap-4">
      {fetchData.map((data: ITraining) => {
        return (
          <div key={data.id}>
            <TrainingCard data={data}></TrainingCard>
          </div>
        );
      })}
    </main>
  );
};

export default Home;
