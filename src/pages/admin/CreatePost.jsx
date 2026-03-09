/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { menuData } from "../../data/menuData";
import ReactQuill, { Quill } from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { useState } from "react";

const Font = Quill.import("formats/font");

Font.whitelist = ["inter", "roboto", "poppins", "serif", "monospace"];

Quill.register(Font, true);

const modules = {
  toolbar: [
    [{ font: ["inter", "roboto", "poppins", "serif", "monospace"] }],
    [{ header: [1, 2, 3, false] }],
    [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    ["blockquote", "code-block"],
    ["link", "image"],
    ["clean"],
  ],
};

// const modules = {
//   toolbar: [
//     [{ font: [] }],
//     [{ header: [1, 2, 3, 4, false] }],
//     [{ size: ["small", false, "large", "huge"] }],
//     ["bold", "italic", "underline", "strike"],
//     [{ color: [] }, { background: [] }],
//     [{ list: "ordered" }, { list: "bullet" }],
//     [{ align: [] }],
//     ["blockquote", "code-block"],
//     ["link", "image"],
//     ["clean"],
//   ],
// };

const CreatePost = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const payload = {
        ...data,
        description,
      };

      const res = await fetch(
        "https://personal-content-app-server.vercel.app/api/content",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.message || "Failed to create post");
        setLoading(false);
        return;
      }

      toast.success("Post Created Successfully 🚀");

      reset();
      setDescription("");
    } catch (error) {
      toast.error("Server not responding");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />

      <div className="min-h-screen bg-gray-950 px-4 py-8">
        <div className="max-w-4xl mx-auto bg-gray-900 p-6 md:p-8 rounded-2xl border border-gray-800 shadow-lg">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-blue-400 mb-8">
            Create New Post
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Post Title
              </label>

              <input
                {...register("title", { required: "Title is required" })}
                placeholder="Enter post title..."
                className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {errors.title && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* Description Editor */}
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Description
              </label>

              <div className="bg-white rounded-lg overflow-hidden">
                <ReactQuill
                  theme="snow"
                  value={description}
                  onChange={setDescription}
                  modules={modules}
                  className="editor-scroll"
                />
              </div>

              {/* <div className="bg-white rounded-lg overflow-hidden">
                <ReactQuill
                  theme="snow"
                  value={description}
                  onChange={setDescription}
                  modules={modules}
                  className="min-h-[200px]"
                />
              </div> */}
            </div>

            {/* Category */}
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Category
              </label>

              <select
                {...register("category", { required: "Category required" })}
                className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500"
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

              {errors.category && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.category.message}
                </p>
              )}
            </div>

            {/* Grid fields */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Author */}
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Author
                </label>

                <input
                  {...register("author")}
                  placeholder="Author name"
                  className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700"
                />
              </div>

              {/* Reference */}
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Reference
                </label>

                <input
                  {...register("reference")}
                  placeholder="Source / reference"
                  className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg font-semibold"
              >
                {loading ? "Publishing..." : "Publish Post"}
              </button>

              <button
                type="button"
                onClick={() => {
                  reset();
                  setDescription("");
                }}
                className="px-6 py-3 rounded-lg border border-gray-700 hover:bg-gray-800 transition"
              >
                Clear
              </button>
            </div>
          </form>
        </div>
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

//       const res = await fetch("https://personal-content-app-server.vercel.app/api/content", {
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
