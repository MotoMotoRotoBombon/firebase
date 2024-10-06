// FireBase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Importa la app de Express con el nuevo "export default"
import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDEtNtkVmOWNH2GB29M962jywNnH0Ljvzc",
  authDomain: "clase-2024-10-04.firebaseapp.com",
  projectId: "clase-2024-10-04",
  storageBucket: "clase-2024-10-04.appspot.com",
  messagingSenderId: "851740664528",
  appId: "1:851740664528:web:64614997ac8f7f6e7db4d5",
  measurementId: "G-DY9YJ0H16B"
};

// Inicializamos Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
