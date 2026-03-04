/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { fetchContentByCategory } from "../../api/contentApi";
import { Link } from "react-router";

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

  useEffect(() => {
    console.log("Selected Category:", selected);
  }, [selected]);

  return (
    <div className="flex-1 p-6 overflow-y-auto text-gray-200">
      {!selected && (
        <div className="text-gray-500 text-lg">
          Select a category to view content
        </div>
      )}

      {loading && <div>Loading...</div>}

      {!loading && selected && data?.length === 0 && (
        <div>No content found for this category.</div>
      )}

      <div className="grid gap-4">
        {data?.map((item) => (
          <div
            key={item._id}
            className="bg-gray-900 p-4 rounded-lg border border-gray-800"
          >
            <h2 className="text-xl font-semibold text-blue-400">
              {item.title}
            </h2>

            <p className="text-gray-400 mt-2">
              {item.description?.length > 120
                ? item.description.substring(0, 120) + "..."
                : item.description}
            </p>

            <div className="text-sm text-gray-500 mt-3 flex justify-between">
              <span>Author: {item.author}</span>
              <span>
                {item.createdAt
                  ? new Date(item.createdAt).toLocaleDateString()
                  : ""}
              </span>
            </div>

            {item.reference && (
              <div className="text-xs text-gray-600 mt-2">
                Ref: {item.reference}
              </div>
            )}
            <Link to={`/content/${item._id}`}>
              <button className="mt-3 text-blue-400 hover:underline cursor-pointer">
                Read More →
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentArea;
