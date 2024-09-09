/* eslint-disable no-unused-expressions */
import Masonry from "./components/Masonry";
import Timeline from "./components/Timeline";

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
    <>
      <button onClick={chageDirection}>Change language</button>
      <div>
        <Timeline />
      </div>
      <div className="container">
        <Masonry />
      </div>
    </>
  );
}

export default App;
