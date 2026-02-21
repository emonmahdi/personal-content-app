import {
    FaCode,
    FaUserTie,
    FaBlog,
    FaLightbulb,
    FaBook,
  } from "react-icons/fa";
  
  export const menuData = [
    {
      id: 1,
      title: "Programming",
      icon: FaCode,
      subcategories: [
        { id: "react", title: "React" },
        { id: "javascript", title: "JavaScript" },
        { id: "node", title: "Node.js" },
      ],
    },
    {
      id: 2,
      title: "Interview",
      icon: FaUserTie,
      subcategories: [
        { id: "frontend", title: "Frontend Questions" },
        { id: "backend", title: "Backend Questions" },
      ],
    },
    {
      id: 3,
      title: "Blogs",
      icon: FaBlog,
      subcategories: [
        { id: "personal", title: "Personal Blogs" },
        { id: "technical", title: "Technical Blogs" },
      ],
    },
    {
      id: 4,
      title: "Learn From Others",
      icon: FaLightbulb,
      subcategories: [
        { id: "youtube", title: "YouTube Notes" },
        { id: "articles", title: "Articles" },
      ],
    },
    {
      id: 5,
      title: "My Notes",
      icon: FaBook,
      subcategories: [
        { id: "daily", title: "Daily Notes" },
        { id: "ideas", title: "Ideas" },
      ],
    },
  ];