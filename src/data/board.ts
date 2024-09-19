import { v4 as uuidv4 } from "uuid";

import { Columns } from "../types";
import { getRandomColors } from "../helpers/getRandomColors";

export const Board: Columns = {
  backlog: {
    name: "Backlog",
    items: [
      {
        id: uuidv4(),
        title: "Project 1",
        description: "backend",
        priority: "medium",
        deadline: "5/5/25",
        alt: "task image", // Added alt
        tags: [
          { title: "frontend", ...getRandomColors() },
          { title: "html", ...getRandomColors() },
        ],
      },
      {
        id: uuidv4(),
        title: "Project 2",
        description: "database ..",
        priority: "low",
        deadline: "10/25/24",
        alt: "task image", // Added alt
        tags: [
          { title: "css", ...getRandomColors() },
          { title: "flex", ...getRandomColors() },
        ],
      },
    ],
  },
  pending: {
    name: "Pending",
    items: [
      {
        id: uuidv4(),
        title: "Project 3 ",
        description: "task ..",
        priority: "high",
        deadline: "11/7/24",
        alt: "task image", // Added alt
        tags: [
          { title: "backend", ...getRandomColors() },
          { title: "express", ...getRandomColors() },
        ],
      },
      {
        id: uuidv4(),
        title: "Project 4 ",
        description: "Javascript ..",
        priority: "low",
        deadline: "10/19/24",
        alt: "task image", // alt already exists
        tags: [
          { title: "Backend", ...getRandomColors() },
          { title: "Js", ...getRandomColors() },
        ],
      },
    ],
  },
  todo: {
    name: "To Do",
    items: [
      {
        id: uuidv4(),
        title: "Project 5",
        description: "React ..",
        priority: "medium",
        deadline: "12/4/24",
        alt: "task image", // Added alt
        tags: [
          { title: "backend", ...getRandomColors() },
          { title: "python", ...getRandomColors() },
        ],
      },
    ],
  },
  doing: {
    name: "Doing",
    items: [
      {
        id: uuidv4(),
        title: "Project 2",
        description: "front end ..",
        priority: "low",
        deadline: "9/9/24",
        alt: "task image", // Added alt
        tags: [
          { title: "css ", ...getRandomColors() },
          { title: "table", ...getRandomColors() },
        ],
      },
      {
        id: uuidv4(),
        title: "Project 2",
        description: "Full stack  ..",
        priority: "medium",
        deadline: "9/29/24",
        alt: "task image", // Added alt
        tags: [
          { title: "MERN", ...getRandomColors() },
          { title: "Node js", ...getRandomColors() },
        ],
      },
    ],
  },
  done: {
    name: "Done",
    items: [
      {
        id: uuidv4(),
        title: "Project 1",
        description: "Frontend ..",
        priority: "high",
        deadline: "7/2/24",
        alt: "task image", // alt already exists
        tags: [
          { title: "Project", ...getRandomColors() },
          { title: "code", ...getRandomColors() },
        ],
      },
    ],
  },
};
