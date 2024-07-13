var posts=["2024/07/12/Docker常用指令/","2024/07/13/Redis使用简记/","2024/07/02/butterfly自定义页面全流程分析，一通百通/","2024/07/02/butterfly重建日记/","2024/06/30/hello-world/","2024/06/30/text/","2024/07/13/使用python获取歌单音乐/","2024/07/13/【转载】思维与创造/","2024/07/11/【转载】魔女日记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };