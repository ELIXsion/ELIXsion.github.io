var posts=["2024/07/02/butterfly重建日记/","2024/07/02/butterfly自定义页面全流程分析，一通百通/","2024/06/30/hello-world/","2024/07/11/【转载】魔女日记/","2024/06/30/text/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };