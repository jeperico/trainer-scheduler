"use client";

import WorkoutCard from "@/components/WorkoutCard";
import IWorkout from "@/interfaces/workout";
import { useEffect, useState } from "react";
import { get } from "@/provider/api";
import React from "react";
import { useSearchParams } from "next/navigation";
import getWeekday from "@/utils/get-weekday";
import formatSlug from "@/utils/format-slug";

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
  const team = searchParams.get("equipe");
  const polo = searchParams.get("polo");
  const day = searchParams.get("dia-da-semana");

  const handleFilter = () => {
    let filteredData = workouts;

    if (team) {
      filteredData = filteredData.filter((data) => {
        return (
          data.team &&
          formatSlug(data.team.name.toLowerCase()).includes(team.toLowerCase())
        );
      });
    }
    if (polo) {
      filteredData = filteredData.filter(
        (data) =>
          data.team &&
          data.team.polo.toLowerCase().includes(polo.toLowerCase()),
      );
    }
    if (day) {
      filteredData = filteredData.filter(
        (data) => getWeekday(new Date(data.date).getDay()) === day,
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
