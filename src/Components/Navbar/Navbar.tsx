import useNewsFeedShown from "@/Hooks/useNewsFeedShown";
import { useUserInfo } from "@/Hooks/useUserInfo";
import { cn } from "@/lib/utils";
import { Link } from "react-router";

export default function Navbar() {
  const { newsFeedShown, setNewsFeedShown } = useNewsFeedShown();
  const { userInfo } = useUserInfo();
  const linkStyle = "hover:pointer-cursor hover:underline"

  return (
    <nav className="w-[300px] bg-secondary sticky top-0 h-svh p-8">
      <div className="w-full flex flex-col gap-4">
        <Link to="" className={cn(linkStyle, "text-2xl")}> Home </Link>
        {/* Profile or login/sign up */}
        <div className="flex gap-8">
          <Link to="/login" className={linkStyle}> Login </Link>
          <Link to="/signup" className={linkStyle}> Sign Up </Link>
        </div>
        <h1> Profile </h1>
        <Link to="/search" className={linkStyle}> Search </Link>


        {/* Theese 2 are only available if logged in */}
        {
          userInfo != null &&
          <>
            <h1> Favorited Games </h1>
            <h1 className="hover:underline hover:cursor-pointer" onClick={() => { setNewsFeedShown(prev => !prev) }}> {newsFeedShown == true ? "Hide News Feed" : "Show News Feed"} </h1>
          </>
        }
      </div>
    </nav>
  )
}