<!DOCTYPE html>
<!-- Created by Professor Wergeles for CS2830 at the University of Missouri -->
<html>
	<head>
		<title>Variables and Scope</title>
	</head>
	<body>
		<?php
			// creating and declaring variables in php

			// In php, a variable starts with a $ sign, followed by the name of the variable
			$txt = "Hello World";
			$x = 5;
			$y = 10.5;

			echo $txt;
			echo "<br>";
			echo $x;
			echo "<br>";
			echo $y;

			echo "<br><br>";
			$x = 5;
			$y = 4;
			echo $x + $y;
			// in PHP, notice we did not have to tell php which data type the variable is.
			// PHP automatically converts the variable to the correct data type, depending on its value

			// Global and Local scope

			$x = 10; // global variable, global scope

			function myTest() {
				echo "<p> Variable x inside function is: $x</p>";
			}
			
			myTest();

			echo "<p> Variable x outside function is: $x</p>";

			// Note: functions cannot have the same name otherwise it will crash
			function myTest2() {
				$n = 10; // local variable, local scope
				echo "<p>Variable n inside function is: $n</p>";
			}

			myTest2();

			echo "<p>Variable n outside function is: $n</p>";

			$x = 5;
			$y = 15;

			function myTest3() {
				global $x, $y; // echo down below will now output 20, basically copies over the variables from the global scope
				$y = $x + $y;
			}

			myTest3();

			echo $y; // y outputs 15
    ?>
  </body>
</html>
