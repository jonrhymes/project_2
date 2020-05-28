// console.log('hi')
// console.log($)

/***** Modified from Jerrica's Corgi Carousel: https://git.generalassemb.ly/Software-Engineering-Immersive-Remote/SEIR-Nova/tree/2f19aa4471b2e22ec2222ab8b52112af0ebced0e/unit_1/w03d04/morning_exercise *****/ 

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