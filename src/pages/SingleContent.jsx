import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { fetchSingleContent } from "../api/contentApi";

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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 text-white p-6">Loading...</div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-950 text-white p-6">
        Content not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 p-8">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-400 mb-6 hover:underline"
      >
        ← Back
      </button>

      <div className="max-w-3xl mx-auto bg-gray-900 p-6 rounded-xl border border-gray-800">
        <h1 className="text-3xl font-bold text-blue-400 mb-4">{data.title}</h1>

        <div className="text-sm text-gray-500 mb-6 flex justify-between">
          <span>Author: {data.author}</span>
          <span>
            {data.createdAt
              ? new Date(data.createdAt).toLocaleDateString()
              : ""}
          </span>
        </div>

        {/* <p className="leading-relaxed text-gray-300 whitespace-pre-line">
          {data.description}
        </p> */}
        <div className="prose prose-invert max-w-none">
          <p
            dangerouslySetInnerHTML={{
              __html: data?.description || "",
            }}
          />
        </div>

        {data.reference && (
          <div className="mt-6 text-sm text-gray-500">
            Reference: {data.reference}
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleContent;
