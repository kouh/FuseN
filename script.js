$(function(){
  var savedData = localStorage.getItem("fusen");
  var fusenList = JSON.parse(savedData);
  
  if(fusenList){
    jQuery.each(fusenList,function(){
      addFusen(this);
    });
  }
  $('#add').on('click',function(){
    addFusen();
  });

  $(window).on("beforeunload",function(e){
    save();
  });

  $(window).on("keydown",function(e){
    if( e.ctrlKey === true && e.which == 78 ){
      var li = addFusen();
      li.focus();
    }
  });
});

function addFusen(data){
  data = data || '';
  var li = $('<li>')
    .attr('contenteditable','true')
    .text(data)
    .draggable({
      containment: 'parent',
      scroll: false,
    });
  $('#workspace').append(li);
  return li;
}

function save(){
  var fusenList = [];
  $('#workspace li').each(function(){
    if($(this).text().trim() == '') return;
    fusenList.push($(this).text());
  });
  localStorage.setItem('fusen',JSON.stringify(fusenList));
  console.log('saved!');
}
