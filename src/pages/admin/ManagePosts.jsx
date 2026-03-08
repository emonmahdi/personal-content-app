/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import {
  deleteContent,
  fetchAllContent,
  updateContent,
} from "../../api/contentApi";
import { menuData } from "../../data/menuData";
import Swal from "sweetalert2";

Modal.setAppElement("#root"); // Required for accessibility

const ManagePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);

  const { register, handleSubmit, reset } = useForm();

  // Fetch all posts
  const loadPosts = async () => {
    setLoading(true);
    const data = await fetchAllContent();
    setPosts(data || []);
    setLoading(false);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  // Delete post
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Delete Post?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, Delete it",
      cancelButtonText: "Cancel",
      background: "#111827",
      color: "#fff",
    });

    if (!result.isConfirmed) return;

    try {
      await deleteContent(id);

      toast.success("Post deleted successfully!");

      setPosts(posts.filter((p) => p._id !== id));
    } catch (error) {
      toast.error(error.message || "Failed to delete post");
    }
  };
  //   const handleDelete = async (id) => {
  //     if (!window.confirm("Are you sure you want to delete this post?")) return;

  //     try {
  //       await deleteContent(id);
  //       toast.success("Post deleted successfully!");
  //       setPosts(posts.filter((p) => p._id !== id));
  //     } catch (error) {
  //       toast.error(error.message || "Failed to delete post");
  //     }
  //   };

  // Open update modal
  const handleEdit = (post) => {
    setEditingPost(post);
    reset({
      title: post.title,
      description: post.description,
      category: post.category,
      author: post.author,
      reference: post.reference,
    });
    setModalOpen(true);
  };

  // Submit update
  const onUpdateSubmit = async (data) => {
    try {
      await updateContent(editingPost._id, data);
      toast.success("Post updated successfully!");
      setModalOpen(false);
      loadPosts();
    } catch (error) {
      toast.error(error.message || "Failed to update post");
    }
  };

  // Function to strip HTML tags and truncate
  const truncateHTML = (html, maxLength = 120) => {
    if (!html) return "";
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const text = tempDiv.textContent || tempDiv.innerText || "";
    if (text.length > maxLength) return text.substring(0, maxLength) + "...";
    return text;
  };

  if (loading) return <div className="text-gray-400 p-6">Loading posts...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl text-blue-400 font-bold mb-6">
        Manage All Posts
      </h1>

      {posts.length === 0 && (
        <div className="text-gray-500">No posts available</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-gray-900 p-5 rounded-xl border border-gray-800 shadow hover:shadow-lg transition overflow-hidden"
          >
            <h2 className="text-xl font-semibold text-blue-400">
              {post.title}
            </h2>
            <div
              className="prose prose-invert max-w-none break-words whitespace-normal text-gray-300"
              dangerouslySetInnerHTML={{
                __html: truncateHTML(post.description, 120) || "",
              }}
            />
            <div className="text-sm text-gray-500 mt-3 flex justify-between">
              <span>Author: {post.author}</span>
              <span>
                {post.createdAt
                  ? new Date(post.createdAt).toLocaleDateString()
                  : ""}
              </span>
            </div>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => handleEdit(post)}
                className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-700 transition text-white text-sm cursor-pointer"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(post._id)}
                className="px-3 py-1 bg-red-600 rounded hover:bg-red-700 transition text-white text-sm cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Edit Post"
        className="max-w-2xl w-full mx-auto my-8 bg-gray-900 p-6 rounded-2xl border border-gray-800 shadow-lg
             overflow-y-auto max-h-[90vh] focus:outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <h2 className="text-xl font-bold text-blue-400 mb-4">Update Post</h2>

        <form onSubmit={handleSubmit(onUpdateSubmit)} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block mb-1 text-white font-medium">Title</label>
            <input
              {...register("title", { required: true })}
              placeholder="Enter post title"
              className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-400
               focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 text-white font-medium">
              Description
            </label>
            <textarea
              {...register("description")}
              placeholder="Write the content here..."
              rows={5}
              className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-400
               focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 text-white font-medium">
              Category
            </label>
            <select
              {...register("category", { required: true })}
              className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-400
               focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" className="text-gray-400">
                Select Category
              </option>
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
            <label className="block mb-1 text-white font-medium">Author</label>
            <input
              {...register("author")}
              placeholder="Author name"
              className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-400
               focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Reference */}
          <div>
            <label className="block mb-1 text-white font-medium">
              Reference
            </label>
            <input
              {...register("reference")}
              placeholder="Reference link or note"
              className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-400
               focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 text-white"
            >
              Update
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ManagePosts;
