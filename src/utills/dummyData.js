import { Icons } from "../assets/images";
import {
  Biology,
  Cells,
  Chemistry,
  Dijestive,
  English,
  Group1,
  Group2,
  Group3,
  Group4,
  Group5,
  Heart,
  Labs,
  Mathematics,
  Physics,
  SenseOrgan,
} from "../assets/SVG";

export const dummySubjectData = [
  {
    id: 1,
    name: "Chemistry",
    chapters: 16,
    Icon: Chemistry,
    color: "#B86EFD",
    lessons: 14,
    percentage: 45,
  },
  {
    id: 2,
    name: "Biology",
    chapters: 13,
    Icon: Biology,
    color: "#FD6173",
    lessons: 14,
    percentage: 90,
  },
  {
    id: 3,
    name: "English",
    chapters: 12,
    Icon: English,
    color: "#42E7A9",
    lessons: 14,
    percentage: 55,
  },
  {
    id: 4,
    name: "Physics",
    chapters: 17,
    lessons: 14,
    Icon: Physics,
    color: "#B86EFD",
    percentage: 76,
  },
  {
    id: 5,
    lessons: 14,
    name: "Mathematics",
    chapters: 16,
    Icon: Mathematics,
    color: "#42E7A9",
    percentage: 87,
  },
];
export const dummyRecentLearned = [
  {
    id: 1,
    name: "Angiosperms",
    time: "2 hrs 45 min",
    icon: Labs,
    color: "#365EFB",
    back: "#e7ebfe",
    percentage: 30,
  },
  {
    id: 2,
    name: "Mathematics",
    time: "2 hrs 45 min",
    icon: Mathematics,
    color: "#42E7A9",
    back: "#D7EAE3",
    percentage: 38,
  },
  {
    id: 3,
    name: "Sentences",
    time: "2 hrs 45 min",
    icon: English,
    color: "#B86EFD",
    back: "#E1D7EA",
    percentage: 78,
  },
];

export const dummyInstructorData = [
  {
    id: 1,
    name: "Michael",
    source: Icons.instructor1,
  },
  {
    id: 2,
    name: "Floreda",
    source: Icons.instructor2,
  },
  {
    id: 3,
    name: "Arauna",
    source: Icons.instructor3,
  },
  {
    id: 4,
    name: "Prorick",
    source: Icons.instructor4,
  },
];

export const dummyLiveClassesData = [
  {
    id: 1,
    name: "Michael",
    title: "Science Technology",
    source: Icons.live1,
    rating: 4.2,
  },
  {
    id: 2,
    name: "Floreda",
    title: "Learn English",
    time: "10:30",
    source: Icons.live2,
    rating: 4.7,
  },
  {
    id: 3,
    name: "Arauna",
    title: "Spoken English",
    time: "1:30",
    source: Icons.live3,
    rating: 4.9,
  },
  {
    id: 4,
    name: "Prorick",
    title: "Math Lecture 7",
    time: "12:30",
    source: Icons.live4,
    rating: 4.5,
  },
];

export const subjectElements = [
  {
    id: 1,
    name: "Photosynthesis",
    Icon: <Group2 />,
    percentage: 34,
  },
  {
    id: 2,
    name: "Carbon Cycle",
    Icon: <Group4 />,
    percentage: 67,
  },
  {
    id: 3,
    name: "Nitrogen Cycle",
    Icon: <Group3 />,
    percentage: 12,
  },
  {
    id: 4,
    name: "Difference Between Mitosis And Meiosis",
    Icon: <Group1 />,
    percentage: 95,
  },
  {
    id: 5,
    name: "Flora And Fauna",
    Icon: <Group5 />,
    percentage: 34,
  },
  {
    id: 6,
    name: "Human Digestive System",
    Icon: <Dijestive />,
    percentage: 67,
  },
  {
    id: 7,
    name: "Human Heart",
    Icon: <Heart />,
    percentage: 12,
  },
  {
    id: 8,
    name: "Sense Organs",
    Icon: <SenseOrgan />,
    percentage: 95,
  },
  {
    id: 9,
    name: "Cells",
    Icon: <Cells />,
    percentage: 56,
  },
];
export const Topics = [
  {
    TopicName: "Human Anatomy",
    Topics: [
      {
        id: 1,
        name: "Prokaryotic Cells",
        Icon: Icons.parokaryotic,
        title: "Cell: the unit of life",
      },
      {
        id: 2,
        name: "Angiosperms ",
        Icon: Icons.angiosperms,
        title: "Cell: the unit of life",
      },
      {
        id: 3,
        name: "The Brain",
        Icon: Icons.brain,
        title: "Cell: the unit of life",
      },
    ],
  },
  {
    TopicName: "Reproduction",
    Topics: [
      {
        id: 1,
        name: "Reproduction",
        Icon: Icons.parokaryotic,
        title: "Cell: the unit of life",
      },
      {
        id: 2,
        name: "Modes of Reproduction ",
        Icon: Icons.angiosperms,
        title: "Cell: the unit of life",
      },
      {
        id: 3,
        name: "Asexual reproduction",
        Icon: Icons.brain,
        title: "Cell: the unit of life",
      },
    ],
  },
  {
    TopicName: "Genetics & Evolution",
    Topics: [
      {
        id: 1,
        name: "Microscopic anatomy",
        Icon: Icons.parokaryotic,
        title: "Cell: the unit of life",
      },
      {
        id: 2,
        name: "Gametogenesis",
        Icon: Icons.angiosperms,
        title: "Cell: the unit of life",
      },
      {
        id: 3,
        name: "Oogenesis",
        Icon: Icons.brain,
        title: "Cell: the unit of life",
      },
    ],
  },
];
