$( document ).ready(function() {
  $('.image-gallery').each(function() {
    $(this).magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
          enabled:true
        }
    });
  });

  $('.photo').magnificPopup({
    type:'image',
    delegate: 'a'
  });
});
