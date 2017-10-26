<?php
	/* Created by Professor Wergeles for CS2830 at the University of Missouri */
	
	// print the contents of $_GET
	print_r($_GET);

	// look for a 'name' key
	$name = $_GET['name'];
	// look for a 'language' key
	$language = $_GET['language'];

	// if the language is Chinese, say hi in Chinese
	if ($language === 'ch') {
		print "Ni Hao $name";
	} else { // else default to english
		print "Hello $name";
	}
?>
