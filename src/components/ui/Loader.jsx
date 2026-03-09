const Loader = ({ text = "Loading content..." }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full py-16">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      {/* Text */}
      <p className="mt-4 text-gray-400 text-sm tracking-wide">{text}</p>
    </div>
  );
};

export default Loader;
