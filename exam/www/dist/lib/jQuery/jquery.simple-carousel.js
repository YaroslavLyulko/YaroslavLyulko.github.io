(function ($) {

    $.fn.simpleCarousel = function () {
        var UIEl1 = $('[data-slide-to="1"]');
        var UIEl2 = $('[data-slide-to="2"]');
        var UIEl3 = $('[data-slide-to="3"]');
        var elementsList = $('.carousel__list');

        var pixelsOffset = 1160;
        var currentLeftValue = 0;
        var elementsCount = elementsList.find('li').length;
        console.log("elementsCount " + elementsCount);
        var minimumOffset = - ((elementsCount - 1) * pixelsOffset);
        console.log("minimumOffset " + minimumOffset);
        var maximumOffset = 0;

        UIEl1.click(function () {
            // if (currentLeftValue != maximumOffset) {
                currentLeftValue = 0;
                elementsList.animate({ left: currentLeftValue + "px" }, 500);
                UIEl1.attr("class", "pagination__item--active");
                UIEl2.attr("class", "pagination__item");
                UIEl3.attr("class", "pagination__item");
                console.log("UIE1 ");
                console.log("currentLeftValue " + currentLeftValue);
            // }
        });

        UIEl2.click(function () {
            // if (currentLeftValue != minimumOffset) {
                currentLeftValue = -1160;
                elementsList.animate({ left: currentLeftValue + "px" }, 500);
                UIEl1.attr("class", "pagination__item");
                UIEl2.attr("class", "pagination__item--active");
                UIEl3.attr("class", "pagination__item");
                console.log("UIE2 ");
                console.log("currentLeftValue " + currentLeftValue);
            // }
        });

        UIEl3.click(function () {
            // if (currentLeftValue != minimumOffset) {
                currentLeftValue = -2320;
                elementsList.animate({ left: currentLeftValue + "px" }, 500);
                UIEl1.attr("class", "pagination__item");
                UIEl2.attr("class", "pagination__item");
                UIEl3.attr("class", "pagination__item--active");
                console.log("UIE3 ");
                console.log("currentLeftValue " + currentLeftValue);
            // }
        });

        return this;
    }

console.log("jQuery loaded");

})(jQuery);