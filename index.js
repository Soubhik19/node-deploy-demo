const express =require('express');
require('dotenv').config({ quiet: true });


const app = express();
const PORT = process.env.PORT || 4000;

const githubData ={
    "login": "Soubhik19",
    "id": 119947352,
    "node_id": "U_kgDOByZAWA",
    "avatar_url": "https://avatars.githubusercontent.com/u/119947352?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Soubhik19",
    "html_url": "https://github.com/Soubhik19",
    "followers_url": "https://api.github.com/users/Soubhik19/followers",
    "following_url": "https://api.github.com/users/Soubhik19/following{/other_user}",
    "gists_url": "https://api.github.com/users/Soubhik19/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Soubhik19/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Soubhik19/subscriptions",
    "organizations_url": "https://api.github.com/users/Soubhik19/orgs",
    "repos_url": "https://api.github.com/users/Soubhik19/repos",
    "events_url": "https://api.github.com/users/Soubhik19/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Soubhik19/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Soubhik Samanta",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": " Data science enthusiast | 3rd year B.Tech CSE student | Let's learn & grow together! 📚💻\r\n\r\n\r\n\r\n\r\n\r\n",
    "twitter_username": null,
    "public_repos": 18,
    "public_gists": 0,
    "followers": 1,
    "following": 7,
    "created_at": "2022-12-06T13:38:59Z",
    "updated_at": "2025-08-12T05:08:53Z"
  }

//route handeler 
app.get("/",(req,res)=>{
    res.send("hello from root route");
})


app.get("/about",(req,res)=>{
    res.send("hello from about section");
})
//github route
app.get("/github",(req,res)=>{
    res.json(githubData);
})


//server listening
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});