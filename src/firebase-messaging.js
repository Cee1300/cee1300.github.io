import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { getApps } from 'firebase/app';

// ✅ Only get messaging from already initialized app (from index.js)
const messaging = getMessaging(getApps()[0]);

export const requestPermission = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey: 'BPjtzlj4n2CT5XlUtXbD659N3YMKD50TsEPymuexieF3_6i5UaSS9jVDyCu6dtk5cEo321WiKDO1vw_Z2Fww7x0' // Replace with actual key
    });

    if (token) {
      console.log("FCM token:", token);
    } else {
      console.log("No registration token available.");
    }
  } catch (error) {
    console.error("Error getting FCM token:", error);
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });