<!-- 
  Zachary Kipping
  18143217
  10/26/17
 -->
 <!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='UTF-8'>
    <title>Challenge 8</title>
    <style>
      img {
        height: 500px;
        width: 800px;
      }
    </style>
  </head>
  <body>
    <?php
      if (is_dir('./images')) {
        if (is_writable('./images')) {
          $files = glob('./images/*.{jpg,jpeg,png,gif}', GLOB_BRACE);
          foreach($files as $file) {
            $path_parts = pathinfo($file);
            echo '<div><img src="'.$file.'" alt="'.$path_parts['filename'].'"></div>'."\n";
            if (strcmp($path_parts['extension'], 'png') === 0) {
              if (!file_exists('./images/PNG')) {
                $oldmask = umask(0);
                mkdir("./images/PNG", 0777);
                umask($oldmask);
              }
              copy($file, './images/PNG/'.$path_parts['basename']);
            }
          }
        } else {
          echo "Directory 'images' isn't Writable, please change the permissions before trying again<br>\n";
        }
      } else {
        echo "'images' directory doesn't exist or isn't a directory<br>\n";
      }
    ?>
  </body>
</html>
