import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<h1 className="text-2xl text-center">Home Page</h1>} />
      </Routes>
  );
}

export default App;
