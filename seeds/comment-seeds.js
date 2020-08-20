const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Great Job!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Awesome Work!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Amazing! Thank you"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Great news"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Fantastic"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Wonderful"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Love it"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Best ever"
    }
];






const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;