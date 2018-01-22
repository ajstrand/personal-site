function type() {
  
    var cont = $('.main-info .typewriter');
  
      cont.empty();
  
      var str = "Hey, I'm Alex";
      var arr = str.split('');
  
      var i = 0;
  
      $.each(arr, function(letter, i){
        setTimeout(function(){
          var result = cont.text() + letter;
          cont.text(result);
        },100*i);
      });
  
  
  };
  
  $(document).on('ready', function(){
    type();
  });