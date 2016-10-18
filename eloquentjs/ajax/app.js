var $ = require('jquery');
$(document).ready(function () {
    // ... the AJAX request is successful
    var updatePage = function (resp) {
        $('#target').html(resp.people[0].name);
    };

    // ... the AJAX request fails
    var printError = function (req, status, err) {
        console.log('something went wrong', status, err);
    };

    // Create an object to describe the AJAX request
    var ajaxOptions = {
        url: '/data/yelp_labelled.txt',
        dataType: 'text',
        success: updatePage,
        error: printError
    };

    // Initiate the request!
    $.ajax(ajaxOptions);
});
