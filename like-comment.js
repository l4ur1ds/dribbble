/**
 * Module Dependencies
 */
const Nightmare = require('nightmare'),
      config    = require('./config')

/**
 * Like Interval (2 seconds)
 */
function like() {

    Nightmare({ show: false })
        .goto('https://dribbble.com/session/new')
        .type('#login', `${config.username}`)
        .type('#password', `${config.password}`)
        .wait(2500)
        .click('input[type="submit"]')
        .wait(2500)
        .goto('https://dribbble.com/shots')
        .wait(2500)
        .click('.dribbble-over')
        .wait(2500)
        .click(':not(.liked-by-current-user).likes')
        .wait(Math.floor(Math.random() * 2500) + 1)
        .evaluate(function () {
            return `Liked ${window.location.href}`
        })
        .end()
        .then(function (result) {
            console.log(result)
            console.log('Waiting 60 seconds...')
        })
        .catch(function (error) {
            console.error('Skipping...')
            console.log('Waiting 60 seconds...')
        })

        setTimeout(like, 60000)

}

/**
 * Start the Cycle
 */
like()
