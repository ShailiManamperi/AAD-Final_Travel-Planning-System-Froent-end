// export class Login {
//     constructor() {
//         $("#btnlogin").click((event) => {
//             event.preventDefault(); // Prevents the default behavior (e.g., page reload)
//             this.loginAction();
//         });
//     }
//
//     loginAction() {
//         var loginreq = {
//             "email": $('#loginemail').val(),
//             "password": $('#loginpassword').val()
//         };
//         console.log(loginreq);
//         $.ajax({
//             url: "http://localhost:8080/api/v1/login",
//             method: "POST",
//             contentType: "application/json",
//             data: JSON.stringify(loginreq),
//             success: function (resp) {
//                 console.log(resp);
//                 var type=resp.role;
//
//                 //saveKey(type,token)
//                 console.log(resp.code)
//                 ob.loginFunction(type);
//                 alertify.success('Login Success');
//
//             },
//             error: function (jqXHR, textStatus, error) {
//                 console.log(e.responseJSON.message)
//                 alertify.error('Login Error');
//             }
//         });
//
//
//     };
//     loginFunction(data){
//         let ua = $.inArray('User_Admin', data);
//         let uh = $.inArray('Hotel_Admin', data);
//         let uv = $.inArray('Vehicle_Admin', data);
//         let ug = $.inArray('Guide_Admin', data);
//         let utp = $.inArray('TP_Admin', data);
//         console.log(data);
//     }
//
//
// }
//
// var ob = new Login();
//


import {saveKey} from "../token/tokenController.js";

export class Login{
    constructor() {
        $("#btnLogin").click(e=>{
            e.preventDefault();
            this.loginAction();
        });
    }

    loginAction(){
        $('.m-1').addClass('invisible');
        $('.loader').removeClass('invisible');
        var loginreq = {
            "email": $('#loginemail').val(),
            "password": $('#loginpassword').val()
        };
        console.log(loginreq)

        // var settings = {
        //     "url": "http://localhost:8080/api/v1/login",
        //     "method": "POST",
        //     "timeout": 0,
        //     "headers": {
        //         "Content-Type": "application/json"
        //     },
        //     "data": JSON.stringify({
        //         "password": password,
        //         "email": userName
        //     }),
        // };
        //
        // $.ajax(settings).done(function (response) {
        //     let token = response.token;
        //     saveKey("",token)
        //     console.log(token)
        //     ob.loginFunction(response.roles);
        //     alertify.success('Login Success');
        // }).fail(e=>{
        //     console.log(e.responseJSON.message)
        //     alertify.error('Login Error');
        //     $('.m-1').removeClass('invisible');
        //     $('.loader').addClass('invisible');
        // });

        $.ajax({
            url: "http://localhost:8080/api/v1/login",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(loginreq),
            success: function (resp) {
                console.log(resp);
                var type=resp.role;
                let token= resp.code;
                // //saveKey(type,token)
                // console.log(resp.code)
                // ob.loginFunction(type);
                // alertify.success('Login Success');
                saveKey("",token)
                console.log(token)
                ob.loginFunction(resp.role);
                alertify.success('Login Success');

            },
            error: function (jqXHR, textStatus, error) {
                console.log(e.responseJSON.message)
                alertify.error('Login Error');
            }
        });

    }

    another(){
        console.log("Another");
    }

    loginFunction(data){
        let ua = $.inArray('User_Admin', data);
        let uh = $.inArray('Hotel_Admin', data);
        let uv = $.inArray('Vehicle_Admin', data);
        let ug = $.inArray('Guide_Admin', data);
        let utp = $.inArray('TP_Admin', data);

        setTimeout(()=>{
            $('.loader').addClass('invisible');
            if (ua!==-1){
                $('.m-c').removeClass('invisible');
            }
            if (uh!==-1){
                $('.m-h').removeClass('invisible');
            }
            if (uv!==-1){
                $('.m-v').removeClass('invisible');
            }
            if (ug!==-1){
                $('.m-g').removeClass('invisible');
            }
            if (utp!==-1){
                $('.m-tp').removeClass('invisible');
            }

        },1000)


        console.log(data)
    }

}

var ob =new Login();