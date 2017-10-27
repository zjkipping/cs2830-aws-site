
<?php
  /* Created by Professor Wergeles for CS2830 at the University of Missouri */ 

  /* 
    GET is used for...
      Requesting something
      Navigation
      Bookmarking
      Caching

    POST is used for...
      Submitting data
      Creating data
      Actions
      Login
      File Uploads
      Sensitive Info
  */

  // $_SERVERis super-global variable
  //    They are always available even though we did not create it
  //    Can access anywhere in php

  if($_SERVER['REQUEST_METHOD']=== 'POST') {
    print "\n The server request method is POST! \n\n<br><br>";

    foreach ($_POST as $key => $value) {
      print "$key = $value \n<br>";
    }
  }

  if($_SERVER['REQUEST_METHOD']=== 'GET') {
    print "\n The server request method is GET! \n\n<br><br>";

    foreach ($_GET as $key => $value) {
      print "$key = $value \n<br>";
    }
  }

?>
