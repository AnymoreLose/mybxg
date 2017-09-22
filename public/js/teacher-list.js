define(['jquery','template','bootstrap'],function($,template) {
    // 调用接口 获取所有的讲师数据
    $.ajax({
        type : 'get',
        url : '/api/teacher',
        dataType : 'json',
        success : function(data) {
            //console.log(data);
            var html = template('teacherTpl',{list:data.result});
            $('#teacherInfo').html(html);

            // 启用注销 功能
            $('.eod').click(function() {
                //console.log(123);
                var that = this;
                // 获取 按钮的父元素
                var td = $(this).closest('td');
                var tcId = td.attr('data-tcId');
                var status = td.attr('data-status');
                //console.log(tcId,status);
                $.ajax({
                    type : 'post',
                    url : '/api/teacher/handle',
                    data : {tc_id : tcId,tc_status : status},
                    dataType : 'json',
                    success : function(data) {
                        //console.log(data);
                        // 实时更新 状态
                        if(data.code == 200) {
                            td.attr('data-status',data.result.tc_status);

                            if(data.result.tc_status == 0) {
                                $(that).text('注 销');
                            }else {
                                $(that).text('启 用');
                            }
                        }
                    }

                })
            });

            // 查看讲师 功能
            $('.preview').click(function() {

                // 获取 按钮的父元素   获取 ID
                var td = $(this).closest('td');
                var tcId = td.attr('data-tcId');
                $.ajax({
                    type : 'get',
                    url : '/api/teacher/view',
                    data : {tc_id : tcId},
                    dataType : 'json',
                    success : function(data) {
                        console.log(data);
                        // 模板渲染
                        var html = template('modalTpl',data.result);
                        console.log(html);
                        $('#modalInfo').html(html);
                        $('#teacherModal').modal();
                    }
                })
            });


        }
    });

});