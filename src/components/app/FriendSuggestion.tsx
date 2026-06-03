import Card from "../shared/Card";
import Fetcher from "../../lib/Fetcher";
import useSWR from "swr";

const FriendSuggestion = () => {

    const {data, error, isLoading} = useSWR("/friend/suggestion",Fetcher)

    console.log(data);
    

  return (
    <div className="h-[250px] overflow-auto">
      <Card title="Suggested" divider>
        
        
        <div className="space-y-8">
          {
          data && data.map((item: any, index: number) => (
              <div key={index} className="flex gap-4">
                <img
                  src= "/images/avatar.png"
                  alt="avatar"
                  className="w-16 h-16 rounded object-cover"
                ></img>
                <div>
                  <h1 className="text-black font-medium capitalize">{item.fullname}</h1>

                  <button className="bg-pink-500 hover:bg-pink-600 text-white px-2 py-1.5 rounded text-xs mt-1 font-medium">
                    <i className="ri-user-add-line mr-1"></i>
                    Add Friend
                  </button>
                </div>
              </div>
            ))}
        </div>
      </Card>
    </div>
  );
};

export default FriendSuggestion;
