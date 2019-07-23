$(document).ready(function() {
    $("td").click(clicker);
});

function clicker() {
    console.log(this);
    console.log($(this));
    // if ($(this).hasClass("given")) return;
    $(".selected").removeClass("selected");
    $(this).addClass("selected");
}

document.onkeydown = function (e){

    if($(".selected").length===0) {
        alert("No cell selected!");
        return;
    }

    var aux = $(".selected").attr('id');

    switch (e.keyCode) {
        case 37:

           if(aux%10===1) break;
           else aux = aux - 1;
            $(".selected").removeClass("selected");
            $('#'+aux).addClass("selected");
            break;
        case 38:
            if(~~(aux/10)===1) break;
            else aux = aux - 10;
            $(".selected").removeClass("selected");
            $('#'+aux).addClass("selected");
            break;
        case 39:
            if(aux%10===9) return;
            else aux = aux*1 +1;
            $(".selected").removeClass("selected");
            $('#'+aux).addClass("selected");
            break;
        case 40:
            if(~~(aux/10)===9) return;
            else aux = aux*1 +10;
            $(".selected").removeClass("selected");
            $('#'+aux).addClass("selected");
            break;
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
            if($('#'+aux).hasClass("given")) return;
            $(".duplicater").removeClass("duplicater");
            $('#'+aux).removeClass("duplicate");
            $('#'+aux).text(e.keyCode-96);
            evaluate(aux) ;
            break;

        case 46:
            $('#'+aux).removeClass("duplicater");
            if($('#'+aux).hasClass("given")) return;
            $('#'+aux).removeClass("duplicate");
            $('#'+aux).text(" ");

    }

}

function evaluate(cellid)  {
   var value= $('#table1').find('#'+cellid).html(); //iau continutul casutei
    thisrow = ~~(cellid/10);
    thiscol = cellid%10;
    for (i=1;i<=9;i++){
        if(i === thiscol) continue;
        otherid = thisrow.toString() + i.toString();
        otherval = $('#table1').find('#'+otherid).html();
        if (otherval === value) {
            $("#"+cellid).addClass("duplicate");
            $("#"+otherid).addClass("duplicater");
        }
    }
    for (i=1;i<=9;i++){
        if(i === thisrow) continue;
        otherid = i.toString() + thiscol.toString();
        otherval = $('#table1').find('#'+otherid).html();
        if (otherval === value) {
            $("#"+cellid).addClass("duplicate");
            $("#"+otherid).addClass("duplicater");
        }
    }
   var thatrow= (thisrow - 1)-(thisrow - 1)%3;
   var thatcol= (thiscol - 1)-(thiscol - 1)%3;
    //square = 1 + ~~(thatcol/3) + thatrow;

    for(j=0;j<=2;j++)
        for(k=0;k<=2;k++)
        {

            anotherid = (thatrow+j+1).toString()+(thatcol+k+1).toString();
            if(anotherid === cellid) continue;
            anotherval = $('#table1').find('#'+anotherid).html();
            if (anotherval === value) {
                $("#"+cellid).addClass("duplicate");
                $("#"+anotherid).addClass("duplicater");
            }
        }
}