'use strict'

const {app, BrowserWindow} = require('electron')

function createWindow(){
    const win = new BrowserWindow({
        fullscreen: true,
        backgroundColor: '#000000',
        frame: false
    })

    win.loadFile('index.html')
}

function createToDo(){

}

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
    createWindow()


app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})