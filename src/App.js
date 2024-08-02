import "./index.css";
import Bubble from "./components/Bubble";
import Link from "./components/Link";
import one from "./imgs/one.jpg";
function App() {
  return (
    <div className="App">
      <header>
        <h1>CONVEX.</h1>

        <div className="links">
          <Link text="works" color="green" />
          <Link text="exhibition" color="blue" />
          <Link text="contact" color="pink" />
        </div>
      </header>

      {/* <section>
        <svg
          // width="1094"
          // height="2062"
          viewBox="0 0 1094 2062"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M570.438 461.154L13.6874 924.684L11.1921 0.638221L570.438 461.154Z"
            fill="#0047FF"
          />
          <path
            d="M547.602 1502.72L1011.13 2059.47L87.0855 2061.97L547.602 1502.72Z"
            fill="#0047FF"
          />
          <path
            d="M601.118 27.5698C665.334 27.3964 728.956 39.873 788.35 64.2873C847.744 88.7015 901.748 124.575 947.279 169.86C992.809 215.145 1028.97 268.955 1053.71 328.217C1078.44 387.478 1091.26 451.031 1091.44 515.248C1091.61 579.464 1079.13 643.085 1054.72 702.48C1030.3 761.874 994.431 815.878 949.146 861.408C903.861 906.939 850.052 943.103 790.79 967.838C731.528 992.573 667.975 1005.39 603.759 1005.57L602.438 516.568L601.118 27.5698Z"
            fill="#3BB848"
          />
          <path
            d="M0.446757 1261.2C0.129097 1143.56 95.2346 1047.94 212.871 1047.62L879.868 1045.82C997.505 1045.5 1093.13 1140.61 1093.44 1258.25V1258.25C1093.76 1375.88 998.655 1471.5 881.019 1471.82L214.021 1473.62C96.3849 1473.94 0.764418 1378.83 0.446757 1261.2V1261.2Z"
            fill="#FFABDD"
          />
        </svg>
        <text>ART reimagined</text>
      </section> */}
      <div className="bubbleContainer">
        {/* <Bubble />
        <Bubble delay="2s" />
        <Bubble delay="1s" />
        <Bubble delay="2s" />
        <Bubble delay="3s" />
        <Bubble delay="1s" />
        <Bubble delay="2s" />
        <Bubble delay="5s" />
        <Bubble delay="1s" />
        <Bubble delay="4s" />
        <Bubble delay="3s" />
        <Bubble delay="1s" />
        <Bubble delay="2s" />
        <Bubble delay="5s" />
        <Bubble delay="1s" />
        <Bubble delay="4s" />
        <Bubble delay="5s" />
        <Bubble delay="1s" />
        <Bubble delay="4s" />
        <Bubble delay="2s" /> */}
        <img src={one} alt="" />

        <div className="text">
          <h1>ART /</h1>
          <h1 style={{ color: "yellow" }}>re-imagined</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
