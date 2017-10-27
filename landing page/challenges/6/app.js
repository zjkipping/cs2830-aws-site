var cssIsActive = true;

var customScrollBar = `
<style type='text/css'>
  body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  body::-webkit-scrollbar {
    width: 12px;
    background-color: #F5F5F5;
  }

  body::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
  }
</style>
`;

$(() => {
  $('#css').dblclick((event) => {
    $(event.currentTarget).val('h4 { color: green; }\n\np { font-family: cursive, arial; font-size: 22pt;}');
  })
  $('#html').dblclick((event) => {
    $(event.currentTarget).val('<h4> Hello World! </h4>\n\n<p> is it applied? </p>');
  })
})

function launchPreview() {
  if (cssIsActive) {
    $('#renderFrame').contents().find('head').html(customScrollBar + "<style type='text/css'>" + $('#css').val() + "</style>");
  }
  $('#renderFrame').contents().find('body').html($('#html').val());
}

function toggleCSS() {
  cssIsActive ? $('#renderFrame').contents().find('head').html("") : $('#renderFrame').contents().find('head').html(customScrollBar + "<style type='text/css'>" + $('#css').val() + "</style>");
  cssIsActive = !cssIsActive;
}

function clearTextAreas() {
  $('#html').val('');
  $('#css').val('');
  $('#renderFrame').contents().find('head').html(customScrollBar);
  $('#renderFrame').contents().find('body').html("");
}

function setTitle() {
  title = window.prompt('Page Title:');
  document.title = title;
}
