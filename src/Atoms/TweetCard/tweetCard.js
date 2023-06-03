import style from './tweetCard.module.css'

export default function TweetCard({user}){

   // const {name,username,desc,image,userImage,id} = user;
   
      return(
          <div className={style.outer}>
              <header className={style.head} key={user.id}>
                  <div>
                  <div className={style.userImageContainer}><img src={user.image}/></div>
                  </div>
                  < div>
                  <div className={style.user}>
                  <h3>{user.name}</h3> <p>@{user.username}</p>
                  </div>
                  <p>{user.desc}</p>
                  </div>
              </header>
              </div>)
}