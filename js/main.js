$(document).ready(function(){
    $('#design_img').on('click', function(){
        $('#design_img').hide();
        $('.design_head').toggle();
        $('.design_text').toggle();

    })

    $('.design_text').on('click', function(){
        $('.design_head').hide();
        $('#design_img').show();
        $('.design_text').hide();

    })

    $('#dev_img').on('click', function(){
        $('.dev_head').toggle();
         $('#dev_img').hide();
        $('.dev_text').toggle()
    })


    $('.dev_text').on('click', function(){
        $('.dev_head').hide();
         $('#dev_img').show();
        $('.dev_text').hide();
    })
    

    $('#product_img').on('click', function(){
        $('.product_head').toggle();
         $('#product_img').hide();
        $('.product_text').toggle()
    })

    $('.product_text').on('click', function(){
        $('.product_head').hide();
         $('#product_img').show();
        $('.product_text').hide()
    })

    $('.btn').click(function(){
        let myName= $("input#name").val();
        alert(`${myName} we have received your message.Thank you for reaching out to us`)
        $("form").trigger("reset");
    })

    $('#w1').mouseenter(function(){
        $('.overlay').filter('#t1').show('slow')
    }).mouseleave(function(){
        $('#t1').hide('slow')
    })

    $('#w2').mouseenter(function(){
        $('.overlay').filter('#t2').show('slow')
    }).mouseleave(function(){
        $('#t2').hide('slow')
    })

    $('#w3').mouseenter(function(){
        $('.overlay').filter('#t3').show('slow')
    }).mouseleave(function(){
        $('#t3').hide('slow')
    })

    $('#w4').mouseenter(function(){
        $('.overlay').filter('#t4').show('slow')
    }).mouseleave(function(){
        $('#t4').hide('slow')
    })

    $('#w5').mouseenter(function(){
        $('.overlay').filter('#t5').show('slow')
    }).mouseleave(function(){
        $('#t5').hide('slow')
    })

    $('#w6').mouseenter(function(){
        $('.overlay').filter('#t6').show('slow')
    }).mouseleave(function(){
        $('#t6').hide('slow')
    })

    $('#w7').mouseenter(function(){
        $('.overlay').filter('#t7').show('slow')
    }).mouseleave(function(){
        $('#t7').hide('slow')
    })

    $('#w8').mouseenter(function(){
        $('.overlay').filter('#t8').show('slow')
    }).mouseleave(function(){
        $('#t8').hide('slow')
    })



 
    





  
});