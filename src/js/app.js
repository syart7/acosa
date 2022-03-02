require('../css/app.css');
require('../scss/style.scss');

/********** Paste your code here! ************/


$('.scene').each((index, element) => {
    new Parallax(element)
})


$(window).on('scroll', () => {
    const scroll = $(window).scrollTop()
    if (scroll > 0) {
        $('header').addClass('isScrolling')
    } else {
        $('header').removeClass('isScrolling')
    }
})

$(window).on("load", () => {
    $("#loader").fadeOut()
})