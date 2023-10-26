muban.mxpro.二级.desc = '.module-info-item:eq(4)&&Text;;;.module-info-item-content:eq(1)&&Text;.module-info-item-content:eq(0)&&Text';
muban.mxpro.二级.tabs = '#y-playList&&.module-tab-item';
var rule = {
    title:'NyaFun',
    模板:'mxpro',
    host:'https://www.nyafun.net',
    // url:'/show/fyclass/page/fypage.html',
    url:'/show/fyclassfyfilter.html',
    searchUrl: '/search/wd/**/page/fypage.html',
    filterable:1,//是否启用分类筛选,
    filter_url:'{{fl.area}}{{fl.by}}{{fl.class}}{{fl.lang}}{{fl.letter}}/page/fypage{{fl.year}}',
    filter: {
        "2":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"奇幻","v":"/class/奇幻"},{"n":"战斗","v":"/class/战斗"},{"n":"冒险","v":"/class/冒险"},{"n":"热血","v":"/class/热血"},{"n":"日常","v":"/class/日常"},{"n":"搞笑","v":"/class/搞笑"},{"n":"后宫","v":"/class/后宫"},{"n":"异世界","v":"/class/异世界"},{"n":"穿越","v":"/class/穿越"},{"n":"治愈","v":"/class/治愈"},{"n":"爱情","v":"/class/爱情"},{"n":"狗粮","v":"/class/狗粮"},{"n":"小说改","v":"/class/小说改"},{"n":"漫画改","v":"/class/漫画改"},{"n":"游戏改","v":"/class/游戏改"},{"n":"偶像","v":"/class/偶像"