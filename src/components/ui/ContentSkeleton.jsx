const ContentSkeleton = () => {
    return (
      <div className="min-h-screen bg-gray-950 text-white p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto animate-pulse">
  
          {/* Back button skeleton */}
          <div className="h-4 w-24 bg-gray-800 rounded mb-6"></div>
  
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
  
            {/* Title */}
            <div className="h-8 w-3/4 bg-gray-800 rounded mb-6"></div>
  
            {/* Meta */}
            <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mb-8">
              <div className="h-4 w-32 bg-gray-800 rounded"></div>
              <div className="h-4 w-24 bg-gray-800 rounded"></div>
            </div>
  
            {/* Image placeholder */}
            <div className="h-56 sm:h-72 bg-gray-800 rounded-lg mb-8"></div>
  
            {/* Content paragraphs */}
            <div className="space-y-4">
              <div className="h-4 bg-gray-800 rounded"></div>
              <div className="h-4 bg-gray-800 rounded"></div>
              <div className="h-4 bg-gray-800 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-800 rounded"></div>
              <div className="h-4 w-4/6 bg-gray-800 rounded"></div>
            </div>
  
            {/* Second paragraph */}
            <div className="space-y-4 mt-8">
              <div className="h-4 bg-gray-800 rounded"></div>
              <div className="h-4 bg-gray-800 rounded"></div>
              <div className="h-4 w-3/4 bg-gray-800 rounded"></div>
            </div>
  
          </div>
        </div>
      </div>
    );
  };
  
  export default ContentSkeleton;