let play, back, forth, repeat, shuffle, options, returnPage, optionArea;

// Variables

play = document.querySelector(".play-button");
back = document.querySelector(".fa-step-backward");
forth = document.querySelector(".fa-step-forward");
repeat = document.querySelector(".fa-redo-alt");
shuffle = document.querySelector(".fa-random");

options = document.querySelector(".fa-ellipsis-h");
optionArea = document.querySelector(".option-area");
returnPage = document.querySelector(".fa-angle-left");

// Functions - Methods
returnPage.addEventListener("click", () => {
    return (location.href = "https://github.com/Nyyu/01-Test");
});

play.addEventListener("click", () => {
    if (
        play.innerHTML ==
        '<i class="fas fa-play-circle fa-6x" aria-hidden="true"></i>'
    ) {
        play.innerHTML = '<i class="fas fa-pause-circle fa-6x"></i>';
    } else {
        play.innerHTML = '<i class="fas fa-play-circle fa-6x"></i>';
    }
});

options.addEventListener("click", function () {
    if (optionArea.classList.contains("visible")) {
        optionArea.classList.remove("visible");
    } else {
        optionArea.classList.add("visible");
    }
});
