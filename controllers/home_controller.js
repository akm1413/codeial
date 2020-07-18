const Post = require('../models/post');
const User = require('../models/user');

// module.exports.actionName = function(req, res);

//module.exports.home = function(req, res){
    // console.log(req.cookies);
    // res.cookie('user_id', 25);

    //showing all the posts
    // Post.find({}, function(err, posts){
    //     return res.render('home', {
    //         title: "Codeial | Home",
    //         posts:  posts
    //     });
    // });


    module.exports.home = async function(req, res){
        try{
             // populate the user of each post
            let posts = await Post.find({})
            .sort('-createdAt') //sorting the posts in reverse chronological order i.e the latest post is at top
            .populate('user')
            .populate({
                path: 'comments',
                populate: {
                    path: 'user'
                }
            });
        
            let users = await User.find({});
    
            return res.render('home', {
                title: "Codeial | Home",
                posts:  posts,
                all_users: users
            });
    
        }
        catch(err)
        {
            console.log('Error', err);
            return;
        }
       
    }
