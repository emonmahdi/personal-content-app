const DashboardLoader = () => {
    return (
      <div className="flex items-center justify-center min-h-[60vh] w-full">
        <div className="relative flex items-center justify-center">
  
          {/* Outer glow ring */}
          <div className="absolute w-24 h-24 rounded-full border-4 border-blue-500/20"></div>
  
          {/* Animated spinning ring */}
          <div className="w-24 h-24 border-4 border-transparent border-t-blue-400 border-r-blue-500 rounded-full animate-spin"></div>
  
          {/* Center pulse dot */}
          <div className="absolute w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
  
        </div>
      </div>
    );
  };
  
  export default DashboardLoader;