$(function(){var t=$("#user"),e=$("#phone"),s=$("#pwd"),n=$("#test");function l(t){var e=$(t),s=$(t+"-validation-message");return""===e.val()?(s.html("不能为空!"),void e.select()):(s.html(""),1)}function a(t){var e=$(t),s=$(t+"-validation-message");return!/[^\u4E00-\u9FA5\w]/.test(e.val())&&/\D/.test(e.val())?(s.html(""),1):(s.html("用户名仅支持中英文，数字和下划线且不能为纯数字!"),void e.select())}function u(t){var e=$(t),s=$(t+"-validation-message");return/^1[3,4,5,7,8][0-9]{9}$/.test(e.val())?(s.html(""),1):(s.html("手机号格式不正确"),void e.select())}function r(t){var e=$(t),s=$(t+"-validation-message");return/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,14}$/.test(e.val())&&/^[^\u4E00-\u9FA5\uF900-\uFA2D\u0020]{8,14}$/.test(e.val())?(s.html(""),1):(s.html("密码设置不符合要求"),void e.select())}function i(t){var e=$(t),s=$(t+"-validation-message");return/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4}$/.test(e.val())?(s.html(""),1):(s.html("验证码错误"),void e.select())}$testnumber=$("#testnumber"),$register=$("#register"),$register.click(function(){l("#user")&&l("#phone")&&l("#pwd")&&l("#test")&&a("#user")&&u("#phone")&&r("#pwd")&&i("#test")&&alert("注册成功")}),t.focusout(function(){a("#user")||t.select()}),e.focusout(function(){u("#phone")||e.select()}),s.focusout(function(){r("#pwd")||s.select()}),n.focusout(function(){i("#test")||n.select()}),$testnumber.click(function(){var t,e=59,s=$("#test-validation-message");t=setInterval(function(){0===--e?(clearInterval(t),$testnumber.removeAttr("disabled"),$testnumber.val("获取验证码"),s.html("请求超时，请稍后再试")):($testnumber.attr("disabled","disabled"),$testnumber.val("重新获取("+e+"s)"),s.html(""))},1e3)})});