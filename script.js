$(document).ready(function(){

  //user interface logic
  //for what we do design
  $(".designimg").click(function(){
    $(".desp1").toggle(function(){
      
    });
    $(".designimg").toggle(function(){

    });
  });
  $(".desp1").click(function(){
    $(".desp1").toggle(function(){
      
    });
    $(".designimg").toggle(function(){

    });
  });

//for development what we do
  $(".developmentimg").click(function(){
    $(".desp2").toggle(function(){
      
    });
    $(".developmentimg").toggle(function(){

    });
  });
  $(".desp2").click(function(){
    $(".desp2").toggle(function(){
      
    });
    $(".developmentimg").toggle(function(){

    });
  });

  //for management what we do
  $(".mgmtimg").click(function(){
    $(".desp3").toggle(function(){
      
    });
    $(".mgmtimg").toggle(function(){

    });
  });
  $(".desp3").click(function(){
    $(".desp3").toggle(function(){
      
    });
    $(".mgmtimg").toggle(function(){

    });
  });

  
  
  var cells = ["tb0", "tb1","tb2", "tb3","tb4", "tb5", "tb6", "tb7" ];
cells.forEach(function(cell){
  $("."+cell).hover(function(){
    $(".for-"+cell).toggle(function(){

    });
  });
});


});
  