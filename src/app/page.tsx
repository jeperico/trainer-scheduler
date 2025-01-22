'use client';

import TrainingCard from '@/components/TrainingCard';
import ITraining from '@/interfaces/training';
import { useEffect, useState } from 'react';
import { get } from '@/provider/api';
import React from 'react';

const Home = () => {
  const [trainings, setTrainings] = useState<ITraining[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await get('faker-training-data');
      setTrainings(data);
    };

    fetchData();
  }, []);

  return (
    <main className="mx-auto w-[90vw] max-w-[1240px] p-4 grid grid-cols-2 gap-4">
      {trainings.map((data: ITraining) => {
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
