$('.js-tab-caption').click(function() {
  let id = $(this).attr('data-tab')
  let tabContent = $('.js-tab-content[data-tab="'+ id +'"]');
   
  $('.js-tab-caption.active').removeClass('active');
  $(this).addClass('active');
  $('.js-tab-content.active').removeClass('active');
  tabContent.addClass('active');
});