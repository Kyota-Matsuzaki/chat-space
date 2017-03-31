$(document).on('turbolinks:load', function(){

  $('.main-footer').on('submit', function(e) {
    e.preventDefault();
    var textField = $('.typing-box');
    var message = $('#new_message').get(0);
    var fd = new FormData(message);
      $.ajax({
        type: "POST",
        url: "./messages",
        data: fd,
        processData: false,
        contentType: false,
        dataType: 'json'
      })
    .done(function(data) {
      var html = builtHTML(data);
      $('.main-body').append(html);
      textField.val('');
      return false;
    })
    .fail(function() {
      alert('error');
      return false;
    });
  });

  $(document).on('change', '#message_image', function(){
    $('#new_message').trigger('submit');
  });

  function builtHTML(data) {

    var html =
      '<ul class = "chat-messages" >' +
        '<li class = "chat-message" >' +
          '<div class = "chat-message__header clearfix">' +
            '<p class = "chat-message__name">' + 'data.name' +
            '</p>' + '<p class = "chat-message__time">' +
            'data.time' +
            '</p>' +
          '</div>' +
          '<p class = "chat-message__body">' + 'data.message' +
          '</p>';

      if (data.image){
        html += '<img src="' + 'data.image.url' + '", height="200", width="200">' +
        '</li>' +
      '</ul>';
      }
      else{
        html += '</li>' +
      '</ul>';
      }
  return html;
  };


  setInterval(function(){
    $.ajax({
      type: 'GET',
      url: './messages',
      dataType: 'json'
    })
      .done(function(data){
        builtHTML(data);
      });
  }, 5000);
});
