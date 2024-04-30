import dumb from "./assets/dumb.webp";
import tresure from "./assets/tresure.jpg";
import rubix from "./assets/rubix.jpg"
import meme from "./assets/meme.jpg";
import photography from "./assets/photography.avif";

const nontech = [
  {
    id: "10",
    title: "Dumb Charades",
    desc: 'Dumb Charades is a word guessing name and can add lots of excitement and fun. A person is not allowed to talk and is required to act out the phrase/name by using different gestures, facial expressions, and body language. Have a wonderful time.',
    image: dumb,
    rules: [
      "Team event of 4 members",
      "Actions showing letters, vulgarity not allowed",
      "Divided into 2 rounds",
      "First Round",
      ["WORD BEE",
      "Each team will get 5 seconds to name a film, and the next team must name the film of the trailing letter of the previous team.",
      "Example Team 1 says – Tagaru, Team 2 must start with Ra -like Rustam"],
      "Second Round",
      ["Intake of only 6 teams",
      "Three SubRounds – Easy, Medium, Hard",
      "Easy, Medium and Hard rounds are assigned with 3, 5 and 7 points respectively.",
      "The team with the highest number of points will be the winner.",
      "Film names will be given by the coordinators on the spot."]
    ],
    coordinators: [
      { name: "Shashikumar", phno: "9148746436" },
      { name: "Shamanth", phno: "9380014185" },
      { name: "Deeksha", phno: "8904012948" },
      // { name: "", phno: "9353840435" },
    ],
    timing: "11:00am - 01:00pm",
    date: "02/05/2024",
    link: "https://forms.gle/vTE42Fh85Za8Uaef7",
  },
  {
    id: "11",
    title: "Treasure-Hunt",
    desc: "You set up a treasure hunt by hiding clues and the treasure. The clues can be simple riddles that you have to find. Each clue tells you where to find the next clue. The final clue leads to the treasure.",
    image: tresure,
    rules: [
      "Team of 5",
      "Open for all",
      "Divided into 2 Rounds",
      "First Round",
      ["Written Round",
      "Only a single member of the team must participate in this round.",
      "Screening will be done based on Least Time and Completion of the Task.",
      "Top 8 teams will proceed to the next round."],
      "Second Round",
      ["Hunting the treasure.",
      "Rules will be provided on the spot.",
      "Don’t miss a single instruction. (Hint: It may help you later… 😉)"]

    ],
    coordinators: [
      { name: "Shamanth", phno: "9380014185" },
    ],
    timing: "4:00pm - 5:30pm",
    date: "02/05/2024",
    link: "https://forms.gle/y1AwAtsVuzJDfCWt9",
  },
  {
    id: "12",
    title: "Photography",
    desc: "Unleash your inner shutterbug with our Photography Game! Embark on a visual adventure as you explore stunning landscapes, capture fleeting moments, and unleash your creativity behind the lens.",
    image: photography,
    rules: [
      "Timings - 9 am to 2 pm",
      "No Filter, no Digital Camera (only Phone Cam), no Photoshop.",
      "Time, Date and Details of the Photo must and should be presented as and when required.",
      "Only single best pic for submission."
    ],
    coordinators: [
      { name: "Shamanth", phno: "9380014185" },
    ],
    timing: "9:00am - 2:00pm",
    date: "03/05/2024",
    link: "https://forms.gle/oES9r5YdVo7dpFmy5",
  },
  {
    id: "13",
    title: "Memes-ahari",
    desc: "Get ready to LOL with our Memes Game! Dive into a world of humor and wit as you compete to match the funniest memes with hilarious prompts. Challenge friends or test your meme mastery solo.",
    image: meme,
    rules: [
      "Team of 4 members",
      "Intake of only the first 15 teams",
      "It is pen and paper mode",
      "No vulgarity, no symbols (like *****, #####, $#@%#*&).",
      "Languages allowed are English and Kannada",
      "Judgment criterion is based on MEME literature. ",
      "2 Rounds",
      "First Round",
      ["One image template for all.",
      "The teams must design a meme for that image.",
      "Time limit is 60 seconds",
      "Top 5 teams will proceed to the next round."],
      "Second Round",
      "2 levels",
      "First Level",
      ["3 images will be provided consecutively with 60 seconds for each image.",
      "The team has to construct the meme for a particular image within the time gap.",
      "All images won't be provided at the same time, on completion of one, they get the other."],
      "Second Level",
      ["3 videos will be played one after the other.",
      "After completion of each video the teams get 90 seconds to frame their memes and then submit and proceed to the next video."]

    ],
    coordinators: [
      // { name: "Danish", phno: "8431598650" },
      { name: "Nithyananda", phno: "8618169315" },
      { name: "Shashikumar", phno: "9148746436" },
    ],
    timing: "9:00am - 10:00am",
    date: "03/05/2024",
    link: "https://forms.gle/NDmvGRTMGkZYhUSR7",
  },
  {
    id: "14",
    title: "Rubik's Cube",
    desc: "Step into the mind-bending world of the Rubik's Cube Game! Solve the timeless puzzle of twisting colors as you race against the clock. It's a test of strategy, skill, and patience. Are you up for the challenge?.",
    image: rubix,
    rules: [
      "Participants must carry their own Rubix Cube.",
      "Those who don’t have a cube can pre-inform the coordinators and they will arrange it.",
    ],
    coordinators: [
      { name: "Priyanka", phno: "8904171760" },
      { name: "Supriya", phno: "8867292040" },
      { name: "Supreeth", phno: "9353782856" },
    ],
    timing: "10:00am - 10:30am",
    date: "03/05/2024",
    link: "https://forms.gle/45xaEo2HkUBLKWwMA",
  },

];

export default nontech;