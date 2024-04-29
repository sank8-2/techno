import quiz from "./assets/quiz.jpg";
import web from "./assets/web.jpg";
import problem from "./assets/problemSolving.jpg";
import debug from "./assets/debug.jpg";

const tech = [
  {
    id: "1",
    title: "Technical Quiz",
    desc: `Welcome to the Techincal-quiz that focuses on testing knowledge and basic understanding of computer science subjects, such as C/C++ Language, Object oriented programming, Data structures, Operating systems and many more...`,
    image: quiz,
    rules: [
      "It is a team event, with a team of 4 members.",
      "Teams can be formed irrespective of their year.",
      "There will be 3 rounds - ",
      "Rules of each rounds will be revealed on the spot",
      "Every round will be the elimination round",
    ],
    coordinators: [
      { name: "Mubarak R M", phno: "8073244968" },
      { name: "Deepu", phno: "9353959619" },
      { name: "Priyanaka S", phno: "8904171760" },
    ],
    timing: "2:00pm - 3:00pm",
    date: "02/05/2024",
    link: "https://forms.gle/fKdjaDdQtoFS228g7",
  },
  {
    id: "2",
    title: "Code Debugging",
    desc: "Debugging is an art of finding the root of a problem in a code base and fixing it. There's no magic solution for bugs. Usually it takes a combination of googling, logging our code, and checking our logic against what is really happening.",
    image: debug,
    rules: [
      "This is an Individual Event.",
      "The error code will be given in text file (notepad)",
      "The code will be in C language only.",
      "A total of 6 questions will be given",
      "The individual who solves the maximum code will be the winner",
      "In any case if there is tie, then Tie breaker round will be conducted"
    ],
    coordinators: [
      { name: "Chandana M K", phno: "9108624992" },
      { name: "Shraddha M Pokle", phno: "9448668317" },
      { name: "Bhoomika D G", phno: "9019541416" },
    ],
    timing: "3:00pm - 3:30pm",
    date: "02/05/2024",
    link: "https://forms.gle/yMpEYN6BeaXAEpcG7",
  },
  {
    id: "3",
    title: "Web Template Design",
    desc: "Capture the essence of the Figma design in your web template: sleek, intuitive, and engaging. Blend colors harmoniously, ensure clear navigation, and prioritize user experience for a seamless gaming journey.",
    image: web,
    rules: [
      "This is an Individual Event.",
      "Design will be given.",
      "Internet access is not allowed",
      "Those who replicate design as it is will be the winner.",
      "In case many of them replicate, the next criterion will be timing so those who replicate fast will be the winner.",
      "In any case time is also same, the exact margins and padding will be considered as the criterion and will be crowned as the winner.",
    ],
    coordinators: [
      { name: "Pamitha H J", phno: "7676091286" },
      { name: "Keerthana G S", phno: "9036626760" },
    ],
    timing: "10:30am - 11:00am",
    date: "03/05/2024",
    link: "https://forms.gle/gdj55hjTtBKedjL3A",
  },
  {
    id: "4",
    title: "Problem Solving",
    desc: "It is an Analyzing, strategizing, and implementing solutions to overcome challenges and achieve desired outcomes..",
    image: problem,
    rules: [
      "This is an Individual Event.",
      "2 problem based questions will be given",
      "Can code in Java/C/C++.",
      "Usage of other languages will be strictly prohibited and may lead to disqualification.",
      "Ranking will be done automatically through the platform",
    ],
    coordinators: [
      { name: "Sanketh Kumar", phno: "9611076613" },
      { name: "Shraddha M Pokle", phno: "9448668317" },
    ],
    timing: "1:30pm - 3:00pm",
    date: "03/05/2024",
    link: "https://forms.gle/VrCVYxTNisdNCUvZA",
  },
];

export default tech;
