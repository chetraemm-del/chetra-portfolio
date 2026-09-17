import { SiCss, SiExpress, SiGsap, SiHtml5, SiJavascript, SiMongodb, SiNodedotjs, SiReact, SiTailwindcss } from "react-icons/si";

export const projects = [
  {
    id: 1,
    title: "Straw Hat Pirate Crew",
    imgPoster: "img/project1/poster-img1.png",
    description:
      "A frontend-only web project inspired by the Straw Hat Pirates from One Piece. It showcases the crew members, parts of their stories, and their government-issued bounties through an anime-inspired interface with smooth animations and responsive design.",
    projectReflection:
      "I created this project because One Piece is one of my favorite anime series, and I wanted to turn my interest into a practical web development project. It helped me improve my React.js skills, practice component-based development, and learn how to use GSAP to create smooth and engaging animations. I also gained more experience with responsive layouts, visual design, and building a complete frontend project from an idea.",
      imgDetail : [ '/img/project1/img1-1.png','/img/project1/img1-2.png','/img/project1/img1-3.png','/img/project1/img1-8.png','/img/project1/img1-4.png','/img/project1/img1-5.png','/img/project1/img1-6.png','/img/project1/img1-7.png','/img/project1/img1-9.png','/img/project1/img1-10.png',
      ],
      code : 'https://github.com/chetraemm-del/straw-hat-pirate',
      category : 'frontend',
      techStack : [{name : 'HTML', icon : SiHtml5},{name : 'CSS', icon : SiCss},{name : 'JavaScript', icon : SiJavascript},{name : 'React', icon : SiReact},{name : 'Tailwind CSS', icon : SiTailwindcss},{name : 'Gsap',icon : SiGsap }]
  },
  {
    id: 2,
    title: "E-commerce",
    imgPoster: "img/project2/poster-img2.png",
    description:
      "This project is a frontend-only e-commerce website designed to showcase products through a clean and visually appealing layout. It includes sections for best-selling products, all products, contact information, and an about page. The products are displayed using an organized grid layout to create a smooth and enjoyable browsing experience. Since this is a frontend-only project, users cannot perform actions such as adding products to a cart, placing orders, or making payments.",
    projectReflection:
      "This was my first project built with React.js, and it played an important role in helping me understand the fundamentals of React development. Through this project, I learned how to create and reuse components, work with React Hooks, organize content into different pages, and use React Router for navigation. I also gained experience in structuring a frontend application, managing the layout of product sections, and creating a consistent user interface. Although the project does not include backend functionality or real e-commerce actions, it helped me build a strong foundation in React.js and gave me more confidence in developing larger and more interactive applications.",
      imgDetail : ['/img/project2/img2-1.png','/img/project2/img2-2.png','/img/project2/img2-3.png','/img/project2/img2-4.png','/img/project2/img2-5.png','/img/project2/img2-6.png','/img/project2/img2-8.png','/img/project2/img2-7.png',
      ],
      code : 'https://github.com/chetraemm-del/ecommerce-project',
      category : 'frontend',
      techStack : [{name : 'HTML', icon : SiHtml5},{name : 'CSS', icon : SiCss},{name : 'JavaScript', icon : SiJavascript},{name : 'React', icon : SiReact},{name : 'Tailwind CSS', icon : SiTailwindcss},{name : 'Gsap',icon : SiGsap }]
  },
  {
    id: 3,
    title: "E-commerce",
    imgPoster: "img/project3/poster-img3.png",
    description:
      "This project is a frontend-only e-commerce website built using HTML and CSS. It showcases different products through sections such as best sellers, all products, about, and contact. The website uses a clean and organized grid layout to present the products and create a visually appealing browsing experience. Since it is a static frontend project, users cannot perform e-commerce actions such as adding products to a cart, placing orders, or making payments",
    projectReflection:
      "I created this project while I was first learning HTML and CSS. It helped me understand the fundamentals of building a website, including creating the structure of web pages with HTML and styling them with CSS. Through this project, I practiced organizing content, designing product layouts, working with grids, adjusting spacing, and creating a consistent visual appearance. It also helped me understand how different sections of a website work together and gave me my first practical experience in turning a design idea into a complete webpage. Although the project is frontend-only and does not include interactive functionality, it provided me with a strong foundation in HTML and CSS and prepared me to move forward to more advanced technologies such as JavaScript and React.js.",
      imgDetail : ['/img/project3/poster-img3.png','/img/project3/img3-2.png','/img/project3/img3-4.png','/img/project3/img3-5.png','/img/project3/img3-6.png','/img/project3/img3-7.png','/img/project3/img3-8.png','/img/project3/img3-9.png','/img/project3/img3-10.png','/img/project3/img3-11.png',
      ],
      code : 'https://github.com/chetraemm-del/html-project',
      category : 'frontend',
      techStack : [{name : 'HTML', icon : SiHtml5},{name : 'CSS', icon : SiCss}]
  },
  {
    id: 4,
    title: "POS System",
    imgPoster: "img/project4/poster4.png",
    description:
      "This project is a full-stack Point of Sale (POS) system designed to help manage sales, purchases, products, and business operations. It includes a dashboard for viewing sales-related data and provides management sections for customers, suppliers, categories, products, purchases, sales, users, sales reports, and stock reports. The system allows users to purchase products from suppliers, manage inventory, sell products to customers, and generate invoices for completed sales. It combines frontend and backend functionality to create a more complete and practical business management experience.",
    projectReflection:
      "This was my first full-stack project, and it helped me develop a stronger understanding of backend development and how different parts of an application work together. Through this project, I learned how to use Node.js and Express.js to build backend applications, organize routes and controllers, and connect the application to MongoDB. I also learned how to create models and schemas to structure data and manage database collections. In addition, I gained practical experience working with REST APIs and HTTP methods such as GET, POST, PUT, PATCH, and DELETE. I used Postman to test API endpoints, check request and response data, and identify problems during development. This project also helped me understand the relationship between the frontend, backend, and database in a full-stack application. Building features such as product management, purchasing, sales, inventory, and invoices gave me valuable experience in developing a system with real-world business functionality.",
      imgDetail : ['/img/project4/poster4.png','/img/project4/img4-1.png','/img/project4/img4-3.png','/img/project4/img4-7.png','/img/project4/img4-8.png','/img/project4/img4-9.png','/img/project4/img4-10.png','/img/project4/img4-11.png','/img/project4/img4-12.png','/img/project4/img4-13.png','/img/project4/img4-15.png','/img/project4/img4-16.png',
      ],
      code : 'https://github.com/chetraemm-del/html-project',
      category : 'fullStack',
      techStack : [{name : 'HTML', icon : SiHtml5},{name : 'CSS', icon : SiCss},{name : 'JavaScript', icon : SiJavascript},{name : 'React', icon : SiReact},{name : 'Tailwind', icon : SiTailwindcss},{name : 'Node.js', icon : SiNodedotjs},{name : 'Express.js', icon : SiExpress},{name : 'MongoDB', icon : SiMongodb}]
  },
];
