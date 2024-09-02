import "./App.css";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  // Sample data
  const schedules = ["Schedule 1", "Schedule 2", "Schedule 3"];
  const articles = ["Article 1", "Article 2", "Article 3"];
  const provisions = ["Provision 1", "Provision 2", "Provision 3"];

  return (
    <>
      <Router>
        <div className="min-h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-indigo-200 flex flex-col">
          <div className="bg-slate-300">
            <Navbar />

            <Routes>
              {/* <div className="flex justify-around items-center h-screen px-4 space-x-6 mt-4">
                <Card title="Constitution Schedules" items={schedules} />
                <Card title="Constitution Articles" items={articles} />
                <Card title="Provisions & Clauses" items={provisions} />
              </div> */}

              <Route
                path="/"
                element={
                  <div className="flex justify-around items-center h-screen px-4 space-x-6 mt-4">
                    <Card title="Constitution Schedules" items={schedules} />
                    <Card title="Constitution Articles" items={articles} />
                    <Card title="Provisions & Clauses" items={provisions} />
                  </div>
                }
              />
              <Route
                path="/about"
                element={
                  <div className="flex justify-around items-center h-screen px-4 space-x-6 mt-4">
                    <Card title="Constitution Schedules" items={schedules} />
                    <Card title="Constitution Articles" items={articles} />
                    <Card title="Provisions & Clauses" items={provisions} />
                  </div>
                }
              />
              <Route
                path="/contact"
                element={
                  <div className="flex justify-around items-center h-screen px-4 space-x-6 mt-4">
                    <Card title="Constitution Schedules" items={schedules} />
                    <Card title="Constitution Articles" items={articles} />
                    <Card title="Provisions & Clauses" items={provisions} />
                  </div>
                }
              />
              <Route
                path="/Social"
                element={
                  <div className="flex justify-around items-center h-screen px-4 space-x-6 mt-4">
                    <Card title="Constitution Schedules" items={schedules} />
                    <Card title="Constitution Articles" items={articles} />
                    <Card title="Provisions & Clauses" items={provisions} />
                  </div>
                }
              />
              {/* <Route path="/about" element={hello world}/> */}
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
};
export default App;
