const linkBtn = document.getElementById('click-link');
linkBtn.onclick = function (event) {
    startDownload();
};

document.querySelector('.tt-video-container.link').style.display = 'none';
function startDownload() {
    // Set the date we're counting down to
    var countDownDate = new Date().setSeconds(new Date().getSeconds() + 10);
    document.getElementById('click-link').style.display = 'none';

    // Update the count down every 1 second
    var x = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById('li-title').innerHTML = `다운로드 링크가 ${seconds}초 후에 나타납니다.<br>좋아요 구독 부탁드립니다 👍🏻`;
        // If the count down is over, write some text and show button to download
        if (distance < 0) {
            clearInterval(x);
            document.querySelector('.link-info-container').style.display = 'none';
            document.querySelector('.tt-video-container.link').style.display = 'flex';
        }
    }, 1000);
}
