define(['jquery','template','util','ckeditor','validate','form','state'],function($,template,util,CKEDITOR) {

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
            //console.log(data);
            //解析数据，渲染页面
            if (flag) {
                data.result.operate = '课程编辑';
            } else {
                data.result.operate = '课程添加';
            }

            var html = template('basicTpl', data.result);
            $('#basicInfo').html(html);

            //处理 二级分类的下拉联动
            $('#firstType').change(function () {
                // 获取一级分类的ID
                var pid = $(this).val();
                // 根据一级分类的ID获取二级分类的数据
                $.ajax({
                    type: 'get',
                    url: '/api/category/child',
                    data: {cg_id: pid},
                    dataType: 'json',
                    success: function (data) {
                        console.log(data);
                        // 拼接二级分类的下拉数据
                        var tpl = '<option value="">请选择二级分类</option>'
                            + '{{each list}}'
                            + '<option value="{{$value.cg_id}}">{{$value.cg_name}}</option>'
                            + '{{/each}}';

                        var html = template.render(tpl, {list: data.result});
                        $('#secondType').html(html);
                    }
                })
            });

            // 处理富文本
            CKEDITOR.replace('editor',{
                toolbarGroups : [
                    { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
                    { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] }
                ]
            });

            // 处理表单提交
            $('#basicForm').validate({
                sendForm : false,
                valid : function() {
                    // 同步富文本信息   instance ：实例
                    for(var instance in CKEDITOR.instances) {
                        CKEDITOR.instances[instance].updateElement();
                    }
                    //表单提交
                    $(this).ajaxSubmit({
                        type : 'post',
                        url : '/api/course/update/basic',
                        data : {cs_id : csId},
                        dataType : 'json',
                        success : function(data) {
                            //console.log(data);
                            if(data.code == 200) {
                                location.href = '/course/picture?cs_id=' + data.result.cs_id;
                            }
                        }
                    })
                }
            });
        }
    });

});