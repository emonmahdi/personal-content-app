import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { menuData } from "../../data/menuData";
 
const CreatePost = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("Submitting...", data);
  
      const res = await fetch("http://localhost:5000/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      console.log("Response status:", res.status);
  
      const result = await res.json();
      console.log("Response data:", result);
  
      if (!res.ok) {
        toast.error(result.message || "Failed to create post");
        return;
      }
  
      toast.success("Post Created Successfully");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Server not responding");
    }
  };

  return (
    <>
    <Toaster />
    <div className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-lg">
      <h1 className="text-2xl font-bold text-blue-400 mb-6">
        Create New Post
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

        {/* Title */}
        <div>
          <label className="block mb-2">Title</label>
          <input
            {...register("title", { required: true })}
            className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2">Description</label>
          <textarea
            {...register("description")}
            rows="5"
            className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category Dropdown */}
        <div>
          <label className="block mb-2">Category</label>
          <select
            {...register("category", { required: true })}
            className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700"
          >
            <option value="">Select Category</option>
            {menuData.flatMap((main) =>
              main.subcategories.map((sub) => (
                <option key={sub.id} value={sub.id}>
                  {sub.title}
                </option>
              ))
            )}
          </select>
        </div>

        {/* Author */}
        <div>
          <label className="block mb-2">Author</label>
          <input
            {...register("author")}
            className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700"
          />
        </div>

        {/* Reference */}
        <div>
          <label className="block mb-2">Reference</label>
          <input
            {...register("reference")}
            className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg font-semibold"
        >
          Publish Post
        </button>
      </form>
    </div>
    </>
  );
};

export default CreatePost;
// import { useForm } from "react-hook-form";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import ReactQuill from "react-quill-new";
// import "react-quill-new/dist/quill.snow.css";
// import { menuData } from "../../data/menuData";

// const modules = {
//     toolbar: [
//       [{ header: [1, 2, 3, false] }],
//       ["bold", "italic", "underline", "strike"],
//       [{ list: "ordered" }, { list: "bullet" }],
//       ["blockquote", "code-block"],
//       ["link"],
//       ["clean"],
//     ],
//   };

// const CreatePost = () => {
//   const { register, handleSubmit, reset } = useForm();
//   const [description, setDescription] = useState("");

//   const onSubmit = async (data) => {
//     try {
//       const finalData = {
//         ...data,
//         description,
//       };

//       const res = await fetch("http://localhost:5000/api/content", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(finalData),
//       });

//       const result = await res.json();
//       if (!res.ok) throw new Error(result.message);

//       toast.success("Post Created Successfully 🎉");
//       reset();
//       setDescription("");
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-lg">
//       <h1 className="text-2xl font-bold text-blue-400 mb-6">
//         Create New Post
//       </h1>

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
//         {/* Title */}
//         <div>
//           <label className="block mb-2 text-gray-300">Title</label>
//           <input
//             {...register("title", { required: true })}
//             className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700"
//           />
//         </div>

//         {/* Rich Text Editor */}
//         <div>
//           <label className="block mb-2 text-gray-300">
//             Description
//           </label>

//           <div className="bg-white rounded-lg">
//             <ReactQuill
//               theme="snow"
//               value={description}
//               modules={modules}
//               onChange={setDescription}
//               className="h-64"
//             />
//           </div>
//         </div>

//         {/* Category */}
//         <div>
//           <label className="block mb-2 text-gray-300">Category</label>
//           <select
//             {...register("category", { required: true })}
//             className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700"
//           >
//             <option value="">Select Category</option>
//             {menuData.flatMap((main) =>
//               main.subcategories.map((sub) => (
//                 <option key={sub.id} value={sub.id}>
//                   {sub.title}
//                 </option>
//               ))
//             )}
//           </select>
//         </div>

//         {/* Author */}
//         <div>
//           <label className="block mb-2 text-gray-300">Author</label>
//           <input
//             {...register("author")}
//             className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700"
//           />
//         </div>

//         {/* Reference */}
//         <div>
//           <label className="block mb-2 text-gray-300">Reference</label>
//           <input
//             {...register("reference")}
//             className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg font-semibold"
//         >
//           Publish Post
//         </button>
//       </form>
      
//     </div>
//   );
// };

// export default CreatePost; 
