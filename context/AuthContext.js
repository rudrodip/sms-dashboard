import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    sendPasswordResetEmail
} from "firebase/auth";
import {
    ref,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";
import {
    doc,
    setDoc,
    updateDoc,
    collection,
    query,
    where,
    getDocs,
    getDoc,
} from "firebase/firestore";
import { auth, storage, db } from '../src/config/firebase.config'

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [userInfo, setUserInfo] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => user ? setUser(user) : setUser(null))
        getAdminInfo(user?.uid).then(
            (data) => setUserInfo(data)
        )
        setLoading(false)
        return () => unsub()
    }, [user])

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    const triggerResetEmail = async (email) => {
        await sendPasswordResetEmail(auth, email);
        console.log("Password reset email sent")
    }

    async function upload(file, uid) {
        try {
            const fileRef = ref(storage, `profilePics/${uid}`);
            const metadata = {
                contentType: "image/jpeg",
            };
            const snapshot = await uploadBytes(fileRef, file, metadata);
            let photoURL = await getDownloadURL(fileRef);
            updateProfile(uid, { photoURL });
            return photoURL;
        } catch (error) {
            console.log(error);
        }
    }

    async function createUserData(uid, data) {
        if (!uid) return;
        const userRef = doc(db, `students/${uid}`);
        try {
            setDoc(userRef, data);
            updateProfile(uid, {
                photoURL: data['photoURL'],
            });
        } catch (error) {
            console.log(error)
        }
    }

    async function updateUserData(uid, data) {
        if (!uid) return;
        const userRef = doc(db, `students/${uid}`);
        try {
            updateDoc(userRef, data);
        } catch (error) {
            console.log(error);
        }
    }

    async function getUserInfo(uid) {
        if (!uid) return;
        const userRef = doc(db, `students/${uid}`);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            console.log("No such document!");
            return null;
        }
    }

    async function getAdminInfo(uid) {
        if (!uid) return;
        const userRef = doc(db, `admins/${uid}`);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            console.log("No such document!");
            return null;
        }
    }

    async function deleteUser(user) {
        let uid = user.uid
        deleteUser(user).then(() =>
            console.log('user deleted')
        ).catch(error => console.log(error))
    }


    return (
        <AuthContext.Provider value={{ user, userInfo, signup, login, logout, createUserData, upload, updateUserData, deleteUser, triggerResetEmail, setUserInfo, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    )
}