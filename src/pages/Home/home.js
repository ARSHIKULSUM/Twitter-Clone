import React from 'react';
import style from './home.module.css';
import { BsTwitter } from 'react-icons/bs';
import { BiHomeCircle } from 'react-icons/bi';
import { BiHash } from 'react-icons/bi';
import { GrNotification } from 'react-icons/gr';
import { BiEnvelope } from 'react-icons/bi';
import { GoBold } from 'react-icons/go'
import { BiBookmark } from 'react-icons/bi';
import { RiFileList2Line } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg'
import { CgMoreO } from 'react-icons/cg'


export default function Home() {
  return (
    <div className={style.outer}>
      <aside className={style.nav}>
        <div className={style.content}>
          <div className={style.logo}>
            <BsTwitter />
          </div>
          <div className={style.icon}>
            <BiHomeCircle />
            <text>Home </text>

          </div>
          <div className={style.icon}>
            <BiHash />
            <text>Explore </text>
          </div>
          <div className={style.icon}>
            <GrNotification />
            <text> Notifications</text>

          </div>
          <div className={style.icon}>
            <BiEnvelope />
            <text> Messages</text>

          </div>
          <div className={style.icon}><RiFileList2Line />
            <text>Lists </text>
          </div>
          <div className={style.icon}>
            <BiBookmark />
            <text>Bookmarks </text>
          </div>
          <div className={style.icon}><GoBold />
            <text>Twitter Blue </text>
          </div>
          <div className={style.icon}><CgProfile />
            <text>Profile </text>
          </div>
          <div className={style.icon}><CgMoreO />
            <text>More </text>
          </div>
          <div className={style.bttn}>
            <button>Tweet</button>
          </div>
          <div className={style.bottom}>
            <img className={style.image} src='https://images.unsplash.com/photo-1650630729397-810915b32ac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' />
            <div className={style.details}>
              <b>Mohd Zeeshan</b><text>Mohdzee@2521..</text></div>
          </div>
        </div>
      </aside>

      <section className={style.feed}>
        <header className={style.header}>
        </header>
      </section>

      <aside className={style.hashtag}>
        {/* Add your code using FeaturedPlayListOutlinedIcon */}
      </aside>
    </div>
  );
}
