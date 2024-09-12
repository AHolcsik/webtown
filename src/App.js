import Masonry from "./components/Masonry";
import Timeline from "./components/Timeline";
import Button from "react-bootstrap/Button";

function App() {
  const setRTL = () => {
    document.querySelector("html").setAttribute("dir", "rtl");
    document.querySelector("html").setAttribute("lang", "ar");
  };

  const setLTR = () => {
    document.querySelector("html").setAttribute("dir", "ltr");
    document.querySelector("html").setAttribute("lang", "eng");
  };

  const chageDirection = () => {
    if (document.querySelector("html").getAttribute("dir") === "rtl") setLTR();
    else setRTL();
  };

  return (
    <div className="container mt-4">
      <div className="header">
        <Button
          onClick={chageDirection}
          className="btn btn-outline-secondary mb-5"
        >
          Change language
        </Button>
        <div className="title">
          <h1>Financial sector development timeline</h1>
          <a href="#">View all</a>
        </div>

        <hr />
      </div>
      <div className="mb-5">
        <Timeline />
      </div>
      <Masonry />
    </div>
  );
}

export default App;
