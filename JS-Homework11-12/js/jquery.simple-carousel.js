(function ($) {

    $.fn.simpleCarousel = function () {
        var leftUIEl = $('.carousel-arrow-left');
        var rightUIEl = $('.carousel-arrow-right');
        var elementsList = $('.carousel-list');

        var pixelsOffset = 125;
        var currentLeftValue = 0;
        var elementsCount = elementsList.find('li').length;
        console.log("elementsCount " + elementsCount);
        var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
        console.log("minimumOffset " + minimumOffset);
        var maximumOffset = 0;

        leftUIEl.click(function () {
            if (currentLeftValue != maximumOffset) {
                currentLeftValue += 125;
                elementsList.animate({ left: currentLeftValue + "px" }, 500);
                console.log("currentLeftValue " + currentLeftValue);
            }
        });

        rightUIEl.click(function () {
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= 125;
                elementsList.animate({ left: currentLeftValue + "px" }, 500);
                console.log("currentLeftValue " + currentLeftValue);
            }
        });

        return this;
    }

})(jQuery);