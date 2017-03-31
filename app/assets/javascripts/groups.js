$(function(){
  $("#user-search-field").on("keyup", function(e){
    e.preventDefault();
    var input = $.trim($("#user-search-field").val());
    $.ajax({
      type: 'GET',
      url: '/users',
      data: {
        name: input
      },
      dataType: 'json'
    })
    .done(function(data){
      listUsers(data);
    })
    .fail(function(data){
      alert('error');
    });
  });


    function listUsers(data){
      $('#user-search-result__list').remove();
      $('#user-search-result').append('<ul id = "user-search-result__list"> </ul>')
      $.each (data, function(i,user){
          var user_html =
             '<li id = "user-search-result-' + 'i' + '" >' +
               '<div class= "user-search-result__name" >' +
                 'user.name' +
                 '<a href = "" class = "user-search-result__add-btn-' + 'i' + '" id = "user-search-result__add-btn">' +
                 '追加' +
                 '</a>' +
               '</div>' +
             '</li>';
          $('#user-search-result__list').append(user_html);
            addUser(i,user);
      });
    };


  function addUser(i,user){
    $('.user-search-result__add-btn-' + 'i').on("click", function(e){
      e.preventDefault();
      $('#user-search-result' + 'i' + ).empty();

      var add_user_html =
      '<li id = "chat-group-users-added-'+ 'i' + '" >' +
        '<input value="' + 'user.id' + '" id="users-value" type="hidden" name="group[user_ids][]">' +
        '</input>' +
        '<div class = "chat-group-users-added__name">' +
          'user.name' +
          '<a href = "" class = "chat-group-users-added__delete-btn-' + 'i' + '" id = "chat-group-users-added__delete-btn">' +
          '削除' +
          '</a>' +
        '</div>' +
      '</li>';
      $("#chat-group-users-added").append(add_user_html);
      removeUser(i,user)

    });
  };

  function removeUser(i,user){
    $('.chat-group-users-added__delete-btn-' + 'i').on("click", function(e){
      e.preventDefault();
       $('#chat-group-users-added' + 'i').remove()
    });
    repositUserToList(i,user);
  };

  function repositUserToList (i, user){
    var reposit_user_html =
           '<div class= "user-search-result__name" >' +
             'user.name' +
             '<a href = "" class = "user-search-result__add-btn" id = "user-search-result__add-btn-' + 'i' + '">' +
             '追加' +
             '</a>' +
           '</div>';
  };

});
