import multer from "multer";
import routes from "./routes";

const multerVideo = multer({dest: "uploads/videos/"});

export const localsMiddleware =  (req, res, next) => {
    // res.locals : 각 요청별로 한 라이프사이클 동안만 유요한 템플릿 전역 변수
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.user = req.user || null;
    next(); // go to the next function
}

// single: only one file
export const uploadVideo = multerVideo.single('videoFile');