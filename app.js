<!-- Zakat Calculator -->
  
    function calc() {
        var n1 = parseInt(document.getElementById('n1').value);
        var n2 = parseInt(document.getElementById('n2').value);
        var n3 = parseInt(document.getElementById('n3').value);
        var n4 = parseInt(document.getElementById('n4').value);
        var n5 = parseInt(document.getElementById('n5').value);
        var n6 = parseInt(document.getElementById('n6').value);
        var n7 = parseInt(document.getElementById('n7').value);
        var n8 = parseInt(document.getElementById('n8').value);
        var n9 = parseInt(document.getElementById('n9').value);
        var n10 = parseInt(document.getElementById('n10').value);

        if(document.getElementById('n1').value == "") {
            document.getElementById('n1').value = 0;
        }

   
            document.getElementById('result').value = (n1+n2+n3+n4+n5+n6+n7+n8+n9+n10)*.025;
        
    }



