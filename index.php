<?php

    // 后端路由 （根据URL的不同响应不同的页面）

    //header('content-type:text/html; charset=utf8');

    // 必须能够通过 URL区分出用户想访问哪个页面
    //include('./views/main/index.html');

    //var_dump($_SERVER);
    //$path = $_SERVER['PATH_INFO'];
    //echo $path;

    //include('./views' . $path . '.html')

    // ------------------------------------------

    // 默认目录名称
    $dir = 'main';
    // 默认文件名称
    $filename = 'index';

    // 处理 路由（处理URL的路径）
    if(array_key_exists('PATH_INFO',$_SERVER)){
        // PATH_INFO 属性存在
        // 获取请求路径
        $path = $_SERVER['PATH_INFO'];  // /main/index
        //echo $path . '---';
        //var_dump($_SERVER);
        // 两个参数：参数1：字符串 ，参数2：从 索引1 开始截取 ，截取到 末尾
        // 三个参数：参数1：字符串   参数2：从 索引1 开始截取  参数3：截取 几个
        $str = substr($path,1);
        //echo $str;
        // 字符串分割， explode 和 js 中 split 方法很像
        $ret = explode('/',$str);
        //echo $ret;
        if(count($ret) == 2) {
            // 路由 有两层
            $dir = $ret[0];         // 覆盖目录
            $filename = $ret[1];    // 覆盖文件名称
        }else {
            // 其他情况（不是两层）全部跳转到登录页面
            $filename = 'login';
        }

    }
    // 嵌入 子页面
    include('./views/' . $dir . '/' . $filename . '.html');

?>