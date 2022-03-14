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
 
    





  
});