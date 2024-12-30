import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card";
import { useState } from "react";
import { BiDownvote, BiUpvote } from "react-icons/bi";

export default function GameThreadCard({ item }: any) {
  const [liked, setLiked] = useState<boolean | null>(null);

  const handleLiked = (clicked: boolean) => {
    // Removing like/dislike
    if (clicked == liked) {
      setLiked(null)
    }
    // Switching from like to dislike
    if (clicked != liked) {
      setLiked(clicked)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {item.displayName}
        </CardTitle>
        <CardDescription>
          @{item.username}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {item.description}
      </CardContent>
      <CardFooter className="gap-2">
        <div className="flex flex-row justify-center items-center gap-1">
          <BiUpvote className={`hover:cursor-pointer ${liked == true ? "fill-red-500 hover:fill-current" : "hover:fill-red-500"}`} onClick={() => handleLiked(true)}/> {liked == true ? item.likes + 1 : item.likes}
        </div>
        <div className="flex flex-row justify-center items-center gap-1">
          <BiDownvote className={`hover:cursor-pointer ${liked == false ? "fill-blue-500 hover:fill-current" : "hover:fill-blue-500"}`} onClick={() => handleLiked(false)} /> {liked == false ? item.dislikes + 1 : item.dislikes}
        </div>
      </CardFooter>
    </Card>
  )
}