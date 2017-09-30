define(['jquery','template','util','bootstrap'],function($,template,util) {

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

            // 绑定添加课时点击事件
            $('#addLesson').click(function() {
                // 解析数据 ， 渲染页面
                var html = template('modalTpl',{operate : '添加课时'});
                $('#modalInfo').html(html);

                // 显示模态框
                $('#chapterModal').modal();

            });

            // 绑定编辑课时点击事件
            $('.editBtn').click(function() {
                //获取课时ID
                var ctId = $(this).attr('data-ctId')
                //console.log(ctId);
                // 根据课时ID查询课时数据信息
                $.ajax({
                    type : 'get',
                    url : '/api/course/chapter/edit',
                    data : {ct_id : ctId},
                    dataType : 'json',
                    success : function(data) {
                        console.log(data);
                        // 解析数据 ， 渲染页面
                        data.result.operate = '编辑课时';
                        var html = template('modalTpl',data.result);
                        $('#modalInfo').html(html);

                    }
                });

                // 显示模态框
                $('#chapterModal').modal();
            });
        }
    })

});