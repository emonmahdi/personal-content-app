import { Outlet } from "react-router";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
