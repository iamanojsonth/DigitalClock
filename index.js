const hour = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const ampm = document.getElementById('ampm');

const updateClock = () => {
    let hr = new Date().getHours();
    let mn = new Date().getMinutes();
    let sc = new Date().getSeconds();
    let ampm = "AM";

    if(hr > 12){
        h=h-12;
        ampm = PM;
    }

    hour.innerHTML = hr;
    min.innerHTML = mn;
    sec.innerHTML = sc;
    ampm.innerHTML = ap;

    setTimeout(() => {
        updateClock()
    }, 1000);
}

updateClock();