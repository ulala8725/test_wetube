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

export const editVideo = (req, res) => res.render('editVideo', { pageTitle : 'Edit Video' });

export const deleteVideo = (req, res) => res.render('deleteVideo', { pageTitle : 'Delete Video' });

export const videoDetail = (req, res) => res.render('videoDetail', { pageTitle : 'Video Detail' });
