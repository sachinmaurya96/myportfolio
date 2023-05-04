let aboutdata =
  "As a MERN developer, I specialize in building web applications using MongoDB, Express.js, React.js, and Node.js. I have a solid understanding of JavaScript and its concepts, as well as experience in front-end development using HTML, CSS, and React.js.";

let projectdata = [
  { 
    name: "Google digitle Garage", 
    description: "A single page ui project using HTML, CSS and javascript",
    link: "https://sachinmaurya96.github.io/google-digital-garage/",
    gitlink:'https://github.com/sachinmaurya96/google-digital-garage',
    Image: "https://i.postimg.cc/BZDDxPzr/card3.jpg" ,
    delay:'0'
  },
  { 
    name: "Apple India", 
    description: "A single page ui project using HTML, CSS and javascript",
    link: "https://sachinmaurya96.github.io/Apple-india/",
    gitlink:'https://github.com/sachinmaurya96/Apple-india',
    Image: "https://i.postimg.cc/KvxKBqBT/card2.jpg" ,
    delay:'200'
  },
  { 
    name: "A mini frelance site", 
    description: "A single page ui project using HTML, CSS and React.js",
    link: "https://sachinmaurya96.github.io/findwork/",
    gitlink:'https://github.com/sachinmaurya96/findwork',
    Image: "https://i.postimg.cc/XYWgZk71/card1.jpg" ,
    delay:'400'
  },
  { 
    name: "A movie website using react.js", 
    description: "A single page movie website using HTML, CSS and React.js",
    link: "https://smmovies.netlify.app/",
    gitlink:'https://github.com/sachinmaurya96/movieapp',
    Image: "https://i.postimg.cc/7PgtHppM/Screenshot-2023-05-02-181218.png" ,
    delay:'600'
  },
  { 
    name: "Animated portfolio website", 
    description: "A multipage portfolio website using HTML, CSS and React.js",
    link: "https://sachinmaurya96.github.io/",
    gitlink:'https://github.com/sachinmaurya96/sachinmaurya96.github.io',
    Image: "https://i.postimg.cc/05FRr38W/Screenshot-2023-05-04-083243.png" ,
    delay:'0'
  },
  { 
    name: "TodoList", 
    description: "Todo list with complete CRUD operation in react js",
    link: "https://sachinmaurya96.github.io/reactTodolist/",
    gitlink:'https://github.com/sachinmaurya96/reactTodolist',
    Image: "https://i.postimg.cc/d1HctwFW/Screenshot-2023-05-04-083432.png" ,
    delay:'0'
  },
  { 
    name: "TextUtils", 
    description: "Mini text editor app using reactjs",
    link: "https://sachinmaurya96.github.io/Textutils/",
    gitlink:'https://github.com/sachinmaurya96/Textutils',
    Image: "https://i.postimg.cc/rwcFKyWj/Screenshot-2023-05-04-083335.png" ,
    delay:'0'
  }
];

let homeproject = projectdata.filter((elem,index)=>{
  return index < 3
});

let resume = "https://drive.google.com/uc?export=download&id=110DiHg6o9HZqmfeqEh1V104Lgz8cDO6L"
export { aboutdata , projectdata,homeproject,resume};
