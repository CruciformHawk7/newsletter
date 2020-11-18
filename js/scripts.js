var currentPoint = 0;
var size;
var thisdata;

var openGallery = (selection) => {
    $('.gallery-back').fadeIn();
    thisdata = data[selection];
    size = thisdata.length;
    currentPoint = 0;
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