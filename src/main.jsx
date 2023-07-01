import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import dotenv from "dotenv"; //이거 추가 안해주면 env안됨 ㅠㅠ -> vite는 필요없음

// dotenv.config(); //환경변수 로드 ->vite에서 필요없어
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>,
);
