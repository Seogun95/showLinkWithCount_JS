const linkBtn = document.getElementById('click-link');
linkBtn.onclick = function (event) {
    startDownload();
};

document.querySelector('.tt-video-container.link').style.display = 'none';
$('.tt-video-container.link').prepend(
    '<div class="li-title-coffee" style="margin-bottom: 20px;"><button id="coffeeBtn"> <span class="icon-coffee" aria-label="coffee"></span> <span>커피 한 잔 선물하기</span></button></div>'
);
function startDownload() {
    // Set the date we're counting down to
    var countDownDate = new Date().setSeconds(new Date().getSeconds() + 14);
    document.getElementById('click-link').style.display = 'none';
    // Update the count down every 1 second
    var x = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById('li-title').innerHTML = `다운로드 링크가 ${seconds}초 후에 나타납니다.<br>커피 한 잔 후원은 저에게 아주 큰 힘이 됩니다. ☕️<br>좋아요 구독 감사드립니다. 👍🏻`;
        // If the count down is over, write some text and show button to download
        if (distance < 0) {
            clearInterval(x);
            document.querySelector('.link-info-container').style.display = 'none';
            document.querySelector('.tt-video-container.link').style.display = 'flex';
        }
    }, 1000);
}
