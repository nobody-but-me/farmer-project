

import { BrowserWindow } from 'electron';


export default class MAIN {
    static _window: Electron.BrowserWindow;
    static _app: Electron.App;
    static _browser_window;
    
    private static _on_window_all_closed() {
	if (process.platform !== 'darwin') {
	    MAIN._app.quit();
	}
    }
    private static _on_close() {
	MAIN._window = null;
    }
    private static _on_ready() {
	MAIN._window = new MAIN._browser_window({
	    autoHideMenuBar: true,
	    transparent: true,
	    resizable: false,
	    frame: true,
	    height: 600,
	    width: 800
	});
	MAIN._window.loadFile('../index.html');
	MAIN._window.setAlwaysOnTop(true, 'pop-up-menu');
	MAIN._window.on('closed', MAIN._on_close);
    }
    
    static _main(_app_: Electron.App, _browser_window_: typeof BrowserWindow) {
	MAIN._browser_window = _browser_window_;
	MAIN._app = _app_;
	
	MAIN._app.on('window-all-closed', MAIN._on_window_all_closed);
	MAIN._app.on('ready', MAIN._on_ready);
    }
}

