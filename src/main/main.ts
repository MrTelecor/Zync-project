import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';

let mainWindow: BrowserWindow | null = null;

// Crear la ventana principal
const createMainWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Ruta del archivo preload
      contextIsolation: true, // Aísla el contexto del renderer
      nodeIntegration: false, // Evita ejecutar Node.js en el renderer
    },
  });

  // Cargar la aplicación React
  const startURL = app.isPackaged
    ? `file://${path.join(__dirname, '../renderer/index.html')}`
    : 'http://localhost:1212';
  mainWindow.loadURL(startURL);

  // Abre herramientas de desarrollo si no está empaquetado
  if (!app.isPackaged) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

// Evento cuando la aplicación está lista
app.on('ready', () => {
  createMainWindow();
});

// Cerrar la aplicación cuando todas las ventanas están cerradas
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Reabrir la ventana en macOS si se cierra
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow();
  }
});

// Ejemplo básico de comunicación IPC
ipcMain.on('example-channel', (event, arg) => {
  console.log(`Mensaje recibido desde renderer: ${arg}`);
  event.reply('example-channel-response', 'Respuesta desde main');
});
