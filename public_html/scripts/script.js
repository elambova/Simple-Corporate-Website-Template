"use strict";
function slider() {
    var $rightButton = $('#next');
    var $leftButton = $('#prev');


    $leftButton.hide();
    $('div#slider div.slide').hide();
    $('div#slider div#slide-1.slide').show();

    function onRightButtonClick() {
        var $currentSlide = $('div#slider div.slide:visible');
        if (!$currentSlide.hasClass('end-slide')) {
            $currentSlide.hide().next().show();
            $leftButton.show();
        }
        if ($currentSlide.next().hasClass('end-slide')) {
            $rightButton.hide();
        }
    }

    function onLeftButtonClick() {
        var $currentSlide = $('div#slider div.slide:visible');
        if ($currentSlide.attr('id') !== 'slide-1') {
            $currentSlide.hide().prev().show();
            $rightButton.show();
        }
        if ($currentSlide.prev().attr('id') === 'slide-1') {
            $leftButton.hide();
        }
    }

    $rightButton.on('click', onRightButtonClick);
    $leftButton.on('click', onLeftButtonClick);
}
slider();
function sliderComents() {
    var $rightButton = $('#right');
    var $leftButton = $('#left');


    $leftButton.hide();
    $('aside#left-aside div.container-coments').hide();
    $('aside#left-aside div#slide-coment-1.container-coments').show();

    function onRightButtonClick() {
        var $currentSlide = $('aside#left-aside div.container-coments:visible');
        if (!$currentSlide.hasClass('end-slide')) {
            $currentSlide.hide().next().show();
            $leftButton.show();
        }
        if ($currentSlide.next().hasClass('end-slide')) {
            $rightButton.hide();
            $leftButton.css("margin-right", "12%");
        }
    }

    function onLeftButtonClick() {
        var $currentSlide = $('aside#left-aside div.container-coments:visible');
        if ($currentSlide.attr('id') !== 'slide-coment-1') {
            $currentSlide.hide().prev().show();
            $rightButton.show();
            $leftButton.css("margin-right", "0");
        }
        if ($currentSlide.prev().attr('id') === 'slide-coment-1') {
            $leftButton.hide();
        }
    }

    $rightButton.on('click', onRightButtonClick);
    $leftButton.on('click', onLeftButtonClick);
}
sliderComents();

function visibility() {
    var li, imageInvisible, imageVisible,
            arrHolderLi = [],
            arrHolderImageInvisible = [],
            arrHolderImageVisible = [];

    for (var i = 1; i <= 5; i += 1) {
        li = document.getElementById('item-' + i);
        imageInvisible = document.getElementById('icon-arrow-' + i);
        imageVisible = document.getElementById('icon-arrow-hover-' + i);
        arrHolderLi.push(li);
        arrHolderImageInvisible.push(imageInvisible);
        arrHolderImageVisible.push(imageVisible);
    }

    for (var j = 0; j < arrHolderLi.length; j += 1) {
        for (var k = 0; k < arrHolderImageInvisible.length; k += 1) {
            if (arrHolderLi[j].id.substring(5) === arrHolderImageInvisible[k].id.substring(11)) {
                (function (j) {
                    arrHolderLi[j].addEventListener("mouseover", function () {
                        arrHolderImageInvisible[j].style.display = 'none';
                        arrHolderImageVisible[j].style.display = 'block';
                    });
                    arrHolderLi[j].addEventListener("mouseout", function () {
                        arrHolderImageInvisible[j].style.display = '';
                        arrHolderImageVisible[j].style.display = 'none';
                    });
                })(j);
            }
        }
    }
}
visibility();

var buttonMenu = document.getElementById('button-menu-toggle');
buttonMenu.addEventListener('click', function () {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        document.getElementById('prev').style.top = '130px';
        document.getElementById('next').style.top = '130px';
        menu.style.display = '';
    } else {
        document.getElementById('prev').style.top = '300px';
        document.getElementById('next').style.top = '300px';
        menu.style.display = 'block';
    }
});

var buttonFooter = document.getElementById('show-hide-footer-button');
var footer = document.getElementById('footer');

buttonFooter.addEventListener('click', function () {
    if (footer.style.display === '') {
        footer.style.display = 'block';
    } else{
        footer.style.display = '';
    }
    
});

