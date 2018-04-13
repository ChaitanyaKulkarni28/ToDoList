$(document).ready(function(){
    $("li").click(function(){
        $(this).toggleClass("checked");    
    });

    $("span").click(function(event){
        $(this).parent().fadeOut(400,function()
        {
            $(this).remove();
        })
        event.stopPropagation();
    });

    $("input[type='text']").keypress(function(event){
        if(event.which === 13){
            var todoText = $(this).val();
            $(this).val("");
            $("ul").append("<li><span class='glyphicon glyphicon-trash'></span> " + todoText + "</li>")
        }
    });
})
