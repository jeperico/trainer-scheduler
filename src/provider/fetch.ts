import ITeam from "@/interfaces/team";
import { get, post } from "@/provider/api";
import { v4 as uuidv4 } from "uuid";

const teamData: Array<ITeam> = [
  {
    id: uuidv4(),
    name: "Baby Iniciante",
    gender: "Feminino",
    day: [
      {
        weekday: "segunda",
        startTime: {
          hours: 18,
          minutes: 30,
        },
        endTime: {
          hours: 19,
          minutes: 30,
        },
      },
      {
        weekday: "quarta",
        startTime: {
          hours: 18,
          minutes: 30,
        },
        endTime: {
          hours: 19,
          minutes: 30,
        },
      },
    ],
    location: "Oficina",
  },
  {
    id: uuidv4(),
    name: "Iniciante Bucarein",
    gender: "Feminino",
    day: [
      {
        weekday: "terca",
        startTime: {
          hours: 14,
          minutes: 0,
        },
        endTime: {
          hours: 15,
          minutes: 0,
        },
      },
      {
        weekday: "sexta",
        startTime: {
          hours: 15,
          minutes: 0,
        },
        endTime: {
          hours: 16,
          minutes: 0,
        },
      },
    ],
    location: "Bucarein",
  },
  {
    id: uuidv4(),
    name: "Iniciante Oficina",
    gender: "Feminino",
    day: [
      {
        weekday: "quarta",
        startTime: {
          hours: 19,
          minutes: 0,
        },
        endTime: {
          hours: 20,
          minutes: 0,
        },
      },
    ],
    location: "Oficina",
  },
  {
    id: uuidv4(),
    name: "Intermediário",
    gender: "Feminino",
    day: [
      {
        weekday: "terca",
        startTime: {
          hours: 16,
          minutes: 0,
        },
        endTime: {
          hours: 17,
          minutes: 0,
        },
      },
      {
        weekday: "sexta",
        startTime: {
          hours: 16,
          minutes: 0,
        },
        endTime: {
          hours: 17,
          minutes: 0,
        },
      },
    ],
    location: "Bucarein",
  },
  {
    id: uuidv4(),
    name: "Rendimento",
    gender: "Feminino",
    day: [
      {
        weekday: "terca",
        startTime: {
          hours: 19,
          minutes: 0,
        },
        endTime: {
          hours: 21,
          minutes: 0,
        },
      },
    ],
    location: "Oficina",
  },
  {
    id: uuidv4(),
    name: "Sub 18",
    gender: "Masculino",
    day: [
      {
        weekday: "sexta",
        startTime: {
          hours: 19,
          minutes: 0,
        },
        endTime: {
          hours: 20,
          minutes: 15,
        },
      },
    ],
    location: "Atiradores",
  },
];

const FetchData = () => {
  if (get("teams-data").length !== 0) return;
  teamData.forEach((team) => post("teams-data", team));
};

export default FetchData;
