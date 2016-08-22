/**
 * Module Dependencies
 */
const Nightmare = require('nightmare'),
      config    = require('./config')

/**
 * Like Interval
 */
function like() {

    Nightmare({ show: true })
        .goto('https://dribbble.com/session/new')
        .type('#login', `${config.username}`)
        .type('#password', `${config.password}`)
        .wait(2500)
        .click('input[type="submit"]')
        .wait(2500)
        .goto('https://dribbble.com/shots?sort=recent')
        .wait(2500)
        .click('.dribbble-over')
        .wait(2500)
        .click(':not(.current-user-likes).like-shot')
        .wait(Math.floor(Math.random() * 2500) + 1)
        .evaluate(function () {
            return `Liked ${window.location.href}`
        })
        .end()
        .then(function (result) {
            console.log(result)
            console.log('Waiting 144000 milliseconds...')
        })
        .catch(function (error) {
            console.error('Skipping...')
            console.log('Waiting 144000 milliseconds...')
        })

        setTimeout(like, 144000)

}

/**
 * Start the Cycle
 */
like()
