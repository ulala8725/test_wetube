import routes from "../routes";
import Video from "../models/Video";

// async :  
// await : valid in async method
// try catch : do catch error to prevent server from going down
export const home = async(req, res) => {
    try {
        const videoDatas = await Video.find({}); // wait for finishing looking for DB
        res.render('home', { pageTitle : 'Home', videoDatas}); 
    } catch(error) {
        console.log(error);
        res.render('home', { pageTitle : 'Home', videoDatas: {} }); 
    }
}

export const search = (req, res) => {
    const {
        query: { term: searchingBy }
    } = req;
    res.render('search', { pageTitle : 'Search', searchingBy, videoDatas })
};

export const getUpload = (req, res) => res.render('upload', { pageTitle : 'Upload' });
export const postUpload = async(req, res) => {
    const { 
        body : { title, description },
        file : { path }
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    })
    console.log(newVideo)
    res.redirect(routes.videoDetail(newVideo.id))
    //res.render('upload', { pageTitle : 'Upload' });
}

export const getEditVideo = async(req, res) => {
    const {
        params: {id}
    } = req; // get parameter from the url

    try {
        const video = await Video.findById(id);
        res.render('editVideo', { pageTitle : `Edit ${video.title}`, video });
    } catch(error) {
        res.redirect(routes.home);
    }
}
export const postEditVideo = async(req, res) => {
    const {
        params: {id},
        body: {title, description}
    } = req; // get parameter from the url

    try {
        await Video.findOneAndUpdate({_id: id}, {title, description});
        res.redirect(routes.videoDetail(id));
    } catch(error) {
        res.redirect(routes.home);
    }
};

export const videoDetail = async(req, res) => {
    const {
        params: {id}
    } = req;
    
    try {
        // mongoDB: SELECT * FROM Vidoe WHERE ID = {id}
        const video = await Video.findById(id);
        res.render('videoDetail', { pageTitle : video.title, video }); // video:video
    } catch(error) {
        console.log(error);
        res.redirect(routes.home);
    }
}

export const deleteVideo = async(req, res) => {
    const {
        params: {id}
    } = req;
    try {
        await Video.findOneAndRemove({_id:id});
    } catch(error) {
        console.log(error)
    }
    res.redirect(routes.home);
}
