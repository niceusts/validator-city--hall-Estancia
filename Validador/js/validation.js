
$('#consultDoc').on("click", function (e) {
    e.preventDefault();
    $('#sisvalService').toggleClass("sai");
    $('.sisvalConsult').css('display', 'block');
});

$('#newConsult').on("click", function (e) {
    e.preventDefault();
    $('#sisvalService').removeClass("sai");
    $('.sisvalConsult').css('display', 'none');
});

$('#cleanInput').click(function () {
    $('#inputService').each(function () {
        this.reset();
    });
});

let d = document, [inputs, knapp] = [
    d.querySelectorAll('[type="number"]'),
    d.querySelector('#consultDoc')]
knapp.disabled = true

for (i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', () => {
        let values = []
        inputs.forEach(v => values.push(v.value))
        knapp.disabled = values.includes('')
    })
}

function limpaCampos() {
    document.getElementById('cleanInput').click();
    document.getElementById('consultDoc').disabled = true;
}

function somenteNumeros(e) {
    var charCode = e.charCode ? e.charCode : e.keyCode;

    if (charCode != 8 && charCode != 9) {
        var max = 1;
        var num = document.getElementById('dvInput');

        if ((charCode < 48 || charCode > 57) || (num.value.length >= max)) {
            return false;
        }
    }
}	

document.getElementById('btnImprime').onclick = function() {
    var conteudo = document.getElementById('ConsultResult').innerHTML,
        tela_impressao = window.open('about:blank');

    tela_impressao.document.write(conteudo);
    tela_impressao.window.print();
    tela_impressao.window.close();
};

