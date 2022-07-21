import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";

// 포트 번호 지정
const PORT = 4000;

// 변수에 서버 할당
const app = express();

// 글로벌 미들웨어로 morgan (logger) 사용
const logger = morgan("dev");

// 서버 활성화 및 서버 활성화시 콜백함수 호출
app.listen(4000, handleListening);

// 뷰엔진 Pug로 설정 및 뷰 폴더 탐색 주소 설정
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

// --- 아래에 글로벌 미들웨어 사용

// method, url, status, 반응시간 등 확인 미들웨어
app.use(logger);

// 라우터에 URL 할당 미들웨어
app.use("/", globalRouter);

// --- 아래에 콜백함수 함수선언식으로 정의, 호이스팅 이용

// 서버 활성화시 터미널에 메세지 및 URL 출력
function handleListening() {
  console.log("Server listening on port 4000 ✅");
  console.log(`URL : http://localhost:${PORT}`);
}
