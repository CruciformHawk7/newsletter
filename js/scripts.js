var currentPoint = 0;
var size;
var thisdata;

var openGallery = (selection) => {
    $('.gallery-back').fadeIn();
    currentPoint = 0;
    thisdata = data[selection];
    size = thisdata.length;
    $('.right-button').fadeIn();
    $('.left-button').fadeIn();
    updateImage();
};

var updateImage = () => {
    $('.image-canvas').attr('src', thisdata[currentPoint]);
    if (currentPoint == 0) 
        $('.left-button').fadeOut();
    else if (currentPoint >= size-1) 
        $('.right-button').fadeOut();
    else {
        $('.right-button').fadeIn();
        $('.left-button').fadeIn();
    }
}

$().ready(() => {
    $('.close-gallery').click(() => {
        $('.gallery-back').fadeOut();
    });
    $('.right-button').click(() => {
        if (currentPoint < size) {
            currentPoint++;
            updateImage();
        }
    })
    $('.left-button').click(() => {
        if (currentPoint != 0)  {
            currentPoint--;
            updateImage();
        }
    })
});