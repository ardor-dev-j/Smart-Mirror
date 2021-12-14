'use strict'

const {app, BrowserWindow, ipcMain} = require('electron')

// use jquery
// let $ = require('jquery')
const path = require('path')

let win

function createWindow(){
    win = new BrowserWindow({
        fullscreen: true,
        backgroundColor: '#000000',
        frame: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })


    win.loadFile('index.html')

    win.webContents.openDevTools()
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