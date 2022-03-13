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
    





    // $('.design_text').on('click', function(){
    //     $('.design_head').toggle();
    //     $('#design_img').toggle();
    //     $('.design_text').toggle();

    // })

    // $('#dev_img').on('click', function(){
    //     $('.dev_head').toggle();
    //     $('#dev_img').toggle();
    //     $('.dev_text').toggle();

    // })

    // $('.dev_head').on('click', function(){
    //     $('.dev_head').toggle();
    //     $('#dev_img').toggle();
    //     $('.dev_text').toggle();

    // })

    // $('.dev_text').on('click', function(){
    //     $('.dev_head').toggle();
    //     $('#dev_img').toggle();
    //     $('.dev_text').toggle();

    // })
    

  


});