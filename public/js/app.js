// console.log('hi')
// console.log($)

// Modified from Jerrica's Corgi Carousel

$(() => {
    let currentImgIndex = 0

    const numOfImages = $('.show-images').children().length - 1
    console.log(numOfImages)
    
    $('.show-images').on('click', () => {
        // hide the current image
    $('.show-images').children().eq(currentImgIndex).css('display', 'none')
    
    if(currentImgIndex < numOfImages) {
    // increment counter by 1
        currentImgIndex++
    }else{
        currentImgIndex = 0
    }
            // show next image
    $('.show-images').children().eq(currentImgIndex).css('display', 'block')
    }) 
});