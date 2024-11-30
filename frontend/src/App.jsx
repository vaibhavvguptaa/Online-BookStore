import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navBar.jsx";
import Footer from "./components/Footer.jsx";
import { AuthProvide } from "./context/AuthContext.jsx";

function App() {
  return (
    <>
      <AuthProvide>
        <NavBar />
        <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary">
          <Outlet />
        </main>
        <Footer />
      </AuthProvide>
    </>
  );
}

export default App;
