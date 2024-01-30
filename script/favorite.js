$(document).ready(function() {
    $('.edit').click(function() {
        $(this).parent('.quantity').toggleClass('editable');
        $(this).siblings('input').prop('readonly', function(_, prop) {
            return !prop;
        });
    });
});


