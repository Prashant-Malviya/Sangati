import Card from "../shared/Card";
import Fetcher from "../../lib/Fetcher";
import useSWR, { mutate } from "swr";
import { Skeleton } from "antd";
import Error from "../shared/Error";
import Button from "../shared/Button";
import HttpInterceptor from "../../lib/HttpInterceptor";
import { useState } from "react";
import CatchError from "../../lib/CatchError";
import SmallButton from "../shared/SmallButton";
import moment from "moment";
import { toast } from "react-toastify";

const FriendSuggestion = () => {
  const [loading, setLoading] = useState({ state: false, index: 0 });

  const { data, error, isLoading } = useSWR("/friend/suggestion", Fetcher);

  const sendFriendRequest = async (id: string, index: number) => {
    try {
      setLoading({ state: true, index });

      await HttpInterceptor.post("/friend", { friend: id });

      toast.success("Friend request sent successfully", {position:"top-center"});

      mutate("/friend/suggestion")
      mutate("/friend")
    } catch (error) {
      CatchError(error);
    } finally {
      setLoading({ state: false, index: 0 });
    }
  };

  return (
    <div className="h-[250px] overflow-auto">
      <Card title="Suggested" divider>
        {isLoading && <Skeleton active />}

        {error && <Error message={error.message} />}

        <div className="space-y-8">
          {data &&
            data.map((item: any, index: number) => (
              <div key={index} className="space-y-3">
                <div className="flex gap-4 items-center">
                  <img
                    src={item.image || "/images/avatar.png"}
                    alt="avatar"
                    className="w-12 h-12 rounded object-cover"
                  ></img>
                  <div>
                    <h1 className="text-black font-medium capitalize">
                      {item.fullname}
                    </h1>
                    <small className="text-gray-400">
                      {moment(item.createdAt).format("DD MMM, YYYY")}
                    </small>
                  </div>
                </div>
                {/* <button className="bg-pink-500 hover:bg-pink-600 text-white px-2 py-1.5 rounded text-xs mt-1 font-medium">
                    <i className="ri-user-add-line mr-1"></i>
                    Add Friend
                  </button> */}

                <SmallButton
                    loading={loading.state && loading.index === index}
                    onClick={() => sendFriendRequest(item._id, index)}
                    type="pink"
                    icon="user-add-line"
                  >
                    Add Friend
                  </SmallButton>
              </div>
            ))}
        </div>
      </Card>
    </div>
  );
};

export default FriendSuggestion;
