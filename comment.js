/**
 * Module Dependencies
 */
const Nightmare = require('nightmare'),
      config    = require('./config')

/**
 * Comments
 */
const comments = [
    'Great!',
    'Lovely!',
    'Nicely done!',
    'Solid!',
    'Well done!',
    'Wow!'
]

/**
 * Comment Interval (10 minutes)
 */
function comment() {

    Nightmare({ show: false })
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
        .type('#comment_text', comments[Math.floor(Math.random() * comments.length)])
        .click('#post-comment-btn')
        .wait(Math.floor(Math.random() * 2500) + 1)
        .evaluate(function () {
            return `Commented on ${window.location.href}`
        })
        .end()
        .then(function (result) {
            console.log(result)
            console.log('Waiting 10 minutes...')
        })
        .catch(function (error) {
            console.error('Failed to execute:', error)
        })

    setTimeout(comment, 600000)

}

/**
 * Start the Cycle
 */
comment()
