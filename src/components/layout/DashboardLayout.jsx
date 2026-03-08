// import { useState, useCallback } from "react";
// import Sidebar from "./Sidebar";
// import ContentArea from "./ContentArea";
// import Header from "./Header";

// const DashboardLayout = () => {
//   const [selected, setSelected] = useState(null);

//   const handleSelect = useCallback((id) => {
//     setSelected(id);
//   }, []);

//   return (
//     <div className="flex flex-col h-screen bg-gray-950">
//       {/* Top Navbar */}
//       <Header />

//       {/* Main Body */}
//       <div className="flex flex-1 overflow-hidden">
//         <Sidebar onSelect={handleSelect} active={selected} />
//         <ContentArea selected={selected} />
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

// import { useParams } from "react-router";
// import Sidebar from "./Sidebar";
// import ContentArea from "./ContentArea";
// import Header from "./Header";
// import DashboardHome from "./DashboardHome";

// const DashboardLayout = () => {
//   const { category } = useParams();

//   return (
//     <div className="flex flex-col h-screen bg-gray-950">
//       <Header />

//       <div className="flex flex-1 overflow-hidden">
//         <Sidebar active={category} />

//         {/* Show home dashboard if no category selected */}
//         {!category ? <DashboardHome /> : <ContentArea selected={category} />}
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

import { useState } from "react";
import { useParams } from "react-router";
import Sidebar from "./Sidebar";
import ContentArea from "./ContentArea";
import Header from "./Header";
import DashboardHome from "./DashboardHome";

const DashboardLayout = () => {
  const { category } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-gray-950">
      <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

        {!category ? <DashboardHome /> : <ContentArea selected={category} />}
      </div>
    </div>
  );
};

export default DashboardLayout;