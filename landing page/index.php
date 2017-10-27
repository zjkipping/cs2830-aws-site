<!-- 
  Zachary Kipping
  18143217
  10/19/2017
 -->
 <!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='UTF-8'>
    <title>Zachary Kipping AWS Site</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link href="styles.css" rel="stylesheet">
    <script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>
  </head>
  <body class="custom-scrollbar">
    <div class="jumbotron jumbotron-fluid">
      <div class="container text-center">
        <h1 class="display-3">Hello World!</h1>
        <p class="lead">Zachary Kipping's AWS Landing Page</p>
      </div>
    </div>
    <div class="nav">
      <ul> 
        <h2>Challenges:</h2>
        <?php
          foreach(glob('/var/www/html/challenges/*', GLOB_ONLYDIR) as $directory) {
            echo '<li><a href="'.str_replace('/var/www/html', '', $directory).'">'.str_replace('/var/www/html/challenges/', '', $directory).'</a></li>';
          }
        ?>
      </ul>
    </div>
    <div class="container lectures">
      <h2>Lecture Directory List Auto-Generated Using PHP (For ease of use!):</h2>      
      <div class="row directory-list">
        <?php
          // recursive function to get all the lecture directories and their files for display
          function getDirectories($path) {
            $directories = glob($path.'/*', GLOB_ONLYDIR);
            echo '<ul>';
            foreach($directories as $directory) {
              echo '<li>'.str_replace($path.'/', '', $directory);
              getDirectories($directory);
              echo '</li>';
            }
            $files = glob($path.'/*.*');
            foreach($files as $file) {
              if (!is_dir($file))
                echo '<li><a href="'.str_replace('/var/www/html', '', $file).'">'.str_replace($path.'/', '', $file).'</a></li>';
            }
            echo '</ul>';
          }
          $directories = glob('/var/www/html/lectures/*', GLOB_ONLYDIR);
          foreach($directories as $directory) {
            echo '<div class="directory col-xs-12 col-sm-6 col-md-4 col-lg-2">';
              echo '<div class="panel panel-default">';
                echo '<div class="panel-title">';
                  echo '<h3 class="directory-title">'.str_replace('/var/www/html/lectures/', '', $directory).'</h3>';
                echo '</div>';
                echo '<div class="panel-body custom-scrollbar">';
                  getDirectories($directory);
                echo '</div>';
              echo '</div>';
            echo '</div>';
          }
        ?>
      </div>
    </div>
    <footer class="file-footer">
      <div class="nav">
        <ul>
          <li><a href="https://www.github.com/zjkipping/cs2830-aws-site">Site Code</a></li>
          <li><a href="https://www.github.com/zjkipping/">GitHub</a></li>
        </ul>
      </div>
    </footer>
  </body>
</html>
