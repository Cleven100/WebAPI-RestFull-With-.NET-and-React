import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAoLx-rQpdGKpa8qgGRBC7vPGfhyuq8wfA",
    authDomain: "ecommerce-cnshop.firebaseapp.com",
    projectId: "ecommerce-cnshop",
    storageBucket: "ecommerce-cnshop.appspot.com",
    messagingSenderId: "1092200058696",
    appId: "1:1092200058696:web:99113d04f42c029b89ad7d"
  };

  const firebaseApp = !firebase.apps.lenght ? firebase.initializeApp(firebaseConfig): firebase.app();

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const storage = firebaseApp.storage();



  export const uploadImage = (file) => {
    return new Promise((resolve, eject) => {
      const uploadProcess = storage
        .ref(`image/${file.name}-${file.lastModified}`)
        .put(file);
  
      uploadProcess.on(
        "state_changed",
        (snapshot) => console.log("image Submit", snapshot),
        eject,
        () => {
          console.log("enter", file);
          storage
            .ref("image")
            .child(`${file.name}-${file.lastModified}`)
            .getDownloadURL()
            .then(resolve);
        }
      );
    });
  };

  export default uploadImage;