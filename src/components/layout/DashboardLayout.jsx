import { useState, useCallback } from "react";
import Sidebar from "./Sidebar";
import ContentArea from "./ContentArea";
import Header from "./Header";

const DashboardLayout = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect = useCallback((id) => {
    setSelected(id);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-950">
      {/* Top Navbar */}
      <Header />

      {/* Main Body */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar onSelect={handleSelect} active={selected} />
        <ContentArea selected={selected} />
      </div>
    </div>
  );
};

export default DashboardLayout;