var express = require('express');
var router = express.Router(); // This is necessary to use router

router.get('/', function(req, res) {
    res.sendFile(__dirname + '/' + 'route.html');
});

router.get('/youtube', function(req, res) {
    res.redirect('https://www.youtube.com/user/yourusername'); 
});

router.get('/blog', function(req, res) {
    res.redirect('https://yourblog.com'); 
});

router.get('/instagram', function(req, res) {
    res.redirect('https://www.instagram.com/vjtechnowizard'); 
});

router.post('/posts', function(req, res) {
    const newPost = req.body; 
    posts.push(newPost);
    res.status(201).send(newPost); 
});

router.put('/posts/:id', function(req, res) {
    const postId = req.params.id; 
    if (postId >= 0 && postId < posts.length) {
        posts[postId] = req.body;
        res.send(posts[postId]); 
    } else {
        res.status(404).send('Post not found');
    }
});

router.delete('/posts/:id', function(req, res) {
    const postId = req.params.id; 
    if (postId >= 0 && postId < posts.length) {
        const deletedPost = posts.splice(postId, 1); 
        res.send(deletedPost); 
    } else {
        res.status(404).send('Post not found');
    }
});

module.exports = router;
