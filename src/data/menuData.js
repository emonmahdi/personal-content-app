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
        // Core Programming
        { id: "javascript", title: "JavaScript" },
        { id: "typescript", title: "TypeScript" },
        { id: "programming-fundamentals", title: "Programming Fundamentals" },
        { id: "data-structures", title: "Data Structures & Algorithms" },

        // Frontend
        { id: "react", title: "React.js" },
        { id: "nextjs", title: "Next.js" },
        { id: "frontend-architecture", title: "Frontend Architecture" },

        // Backend
        { id: "nodejs", title: "Node.js" },
        { id: "expressjs", title: "Express.js" },
        { id: "rest-api", title: "REST API Design" },
        { id: "graphql", title: "GraphQL" },

        // Database
        { id: "mongodb", title: "MongoDB" },
        { id: "database-design", title: "Database Design" },

        // Authentication & Security
        { id: "authentication", title: "Authentication & JWT" },
        { id: "web-security", title: "Web Security" },

        // Dev Tools
        { id: "git", title: "Git & GitHub" },
        { id: "npm", title: "NPM & Package Management" },
        { id: "dev-tools", title: "Developer Tools" },

        // Testing
        { id: "testing", title: "Testing (Jest / React Testing)" },

        // Architecture
        { id: "system-design", title: "System Design" },
        { id: "software-engineering", title: "Software Engineering Concepts" },

        // Performance
        { id: "performance", title: "Performance Optimization" },

        // Deployment
        { id: "deployment", title: "Deployment & DevOps" },

        // Interview
        { id: "coding-interview", title: "Coding Interview Preparation" },
        { id: "javascript-interview", title: "JavaScript Interview Questions" },
        { id: "react-interview", title: "React Interview Questions" },
      ],
    },
    {
      id: 2,
      title: "Interview",
      icon: FaUserTie,
      subcategories: [
        // Core Technical Interview
        { id: "javascript-interview", title: "JavaScript Interview Questions" },
        { id: "react-interview", title: "React Interview Questions" },
        { id: "nextjs-interview", title: "Next.js Interview Questions" },
        { id: "nodejs-interview", title: "Node.js Interview Questions" },

        // Frontend & Backend
        { id: "frontend-interview", title: "Frontend Interview Questions" },
        { id: "backend-interview", title: "Backend Interview Questions" },

        // Problem Solving
        { id: "coding-interview", title: "Coding Interview Problems" },
        { id: "algorithm-interview", title: "Algorithm Interview Questions" },

        // System Design
        { id: "system-design-interview", title: "System Design Interview" },

        // Behavioral
        { id: "behavioral-interview", title: "Behavioral Interview Questions" },

        // Practical / Real World
        { id: "live-coding", title: "Live Coding Interview" },
        { id: "take-home-assignment", title: "Take Home Assignment" },

        // Experience
        { id: "interview-experience", title: "My Interview Experience" },
        { id: "company-interview", title: "Company Interview Questions" },

        // Career Preparation
        { id: "resume-tips", title: "Resume & Portfolio Tips" },
        { id: "job-preparation", title: "Software Engineer Job Preparation" },
      ],
    },
    {
      id: 3,
      title: "Blogs",
      icon: FaBlog,
      subcategories: [
        { id: "developer-journey", title: "Developer Journey" },
        { id: "personal-blogs", title: "Personal Blogs" },

        { id: "learning-notes", title: "Programming Learning Notes" },
        { id: "technical-blogs", title: "Technical Blogs" },

        { id: "career-growth", title: "Career Growth" },
        { id: "software-engineer-life", title: "Software Engineer Life" },

        { id: "project-experience", title: "Project Experience" },
        { id: "real-world-projects", title: "Real World Projects" },

        { id: "developer-guides", title: "Developer Guides" },
        { id: "productivity-tips", title: "Developer Productivity Tips" },

        // Extra Learning Section
        { id: "learning-resources", title: "Best Learning Resources" },
        { id: "learning-strategies", title: "Learning Strategies" },
        { id: "study-tips", title: "Study Tips for Programmers" },

        // Tools & Tips
        { id: "developer-tools", title: "Developer Tools" },
        { id: "coding-tips", title: "Coding Tips & Tricks" },

        // Community & Industry
        { id: "developer-community", title: "Developer Community" },
        { id: "tech-industry", title: "Tech Industry Insights" },
      ],
    },
    {
      id: 4,
      title: "Learn From Others",
      icon: FaLightbulb,
      subcategories: [
        { id: "youtube-notes", title: "YouTube Learning Notes" },
        { id: "articles", title: "Articles & Blog Notes" },
        { id: "podcasts", title: "Tech Podcasts" },

        { id: "github-learning", title: "GitHub Repositories Learning" },
        { id: "open-source", title: "Open Source Learning" },

        { id: "developer-talks", title: "Developer Talks & Conferences" },
        { id: "twitter-insights", title: "Twitter / X Developer Insights" },

        { id: "course-notes", title: "Online Course Notes" },
        { id: "book-notes", title: "Programming Book Notes" },

        { id: "mentor-advice", title: "Mentor Advice" },
        { id: "senior-developer-tips", title: "Senior Developer Tips" },

        { id: "industry-insights", title: "Tech Industry Insights" },
        { id: "case-studies", title: "Tech Case Studies" },
      ],
    },
    {
      id: 5,
      title: "My Notes",
      icon: FaBook,
      subcategories: [
        { id: "daily-routine", title: "Daily Routine" },
        { id: "daily-diary", title: "Daily Diary" },
        { id: "life-story", title: "My Life Story" },
        { id: "about-me", title: "About Me" },
        { id: "personal-profile", title: "Personal Profile" },

        { id: "goals", title: "Life Goals & Dreams" },
        { id: "ideas", title: "Ideas & Thoughts" },

        { id: "hobbies", title: "My Hobbies" },
        { id: "skills", title: "My Skills" },

        { id: "likes", title: "My Likes" },
        { id: "dislikes", title: "My Dislikes" },

        { id: "personal-experiences", title: "Life Experiences" },
        { id: "memories", title: "Important Memories" },

        { id: "family", title: "Family Information" },
        { id: "wife", title: "My Wife" },

        { id: "lessons", title: "Life Lessons" },
        { id: "future-plans", title: "Future Plans" },
      ],
    },
  ];