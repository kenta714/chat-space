$(function(){
    function buildHTML(message){
      if ( message.image ) {
        let html =
          `<div class="MessageBox">
            <div class="Messageinfo">
              <div class="Messageinfo__username">
                ${message.user_name}
              </div>
              <div class="Messageinfo__date">
                ${message.created_at}
              </div>
            </div>
            <div class="Message">
              <p class="Message__content">
                ${message.content}
              </p>
              <img class="Message__image" src="${message.image}">
            </div>
          </div>`
        return html;
      } else {
        let html =
        `<div class="MessageBox">
          <div class="Messageinfo">
            <div class="Messageinfo__username">
              ${message.user_name}
            </div>
            <div class="MessageInfo__date">
              ${message.created_at}
            </div>
          </div>
          <div class="Message">
            <p class="Message__content">
              ${message.content}
            </p>
          </div>
        </div>`
        return html;
      };
    }
  
    $('.Form').on('submit', function(e){
        console.log("test")
      e.preventDefault();
      let formData = new FormData(this);
      let url = $(this).attr('action');
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
      })
      .done(function(data){
        let html = buildHTML(data);
        $('.MessageField').append(html);      
        $('form')[0].reset();
        $('.MessageField').animate({ scrollTop: $('.MessageField')[0].scrollHeight});
        $('.box').animate({'height' : '200px'});
    
      })
      .fail(function() {
        alert("メッセージ送信に失敗しました");
        })
      .always(function(){
        $('.Form__submit').prop('disabled', false);
    })
    });
});
  