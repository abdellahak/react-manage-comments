import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Comments from "./components/Comments.jsx";
import AddComment from "./components/AddComment.jsx";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<h1>Hello</h1>}></Route>
          <Route path="/comments" element={<Comments/>}></Route>
          <Route path="/comments/add" element={<AddComment/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
