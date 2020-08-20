const { Post } = require('../models');

const postData = [
    {
        title: "LOREM IPSUM ",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        user_id: 1
    },
    {
        title: "Consequat interdum varius sit amet!",
        post_content: "Tortor condimentum lacinia quis vel eros donec ac odio. Enim neque volutpat ac tincidunt vitae semper quis lectus.",
        user_id: 2
    },
    {
        title: "Diam vulputate ut pharetra sit amet aliquam id",
        post_content: "Id velit ut tortor pretium viverra suspendisse. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.",
        user_id: 3
    },
    {
        title: "Dictum non consectetur a erat nam at lectus urna. Eu nisl nunc mi ipsum!",
        post_content: "Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Leo vel orci porta non.",
        user_id: 5
    },
    {
        title: "Leo duis ut diam quam nulla",
        post_content: "Orci eu lobortis elementum nibh tellus molestie nunc non. Orci dapibus ultrices in iaculis nunc sed augue lacus",
        user_id: 5
    }
];




const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;