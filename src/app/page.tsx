'use client';

import WorkoutCard from '@/components/WorkoutCard';
import IWorkout from '@/interfaces/workout';
import { useEffect, useState } from 'react';
import { get } from '@/provider/api';
import React from 'react';

const Home = () => {
  const [workouts, setworkouts] = useState<IWorkout[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await get('workouts-data');
      setworkouts(data);
    };

    fetchData();
  }, []);

  return (
    <main className="mx-auto w-[90vw] max-w-[1240px] p-4 grid grid-cols-2 gap-4">
      {workouts.map((data: IWorkout) => {
        return (
          <div key={data.id}>
            <WorkoutCard data={data}></WorkoutCard>
          </div>
        );
      })}
    </main>
  );
};

export default Home;
