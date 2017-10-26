<?php
// Created by Professor Wergeles for CS2830 at the University of Missouri  
  /*
    3 ways to clear cookies:
      1. Closing the browser (session cookies get deleted)
      2. Manually clearing the cache
      3. Setting a cookie's expiration date to some time in the past
  */
  
  // set to 1 hour ago to delete it
  // setcookie('flavor', '', time() - 3600);

  // set to January 1st 1970 at 00:00:01 A.M. to delete it (better)
  setcookie('flavor', '', 1);

  print "The cookie 'flavor' was cleared <br>\n";
?>
