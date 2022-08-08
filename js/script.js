$(document).ready(function(){
  AOS.init();

    $('.main-menu li').mouseenter(function () {
      // 연결이 됐는지 확인한것
      console.log('hi');

        // result값에 main-menu li값 저장과 동시에 데이타값 받아옴
        const result = $(this).attr('data-alt');

        // 연결 됐을때 서브 메뉴 박스들이 중복돼서 연결 안되게 엑티브 제거
        $('.sub-menu-box').removeClass('active');

        // 저장된 결과값에 엑티브 걸어주기
        $(`#${result}`).toggleClass('active');

        $('.logo').addClass('active');
        $('.sub-menu-main-box').addClass('active');
        $('.main-menu-box').addClass('active');
        $('.main-menu').addClass('active');
        $('.icon-box svg').addClass('active');

    });  
    
    $('.sub-menu-main-box').mouseleave(function () {
        $('.sub-menu-main-box').removeClass('active');
        $('.main-menu-box').removeClass('active');
        $('.main-menu').removeClass('active');
        $('.icon-box svg').removeClass('active');
        $('.logo').removeClass('active');

    });

    var swiper = new Swiper(".mySwiper", {
      loop:true,
      effect:"fade",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        autoplay: {
          delay:2500,
        },
      });


      $(window).scroll(function(){
        const wt = $(window).scrollTop();
        console.log(wt);
        if(wt > 2500){
          $('.main-menu-box').addClass('active');
          $('.main-menu').addClass('active');
          $('.icon-box svg').addClass('active');
          $('.logo').addClass('active');
        }else{
          $('.main-menu-box').removeClass('active');
          $('.main-menu').removeClass('active');
          $('.icon-box svg').removeClass('active');  
          $('.logo').removeClass('active');
        }
      });

      $('.icon-box .m-button').click(function(){
        $(this).children().toggleClass('active');
        $('.mini-menu-box').toggleClass('active');
        $('.main-menu-box').removeClass('active');
      });
});