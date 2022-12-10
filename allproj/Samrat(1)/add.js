function add() {
    var input = document.getElementById('input').value;
    var iput = Number(input);
    var output = 0;

    for (i = 0; i < iput + 1; i++) {
        output = output + i;

    }

    alert(output);

}