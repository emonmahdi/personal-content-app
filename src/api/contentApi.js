const dummyDatabase = [
    { id: 1, category: "react", title: "React useMemo", description: "Optimize performance." },
    { id: 2, category: "react", title: "React Context", description: "Global state management." },
    { id: 3, category: "javascript", title: "JS Closures", description: "Lexical scope concept." },
    { id: 4, category: "node", title: "Node Event Loop", description: "Async architecture." },
    { id: 5, category: "frontend", title: "React Interview Q1", description: "What is Virtual DOM?" },
  ];
  
  export const fetchContentByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = dummyDatabase.filter(
          (item) => item.category === category
        );
        resolve(filtered);
      }, 700);
    });
  };