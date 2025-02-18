import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, GoogleAuthProvider, EmailAuthProvider, getAuth, reauthenticateWithCredential, sendEmailVerification, signInWithEmailAndPassword, updatePassword, signInWithPopup } from "firebase/auth";
import { getFirestore, setDoc, doc, getDoc, updateDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();


// Function to authenticate new user
async function signUp(email, password, name) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  user.displayName = name;

  return user;
}

// Function to create new user and add it to firestore db
async function createNewUser(email, password, name) {
  await signUp(email, password, name).then((user) => {
    setDoc(doc(db, "users", user.uid), {
      displayName: name,
      email: email,
      id: user.uid,
      fname: "",
      lname: "",
      address: "",
      wishlist: [],
      cart: {}
    });
  }).then(() => sendEmailVerification(auth.currentUser))
};

// Function to sign in user with email
async function signIn(email, password) {
  await signInWithEmailAndPassword(auth, email, password)
}

// Function to get user data from firestore db
async function getUser(uid) {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
}

// Function to edit user data in firestore db
async function editUser(data) {
  try {
    const docRef = doc(db, "users", auth.currentUser.uid);
    await updateDoc(docRef, data)
    return { success: true, message: "User data updated successfully." };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

// Function to update user password
async function updateUserPassword(newPassword, oldPassword) {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("No user is currently signed in.");

    // Reauthenticate the user before updating the password
    const credential = EmailAuthProvider.credential(user.email, oldPassword);
    await reauthenticateWithCredential(user, credential);

    // Update the user's password
    await updatePassword(user, newPassword);

    return { success: true, message: "Password updated successfully." };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

// Sign up with google
async function signUpWithGoogle() {
  await signInWithPopup(auth, provider).then((result) => {
    const user = result.user;
    setDoc(doc(db, "users", user.uid), {
      displayName: user.displayName,
      email: user.email,
      id: user.uid,
      fname: "",
      lname: "",
      address: "",
      wishlist: [],
      cart: {}
    })
  }).catch((error) => {
    console.log(error);
  })

}

// Login with google
async function loginWithGoogle() {
  await signInWithPopup(auth, provider).catch((error) => {
    console.log(error);
  })
  }

// Function to update user email
// async function updateUserEmail(newEmail, password) {
//   try {
//     const user = auth.currentUser;
//     if (!user) throw new Error("No user is currently signed in.");

//     // Reauthenticate the user before updating the email
//     const credential = EmailAuthProvider.credential(user.email, password);
//     await reauthenticateWithCredential(user, credential);

//     // Update the user's email
//     await updateEmail(user, newEmail);

//     // Send a verification email to the new email address
//     await sendEmailVerification(user);

//     console.log("Email updated successfully. Verification email sent to the new address.");
//     return { success: true, message: "Email updated successfully. Please verify your new email address." };
//   } catch (error) {
//     console.error("Error updating email:", error);
//     return { success: false, message: error.message };
//   }
// }

// Function to sign out user and return to home page
async function userSignOut() {
    await auth.signOut();
}

export {auth, db, createNewUser, getUser, signIn, editUser,updateUserPassword, userSignOut, signUpWithGoogle, loginWithGoogle};