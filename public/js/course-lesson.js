define(['jquery','template','util'],function($,template,util) {

	// 设置 导航菜单选中高亮显示
    util.setMenu('/course/add');

    //获取课时ID
    var csId = util.qs('cs_id');
    //获取课时管理数据
    $.ajax({
        type : 'get',
        url : '/api/course/lesson',
        data : {cs_id : csId},
        dataType : 'json',
        success : function(data) {
            console.log(data);
            // 解析数据，渲染页面s
            var html = template('lessonTpl',data.result);
            $('#lessonInfo').html(html);


        }
    })

});