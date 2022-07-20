import express from "express";

// 포트 번호 지정
const PORT = 4000;

// 변수에 서버 할당
const app = express();

// 서버 활성화 및 서버 활성화시 콜백함수 호출
app.listen(4000, handleListening);

// GET 요청(request)에 반응(response)
app.get("/", handleGetHome);

// 아래에 콜백함수 함수선언식으로 정의, 호이스팅 이용

// 서버 활성화시 터미널에 메세지 및 URL 출력
function handleListening() {
  console.log("Server listening on port 4000 ✅");
  console.log(`URL : http://localhost:${PORT}`);
}

// "/" 페이지 요청시 반응
function handleGetHome(req, res) {
  console.log("GET /");
  return res.send("Home Page");
}
