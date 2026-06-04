import { Skeleton } from "antd";
import Fetcher from "../../lib/Fetcher";
import Card from "../shared/Card";
import Error from "../shared/Error";
import useSWR, { mutate } from "swr";
import SmallButton from "../shared/SmallButton";
import CatchError from "../../lib/CatchError";
import HttpInterceptor from "../../lib/HttpInterceptor";

const Friends = () => {

  const {data, error, isLoading} = useSWR("/friend", Fetcher)

  if(isLoading)
    return <Skeleton active />

  if(error)
    return <Error message={error.message} />

  const unfriend = async (id:string)=>{
    try {
      
      await HttpInterceptor.delete(`/friend/${id}`)
      mutate("/friend")
    } catch (error) {
      CatchError(error)
    }
  }


  return (
    <div className="grid grid-cols-3 gap-8">
      {data.map((item: any, index: number) => (
          <Card key={index}>
            <div className="flex flex-col items-center gap-3">
              <img
                src={ item.friend.image || "/images/avatar.png"}
                className="w-16 h-16 rounded-full object-cover"
              />
              <h1 className="text-base font-medium text-zinc-700 capitalize">{item.friend.fullname}</h1>

              {
                item.status === "accepted" ?

                <button onClick={()=>unfriend(item._id)} className="bg-pink-500 hover:bg-pink-600 text-white px-2 py-1.5 rounded text-xs mt-1 font-medium">
                <i className="ri-user-minus-line mr-1"></i>
                Unfriend
              </button>
              :
               <button className="bg-green-500 hover:bg-gray-400 text-white px-2 py-1.5 rounded text-xs mt-1 font-medium">
                <i className="ri-check-double-line mr-1"></i>
                Request sent
              </button>

              }

              
            </div>
          </Card>
        ))}
    </div>
  );
};

export default Friends;
