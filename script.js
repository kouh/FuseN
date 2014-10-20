$(function(){
  var savedData = localStorage.getItem("fusen");
  var fusenList = JSON.parse(savedData);
  
  if(fusenList && (fusenList.constructor != 'Array')){
    jQuery.each(fusenList,function(){
      addFusen(this);
    });
  }
  $('#add').on('click',function(){
    addFusen();
  });

  $( "#workspace" ).sortable({
    revert: true
  });
});

function addFusen(data){
  data = data || '';
  $('#workspace').append(
    $('<li>')
      .attr('contenteditable','true')
      .text(data)
      .on('click',function(){
        $(this).focus();
      })
      .on('blur',function(){
        var fusenList = [];
        $('#workspace li').each(function(){
          fusenList.push($(this).text());
        });
        localStorage.setItem('fusen',JSON.stringify(fusenList));
        console.log('saved!');
      })
  );
}
  