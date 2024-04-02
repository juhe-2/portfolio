$(function(){
    $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        sectionsColor: ['#fff'],
        autoScrolling: true, 
        keyboardScrolling: false, 
        navigation: true, 
        navigationPosition: 'left', 
        navigationTooltips: ['메뉴1','메뉴2','메뉴3','메뉴4','메뉴5','푸터'],
        slidesNavigation: true,
        responsiveWidth: 1000,
    

        afterLoad: function(anchorLink, index){
            console.log('현재 영역 번호는' + index)
            if(index == 6){
            }
        }
    })
})