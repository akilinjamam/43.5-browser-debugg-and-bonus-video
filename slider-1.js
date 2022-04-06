const images = [
    'images/img-1.jpg',
    'images/img-2.jpg',
    'images/img-3.jpg',
    'images/img-4.jpg',
    'images/img-5.jpg',
    'images/img-6.jpg',
    'images/img-7.jpg',
    'images/img-8.jpg',
];

let imageIndex = 0;
const element = document.getElementById('the-img')

setInterval(() => {

    if (imageIndex >= images.length) {
        imageIndex = 0
    }
    // console.log('before', imageIndex)

    const imgUrl = images[imageIndex];
    element.setAttribute('src', imgUrl)
    imageIndex++;
    // console.log('after', imageIndex)

}, 1000);
