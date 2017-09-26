define(['jquery','template','util','form','validate'],function($,template,util) {

    // 设置 导航菜单选中高亮显示
    util.setMenu(location.pathname);

    // 绑定表单提交单击事件
    $('#courseBtn').click(function() {
        //创建课程 提交功能
        $('#courseForm').ajaxSubmit({
            type : 'post',
            url : '/api/chapter/create',
            dataType : 'json',
            success : function(data) {
                console.log(data);
                if(data.code == 200) {
                    // 完成添加 ，跳转到下一步
                    location.href = '/course/basic?cs_id=' + data.result.cs_id;
                }
            }
        });
    });


});