$(function(){
    var count = $("#slide li").length;
    var current = 1;
    var next = 2;
    var interval = 3000;
    var duration = 1000;
    var timer;

    $("#slide li:not(:first-child)").hide(); //一枚目を非表示
    timer = setInterval(slideTimer, interval); //スライド用タイマーを設定
    function slideTimer(){
        $("#slide li:nth-child(" + current + ")").fadeOut(duration); //現在の画像をfadeout
        $("#slide li:nth-child(" + next + ")").fadeIn(duration); //次の画像をfadein
        current = next; //変数currentの新しい値：変数nextの元の値
        next = ++next; //変数nextの新しい値：変数currentの新しい値＋１
        if(next > count){ //変数nextの値が３（画像の総数）を超える場合、１に戻す
            next = 1;
        }
        $("#slide-button li a").removeClass("target"); //targetクラスを削除
        $("#slide-button li:nth-child("+ current +") a")
        .addClass("target"); //現在のボタンにtargetクラスを追加
    }
    $("#slide-button li a").click(function(){
        next = $(this).html(); //テキスト内容をnextに代入
        clearInterval(timer); //タイマーを停止して再スタート
        timer = setInterval(slideTimer, interval);
        slideTimer();
        return false;
    });
});

$(function(){
    var navPos = $(".pc__nav-list").offset().top; //pc__nav-listの初期位置を代入

    $(window).scroll(function(){ //ブラウザをスクロール
        if($(window).scrollTop() > navPos){ //スクロール量とpc__nav-list要素の初期位置を比較
            $(".pc__nav-list").css("position", "fixed").css("background-color", "#ddd1f5"); //条件を満たした場合、pc__nav-list要素をブラウザ上部に固定
        }else{
            $(".pc__nav-list").css("position", "static").css("background-color","#fbf9f8"); //条件を満たさない場合、pc__nav-listを通常位置に戻す
        }
    });
});

$(function(){

    // var dis = 190;

    $("#sp__navi-botton").click(function(){

            $(".sp__nav-list").slideToggle(200);
        });

        // $(".sp__nav-list").animate({"margin-right": "+=" + dis  + "px"}, 200);
        // dis *= -1;
});

$(function(){
    
    

    $(".photo_big").click(function(){ //aタグが重複する場合は、classで指定すると、それぞれ動作する

        $("body").append('<div id="bg">,<div id="photo">');

        $("#bg").hide();
        $("#photo").hide();

        $("#photo").html("<img>");

        var $photo = $("#photo img");

        $photo.attr("src", $(this).attr("href"));

        $photo.attr("width", "100%")
        // $photo.attr("height", "100%")
        $photo.attr("alt", "photo");

        $("#bg").fadeIn();
        $("#photo").fadeIn();

        $("#bg, #photo").click(function(){

            $(this).fadeOut(function(){
                $(this).remove();
            });
            $("#photo").fadeOut(function(){
                $(this).remove();
            });
        });

        return false;
    });
});

$(function(){

    $("a[href^=#]:not([href=#])").click(function(){

        var target = $($(this).attr("href")).offset().top;

        $("html, body").animate({scrollTop: target}, 500);

        return false
    });
});