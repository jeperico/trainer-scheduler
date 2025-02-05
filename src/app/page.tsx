"use client";

import WorkoutCard from "@/components/WorkoutCard";
import IWorkout from "@/interfaces/workout";
import { useEffect, useState } from "react";
import { get } from "@/provider/api";
import React from "react";
import { useSearchParams } from "next/navigation";

const Home = () => {
  const [workouts, setworkouts] = useState<IWorkout[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await get("workouts-data");
      setworkouts(data);
    };

    fetchData();
  }, []);

  const searchParams = useSearchParams();
  const gender = searchParams.get("genero");
  const name = searchParams.get("nome");
  const locale = searchParams.get("local");
  const day = searchParams.get("dia-da-semana");

  const handleFilter = () => {
    let filteredData = workouts;

    if (gender) {
      filteredData = filteredData.filter((data) =>
        data.team.gender.toLowerCase().includes(gender.toLowerCase()),
      );
    }
    if (name) {
      filteredData = filteredData.filter((data) =>
        data.team.name.toLowerCase().includes(name.toLowerCase()),
      );
    }
    if (locale) {
      filteredData = filteredData.filter((data) =>
        data.team.polo.toLowerCase().includes(locale.toLowerCase()),
      );
    }
    if (day) {
      filteredData = filteredData.filter(
        (data) =>
          data.team.day[0]?.weekday.includes(day) ||
          data.team.day[1]?.weekday.includes(day),
      );
    }

    return filteredData;
  };

  return (
    <main className="mx-auto w-[90vw] max-w-[1240px] p-4 grid grid-cols-2 gap-4">
      {handleFilter().map((data: IWorkout) => {
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
