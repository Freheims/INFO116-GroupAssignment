  function openNote(text)
  {
  noteWindow = window.open('', 'WAB-note', 'width=480, height=320, resizable=yes, scrollbars=yes, toolbar=no, location=no, directories=no,status=no, menubar=no');
  noteWindow.document.write(text)
  }
  //