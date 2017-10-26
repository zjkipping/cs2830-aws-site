<!DOCTYPE html>
<!-- Created by Professor Wergeles for CS2830 at the University of Missouri -->
<html>
<head>
	<title>Case Sensitivity</title>
</head>
<body>

	<?php
		// all keywords, classes, functions and user-defined functions are NOT case-sensitive
		echo "Hello World!<br>";
		ECHO "Hello World!<br>";
		EcHo "Hello World!<br>";

		$color = "red";

		// however, all variabesl names ARE case-senstive
		echo "My car is " . $color . "<br>";
		echo "My car is " . $COLOR . "<br>";
		echo "My car is " . $CoLoR . "<br>";
	?>

</body>
</html>
