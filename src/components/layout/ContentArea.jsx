// /* eslint-disable react-hooks/set-state-in-effect */
// import { useEffect, useState } from "react";
// import { fetchContentByCategory } from "../../api/contentApi";
// import { Link } from "react-router";

// const ContentArea = ({ selected }) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!selected) {
//       setData([]);
//       return;
//     }

//     const loadData = async () => {
//       setLoading(true);
//       const result = await fetchContentByCategory(selected);
//       setData(result || []);
//       setLoading(false);
//     };

//     loadData();
//   }, [selected]);

//   useEffect(() => {
//     console.log("Selected Category:", selected);
//   }, [selected]);

//   // Function to strip HTML tags and truncate
//   const truncateHTML = (html, maxLength = 120) => {
//     if (!html) return "";
//     const tempDiv = document.createElement("div");
//     tempDiv.innerHTML = html;
//     const text = tempDiv.textContent || tempDiv.innerText || "";
//     if (text.length > maxLength) return text.substring(0, maxLength) + "...";
//     return text;
//   };

//   return (
//     <div className="flex-1 p-6 overflow-y-auto text-gray-200">
//       {!selected && (
//         <div className="text-gray-500 text-lg">
//           Select a category to view content
//         </div>
//       )}

//       {loading && <div>Loading...</div>}

//       {!loading && selected && data?.length === 0 && (
//         <div>No content found for this category.</div>
//       )}

//       <div className="grid gap-4">
//         {data?.map((item) => (
//           <div
//             key={item._id}
//             className="bg-gray-900 p-4 rounded-lg border border-gray-800"
//           >
//             <h2 className="text-xl font-semibold text-blue-400">
//               {item.title}
//             </h2>

//             {/* <p className="text-gray-400 mt-2">
//               {item.description?.length > 120
//                 ? item.description.substring(0, 120) + "..."
//                 : item.description}
//             </p> */}
//             <div className="prose prose-invert max-w-none text-gray-400 mt-2">
//               {truncateHTML(item.description, 120)}
//             </div>

//             <div className="text-sm text-gray-500 mt-3 flex justify-between">
//               <span>Author: {item.author}</span>
//               <span>
//                 {item.createdAt
//                   ? new Date(item.createdAt).toLocaleDateString()
//                   : ""}
//               </span>
//             </div>

//             {item.reference && (
//               <div className="text-xs text-gray-600 mt-2">
//                 Ref: {item.reference}
//               </div>
//             )}
//             <Link to={`/content/${item._id}`}>
//               <button className="mt-3 text-blue-400 hover:underline cursor-pointer">
//                 Read More →
//               </button>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ContentArea;

/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { fetchContentByCategory } from "../../api/contentApi";
import { Link } from "react-router";
import Loader from "../ui/Loader";

const ContentArea = ({ selected }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selected) {
      setData([]);
      return;
    }

    const loadData = async () => {
      setLoading(true);
      const result = await fetchContentByCategory(selected);
      setData(result || []);
      setLoading(false);
    };

    loadData();
  }, [selected]);

  // Strip HTML + truncate
  const truncateHTML = (html, maxLength = 120) => {
    if (!html) return "";
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const text = tempDiv.textContent || tempDiv.innerText || "";

    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }

    return text;
  };

  return (
    <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto text-gray-200">
      {/* No category selected */}
      {!selected && (
        <div className="text-gray-500 text-center text-lg mt-10">
          Select a category to view content
        </div>
      )}

      {/* Loading */}
      {loading && <Loader />}

      {/* Empty */}
      {!loading && selected && data?.length === 0 && (
        <div className="text-center text-gray-500 mt-10">
          No content found for this category.
        </div>
      )}

      {/* Content Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {data?.map((item) => (
          <div
            key={item._id}
            className="bg-gray-900 p-5 rounded-xl border border-gray-800 
            shadow hover:shadow-lg hover:-translate-y-1 
            transition-all duration-300 flex flex-col"
          >
            {/* Title */}
            <h2 className="text-lg sm:text-xl font-semibold text-blue-400 break-words">
              {item.title}
            </h2>

            {/* Description */}
            <div className="text-gray-400 mt-2 text-sm break-words">
              {truncateHTML(item.description, 120)}
            </div>

            {/* Meta */}
            <div className="text-xs sm:text-sm text-gray-500 mt-4 flex flex-col sm:flex-row sm:justify-between gap-1">
              <span>Author: {item.author}</span>
              <span>
                {item.createdAt
                  ? new Date(item.createdAt).toLocaleDateString()
                  : ""}
              </span>
            </div>

            {/* Reference */}
            {item.reference && (
              <div className="text-xs text-gray-600 mt-2 break-words">
                Ref: {item.reference}
              </div>
            )}

            {/* Button */}
            <Link
              to={`/content/${item._id}`}
              className="mt-4 text-blue-400 text-sm hover:underline"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentArea;
