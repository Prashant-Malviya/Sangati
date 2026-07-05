import { useEffect } from "react";
import socket from "../../lib/socket";
import Avatar from "../shared/Avatar";
import Button from "../shared/Button";
import Input from "../shared/Input";
import SmallButton from "../shared/SmallButton";

const Chat = () => {
  useEffect(() => {
    socket.on("message", (msg) => {
      console.log(msg);
    });
  }, []);

  const sendMessage = () => {
    socket.emit("message", "Namaste Prashant");
  };

  return (
    <div>
      <SmallButton onClick={sendMessage}>Testing...</SmallButton>

      {/*
      <div className="h-[450px] overflow-auto space-y-12">
        {Array(20)
          .fill(0)
          .map((item, index) => (
            <div className="space-y-12 " key={index}>
              <div className="flex gap-4 items-start">
                <Avatar image="/images/avatar.png" size="md" />
                <div className="bg-pink-50 px-3 py-2 rounde-lg flex-1 text-pink-700 border-pink-100 relative">
                  <h1 className="font-medium text-black">Prashant Malviya</h1>
                  <label>
                    loem sit maet dollar this is how you write olorem dollar
                    with lowthis is how you write olorem dollar with low
                  </label>
                  <i className="ri-arrow-left-s-fill absolute top-0 -left-5 text-4xl text-pink-50"></i>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="relative bg-violet-50 px-4 py-2 rounde-lg flex-1 text-violet-700 border border-violet-100">
                  <h1 className="font-medium text-black">Prince bro</h1>
                  <label>
                    loem sit maet dollar this is how you write olorem dollar
                    with lowthis is how you write olorem dollar with low
                  </label>
                  <i className="ri-arrow-right-s-fill absolute top-0 -right-5 text-4xl text-violet-50"></i>
                </div>
                <Avatar image="/images/avatar.png" size="md" />
              </div>
            </div>
          ))}
      </div>

      <div className="p-3">
        <div className="flex items-center gap-4">
          <form className="flex gap-4 flex-1">
            <Input name="message" placeholder="Type your message here" />
            <Button type="pink" icon="send-plane-fill">
              Send
            </Button>
          </form>
          <button className="w-12 h-12 bg-pink-100 rounded-full hover:bg-pink-500 hover:text-white text-pink-500">
            <i className="ri-attachment-2"></i>
          </button>
        </div>
      </div>
      */}
    </div>
  );
};

export default Chat;
