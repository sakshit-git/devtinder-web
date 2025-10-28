// import React, { useEffect } from "react";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { BASE_URL } from "../utils/constants";
// import { addFeed } from "../utils/feedSlice"; // assuming you have this slice
// import UserCard from "./userCard"; // optional, to show feed users

// const Feed = () => {
//   const dispatch = useDispatch();
//   const feed = useSelector((state) => state.feed);
//   const user = useSelector((state) => state.user.user);

//   // const getFeed = async () => {
//   //   try {
//   //     const res = await axios.get(BASE_URL + "/feed", {
//   //       withCredentials: true,
//   //     });
//   //     dispatch(addFeed(res.data)); // store feed data in Redux
//   //   } catch (err) {
//   //     console.log("📦 Feed in component:", feed);
//   //     //console.log("Error fetching feed:", err.response || err);
//   //   }
//   // };
//         const getFeed = async () => {
//   try {
//     const res = await axios.get(BASE_URL + "/feed", {
//       withCredentials: true,
//     });
//     console.log("✅ Feed API Response:", res.data); // 👈 Add this
//     dispatch(addFeed(res.data));
//   } catch (err) {
//     console.log("❌ Error fetching feed:", err.response || err);
//   }
// };
//   useEffect(() => {
//     if (!feed || feed.length === 0) {
//       getFeed();
//     }
//   }, []);

//   return (
//     <div className="feed-first">
//       {user && (
//         <h2>
//           Welcome, {user.firstName} {user.lastName} 👋
//         </h2>
//       )}

//       {feed && feed.length > 0 ? (
//         feed.map((f) => <UserCard key={f._id} user={f} />)
//       ) : (
//         <p>Loading users...</p>
//       )}
//     </div>
//   );
// };

// export default Feed;

import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./userCard";
import { BASE_URL } from "../utils/constants";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((state) => state.feed); // ✅ must match slice name

  const getFeed = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/feed`, { withCredentials: true });
      console.log("API Response:", res.data);
      dispatch(addFeed(res.data)); // ✅ store feed in redux
    } catch (err) {
      console.error("Error fetching feed:", err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  console.log("Redux feed data:", feed); // ✅ Check this in console

  if (!feed || feed.length === 0) {
    return <h2 className="text-center mt-8">Loading users...</h2>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      {feed.map((user) => (
        <UserCard key={user._id} user={user} /> // ✅ Pass "user" prop properly
      ))}
    </div>
  );
};

export default Feed;

