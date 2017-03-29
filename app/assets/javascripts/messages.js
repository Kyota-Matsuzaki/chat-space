$(function(){

  $('.main-footer').on('submit', function(e) {
    e.preventDefault();
    debugger;
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


  // function sendInAjaxOnlyMessage(){
  //   var textField = $('.typing-box');
  //   var fd = new FormData($('#new_message').get(0));
  //     $.ajax({
  //       type: "POST",
  //       url: "./messages",
  //       data: fd,
  //       processData: false,
  //       contentType: false,
  //       dataType: 'json'
  //     })
  //   .done(function(data) {
  //     var html = builtHTML(data);
  //     $('.main-body').append(html);
  //     textField.val('');
  //   })
  //   .fail(function() {
  //     alert('error');
  //   });
  // };

  // function sendInAjaxWithImage(){
  //   var textField = $('.typing-box');
  //   var fd = new FormData($('#new_message').get(0));
  //   var form = $('#new_message')[0].files[0];
  //   fd.append('image', form);
  //     $.ajax({
  //       url: './messages',
  //       type: 'POST',
  //       data: fd,
  //       dataType: 'json',
  //       processData: false,
  //       contentType: false
  //     })
  //   .done(function(data){
  //     var html = builtHTML(data);
  //     $('.main-body').append(html);
  //     textField.val('');
  //   })
  //   .fail(function(data){
  //     alert("error");
  //   });
  // };

  function builtHTML(data) {

    var html =
      `<ul class = "chat-messages" >
        <li class = "chat-message" >
          <div class = "chat-message__header clearfix">
            <p class = "chat-message__name"> ${data.name}
            </p><p class = "chat-message__time"> ${data.time}
            </p></div>
          <p class = "chat-message__body"> ${data.message}
          </p>`;

      if (data.image){
        html += `img src="${data.image.url}", height="200", width="200">
        </li>
      </ul>`;
      }
      else{
        html += `</li>
      </ul>`;
      }
  return html;
  };
});





// $(function(){

//   function sendInAjax(){
//     var input = $("#new_message").val();
//     if(input != ""){
//       $.ajax({
//         url: './messages',
//         type: 'POST',
//         data: {
//         text: input   //上のjs-file-fieldからファイルを取り出して、json形式で今度はchats_controllerに送っている。
//         },
//         dataType: 'json'
//       })
//       .done(function(data){
//         var a = appendHtml(data);
//         $("#main-body").append(a);
//         $(".typing-box").remove();
//       })
//       .fail(function(data){
//         alert("メッセージを入力してください。");
//       });
//     }else{
//       alert("メッセージを入力してください！");
//     }
//   }


//   function sendFileInAjax(){ //ファイルとテキストを分けている。 //後は、下の二行の書き方さえ正常にすればちゃんと送れる！
//     debugger;
//     var form = $("#new_message")[0].files;//この書き方でfileの情報を取得できている
//     var fd = new FormData(); //formの内容をこの形で送ることができる。FormDataは、送信するためのキーとバリューの値をセットにして送ることができる！！！
//     fd.append('image', form); //上で作ったformの内容を送る変数に、imageというkeyでformの内容をvalueとして追加する。
//     $.ajax({
//       url: './messages',
//       type: 'POST',
//       data: fd,
//       dataType: 'json',
//       processData: false,
//       contentType: false
//     })
//     .done(function(data){
//       var a = appendHtml(data);
//       $("#main-body").append(a);
//     })
//     .fail(function(data){
//       alert("ファイルを選択してください。");
//     });
//   }


//   function appendHtml(data){
//     if (data.image.url != null){ //imageの値がnull時、つまり、値があるかどうかを確認してあれば、true、なければfalseを返す。
//       var html = `<ul class = "chat-messages" >
//         <li class = "chat-message" >
//           <div class = "chat-message__header clearfix">
//             <p class = "chat-message__name"> ${data.name}
//             </p><p class = "chat-message__time"> ${data.time}
//             </p></div>
//           <p class = "chat-message__body"> ${data.message}
//           </p>
//         </li>
//       </ul>`;//コントローラから送られて来た値を取り出すことでviewに表示させる。dataにimageの値の有無で表示させるviewを開けている実装をしている。
//     }else if(data.text != null){
//       var html =       `<ul class = "chat-messages" >
//         <li class = "chat-message" >
//           <div class = "chat-message__header clearfix">
//             <p class = "chat-message__name"> ${data.name}
//             </p><p class = "chat-message__time"> ${data.time}
//             </p></div>
//           <p class = "chat-message__body"> ${data.message}
//           </p>
//           <img src="${data.image.url}", height="200", width="200">
//         </li>
//       </ul>`;
//     }
//     return html;
//   }



//   $(".main-footer").on("submit", function(e){
//     e.preventDefault();
//     sendInAjax();
//     return false;
//   });

//   $("#message_image").on("change", function(e){ //ここまでは正常に動作している.formの値がchangeした時にここが実行される！！！
//     e.preventDefault();
//     sendFileInAjax();
//     return false;
//   });
// });
