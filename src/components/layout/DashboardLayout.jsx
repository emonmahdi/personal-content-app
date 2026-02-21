import { useState, useCallback } from "react";
import Sidebar from "./Sidebar";
import ContentArea from "./ContentArea";

const DashboardLayout = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect = useCallback((id) => {
    setSelected(id);
  }, []);

  return (
    <div className="flex h-screen bg-gray-950">
      <Sidebar onSelect={handleSelect} active={selected} />
      <ContentArea selected={selected} />
    </div>
  );
};

export default DashboardLayout;