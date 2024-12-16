const { newsrecordModel} = require('../models');

function getLatestNews(req, res, next)
{
    const limit = Number(req.query.limit) || 0;
    newsrecordModel.find()
    .sort({ createdAt: 'desc' })
    .limit(limit)
    .populate('authorId')
    .then(news => {
        res.status(200).json(news)
    })
    .catch(next);
}

function getNews(req, res, next)
{
    //const limit = Number(req.query.limit) || 0;
    newsrecordModel.find()
    .sort({ createdAt: 'desc' })
    //.limit(limit)
    .populate('authorId')
    .then(news => {
        res.status(200).json(news)
    })
    .catch(next);
}


function createNewsRecord(req, res, next)
{
    const {caption, abstract, content} = req.body;
    const {_id: userId} = req.user;

    newsrecordModel.create({caption, abstract, content, authorId:userId})
    .then(newRecord => res.status(200).json(newRecord))
    .catch(next);

}

function updateNewsRecord(req, res, next)
{
    const {newsId} = req.params;
    const {caption, abstract, content} = req.body;

    newsrecordModel.findOneAndUpdate({_id:newsId}, {caption, abstract, content, updatedAt:Date()}, {new:true})
    .then(updatedRecord => res.status(200).json(updatedRecord))
    .catch(next);

}

function getNewsDetails(req, res, next)
{
    const {id} = req.params;
    newsrecordModel.findById(id)
    .populate('authorId')
    .then(newsDetailedRecord => res.status(200).json(newsDetailedRecord))
    .catch(next);
}

function deleteRecord(req, res, next)
{
    const {newsId} = req.params;
    newsrecordModel.findOneAndDelete({_id:newsId})
    .then(deletedNews => res.status(200))
    .catch(next);
}

module.exports = {
    getLatestNews,
    createNewsRecord,
    getNews,
    getNewsDetails,
    updateNewsRecord,
    deleteRecord,
}