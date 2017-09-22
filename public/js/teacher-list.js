define(['jquery','template'],function($,template) {
    // ���ýӿ� ��ȡ���еĽ�ʦ����
    $.ajax({
        type : 'get',
        url : '/api/teacher',
        dataType : 'json',
        success : function(data) {
            //console.log(data);
            var html = template('teacherTpl',{list:data.result});
            $('#teacherInfo').html(html);
        }
    })
})