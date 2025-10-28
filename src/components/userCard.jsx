import React from "react";

const UserCard = ({ user }) => {
  if (!user) return null;

  const { firstName, lastName, age, gender, photoId, about, skill } = user;

  return (
    // <div className="card bg-base-200 shadow-md m-4 p-4 w-80">
    //   <img src={photoId} alt={firstName} className="rounded-xl w-full h-48 object-cover" />
    //   <div className="mt-4">
    //     <h2 className="font-bold text-xl">{firstName} {lastName}</h2>
    //     <p className="text-gray-600">{about}</p>
       
    //   </div>
    // </div>
    <div className="card bg-base-200 shadow-md m-4 p-4 w-80">
  <img
    src={photoId || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
  alt={firstName || "User"}
    className="rounded-xl w-full h-48 object-cover"
  />

 <div className="mt-4">
  <h2 className="font-bold text-xl">
    {firstName } {lastName}
  </h2>

  <p className="text-gray-600 text-sm mt-1">
    {age ? `${age} years old` : "Age not specified"} • {gender ? `${gender}` : "Gender not specified"}
  </p>

  <p className="text-gray-600 mt-2">
    {about || "No bio available."}
  </p>
</div>


  {/* Buttons */}
  <div className="mt-5 flex justify-between gap-4">
    <button
      onClick={() => console.log("Ignored", firstName)}
      className="flex-1 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 text-white font-medium transition"
    >
      Ignore
    </button>

    <button
      onClick={() => console.log("Interested", firstName)}
      className="flex-1 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 text-white font-medium transition"
    >
      Interested
    </button>
  </div>
</div>

  );
};

export default UserCard;


