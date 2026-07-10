import Card from "../../shared/Card";
import socket from "../../../lib/socket";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IconButton from "../../shared/IconButton";

const FriendsOnline = () => {
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);

  const onlineHandler = (users: any) => {
    setOnlineUsers(users);
  };

  useEffect(() => {
    socket.on("online", onlineHandler);

    socket.emit("get-online");

    return () => {
      socket.off("online", onlineHandler);
    };
  }, []);

  return (
    <Card title="Online Friends" divider>
      <div className="space-y-6">
        {onlineUsers.map((item: any, index) => (
          <div key={index} className="flex">
            <div className="flex gap-3">
              <img
                src="/images/avatar.png"
                className="w-12 h-12 rounded-full object-cover"
                alt=""
              />
              <div>
                <h1 className="font-medium mb-1">{item.id}</h1>

                <div className="flex items-center gap-3">
                  <label
                    htmlFor=""
                    className={`capitalize-firt text-[10px] font-medium ${item.status === "online" ? "text-green-400" : "text-gray-500"}`}
                  >
                    {item.status}</label>
                    {
                    (item.status === "online") && (
                      <>
                        <Link to="/app/chat">
                          <i className="ri-chat-ai-line text-pink-600"></i>
                        </Link>

                        <Link to="/app/chat">
                          <i className="ri-phone-line text-green-600"></i>
                        </Link>

                        <Link to="/app/chat">
                          <i className="ri-video-on-ai-line text-blue-600"></i>
                        </Link>
                      </>
                    )}
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1>{socket.connected.toString()}</h1>
    </Card>
  );
};

export default FriendsOnline;
