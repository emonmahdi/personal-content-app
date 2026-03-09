import { useEffect, useState } from "react";
import { Link } from "react-router";
import { fetchAllContent } from "../../api/contentApi";
import { menuData } from "../../data/menuData";
import DashboardLoader from "../ui/DashboardLoader";

const DashboardHome = () => {
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

  if (loading) return <DashboardLoader />;

  // 🔥 Count content by category
  const categoryCount = data.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <h1 className="text-3xl font-bold text-blue-400 mb-8">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuData.map((mainCategory) =>
          mainCategory.subcategories.map((sub) => {
            const count = categoryCount[sub.id] || 0;

            return (
              <Link key={sub.id} to={`/category/${sub.id}`} className="group">
                <div
                  className="bg-gradient-to-br from-gray-900 to-gray-800 
                  p-6 rounded-2xl border border-gray-800 
                  shadow-lg hover:shadow-blue-500/20 
                  hover:-translate-y-1 
                  transition-all duration-300"
                >
                  <h2 className="text-xl font-semibold text-white group-hover:text-blue-400 transition">
                    {sub.title}
                  </h2>

                  <p className="text-gray-400 mt-2 text-sm">
                    Category: {mainCategory.title}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-4xl font-bold text-blue-400">
                      {count}
                    </span>
                    <span className="text-gray-500 text-sm">Posts</span>
                  </div>

                  <div className="mt-4 text-blue-400 text-sm opacity-0 group-hover:opacity-100 transition">
                    View Content →
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default DashboardHome;