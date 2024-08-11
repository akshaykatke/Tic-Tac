import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom'; // Added import for Router
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router> {/* Added Router here */}
      <App />
    </Router>
  </StrictMode>
);
