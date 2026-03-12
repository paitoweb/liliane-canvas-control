/* eslint-disable require-atomic-updates */
const React = require('react')
const {
    root,
    Artboard,
} = require('scenegraph')
const viewport = window.require('viewport')
const { editDocument } = window.require('application')
const os = window.require('os')

require('./App.css')
require('@bit/paitoweb.uibox.uibox-xd/dist/uibox.css')

const Home = require('./containers/Home')

var lastZoom

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            os: os.platform(),
            showControls: true,
            currentStatus: 'waiting',
            focusedArtboardGuid: null,
            selectedElemGuid: null,
            panAmount: 10,
        }

        this.documentStateChanged = this.documentStateChanged.bind(this)
    }

    documentStateChanged(selection) {

        let focusedArtboardGuid
        let selectedElemGuid
        let showControls = false

        if (root && root.children && root.children.length > 0) {
            showControls = true
        }

        if (selection.items.length > 0) {

            if (selection.items.length === 1) {
                selectedElemGuid = selection.items[0].guid
            }

            if (selection.items[0] instanceof Artboard) {
                focusedArtboardGuid = selection.items[0].guid
            } else if (selection.focusedArtboard && selection.focusedArtboard) {
                focusedArtboardGuid = selection.focusedArtboard.guid
            }
        }

        this.setState({
            showControls,
            focusedArtboardGuid,
            selectedElemGuid,
        });
    }

    /**
     * A simple time counter
     * @param {int} time milliseconds
     */
    async awaiter(time) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, time);
        })
    }



    /**
     * 
     * ======== MOVE =========
     * 
     */



    /**
     * To start the move operation
     * @param {string} direction up, right, bottom or left
     * @param {float} amount percentage of viewport size to move
     */
    async onMoveDown(direction, amount) {
        if (this.state.currentStatus === 'waiting') {
            this.setState({
                currentStatus: 'moving'
            }, async () => {
                let token = Date.now()
                await editDocument({ editLabel: "Liliane Canvas Control: Moving", mergeId: token }, async () => {

                    await this.doMove(
                        direction,
                        {
                            x: viewport.bounds.x,
                            y: viewport.bounds.y,
                            width: viewport.bounds.width,
                            height: viewport.bounds.height,
                        },
                        amount,
                        0
                    )
                });
            })
        } else {
            this.setState({
                currentStatus: 'waiting'
            });
        }
    }

    /**
     * To execute the canvas movement
     * @param {string} direction up, right, bottom or left
     * @param {Object} vp copy of current viewport
     * @param {float} amount percentage of viewport size to move
     */
    async doMove(direction, vp, amount, times) {
        let resp
        let npv = this.moveCalculate(direction, vp, amount)
        if (vp.x !== npv.x || vp.y !== npv.y) {
            await viewport.scrollIntoView(npv.x, npv.y, npv.width, npv.height);
            vp = npv
        }
        await this.awaiter(100)
        if (this.state.currentStatus === 'moving') {
            if (this.state.os === 'win10' && times < 6) {
                await this.doMove(direction, vp, amount, ++times)
            } else if (this.state.os === 'darwin') {
                await this.doMove(direction, vp, amount, 0)
            } else {
                this.setState({
                    currentStatus: 'waiting'
                }, () => {
                    return true
                });
            }
        } else {
            resp = true
        }
        return resp
    }

    /**
     * To calculate new move bounds to viewport
     * @param {string} direction up, right, bottom or left
     * @param {Object} vp Copy of current viewport
     * @param {float} amount percentage of viewport size to move
     */
    moveCalculate(direction, vp, amount) {
        let nvp = {
            x: vp.x,
            y: vp.y,
            width: vp.width,
            height: vp.height,
        }
        let wf = (nvp.width * amount) / 100
        let hf = (nvp.height * amount) / 100
        let x = nvp.x
        let y = nvp.y

        if (direction === 'up') {
            y -= hf
        }
        else if (direction === 'right') {
            x += wf
        }
        else if (direction === 'down') {
            y += hf
        }
        else if (direction === 'left') {
            x -= wf
        }
        nvp.x = x
        nvp.y = y
        nvp.width = nvp.width
        nvp.height = nvp.height

        return nvp
    }

    /**
     * To stop the move operation
     */
    async onMoveUp() {
        this.setState({
            currentStatus: 'waiting'
        });
    }



    /**
     * 
     * ======== ZOOM =========
     * 
     */



    /**
     * To start the zoom operation
     * @param {string} direction + or -
     */
    async onZoomDown(direction) {
        if (this.state.currentStatus === 'waiting') {
            this.setState({
                currentStatus: 'zooming'
            }, async () => {
                let token = Date.now()
                await editDocument({ editLabel: "Liliane Canvas Control: Zooming", mergeId: token }, async () => {

                    await this.doZoom(direction, 0)

                });
            })
        } else {
            this.setState({
                currentStatus: 'waiting'
            });
        }
    }

    /**
     * To execute the zoom canvas
     * @param {string} direction + or -
     */
    async doZoom(direction, times) {
        let resp
        let zoom = this.zoomCalculate(direction, viewport)
        if (!lastZoom || lastZoom.w !== zoom.w) {
            await viewport.zoomToRect(zoom.x, zoom.y, zoom.w, zoom.h);
            lastZoom = zoom
        }
        await this.awaiter(100)
        if (this.state.currentStatus === 'zooming') {
            if (this.state.os === 'win10' && times < 6) {
                await this.doZoom(direction, ++times)
            } else if (this.state.os === 'darwin') {
                await this.doZoom(direction, 0)
            } else {
                this.setState({
                    currentStatus: 'waiting'
                }, () => {
                    return true
                });
            }
        } else {
            resp = true
        }
        return resp
    }

    /**
     * To calculate new zoom bounds to viewport
     * @param {string} direction + or -
     * @param {Object} viewport current viewport
     */
    zoomCalculate(direction, viewport) {
        let vpw = viewport.zoomFactor * viewport.bounds.width
        let vph = viewport.zoomFactor * viewport.bounds.height


        let currentZoomFactor = (viewport.bounds.width / vpw)

        let applyFactor = currentZoomFactor
        let nw
        if (direction === '+') {
            nw = viewport.bounds.width - (vpw / 3.2 * currentZoomFactor)
        } else if (direction === '-') {
            nw = viewport.bounds.width
        }

        applyFactor = nw / vpw

        if (applyFactor < 0.025) {
            applyFactor = 0.025
        } else if (applyFactor > 30) {
            applyFactor = 30
        }

        let w = applyFactor * vpw
        let h = applyFactor * vph
        let wf = viewport.bounds.width - w
        let hf = viewport.bounds.height - h
        let x = viewport.bounds.x + wf / 2
        let y = viewport.bounds.y + hf / 2

        return {
            x: x,
            y: y,
            w: w,
            h: h,
        }
    }

    /**
     * To stop the zoom operation
     */
    async onZoomUp() {
        this.setState({
            currentStatus: 'waiting'
        });
    }



    /**
     * 
     * ======== FOCUS =========
     * 
     */



    /**
     * To focus the selected target on canvas
     * @param {string} target selection or artboard
     */
    async onFocus(target) {
        await editDocument(async (selection) => {
            if (target === 'selection') {
                if (selection.items.length === 1) {
                    let vpw = selection.items[0].globalBounds.width + selection.items[0].globalBounds.width * 0.2
                    let vph = selection.items[0].globalBounds.height + selection.items[0].globalBounds.height * 0.2
                    let vpx = vpw / 2 - selection.items[0].globalBounds.width / 2
                    let vpy = vph / 2 - selection.items[0].globalBounds.height / 2
                    viewport.zoomToRect(
                        selection.items[0].globalBounds.x - vpx,
                        selection.items[0].globalBounds.y - vpy,
                        vpw,
                        vph
                    );
                }
            } else if (target === 'artboard') {
                if (selection.items.length > 0 && selection.focusedArtboard) {
                    await viewport.zoomToRect(
                        selection.focusedArtboard.globalBounds.x,
                        selection.focusedArtboard.globalBounds.y,
                        selection.focusedArtboard.globalBounds.width,
                        selection.focusedArtboard.globalBounds.height
                    );
                }
            }
        })
    }

    onPanAmount(value) {
        this.setState({
            panAmount: value
        });
    }

    render() {
        return <panel className="panel" draggable="false">{
            <Home
                draggable="false"
                showControls={this.state.showControls}
                currentStatus={this.state.currentStatus}
                focusedArtboardGuid={this.state.focusedArtboardGuid}
                selectedElemGuid={this.state.selectedElemGuid}
                onMoveDown={this.onMoveDown.bind(this)}
                onMoveUp={this.onMoveUp.bind(this)}
                onZoomDown={this.onZoomDown.bind(this)}
                onZoomUp={this.onZoomUp.bind(this)}
                onPanAmount={this.onPanAmount.bind(this)}
                onFocus={this.onFocus.bind(this)}
            />
        }</panel>
    }
}

module.exports = App
