(function($) {

    function startLazyLoad($imgList) {
        $imgList.each(function() {
            var $target = $(this);
            var imgUrl = $target.attr('alt');

            $target.on('load', function() {
                $target.removeClass('lazyLoad');
                $target.parent().find('.fa-spinner').css('display', 'none');
            });
            $target.attr('src', imgUrl);
        })
    }
    $(function() {
        startLazyLoad($('img.lazyLoad'));
    });

})($);
