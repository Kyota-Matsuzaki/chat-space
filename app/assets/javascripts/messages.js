$(function(){

  function buildHTML(data) {

    var html =
      `<ul class = "chat-messages" >
        <li class = "chat-message" >
          <div class = "chat-message__header clearfix">
            <p class = "chat-message__name"> ${data.name}
            </p><p class = "chat-message__time"> ${data.time}
            </p></div>
          <p class = "chat-message__body"> ${data.message}
          </p>
        </li>
      </ul>`;
    return html;
  };


  $('.main-footer').on('submit', function(e) {
    e.preventDefault();
    var textField = $('.typing-box');
    var fd = new FormData($('#new_message').get(0));
    $.ajax({
      type: "POST",
      url: "./messages",
      data: fd,
      processData: false,
      contentType: false,
      dataType: 'json'
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.main-body').append(html);
      textField.val('');
    })
    .fail(function() {
      alert('error');
    });
  });
});