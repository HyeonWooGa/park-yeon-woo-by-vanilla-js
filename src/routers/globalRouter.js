import express from "express";
import { handleHome } from "../controllers/globalController";

// 글로벌 라우터 생성
const globalRouter = express.Router();

// --- 아래에 글로벌 라우터 사용 페이지 렌더링 코드 작성

// 홈페이지 렌더링
globalRouter.get("/", handleHome);

export default globalRouter;
