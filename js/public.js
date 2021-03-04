const ctx = window.location.hostname;
const imagePrefix = "http://" + ctx + ":8000/images/";
const token = "adminToken";

// // 登录页面 不限定
// if (!window.location.href.includes("login.html")) {
//     // 验证是否登录， 如果没有跳到登录页面
//     if (localStorage.getItem(token) === "" || localStorage.getItem(token) == null) {
//         alert("请登录！");
//         top.location.href = ctx + "/page/login.html";
//     } else {
//         let xhr = new XMLHttpRequest();
//         xhr.open("get", "/ping", true);
//         xhr.setRequestHeader("Authorization", localStorage.getItem(token));
//         xhr.send();
//         console.log("444" + xhr.responseText);
//         console.log(xhr.responseText);
//         // $.ajax({
//         //     headers: {
//         //         Authorization: localStorage.getItem(token)
//         //     },
//         //     url: '/ping',
//         //     type: "get",
//         //     success: function (data) {
//         //         if (data.code === 666) {
//         //             // 说明没有登录或者token过期
//         //             alert("请登录！");
//         //             localStorage.removeItem(token);
//         //             top.location.href = "http://" + ctx + "/page/login.html";
//         //         }
//         //     }
//         // });
//     }
// }

