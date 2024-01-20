$(document).ready(function(){
    $('#telefone').mask('(00) 0000-0000');
    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true
            },
            telefone:{
                required: false
            },
            mensagem:{
                required: true
            },
        },
        messages:{
            nome: 'Informe seu nome',
            email: 'Informe seu e-mail',
            mensagem: 'Deixe-nos uma mensagem.',
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`!! ATENÇÃO !! é necessário preencher ${camposIncorretos} campo(s).`)
            }
        }
    },
    )
})