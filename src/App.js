import "./App.css";
import Menu from "./components/Menu";
import AppBar from "./components/AppBar";
import Banner from "./components/Banner";
import PicoftheWeek from "./components/PicoftheWeek";
import Comments from "./components/Comments";
function App() {
  return (
    <>
      <AppBar />
      <Banner />
      <Menu />
      <PicoftheWeek />
      <Comments />
      <div className="text-center text-danger my-3 small">
        Copyright 2022-2023
      </div>
    </>
  );
}

export default App;
