define(['jquery'],function($) {
    // ���ߣ���ȡ URL���� �е�ָ���Ĳ���ֵ
    return {
        qs : function(key) {
            //console.dir(location);
            // ��ȡ URL���� �е�ָ���Ĳ���ֵ
            var param = location.search.substr(1);
            var result = null;
            if(param) {
                var ps = param.split('&');
                //console.log(ps);
                $.each(ps,function(index,item) {
                    //console.log(item)
                    var kv = item.split('=');
                    if(kv[0] == key) {
                        result = kv[1];
                        return false;  //��ֹ eachѭ��
                    }
                });
            }
            return result;
        }
    }
});