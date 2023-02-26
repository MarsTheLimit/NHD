imageList = [
    "url(./images/nes.png)",
    "url(./images/atari2600.png)",
    "url(./images/pet.png)",
    "url(./images/bbcmicro.png)",
    "url(./images/apple2.png)",
    "url(./images/commodore64.png)"
]
captionsList = [
    "A photo of the NES<br/> <i><a href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt5_AE_71x0_dWdlRFxyiFywAei10ElpT4Cp7cHAnPboYJkY9ypkIj4DlekwJ6avqp6wU&usqp=CAU' target='_blank'>Photo from https://encrypted-tbn0.gstatic.com</a></i>",
    "The Atari 2600<br/> <i><a href='https://spectrum.ieee.org/media-library/brown-and-black-gaming-console-with-atari-logo-labeled-video-computer-system.jpg?id=28135404&width=1200&height=655' target='_blank'>Photo from https://spectrum.ieee.org</a></i>",
    "A photo of the Commodore PET<br/> <i><a href='https://oldcomputers.net/pics/pet2001-black.jpg' target='_blank'>Photo from https://oldcomputers.net</a></i>",
    "A picture of the BBC Micro<br/> <i><a href='https://live.staticflickr.com/2114/2387709961_037ec4f18e_b.jpg' target='_blank'>Photo from https://live.staticflickr.com</a></i>",
    "The Apple II<br/> <i><a href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ9PJJoVXaOoHcntVi4GOen-8Np90g8Frjm8nDsC5NvtqEGhh5pJEukx_wNn-9ugpMU9Q&usqp=CAU' target='_blank'>Photo from https://encrypted-tbn0.gstatic.com</a></i>",
    "The Commodore 64<br/> <i><a href='https://history-computer.com/wp-content/uploads/2021/01/C64combo.jpg' target='_blank'>Photo from https://history-computer.com</a></i>",
]
var photoIndex = 0
switchImage(photoIndex);

function switchImage(photo) {
    document.getElementById("photo").style.backgroundImage = imageList[photo];
    document.getElementById("photoCaption").innerHTML = captionsList[photoIndex];
}

function scrollLeft() {
    photoIndex -= 1
    if (photoIndex < 0) {
        photoIndex = imageList.length - 1
    }
    switchImage(photoIndex);
    console.log(photoIndex);
}

function scrollRight() {
    photoIndex += 1
    if (photoIndex > imageList.length - 1) {
        photoIndex =  0
    }
    switchImage(photoIndex);
}

document.getElementById("leftButton").addEventListener("click", scrollLeft);
document.getElementById("rightButton").addEventListener("click", scrollRight);