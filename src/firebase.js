// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDUUGTtZDOsL4hJvP59jdhUDMleN_W1alE',
  authDomain: 'jornada-milhas-7f310.firebaseapp.com',
  projectId: 'jornada-milhas-7f310',
  storageBucket: 'jornada-milhas-7f310.firebasestorage.app',
  messagingSenderId: '721156681442',
  appId: '1:721156681442:web:0efa4c2e203efbcab638bb',
};

// Initialize Firebase
initializeApp(firebaseConfig);
const messaging = getMessaging();

export const requestToken = async () => {
  try {
    const currentToken = await getToken(messaging, {
      vapidKey:
        'BEBz45kmIMtB-H33MhBTedzmn_rH4Wbw7oW5_Mc4u8lLuklIP2VuYxBErl2F6yGQMOmiBmluRpG8jHm_Qr-VpXs',
    });
    if (currentToken) {
      console.log(currentToken);
    } else {
      console.log('Nenhum token recebido');
    }
  } catch (err) {
    console.log(err);
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log('Notificação em primeiro plano', payload.notification);

      resolve(payload);
    });
  });
