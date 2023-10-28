import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useState } from "react";
import { HomePage } from "./pages/HomePage.jsx";
import { GuessNumberPage } from "./pages/GuessNumberPage.jsx";
import { ChallengePage } from "./pages/ChallengePage.jsx";
import { AuthContext } from "./context/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/game",
    element: <GuessNumberPage />,
  },
  {
    path: "/challenge",
    element: <ChallengePage />,
  },
]);

const useAuthContext = () => {
  const [username, setUserName] = useState("");
  const login = () => setUserName("fronce");
  const logout = () => setUserName("");
  return { username, login, logout };
};

function App() {
  const authContextValue = useAuthContext();
  return (
    <AuthContext.Provider value={authContextValue}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;
