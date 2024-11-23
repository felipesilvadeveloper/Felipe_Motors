$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true
    })

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    }) 

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoInteresse: {
                required: false 
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome.',
            email: {
                required: 'Por favor, insira o seu e-mail.',
                email: 'Por favor, insira um e-mail válido.'
            },
            telefone: 'Por favor, insira seu número de telefone.',
            mensagem: 'Por favor, insira sua mensagem.',
            veiculoInteresse: 'Este campo não é obrigatório, mas se preenchido, deve ser válido.'
        },
        submitHandler: function(form) {
            console.log('Formulário válido:', form);
            form.submit(); 
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos a serem preenchidos ou incorretos.`);
            }
        }
    });

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text()

        $('#veiculo-interesse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})