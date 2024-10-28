const startButton = document.getElementById('startbtn');
startButton.addEventListener('mouseover', () => {
    startButton.classList.add('btnBig');

});

startButton.addEventListener('mouseout', () => {
    startButton.classList.remove('btnBig');
});

startButton.addEventListener('click', () => {
    document.location.href = "../src/quiz.html";
});