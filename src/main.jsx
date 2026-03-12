require('./util/reactShim')

const React = require('react')
const ReactDOM = require('react-dom')

const App = require('./App')
const PanelController = require('./controllers/PanelController')

const liliane = new PanelController(App)

module.exports = {
    panels: {
        liliane: liliane,
    },
}
