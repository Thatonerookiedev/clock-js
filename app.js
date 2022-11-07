setInterval(setClock, 1000)


const hourHand = document.querySelector('[data-hour-hand]')
const seccondHand = document.querySelector('[data-seccond-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')


function setClock() {
    const currentDate = new Date()
    const seccondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (seccondsRatio + currentDate.getMinutes()) / 60
    const hourRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(seccondHand, seccondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hourRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()