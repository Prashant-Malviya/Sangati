import { Link } from "react-router-dom";
import Card from "../../shared/Card";
import IconButton from "../../shared/IconButton";
import SmallButton from "../../shared/SmallButton";
import type { FC } from "react";

interface FriendsListInterface {
  gap ? : number
  columns ? : number
}

const FriendsList: FC<FriendsListInterface> = ({gap=8, columns=3}) => {
  return (
    <div className={`grid grid-cols-${columns} gap-${gap}`}>
      {Array(12)
        .fill(0)
        .map((item, index) => (
          <Card>
            <div className="flex flex-col items-center gap-3">
              <img
                src="/images/avatar.png"
                alt="avatar image"
                className="rounded-full object-cover w-[80px]  h-[80px]"
              />
              <h1>Mohan Malviya</h1>
              <div className="relative">
              <SmallButton type="danger" icon="rounded-full object-cover">Unfollow</SmallButton>
              <div className="w-2 h-2 bg-green-400 rounded-full absolute -top-1 -right-1 animate__animated animate__pulse animate__infinite"></div>
              </div>

              <div className="flex gap-3 mt-3">
                <Link to="/app/chat">
                 <IconButton icon='chat-ai-line' type='pink' />
                </Link>
               
               <Link to="/app/audio-call">
                <IconButton icon='phone-line' type='success' />
               </Link>
               
               <Link to="/app/video-call">
               <IconButton icon='video-on-ai-line' type='danger' />
               </Link>
                
              </div>
            </div>
          </Card>
        ))}
    </div>
  );
};

export default FriendsList;
