import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyA6J5cRsKAHlt85KSGUswERW3wJn5W5e1I",
  authDomain: "dacar-services.firebaseapp.com",
  projectId: "dacar-services",
  storageBucket: "dacar-services.appspot.com",
  messagingSenderId: "45131422448",
  appId: "1:45131422448:web:aebf7c8e42224cd1db0035",
  measurementId: "G-L5LGY6WCPE",
};

export const initApp = firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    let createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      alert("Error creating user", error.message);
    }
  }

  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const convertCardsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const {
      abilities,
      height,
      id,
      held_items,
      moves,
      sprites,
      stats,
      types,
      weight,
      name,
    } = doc.data();

    return {
      abilities,
      height,
      id,
      held_items,
      moves,
      sprites,
      stats,
      types,
      weight,
      name,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.id] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
