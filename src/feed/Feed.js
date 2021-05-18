import React, {useEffect, useState} from 'react';
import MessageSender from '../MessageSender/MessageSender';
import Post from '../posts/Post';
import StoryReel from '../storyreel/StoryReel';
import './Feed.css';
import db from '../firebase';

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection('Posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  return (
    <div className="feed">
      {/* storyrell */}
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          image={post.data.image}
          username={post.data.username}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
        />
      ))}
      {/* messageSender */}
    </div>
  );
}

export default Feed;
