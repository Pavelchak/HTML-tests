

// $(function () {
//     alert('welcome');
// });

let calc_hide:boolean=false;
$(function () {
    $('#calc_hide_button').click(function () {
        if(calc_hide){
            $('fieldset').show('slow');
            $('#calc_hide_button').html("Сховати калькулятор");
            calc_hide=false;
        } else{
            $('fieldset').hide(3000);
            $('#calc_hide_button').html("Показати калькулятор");
            calc_hide=true;
        }

    });
});

// let calc_clear:boolean=false;
$(function () {
    $('#calc_clear_button').click(function () {
        if(calc_hide){
            $('fieldset').slideToggle(3000);
            $('#calc_clear_button').html("Сховати слайд");
            calc_hide=false;
        } else{
            $('fieldset').slideToggle(3000);
            $('#calc_clear_button').html("Показати слайд");
            calc_hide=true;
        }

    });
});

