$(function(){
    console.log(scrollY)
    /*로그인 화면 팝업 효과 start*/
    const coupons = document.querySelectorAll('#art_1 .coupon');
    const loginBg = document.querySelector('#login_bg');
    const login = document.querySelector('#login');
    
    coupons.forEach((el,i) => {
        coupons[i].addEventListener('click',()=>{
            loginBg.classList.add('login_Bgpop');
             loginBg.style.top = scrollY + 'px' ;
             login.classList.add('login_effect');
             login.style.top = scrollY + 'px' ;
        });
    
    });
    /*로그인 화면 팝업 효과 --------------end*/

    /* 로그인 화면 닫기 start*/

    const loginClose = document.querySelector('#login_close');
    loginClose.addEventListener('click',()=>{
        loginBg.classList.remove('login_Bgpop');
        login.classList.remove('login_effect');
    });

    /* 로그인 화면 닫기 --------------end*/




    
    const thurd3_button = document.querySelector('#thurd3_button button');
    const join_av = document.querySelector('#join_av');
    const join_bg = document.querySelector('#join_av_bg');

    thurd3_button.addEventListener('click',()=>{
        join_bg.style.top = scrollY + "px";
        join_bg.classList.add('join_effect');
        join_av.style.top = scrollY + "px";
        join_av.classList.add('join_effect');
    }); 


    const joinClose = document.querySelector('#join_close');

    joinClose.addEventListener('click',()=>{
        join_bg.classList.remove('join_effect');
        join_av.classList.remove('join_effect');

    /* 회원가입 화면 닫기 --------------end*/
    });

    const signUp = document.querySelector('#signUp');
    signUp.addEventListener('click',()=>{
        join_bg.style.top = scrollY + "px";
        join_bg.classList.add('join_effect');
        join_av.style.top = scrollY + "px";
        join_av.classList.add('join_effect');;
    });


    // let form = $('#login>form');
    // form.click(()=>{
    //     alert(1);
    // });

    /* login 정규 표현식 start*/


    let submit = $('#login_box>input');

    submit.click(()=>{
         //id 부분 start
        let email = $('#login_box input').eq(0);

        const pattern = /^([a-z0-9]{5,16})@([a-z]{2,16})\.([a-z]{2,8})$/
        let e_value = email.val();
        let check =  pattern.test(e_value);
        console.log(check);
        //id 부분 end


         //passoword 부분 start
        let password = $('#login_box #password');
        const passPattern = /^[a-z0-9]{2,10}$/
        let password_value = password.val();
        let passcheck =  passPattern.test(password_value);
        console.log(passcheck);
         //passoword 부분 end

    

        if(check==false||passcheck==false){
            
            alert('아이디와 비밀번호를 확인해 주세요 \n\n아이디 : 문자,숫자포함 5~16자 \n비밀번호:문자,숫자포함 2~10자');
            
            history.back(-1);

        }

        if(check==true&&passcheck==true){
            alert('환영합니다.');

        }
    });

    /*login 정규 표현식  --------------end*/








    /* start*/
    /* --------------end*/
});