$(document).ready(function ($) {
    const GOOGLE_ANALYTICS_USER_TRACKER_PROJECT_TOKEN = 'G-ZGD4N5DQ62';
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', GOOGLE_ANALYTICS_USER_TRACKER_PROJECT_TOKEN);

    // gtag('event', 'screen_view', {});

    $('#outer-wrapper a').click(function () {
        // event.preventDefault();
        var getCickedButtonValue = $(this).attr('value');
        // console.log("Google analytics User Clicked on ", getCickedButtonValue);
        // gtag('event', 'screen_view', {
        //     'screen_name': getCickedButtonValue
        // });
        gtag('event', getCickedButtonValue+"ClkdRD", {
            'source': getCickedButtonValue
        });
    });
    


    $('#exampleModal a').click(function () {
        // event.preventDefault();
        var getCickedButtonValue = $(this).attr('value');
        // console.log("Google analytics User Clicked on ", getCickedButtonValue);
        // gtag('event', 'screen_view', {
        //     'screen_name': getCickedButtonValue
        // });
        gtag('event', "ClkdRD" + getCickedButtonValue, {
            'source': getCickedButtonValue
        });
    });

});