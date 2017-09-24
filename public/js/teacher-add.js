define(['jquery','template','util','datepicker','language','validate','form'],function($,template,util) {

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

    // 实现 表单验证 修改、添加功能（插件方法）
    function submitForm(url) {
        $('#teacherForm').validate({
            // 禁掉默认 的 submit 提交功能
            sendForm : false,
            // 验证有效的 处理
            valid : function() {
                $(this).ajaxSubmit({
                    type : 'post',
                    url : url,
                    dataType : 'json',
                    success : function(data) {
                        if(data.code == 200) {
                            location.href = '/teacher/list';
                        }
                    }
                })
            },
            // 提示信息
            description : {
                tcName : {
                    required : '用户名不能为空'
                },
                tcPass : {
                    required : '密码不能为空',
                    pattern : '密码必须为六位数字'
                },
                tcJoinDate : {
                    required : '日期不能为空'
                }
            }
        });
    }


    // 实现 表单 修改、添加功能
   /* function submitForm(url) {
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
    }*/

});