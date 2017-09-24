define(['jquery','template','util'],function($,template,util) {

    console.dir(location);
    var tcId = util.qs('tc_id');
    if(tcId) {
        //存在 编辑操作
        $.ajax({
            type : 'get',
            url : '/api/teacher/edit',
            data : {tc_id : tcId},
            dataType : 'json',
            success : function(data) {
                //console.log(data);
                // 解析数据 渲染页面
                var html = template('teacherTpl',data.result);
                $('#teacherInfo').html(html);

                // 教师信息 修改
                submitForm('/api/teacher/update');
                //submitForm('update');
            }
        })
    }else {
        //不存在 添加操作
        var html = template('teacherTpl',{});
        $('#teacherInfo').html(html);

        // 教师信息 添加
        submitForm('/api/teacher/add');
        //submitForm('add');
    }

    // 实现表单 修改、添加功能
    function submitForm(url) {
        $('#teacherBtn').click(function() {
            $.ajax({
                type: 'post',
                //url : '/api/teacher/' + url,
                url : url,
                data : $('#teacherForm').serialize(),
                dataType : 'json',
                success : function(data) {
                    if(data.code == 200) {
                        location.href = '/teacher/list';
                    }
                }
            })
        });
    }

});