function test(angka) {
    for (var i = 1; i <= angka; i++) {
        for (var j = i; j <= angka; j++) {
            document.write("&#160; ");
        }
        for (var k = 1; k <= i; k++) {
            document.write("*");
        }
        document.write("<br>");
    }

}