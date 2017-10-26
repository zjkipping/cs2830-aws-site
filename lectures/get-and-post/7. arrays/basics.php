<!DOCTYPE html>
<!-- Created by Professor Wergeles for CS2830 at the University of Missouri -->
<html>
	<head>
		<title>PHP Arrays</title>
	</head>
	<body>
        <?php
            /*
                References:
                    http://php.net/manual/en/function.array.php
                    http://php.net/manual/en/language.types.array.php
            */
            $zoo = array("Monkey", "Tiger", "Crocs", "Penguins", "Nick");

            // add to the zoo aray at the 5th index
            $zoo[5] = "Giraffe";

            // add to the end of the array
            $zoo[] = "Lion";
            
            // print the contents of the zoo array in a human readable format
            print_r($zoo);
            print('<br><br>');

            // remove an item from the zoo array
            unset($zoo[0]);

            print_r($zoo);
            print('<br><br>');

            // reindex the array
            $zoo = array_values($zoo);
            print_r($zoo);

            print("<ul>\n");
            foreach($zoo as $animal) {
                print("<li>$animal</li>\n");
            }
            print("</ul>\n");
        ?>
	</body>
</html>
