const React = require('react')
require('./Home.css')

const { Box, Spacer, Textinput, Divider, Alert } = require('@bit/paitoweb.uibox.uibox-xd')

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            panAmount: 10,
        }

        this.onZoomOutClick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            return false
        }
        this.onZoomOutOver = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            return false
        }
        this.onZoomOutOut = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            return false
        }
        this.onZoomOutDown = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            if (this.props.currentStatus === 'waiting' && this.props.showControls === true) {
                this.props.onZoomDown('-', e.currentTarget)
            }
            return false
        }
        this.onZoomOutUp = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            if (this.props.showControls === true) {
                this.props.onZoomUp()
            }
            return false
        }



        this.onZoomInClick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            return false
        }
        this.onZoomInOver = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            return false
        }
        this.onZoomInOut = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            return false
        }
        this.onZoomInDown = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            if (this.props.currentStatus === 'waiting' && this.props.showControls === true) {
                this.props.onZoomDown('+')
            }
            return false
        }
        this.onZoomInUp = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            if (this.props.showControls === true) {
                this.props.onZoomUp()
            }
            return false
        }



        this.onMoveUpClick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            return false
        }
        this.onMoveUpOver = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            return false
        }
        this.onMoveUpOut = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            return false
        }
        this.onMoveUpDown = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            if (this.props.currentStatus === 'waiting' && this.props.showControls === true) {
                this.props.onMoveDown('up', this.state.panAmount)
            }
            return false
        }
        this.onMoveUpUp = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            if (this.props.showControls === true) {
                this.props.onMoveUp()
            }
            return false
        }



        this.onMoveLeftClick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            return false
        }
        this.onMoveLeftOver = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            return false
        }
        this.onMoveLeftOut = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            return false
        }
        this.onMoveLeftDown = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            if (this.props.currentStatus === 'waiting' && this.props.showControls === true) {
                this.props.onMoveDown('left', this.state.panAmount)
            }
            return false
        }
        this.onMoveLeftUp = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            if (this.props.showControls === true) {
                this.props.onMoveUp()
            }
            return false
        }



        this.onMoveRightClick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            return false
        }
        this.onMoveRightOver = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            return false
        }
        this.onMoveRightOut = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            return false
        }
        this.onMoveRightDown = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            if (this.props.currentStatus === 'waiting' && this.props.showControls === true) {
                this.props.onMoveDown('right', this.state.panAmount)
            }
            return false
        }
        this.onMoveRightUp = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            if (this.props.showControls === true) {
                this.props.onMoveUp()
            }
            return false
        }



        this.onMoveDownClick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            return false
        }
        this.onMoveDownOver = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            return false
        }
        this.onMoveDownOut = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            return false
        }
        this.onMoveDownDown = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            if (this.props.currentStatus === 'waiting' && this.props.showControls === true) {
                this.props.onMoveDown('down', this.state.panAmount)
            }
            return false
        }
        this.onMoveDownUp = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            if (this.props.showControls === true) {
                this.props.onMoveUp()
            }
            return false
        }



        this.onPanAmountChange = (e) => {
            let value = e.currentTarget.value
            this.setState({
                panAmount: value
            }, () => {
                this.props.onPanAmount(value)
            });
        }
    }

    onFocus(target) {
        if (target === 'artboard' && this.props.focusedArtboardGuid && this.props.showControls === true) {
            this.props.onFocus(target)
        } else if (target === 'selection' && this.props.selectedElemGuid && this.props.showControls === true) {
            this.props.onFocus(target)
        }
    }

    render() {
        let scrollArtboardDisabledClass = 'scroll-artboard-disabled'
        if (this.props.focusedArtboardGuid) {
            scrollArtboardDisabledClass = ''
        }

        let scrollSelectionDisabledClass = 'scroll-selection-disabled'
        if (this.props.selectedElemGuid) {
            scrollSelectionDisabledClass = ''
        }
        let notifications
        let generalOpacity = 1
        if (this.props.showControls === false) {
            generalOpacity = 0.3
            notifications = <Alert
                width="100%"
                height="auto"
                severity="warning"
                action={<div></div>}
            >
                To use canvas controls, the document cannot be empty.
            </Alert>
        }
        return (
            <div className="ub-box ub-full-size ub-align-v-t-c ub-wrap ub-p-t-10">
                <p className="info-control">Click on the buttons below to control the canvas:</p>
                <Spacer size="30px" direction="v" />
                <div className="main-controls">
                    <Box
                        direction="h"
                        width="100%"
                        height="auto"
                        space="10px"
                        padding="0px 0px 0px 0px"
                        align="c-c"
                        wrap={false}
                    >
                        <div className="zoom-out" draggable="false" style={{ opacity: generalOpacity }}>
                            <img className="hover" src={generalOpacity === 1 ? "../../images/zoom-out-hover.png" : "../../images/zoom-out.png"} />
                            <img className="default" src="../../images/zoom-out.png" />
                            <img
                                className="lente"
                                src="../../images/lente.png"
                                title="Zoom Out"
                                draggable="false"
                                onClick={this.onZoomOutClick}
                                onMouseOver={this.onZoomOutOver}
                                onMouseOut={this.onZoomOutOut}
                                onMouseDown={this.onZoomOutDown}
                                onMouseUp={this.onZoomOutUp}
                            />
                        </div>
                        <div className="move-up" draggable="false" style={{ opacity: generalOpacity }}>
                            <img className="hover" src={generalOpacity === 1 ? "../../images/move-up-hover.png" : "../../images/move-up.png"} />
                            <img className="default" src="../../images/move-up.png" />
                            <img
                                className="lente"
                                src="../../images/lente.png"
                                title="Move to up"
                                onClick={this.onMoveUpClick}
                                draggable="false"
                                onMouseOver={this.onMoveUpOver}
                                onMouseOut={this.onMoveUpOut}
                                onMouseDown={this.onMoveUpDown}
                                onMouseUp={this.onMoveUpUp}
                            />
                        </div>
                        <div className="zoom-in" draggable="false" style={{ opacity: generalOpacity }}>
                            <img className="hover" src={generalOpacity === 1 ? "../../images/zoom-in-hover.png" : "../../images/zoom-in.png"} />
                            <img className="default" src="../../images/zoom-in.png" />
                            <img
                                className="lente"
                                src="../../images/lente.png"
                                title="Zoom In"
                                onClick={this.onZoomInClick}
                                draggable="false"
                                onMouseOver={this.onZoomInOver}
                                onMouseOut={this.onZoomInOut}
                                onMouseDown={this.onZoomInDown}
                                onMouseUp={this.onZoomInUp}
                            />
                        </div>
                    </Box>
                    <Spacer size="16px" direction="v" />
                    <Box
                        direction="h"
                        width="100%"
                        height="auto"
                        space="10px"
                        padding="0px 0px 0px 0px"
                        align="c-c"
                        wrap={false}
                    >
                        <div className="move-left" draggable="false" style={{ opacity: generalOpacity }}>
                            <img className="hover" src={generalOpacity === 1 ? "../../images/move-left-hover.png" : "../../images/move-left.png"} />
                            <img className="default" src="../../images/move-left.png" />
                            <img
                                className="lente"
                                src="../../images/lente.png"
                                title="Move to left"
                                onClick={this.onMoveLeftClick}
                                draggable="false"
                                onMouseOver={this.onMoveLeftOver}
                                onMouseOut={this.onMoveLeftOut}
                                onMouseDown={this.onMoveLeftDown}
                                onMouseUp={this.onMoveLeftUp}
                            />
                        </div>
                        <div className="center-placeholder" aria-hidden="true" />
                        <div className="move-right" draggable="false" style={{ opacity: generalOpacity }}>
                            <img className="hover" src={generalOpacity === 1 ? "../../images/move-right-hover.png" : "../../images/move-right.png"} />
                            <img className="default" src="../../images/move-right.png" />
                            <img
                                className="lente"
                                src="../../images/lente.png"
                                title="Move to right"
                                onClick={this.onMoveRightClick}
                                draggable="false"
                                onMouseOver={this.onMoveRightOver}
                                onMouseOut={this.onMoveRightOut}
                                onMouseDown={this.onMoveRightDown}
                                onMouseUp={this.onMoveRightUp}
                            />
                        </div>
                    </Box>
                    <Spacer size="16px" direction="v" />
                    <Box
                        direction="h"
                        width="100%"
                        height="auto"
                        space="10px"
                        padding="0px 0px 0px 0px"
                        align="c-c"
                        wrap={false}
                    >
                        <div className={`scroll-selection ${scrollSelectionDisabledClass}`} draggable="false">
                            <img className="hover" src={generalOpacity === 1 ? "../../images/scroll-selection-hover.png" : "../../images/scroll-selection.png"} />
                            <img className="default" src="../../images/scroll-selection.png" />
                            <img
                                className="lente"
                                src="../../images/lente.png"
                                title="Zoom to selection"
                                onClick={this.onFocus.bind(this, 'selection')}
                                draggable="false"
                            />
                        </div>
                        <div className="move-down" draggable="false" style={{ opacity: generalOpacity }}>
                            <img className="hover" src={generalOpacity === 1 ? "../../images/move-down-hover.png" : "../../images/move-down.png"} />
                            <img className="default" src="../../images/move-down.png" />
                            <img
                                className="lente"
                                src="../../images/lente.png"
                                title="Move to down"
                                onClick={this.onMoveDownClick}
                                draggable="false"
                                onMouseOver={this.onMoveDownOver}
                                onMouseOut={this.onMoveDownOut}
                                onMouseDown={this.onMoveDownDown}
                                onMouseUp={this.onMoveDownUp}
                            />
                        </div>
                        <div className={`scroll-artboard ${scrollArtboardDisabledClass}`} draggable="false">
                            <img className="hover" src={generalOpacity === 1 ? "../../images/scroll-artboard-hover.png" : "../../images/scroll-artboard.png"} />
                            <img className="default" src="../../images/scroll-artboard.png" />
                            <img
                                className="lente"
                                src="../../images/lente.png"
                                title="Zoom to focused artboard"
                                onClick={this.onFocus.bind(this, 'artboard')}
                                draggable="false"
                            />
                        </div>
                    </Box>
                </div>
                <Spacer size="30px" direction="v" />
                <p className="ub-full-h info-pan">Movement Pan Amount (% of viewport)</p>
                <div className="ub-box ub-align-h-t-l ub-full-h ub-wrap ub-m-t-0">
                    <input
                        className="ub-flex-1"
                        style={{ marginLeft: '0px', minWidth: '160px' }}
                        type="range"
                        min={5}
                        max={100}
                        step={5}
                        disabled={generalOpacity !== 1}
                        value={this.state.panAmount}
                        onChange={this.onPanAmountChange}
                    />
                    <Textinput
                        type="number"
                        width="50px"
                        height="32px"
                        value={this.state.panAmount}
                        step="5"
                        min="5"
                        max="100"
                        disabled={generalOpacity !== 1}
                        onChange={this.onPanAmountChange}
                    />
                </div>
                {notifications}
                <Spacer flex="1" direction="v" />
                <Divider />
                <div className="ub-box ub-full-h ub-align-h-t-c ub-fc-gray-500">
                    <a style={{ marginRight: '10px' }} href="https://liliane-canvas-control.webflow.io/">
                        liliane-canvas-control.webflow.io
                    </a>
                    <span>Version 1.0.12</span>
                </div>
            </div>
        )
    }
}

module.exports = Home
