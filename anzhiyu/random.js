var posts=["2024/06/30/hello-world/","2024/06/30/text/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };