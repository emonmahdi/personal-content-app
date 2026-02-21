/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { fetchContentByCategory } from "../../api/contentApi";
import Card from "../ui/Card";

const ContentArea = ({ selected }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selected) return;

    setLoading(true);

    fetchContentByCategory(selected)
      .then((res) => setData(res))
      .finally(() => setLoading(false));
  }, [selected]);

  return (
    <div className="flex-1 p-8 bg-gray-950 text-gray-200 overflow-y-auto">
      {!selected && <p>Select a category.</p>}

      {loading && <p className="text-blue-400">Loading...</p>}

      {!loading && data.length === 0 && selected && (
        <p>No content found.</p>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ContentArea;