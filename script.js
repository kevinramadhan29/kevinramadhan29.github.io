// event pada saat link diklik

// Cara baca $ = jquery 
//  jquery tolong carikan saya sebuah elemen yg nama kelas .page-scroll
// .on cara baca pada saat diklik jalankan sebuah fungsi berikut ini

$('.page-scroll').on('click', function (e) {
    console.log('ok');
    //ambil isi href pada tulisan yg berisi page-scroll
    var tujuan = $(this).attr('href');

    // tangkap elemen yang bersangkutan 
    var elemenTujuan = $(tujuan);
    // console.log(elemenTujuan.offset().top);

    // console.log($('body').scrollTop());

    // pindahkan scroll
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50

    }, 1250, 'swing');
    e.preventDefault();
});


// ! jumbotron parallax

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    // console.log(wScroll);

    $('.jumbotron img').css({
        'transform': 'translate(0px,' + wScroll / 4 + '%)'
    });

    $('.jumbotron h1 ').css({
        'transform': 'translate(0px,' + wScroll / 2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px,' + wScroll / 1 + '%)'
    });



    // ! Tutup parallax about


    // ! Tutup jumbotron parallax

    // ! portfolio

    if (wScroll > $('.portfolio').offset().top - 300) {
        // console.log('ok');
        $('.portfolio .thumbnail').each(function (i) {
            setTimeout(function () {
                // console.log('ok');
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });

    }

});
// ! tutup portfolio

// ! parallax about
$(window).on('load', function () {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});