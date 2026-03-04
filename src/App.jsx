import { Outlet } from "react-router";
import { ThemeProvider } from "./context/ThemeContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ThemeProvider>
      {/* Toast container */}
      <Toaster
        position="top-right"
        containerStyle={{
          zIndex: 999999, // 🔥 VERY IMPORTANT
        }}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#111827",
            color: "#fff",
            border: "1px solid #3b82f6",
          },
        }}
      />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
