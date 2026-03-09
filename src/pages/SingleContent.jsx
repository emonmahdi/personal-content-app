// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router";
// import { fetchSingleContent } from "../api/contentApi";
// import ContentSkeleton from "../components/ui/ContentSkeleton";

// const SingleContent = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const load = async () => {
//       const result = await fetchSingleContent(id);
//       setData(result);
//       setLoading(false);
//     };

//     load();
//   }, [id]);

//   if (loading) return <ContentSkeleton />;

//   if (!data) {
//     return (
//       <div className="min-h-screen bg-gray-950 text-white p-6">
//         Content not found
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-950 text-gray-200 p-8">
//       <button
//         onClick={() => navigate(-1)}
//         className="text-blue-400 mb-6 cursor-pointer hover:underline"
//       >
//         ← Back
//       </button>

//       <div className="max-w-5xl mx-auto bg-gray-900 p-6 rounded-xl border border-gray-800">
//         <h1 className="text-3xl font-bold text-blue-400 mb-4">{data.title}</h1>

//         <div className="text-sm text-gray-500 mb-6 flex justify-between">
//           <span>Author: {data.author}</span>
//           <span>
//             {data.createdAt
//               ? new Date(data.createdAt).toLocaleDateString()
//               : ""}
//           </span>
//         </div>

//         {/* <p className="leading-relaxed text-gray-300 whitespace-pre-line">
//           {data.description}
//         </p> */}
//         {/* <div className="prose prose-invert max-w-none">
//           <p
//             dangerouslySetInnerHTML={{
//               __html: data?.description || "",
//             }}
//           />
//         </div> */}
//         <div
//           className="prose prose-invert max-w-none break-words whitespace-normal text-gray-300"
//           dangerouslySetInnerHTML={{
//             __html: data?.description || "",
//           }}
//         />

//         {data.reference && (
//           <div className="mt-6 text-sm text-gray-500">
//             Reference: {data.reference}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SingleContent;

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { fetchSingleContent } from "../api/contentApi";
import ContentSkeleton from "../components/ui/ContentSkeleton";

const SingleContent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const result = await fetchSingleContent(id);
      setData(result);
      setLoading(false);
    };

    load();
  }, [id]);

  if (loading) return <ContentSkeleton />;

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center text-gray-400 text-lg">
        Content not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto mb-6">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-400 hover:text-blue-300 cursor-pointer transition flex items-center gap-2 text-sm sm:text-base"
        >
          ← Back
        </button>
      </div>

      {/* Content Card */}
      <div className="max-w-4xl mx-auto bg-gray-900 p-5 sm:p-7 md:p-8 rounded-xl border border-gray-800 shadow-lg">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-4 leading-tight">
          {data.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-gray-500 mb-6 border-b border-gray-800 pb-4">
          <span>Author: {data.author}</span>

          <span>
            {data.createdAt
              ? new Date(data.createdAt).toLocaleDateString()
              : ""}
          </span>
        </div>

        {/* Description */}
        <div
          className="
          prose 
          prose-invert 
          max-w-none 
          break-words 
          text-gray-300
          prose-headings:text-white
          prose-a:text-blue-400
          prose-strong:text-white
          prose-img:rounded-lg
          prose-pre:bg-gray-800
          "
          dangerouslySetInnerHTML={{
            __html: data?.description || "",
          }}
        />

        {/* Reference */}
        {data.reference && (
          <div className="mt-8 pt-4 border-t border-gray-800 text-sm text-gray-400">
            <span className="font-medium text-gray-300">Reference:</span>{" "}
            {data.reference}
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleContent;
