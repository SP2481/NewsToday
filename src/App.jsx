import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import SearchResults from "./components/Dash/SearchResults";
import DashBoard from "./components/DashBoard";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  const [Category, setCategory] = useState("india");
  const [results, setresults] = useState([]);

  useEffect(() => {
    AOS.init();
  }, []);

  const handlecategory = (category) => {
    setCategory(category);
  };

  const handlesearch = (search) => {
    setresults(search);
  };

  return (
    <main className="bg-black text-white h-screen">
      <Navbar getcategory={handlecategory} />
      <SearchBar getsearchres={handlesearch} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <DashBoard sendcategory={Category} />
            </>
          }
        />
        <Route path="/search" element={<SearchResults results={results} />} />
      </Routes>
    </main>
  );
}

export default App;
