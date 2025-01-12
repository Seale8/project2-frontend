import GameCard from "./GameCard";
import { HomeGameInfoType } from "@/Types/GameAPIReturnTypes";

export default function Home({
  specials,
  topSellers,
  newReleases,
  comingSoon
}: {
  specials: HomeGameInfoType[],
  topSellers: HomeGameInfoType[],
  newReleases: HomeGameInfoType[],
  comingSoon: HomeGameInfoType[]
}) {
  return (
    <div className="grow p-8 flex flex-col gap-4">
      <h1 className="text-3xl"> Current Specials </h1>
      <div className="grid gap-8 2xl:grid-cols-3 grid-cols-2 w-full justify-end">
        {
          specials.map((item, idx) => {
            return (
              <GameCard item={item} key={idx} />
            )
          })
        }
      </div>
      <h1 className="text-2xl"> Top Sellers </h1>
      <div className="grid gap-8 2xl:grid-cols-3 grid-cols-2 w-full justify-end">
        {
          topSellers.map((item, idx) => {
            return (
              <GameCard item={item} key={idx} />
            )
          })
        }
      </div>
      <h1 className="text-2xl"> New Releases </h1>
      <div className="grid gap-8 2xl:grid-cols-3 grid-cols-2 w-full justify-end">
        {
          newReleases.map((item, idx) => {
            return (
              <GameCard item={item} key={idx} />
            )
          })
        }
      </div>
      <h1 className="text-2xl"> Coming Soon </h1>
      <div className="grid gap-8 2xl:grid-cols-3 grid-cols-2 w-full justify-end">
        {
          comingSoon.map((item, idx) => {
            return (
              <GameCard item={item} key={idx} />
            )
          })
        }
      </div>
    </div>
  );
}