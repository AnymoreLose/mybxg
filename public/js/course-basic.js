define(['jquery','template','util'],function($,template,util) {

    // 设置 导航菜单选中高亮显示
    util.setMenu('/course/add');

    //获取课程ID
    var csId = util.qs('cs_id');
    //获取操作标志位
    var flag = util.qs('flag');

    // 根据课程ID查询课程相关信息
    $.ajax({
        type : 'get',
        url : '/api/course/basic',
        data : {cs_id : csId},
        success : function(data) {
            console.log(data);
            //解析数据，渲染页面
            if(flag) {
                data.result.operate = '课程编辑';
            }else {
                data.result.operate = '课程添加';
            }

            var html = template('basicTpl',data.result);
            $('#basicInfo').html(html);
        }

    })

});