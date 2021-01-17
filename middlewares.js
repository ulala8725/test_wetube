import routes from "./routes";

export const localsMiddleware =  (req, res, next) => {
    // res.locals : 각 요청별로 한 라이프사이클 동안만 유요한 템플릿 전역 변수
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    }
    next(); // go to the next function
}