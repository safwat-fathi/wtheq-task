import { Metadata } from "next";
import UserForm from "./components/ProfileForm";

export const metadata: Metadata = {
  title: "Profile",
  description: "This is Profile page for Wtheq merchant dashboard",
};

const Profile = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-10">Profile</h1>
      <UserForm />
    </>
  );
};

export default Profile;
