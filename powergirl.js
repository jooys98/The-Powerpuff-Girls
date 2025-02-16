




const girls = document.querySelectorAll('.container');
document.addEventListener("mousemove", (e) => {


    const mouseX = e.clientX;
    const mouseY = e.clientY;

    girls.forEach((girl, index) => {

        const offsetX = (Math.random() - 0.5) * 5; // -50 to 50
        const offsetY = (Math.random() - 0.5) * 10; // -50 to 50

        const delay = index * 900;
        setTimeout(() => {
            girl.style.left = (mouseX + offsetX) + 'px';
            girl.style.top = (mouseY + offsetY) + 'px';
        }, delay);


    });

    const shadows = document.querySelectorAll('.shadow');

    shadows.forEach((shadow) => {
        shadow.style.backgroundPosition = `${mouseX / 5 + mouseY / 5}%;`;
        shadow.style.transform = `translateY(${(mouseY / 5) - 50}px) translateX(${(mouseX / 5) - 50}px)`;
    });
});


let playAudio = null; //재생중인 오디오를 저장할 변수
let audioIndex = 0; //재생중인 오디오 파일의 인덱스(갯수를 의미)

const audioFiles = [  //오디오 리스트 배열
    "y2kmusic/Eyedi_&New.mp3",
    "y2kmusic/Free Style_y.mp3",
    "y2kmusic/H.O.T_Candy.mp3",
    "y2kmusic/NewJeans_Supernatural.mp3",
    "y2kmusic/NewJins_'RightNow'.mp3",
    "y2kmusic/S.E.s_JustAFeeling.mp3",
    "y2kmusic/S.E.S_DreamsComeTrue.mp3"
];


document.getElementById("mp3play").addEventListener("click", function () {

    if (playAudio) {
        playAudio.pause();
        playAudio.currentTime = 0;
        playAudio = null;
        audioIndex = 0;

    } if(audioIndex===audioFiles.length) {
        playNextAudio();
        
    }else {
        playAudio = new Audio(audioFiles[0]);
        playAudio.play();
    }

    function playNextAudio() {
        if (audioIndex < audioFiles.length) {
            playAudio = new Audio(audioFiles[audioIndex]);
            playAudio.play();

            playAudio.addEventListener("ended", function () {
                audioIndex++;
                playNextAudio();
            })
        }
    }
});