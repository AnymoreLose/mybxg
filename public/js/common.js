define(['jquery','cookie'],function($) {

	//NProgress.start();
	//NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

//实现退出功能
	$('#logoutBtn').click(function() {
		$.ajax({
			type: 'post',
			url: '/api/logOUt',
			dataType: 'json',
			success: function(data) {
				console.log(data);
				if(data.code == 200) {
					// 退出成功，跳转到登录页
					location.href = '/main/login';
					//location.href = '/login';
				}
			}
		});
	});

// 检测用户是否登录 （只是为了 演示 一下cookieID 的作用）
// 用户登录 才能进入主页面
	var flag = $.cookie('PHPSESSID');
//console.log(flag);
	if(!flag && location.pathname != '/main/login') {
		// 如果 cookie 不存在，跳传到登录页
		location.href = '/main/login';
	}

// 设置用户头像信息
//console.log($.cookie('loginInfo'));
	var loginInfo = $.cookie('loginInfo');
// 判断 有信息 ，才能转JSON格式，否则会报错
	loginInfo = loginInfo && JSON.parse(loginInfo);
// 设置 头像信息
	$('.aside > .profile img').attr('src',loginInfo.tc_avatar);
	$('.aside > .profile h4').html(loginInfo.tc_name);

});

