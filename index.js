let time = +prompt('What time is now?')

const log = console.log


if (time < 0){
    log('There is no such time')
} else if (time > 24){
    log('There is no such time')
} else if (time < 6){
    log('Night')
} else if (time < 12){
    log('Morning')
} else if (time < 18){
    log('Afrernoon')
} else if (tine < 24){
    log('Evening')
}