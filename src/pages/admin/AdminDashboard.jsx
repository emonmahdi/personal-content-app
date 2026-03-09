import { useEffect, useState } from "react";
import { fetchAllContent } from "../../api/contentApi";
import { menuData } from "../../data/menuData";
import { Link } from "react-router";
import Loader from "../../components/ui/Loader";

const AdminDashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const result = await fetchAllContent();
      setData(result || []);
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) return <Loader />;

  // 🔥 Total posts
  const totalPosts = data.length;

  // 🔥 Category count
  const categoryCount = data.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  // 🔥 Latest 5 posts
  const latestPosts = [...data].slice(0, 5);

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-400 mb-8">Admin Dashboard</h1>

      {/* ================= Stats Cards ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Total Posts */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-800 shadow-lg hover:-translate-y-1 transition">
          <h2 className="text-gray-400 text-sm">Total Posts</h2>
          <p className="text-4xl font-bold text-blue-400 mt-3">{totalPosts}</p>
        </div>

        {/* Total Categories */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-800 shadow-lg hover:-translate-y-1 transition">
          <h2 className="text-gray-400 text-sm">Active Categories</h2>
          <p className="text-4xl font-bold text-green-400 mt-3">
            {Object.keys(categoryCount).length}
          </p>
        </div>

        {/* Quick Action */}
        <Link to="/admin/create">
          <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-6 rounded-2xl shadow-lg hover:opacity-90 transition cursor-pointer">
            <h2 className="text-sm text-white">Create New Post</h2>
            <p className="text-2xl font-bold text-white mt-3">+ Add Content</p>
          </div>
        </Link>
      </div>

      {/* ================= Category Breakdown ================= */}
      <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 mb-10">
        <h2 className="text-xl font-semibold text-blue-400 mb-6">
          Category Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {menuData.flatMap((main) =>
            main.subcategories.map((sub) => (
              <div
                key={sub.id}
                className="bg-gray-800 p-4 rounded-xl border border-gray-700"
              >
                <h3 className="text-white font-semibold">{sub.title}</h3>
                <p className="text-gray-400 text-sm">{main.title}</p>
                <p className="text-blue-400 text-2xl font-bold mt-2">
                  {categoryCount[sub.id] || 0}
                </p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* ================= Latest Posts ================= */}
      <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
        <h2 className="text-xl font-semibold text-blue-400 mb-6">
          Latest Posts
        </h2>

        {latestPosts.length === 0 && (
          <p className="text-gray-500">No posts yet.</p>
        )}

        <div className="space-y-4">
          {latestPosts.map((post) => (
            <div
              key={post._id}
              className="flex justify-between items-center bg-gray-800 p-4 rounded-lg border border-gray-700"
            >
              <div>
                <h3 className="text-white font-medium">{post.title}</h3>
                <p className="text-gray-400 text-sm">{post.category}</p>
              </div>

              <span className="text-gray-500 text-sm">
                {new Date(post.createdAt).toLocaleDateString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;