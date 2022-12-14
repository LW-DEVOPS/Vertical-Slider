const sliderContainer = document.querySelector('.slider-container')
const sliderRight = document.querySelector('.right-slider')
const sliderLeft = document.querySelector('.left-slider')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = document.querySelector('.div').length

let activeSlideIndex = 0

sliderLeft.getElementsByClassName.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction == 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slideLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    sliderRight.style.transform =`translateY(-${activeSlideIndex * sliderHeight}px)`
    sliderRight.style.transform =`translateY(-${activeSlideIndex * sliderHeight}px)`

}