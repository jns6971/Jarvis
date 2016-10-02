var toggleOutlet = function(buttonClicked) {
    $.post('/server/index.php', {
            outletId: buttonClicked.attr('data-outletId'),
            outletStatus: buttonClicked.attr('data-outletStatus')
        },
        function(data, status) {
            //alert('Outlet toggled!');
        });

};

$(function() {
    $('.toggleOutlet').click(function() {
        toggleOutlet($(this));
    });
});