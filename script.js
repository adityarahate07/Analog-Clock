

    function clock() {
    let hour = document.querySelector(".hour");
    let minute = document.querySelector(".minute");
    let second = document.querySelector(".second");

    let date = new Date();

    let hr = date.getHours();
    let mint = date.getMinutes();
    let sec = date.getSeconds();

    // rotation calculations
    let hrRotation = 30 * hr + mint / 2;   // smooth hour movement
    let minRotation = 6 * mint;
    let secRotation = 6 * sec;

    hour.style.transform = `rotateZ(${hrRotation}deg)`;
    minute.style.transform = `rotateZ(${minRotation}deg)`;
    second.style.transform = `rotateZ(${secRotation}deg)`;
}

clock();
setInterval(clock, 1000);