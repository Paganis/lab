$(document).ready(function(){
  var items = $('#stage li'),
  itemsByTags = {};
  items.each(function(i){
    var elem = $(this),
    tags = elem.data('tags').split(',');
    elem.attr('data-id',i);
    $.each(tags,function(key,value){
      value = $.trim(value);
      if(!(value in itemsByTags)){
        itemsByTags[value] = [];
      }
      itemsByTags[value].push(elem);
    });
  });
  createList('all',items);
  $.each(itemsByTags,function(k,v){
    createList(k,v);
  });
  $('#filter a').live('click',function(e){
    var link = $(this);
    link.addClass('active').siblings().removeClass('active');
    $('#stage').quicksand(link.data('list').find('li'));
    e.preventDefault();
  });
  $('#filter a:first').click();
  function createList(text,items){
    var ul = $('<ul>',{'class':'hidden'});
    $.each(items,function(){
      $(this).clone().appendTo(ul);
    });
    ul.appendTo('#container');
    var a = $('<a>',{
      html: text,
      href: '#',
      //class: 'nice small radius white button',
      class: 'tag',
      data: {list:ul}
      }).appendTo('#filter');
      var span1 = $('<span>',{html: text,class: 'tag_name',data: {list:ul}});
      span1.appendTo('#filter .tag');
      //var span2 = $('<span>',{class: 'tag_count'});
      //span2.appendTo('#filter');
    }
  });
