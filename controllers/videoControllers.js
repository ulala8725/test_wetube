export const home = (req, res) => res.render('home', { pageTitle : 'Home'}); 

export const search = (req, res) => {
    // const searchingBy = req.query.term (ES5)
    // "term"라는 name을 가진 form의 입력값을 
    // "searchingBy"라는 변수명으로 받는다.
    const {query: { term: searchingBy }} = req; // (ES6)
    res.render('search', { pageTitle : 'Search', searchingBy })
};

export const videos = (req, res) => res.render('videos', { pageTitle : 'Videos' });

export const upload = (req, res) => res.render('upload', { pageTitle : 'Upload' });

export const videoDetail = (req, res) => res.render('videoDetail', { pageTitle : 'Video Detail' });

export const editVideo = (req, res) => res.render('editVideo', { pageTitle : 'Edit Video' });

export const deleteVideo = (req, res) => res.render('deleteVideo', { pageTitle : 'Delete Video' });
