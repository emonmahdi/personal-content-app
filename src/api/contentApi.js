/* const dummyDatabase = [
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
 */

/* export const fetchContentByCategory = async (category) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/content?category=${category}`
    );

    if (!response.ok) {
      return [];
    }

    const result = await response.json();

    // VERY IMPORTANT SAFETY CHECK
    return Array.isArray(result?.data) ? result.data : [];
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}; */
/* 
  
  import axios from "axios";

export const fetchContentByCategory = async (category) => {
  const res = await axios.get(
    `http://localhost:5000/api/content?category=${category}`
  );
  return res.data;
};
  
  */

export const fetchContentByCategory = async (category) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/content?category=${category}`
    );

    if (!response.ok) {
      return [];
    }

    const result = await response.json();

    // RETURN DIRECT ARRAY
    return Array.isArray(result) ? result : [];
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
};

// Fetch single content by ID
export const fetchSingleContent = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/content/${id}`
    );

    if (!response.ok) {
      return null;
    }

    const result = await response.json();

    // Backend returns single object
    return result || null;
  } catch (error) {
    console.error("Fetch single content error:", error);
    return null;
  }
};

export const fetchAllContent = async () => {
  try {
    const response = await fetch(`http://localhost:5000/api/content/all`);
    if (!response.ok) return [];
    const result = await response.json();
    return Array.isArray(result) ? result : [];
  } catch (error) {
    console.error("Fetch all content error:", error);
    return [];
  }
};

// Delete content by ID
export const deleteContent = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/api/content/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("Failed to delete content");

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Delete content error:", error);
    throw error;
  }
};

// Update content by ID
export const updateContent = async (id, data) => {
  try {
    const response = await fetch(`http://localhost:5000/api/content/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error("Failed to update content");

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Update content error:", error);
    throw error;
  }
};
