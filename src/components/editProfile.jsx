import React, { useState, useEffect } from "react";
import UserCard from "./userCard";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [about, setAbout] = useState("");
  const [skill, setSkill] = useState("");
  const [age, setAge] = useState("");
  const [photoId, setPhotoId] = useState("");
  const [error, setError] = useState("");

  const saveProfile = async () => {
    try {
        const normalizedGender = gender.toLowerCase();
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          photoId,
          age,
          gender:normalizedGender,
          about,
          skill: skill.split(",").map((s) => s.trim()),
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data?.data));
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setGender(user.gender || "");
      setAbout(user.about || "");
      setSkill(user.skill?.join(", ") || "");
      setAge(user.age || "");
      setPhotoId(user.photoId || "");
    }
  }, [user]);



  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center p-8">
      <div className="flex flex-col md:flex-row gap-12 w-full max-w-6xl justify-center items-start">
        {/* ===== Left: Edit Form ===== */}
        <div className="card bg-neutral text-neutral-content w-full md:w-1/2 shadow-lg rounded-2xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl mb-4">Edit Profile</h2>

            <input
              type="text"
              value={firstName}
              placeholder="First Name"
              className="input input-bordered w-full mb-3"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              value={lastName}
              placeholder="Last Name"
              className="input input-bordered w-full mb-3"
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              value={gender}
              placeholder="Gender"
              className="input input-bordered w-full mb-3"
              onChange={(e) => setGender(e.target.value)}
            />
            <input
              type="text"
              value={about}
              placeholder="About"
              className="input input-bordered w-full mb-3"
              onChange={(e) => setAbout(e.target.value)}
            />
            <input
              type="number"
              value={age}
              placeholder="Age"
              className="input input-bordered w-full mb-3"
              onChange={(e) => setAge(e.target.value)}
            />
            <input
              type="text"
              value={photoId}
              placeholder="Photo URL"
              className="input input-bordered w-full mb-3"
              onChange={(e) => setPhotoId(e.target.value)}
            />
            <input
              type="text"
              value={skill}
              placeholder="Skills (comma separated)"
              className="input input-bordered w-full mb-4"
              onChange={(e) => setSkill(e.target.value)}
            />

            <p className="text-red-500 mb-2">{error}</p>

            <button className="btn btn-primary w-full" onClick={saveProfile}>
              Save Changes
            </button>
          </div>
        </div>

        {/* ===== Right: User Preview ===== */}
        <div className="flex justify-center items-start w-full md:w-1/2">
          <UserCard
            user={{
              firstName,
              lastName,
              gender,
              about,
              skill: skill.split(",").map((s) => s.trim()),
              age,
              photoId,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
