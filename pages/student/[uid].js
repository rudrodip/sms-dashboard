import React from 'react'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import InfoPanel from '@/components/profile/infoPanel'
import EditPanel from '@/components/profile/editPanel'
import { db } from '../../src/config/firebase.config';
import { getDocs, query, collection, where } from 'firebase/firestore'
import { useAuth } from '../../context/AuthContext'
import Admin from '@/layouts/Admin'

const Profile = () => {
  const router = useRouter()
  const { uid } = router.query
  const [userInfo, setUserinfo] = useState(null)
  const [user, setUser] = useState(null)
  const { upload, setUserInfo, updateUserData } = useAuth()

  useEffect(() => {
    const docRef = collection(db, 'students')
    let queryParam = query(docRef, where("studentID", "==", uid))
    getDocs(queryParam)
      .then((snapshot) => setUserinfo(snapshot.docs[0].data()))
  }, [uid])


  if (userInfo) {
    return (
      <main>
        <Head>
          <title>{userInfo ? userInfo.name : 'Student Profile'}</title>
          <link rel="icon" href='/logo/logo.png' />
        </Head>
        <section className='parent min-h-screen'>
          <div className='hero flex justify-between flex-wrap items-start'>
            <div className='flex-1 w-full md:w-1/3 p-5 m-3 shadow-xl rounded-2xl bg-gray-800 h-full'>
              <div className='text-sm text-gray-200 my-3'>
                <div className="block mx-auto rounded-full h-60 w-60 bg-cover bg-center" style={{ backgroundImage: `url('${userInfo ? userInfo.photoURL : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}` }}></div>
              </div>
              <InfoPanel userInfo={userInfo} />
              {userInfo?.socials && Object.keys(userInfo?.socials).length > 0 &&
                <div>
                  <h1 className='mt-4 text-md text-blue-500 font-semibold text-left'>Social Media</h1>
                  <div className='text-left mr-2 flex flex-wrap'>
                    {userInfo?.socials && Object.keys(userInfo.socials).map((i, index) => {
                      return (
                        <a key={index} className='ml-3 mt-3' href={userInfo.socials[i]} target="_blank" rel="noreferrer">
                          <img src={socialMediaIcons[i.toLowerCase()]} className="w-8 h-8" alt={i.toLowerCase()} />
                        </a>
                      )
                    })}
                  </div>
                </div>
              }
            </div>
            <div className='flex-2 w-full md:w-2/3 p-5 m-3 shadow-xl rounded-2xl bg-gray-800 h-full'>
              <EditPanel userInfo={userInfo} upload={upload} updateUserData={updateUserData} setUserInfo={setUserInfo} />
            </div>
          </div>
        </section>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn">Yay!</label>
            </div>
          </div>
        </div>
      </main>
    )
  } else {
    return (
      <div className='flex justify-center m-5'>
        <button disabled type="button" className="py-2.5 px-5 mr-2 text-sm font-medium  rounded-lg border hover:text-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:bg-gray-700 inline-flex items-center">
          <svg role="status" className="inline w-4 h-4 mr-2 animate-spin text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
          </svg>
          Loading...
        </button>
      </div>
    )
  }
}

export default Profile
Profile.layout = Admin

const socialMediaIcons = {
  "facebook": "/logo/facebook.png",
  "instagram": "/logo/instagram.png",
  "discord": "/logo/discord.png",
  "github": "/logo/github.png",
  "whatsapp": "/logo/whatsapp.png",
  "reddit": "/logo/reddit.png",
  "linkedin": "/logo/linkedin.png",
  "youtube": "/logo/youtube.png",
  "twitter": "/logo/twitter.png",
  "telegram": "/logo/telegram.png",
}