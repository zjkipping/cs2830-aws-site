<!DOCTYPE html>
<!-- Created by Professor Wergeles for CS2830 at the University of Missouri --> 
<?php
	/* References: 
			1) http://php.net/manual/en/function.setcookie.php
			2) http://www.w3schools.com/php/php_cookies.asp
	*/
	

	/* Note: A cookie is created with the setcookie() function.

			Syntax
				setcookie(name, value, expire, path, domain, secure, httponly);

			Only the name parameter is required. All other parameters are optional.
	*/


?>

<!-- NOTE: the setcookie() function must (should) appear BEFORE the <html> tag --> 

<html>
	<head>
		<title> setting cookies </title>
	</head>
	<body>
		<?php
			$cookie_name = "flavor";
			$cookie_value="Oatmeal Cream Pies";
			setcookie($cookie_name, $cookie_value, time() + 3600);

			$cookie_value = "White Macadamia Nut";
			setcookie($cookie_name, $cookie_value, time() + 5);

			setcookie($cookie_name, $cookie_value);

			// if (!isset($_COOKIE[$cookie_name])) {
			// 	echo "Cookie name $cookie_name is NOT set!";
			// } else {
			// 	echo "Cookie name $cookie_name IS set!";
			// }
?>
	
	
	</body>
</html>