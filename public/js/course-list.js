define(['jquery','template','util'],function($,template,util) {

    // 设置 导航菜单选中高亮显示
    util.setMenu(location.pathname);
    console.log(location.pathname);

    //获取课程列表信息
    $.ajax({
        type : 'get',
        url : '/api/course',
        dataType : 'json',
        success : function(data) {
            console.log(data);
            //解析数据。渲染页面
            var html = template('courseTpl',{list:data.result});
            $('#courseInfo').html(html);
        }
    })

});