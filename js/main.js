
//모바일 sub메뉴
$('.m_menu_w').click(function(){
    $('.m_menu').stop().toggle();
});

//graphic 썸네일
window.addEventListener('load',() => {
    const grid = new Isotope('.poster',{
        itemSelector: '.poster li',
    });

    //filter
    const btn = document.querySelectorAll('.graphic_nav li');
    console.log(btn);

    for(let el of btn){
        el.addEventListener('click', e => {
            e.preventDefault();

            
            for(let el of btn){
                el.classList.remove('on');
            }

            e.currentTarget.classList.add('on');

            const sort = e.currentTarget.querySelector('a').getAttribute('href');
            console.log(sort);

            grid.arrange({filter:sort});
        });
    };
});


//graphic 썸네일 클릭하면 팝업창 띄우기
var $thumbBtn = $('.poster > li');

$thumbBtn.click(function(e){
    e.preventDefault();
    $('#modal').css({'display':'flex'});
    var num = $(this).index(); //클릭한 썸네일(li)이 몇번째인지 알아온다

    $('.big').hide();
    $('.big').eq(num).show();
});

$('#modal').click(function(){
    $(this).fadeOut(0);
});


//subpage_graphic tab
// const tabBtn1 = document.querySelectorAll('.graphic_nav li');
// const tabBd1 = document.querySelectorAll('.s_graphic > div');
// console.log(tabBd1);

// tabBtn1.forEach(function(item,index){
//     item.onclick = function(e){
//         e.preventDefault();
//         for(let i = 0; i < tabBtn1.length; i++){
//             tabBtn1[i].classList.remove('on');
//             tabBd1[i].style.display = 'none';
//         }

//         item.classList.add('on');
//         tabBd1[index].style.display = 'block';
//     };
// })






//버스 각 li로
var profileW = $('.profile').offset().left;
var webW = $('.web').offset().left;
var responsiveW = $('.responsive').offset().left;
var graphicW = $('.graphic').offset().left;

$('.profile').mouseover(function(){
    $('.bus').stop().animate({left:profileW - 400},700);
});
$('.profile').mouseleave(function(){
    $('.bus').stop().animate({left:'50px'},400);
});

$('.web').mouseover(function(){
    $('.bus').stop().animate({left:webW - 400},700);
});
$('.web').mouseleave(function(){
    $('.bus').stop().animate({left:'50px'},400);
});

$('.responsive').mouseover(function(){
    $('.bus').stop().animate({left:responsiveW - 400},700);
});
$('.responsive').mouseleave(function(){
    $('.bus').stop().animate({left:'50px'},400);
});

$('.graphic').mouseover(function(){
    $('.bus').stop().animate({left:graphicW - 400},700);
});
$('.graphic').mouseleave(function(){
    $('.bus').stop().animate({left:'50px'},400);
});


//화면 resize
$(window).resize(function(){
    window.location.reload()
});

// 모바일 menu
$('.here').click(function(){
    $('.mobile_menu_w').show();
    $('.top').hide();
});
$('.mobile_menu_btn').click(function(){
    $('.mobile_menu_w').hide();
    $('.top').show();
});


//
