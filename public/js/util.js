define(['jquery'],function($) {
    // 工具：获取 URL参数 中的指定的参数值
    return {
        qs : function(key) {
            //console.dir(location);
            // 获取 URL参数 中的指定的参数值
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
                        return false;  //终止 each循环
                    }
                });
            }
            return result;
        }
    }
});