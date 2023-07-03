import React, { useState } from 'react';
import FollowButton from '../../../../Atoms/FollowButton/FollowButton'
import RightBotStyle from "./Follow.module.css";


const userList = [
  {
    id: 1,
    tag: <i className="far fa-solid fa-badge-check"></i>,
    src: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/57.png",
    text: "MS Dhoni", 
    text2: "msdhoni@gmail.com",
  },
  {
    id: 2,
    tag: <i className="fa fa-solid fa-badge-check"></i>,
    src: "https://upload.wikimedia.org/wikipedia/commons/7/74/Varun_Dhawan_promoting_Badrinath_Ki_Dulhania.jpg",
    text: "Varun Dhawan",
    text2: "varun@gmail.com",
  },
  {
    id: 3,
    tag: <i className="fa fa-solid fa-badge-check"></i>,
    src: "https://img.mensxp.com/media/content/2022/Nov/Headerthumb_akshay-kumar_636f74d767616.jpeg",
    text: "Akshay Kumar",
    text2: "akshay@gmail.com",
  },
  {
    id: 4,
    tag: <i class="fa fa-solid fa-badge-check"></i>,
    src: "https://static.toiimg.com/photo/msid-98229360/98229360.jpg",
    text: "Virat Kohli",
    text2: "virat@gmail.com",
  },
  {
    id: 5,
    tag: <i class="fa fa-solid fa-badge-check"></i>,
    src: "https://m.media-amazon.com/images/M/MV5BNGM5YmYwNjUtNzQyYS00OGY0LTljZDAtMDNiMjhiOTFiMzRiXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_.jpg",
    text: "Anushka Sharma",
    text2: "anushka@gmail.com",
  },
];

export default function Follow() {
  const [users, setUsers] = useState(userList);
  const [showAll, setShowAll] = useState(false);

  function handleFollowToggle(id) {
    setUsers(prevUsers => {
      return prevUsers.map(user => {
        if (user.id === id) {
          return { ...user, isFollowing: !user.isFollowing };
        }
        return user;
      });
    });
  }

  function handleShowMore() {
    setShowAll(prevState => !prevState);
  }

  const displayedUsers = showAll ? users : users.slice(0, 2);

  return (
    <>
      {users.length ? (
        <div className={RightBotStyle.box}>
          <h3 style={{ paddingLeft: "1rem" }}>Who to follow</h3>
          {displayedUsers.map(user => (
            <div className={RightBotStyle.contentmain} key={user.id}>
              <img
                style={{ borderRadius: "50%" }}
                src={user.src}
                width="50rem"
                height="50rem"
                alt="pp"
              />
              <div className={RightBotStyle.content}>
                <div className={RightBotStyle.name}>
                  <span className={RightBotStyle.upText}>{user.text}</span>
                  <span className={RightBotStyle.content1}>{user.text2}</span>
                </div>
              </div>
              <span className={RightBotStyle.poperParent}>
                <FollowButton
                  className={RightBotStyle.followButton}
                  isFollowing={user.isFollowing}
                  onToggle={() => handleFollowToggle(user.id)}
                />
              </span>
            </div>
          ))}
          <h4 onClick={handleShowMore} className={RightBotStyle.ShowMore}>
            {showAll ? "Show less" : "Show More"}
          </h4>
        </div>
      ) : null}
    </>
  );
}
