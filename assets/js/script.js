$(document).ready(function(){
  $('.kv-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
        }
      } , {
        breakpoint: 520,
        settings: {
          slidesToShow:1,
          dots: false,
        }
      }
    ]
  });

  $('.promotion-list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        }
      } , {
        breakpoint: 820,
        settings: {
          slidesToShow:2,
        }
      } , {
        breakpoint: 768,
        settings: 'unslick',
      }
    ]
  });
  // product
  $('.product-list').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
        }
      } , {
        breakpoint: 768,
        settings: {
          slidesToShow:2,
        }
      } , {
        breakpoint: 480,
        settings: {
          slidesToShow:1,
          arrows: false,
        }
      }
    ]
  });



  // 패밀리 사이트를 클릭 하면 회색박스 영역이 자연스럽게 올라오고 다시 클릭하면 자연스럽게 내려오고

  // $('.select-label').click(function(){
  //   console.log('---클릭')
  // });
  $('.select-list').hide();
  $('.select-label').on('click', function(){
    // console.log('000클릭');
    $('.select-list').slideToggle(400);
  })

  $(".toggle-menu").click(function(){
    $(this).toggleClass("active")
  });

  $('.toggle-menu').click(function(){
    $('.mob-gnb').toggleClass('active')
  });

  $('.gnb .dep1 > a').click(function(e){

    if(this.hash) {
      e.preventDefault();

      var targetPos = $($(this).attr('href')).offset().top - 80;
      $('.body, html').animate({'scrollTop': targetPos});
    } 

    // console.log('hash = ', this.hash, 'attr = ', $(this).attr('href'));
    $('.toggle-menu').toggleClass("active");
    $('.mob-gnb').toggleClass('active');
  });

  $(window).resize(function(){
    var windowWidth = $(window).width();
    console.log('windowWidth =' + windowWidth + '입니다');


    var pmSliderHeight = $('.promotion .promotion-list .img-area').height();
    console.log('pmSliderHeight = ' + pmSliderHeight);

    // 화살표의 선택
    $('.promotion .slider .slick-arrow').css({ 'top' : pmSliderHeight / 2 });

    $('.promotion-list').slick('resize');
  });

  $('.product-list').on('setPosition', function(){
    console.log('prduct---');
    var pdSliderHeight = $('.products .img-area').height();
    
    $('.products .slider .slick-arrow').css({ 'top': pdSliderHeight / 2 });
  });
});