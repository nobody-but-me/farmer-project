"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MAIN = /** @class */ (function () {
    function MAIN() {
    }
    MAIN._on_window_all_closed = function () {
        if (process.platform !== 'darwin') {
            MAIN._app.quit();
        }
    };
    MAIN._on_close = function () {
        MAIN._window = null;
    };
    MAIN._on_ready = function () {
        MAIN._window = new MAIN._browser_window({
            autoHideMenuBar: true,
            transparent: true,
            resizable: false,
            frame: true,
            height: 600,
            width: 800
        });
        MAIN._window.setAlwaysOnTop(true, 'pop-up-menu');
        MAIN._window.on('closed', MAIN._on_close);
        MAIN._window.loadFile('../index.html');
    };
    MAIN._main = function (_app_, _browser_window_) {
        MAIN._browser_window = _browser_window_;
        MAIN._app = _app_;
        MAIN._app.on('window-all-closed', MAIN._on_window_all_closed);
        MAIN._app.on('ready', MAIN._on_ready);
    };
    return MAIN;
}());
exports.default = MAIN;
//# sourceMappingURL=main.js.map