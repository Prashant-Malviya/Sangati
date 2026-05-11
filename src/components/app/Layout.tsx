import { Link , Outlet, useLocation} from "react-router-dom";
import Avatar from "../shared/Avatar";
import Card from "../shared/Card";
import { useState } from "react";

const Layout = () => {

  const [leftAsideSize,setLeftAsideSize] = useState(350);
  const rightAsideSize = 450;
  const collapseSize = 140;

  const {pathname} = useLocation();


  const sidebarStyle = {
    backgroundImage:
      "radial-gradient( circle farthest-corner at 6.3% 21.8%,  rgba(236,6,117,1) 0%, rgba(13,32,67,1) 90% )",
  };

  const menus = [
    {
      icon: "ri-home-9-line",
      href: "/app/dashboard",
      label: "dashboard",
    },
    {
      icon: "ri-chat-smile-3-line",
      href: "/app/my-posts",
      label: "my posts",
    },
    {
      icon: "ri-group-line",
      href: "/app/friends",
      label: "friends",
    },
  ];

  const getPathName = (path:string)=>{
    return path.split("/").pop()?.split("-").join(" ")
  }

  return (
    <div className="min-h-screen">
      <aside
        className="bg-white fixed top-0 left-0 h-full p-8 overflow-auto"
        style={{ width: leftAsideSize, transition: '0.3s' }}
      >
        <div className=" space-y-8 h-full rounded-2xl p-8" style={sidebarStyle}>
          
          {
            leftAsideSize === collapseSize ?
            <i className="ri-user-fill text-xl text-white animate__animated animate__fadeIn" title="user profile"></i>:

            <div className="animate__animated animate__fadeIn">

             <Avatar
            title="Prashant Malviya"
            subtitle="Full Stack Developer"
            image="/images/avatar.png"
            titleColor="white"
            subtitleColor="#ddd"
            size={leftAsideSize === collapseSize ?  "md" : "lg"}
          />
            
            </div>

          }
          
         
          <div>
            {menus.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="flex items-center gap-4 text-gray-300 py-3 hover:text-white"
              >
                <i className={`${item.icon} text-xl`} title={item.label}></i>
                <label className={`capitalize ${leftAsideSize === collapseSize ? "hidden" : ""}`}>{item.label}</label>
              </Link>
            ))}

            <button className="flex items-center gap-2 text-gray-300 py-3 hover:text-white">
              <i className="ri-logout-circle-r-line text-xl" title="Logout"></i>
              <label className={`${leftAsideSize === collapseSize ? "hidden" : ""}`}>Logout</label>
            </button>
          </div>
        </div>
      </aside>

      <section className="py-8 px-1" 
      style={{
        width: `calc(100% - ${leftAsideSize + rightAsideSize}px)`,
        marginLeft: leftAsideSize,
         transition: '0.3s'
        }}>
        <Card
         title={
          <div className="flex gap-4">
            <button className="bg-gray-100 w-10 h-10 rounded-full hover:bg-slate-200" onClick={()=>setLeftAsideSize(leftAsideSize === 350 ? collapseSize : 350)}>
              <i className="ri-arrow-left-line"></i>
              </button>
              <h1>{getPathName(pathname)}</h1>
          </div>
         }
         divider
         >
          <Outlet />
        </Card>
      </section>

      <aside
        className="bg-white fixed top-0 right-0 h-full overflow-auto"
        style={{ width: rightAsideSize,  transition: '0.3s' }}
      >
        <Card title="My Friends" divider>
          <div className="space-y-4">
            {Array(20)
              .fill(0)
              .map((item, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded-lg flex justify-between">
                  <Avatar
                    size="md"
                    image="/images/avatar.png"
                    title="Prashant Malviya"
                    subtitle={
                      <small className={`${index % 2 === 0 ? 'text-zinc-400' : 'text-green-600'} font-medium`}>
                        
                        {index % 2 === 0 ? "Offline" : "Online"}
                      </small>
                    }
                  />

                  <div className="space-x-3">
                      <button className="hover:text-pink-700 text-pink-800">
                        <i className="ri-chat-ai-line" title="Chat"></i>
                      </button>

                       <button className="hover:text-green-600 text-green-700">
                        <i className="ri-phone-line" title="Call"></i>
                      </button>

                       <Link to="/app/video-call">
                       <button className="hover:text-amber-500 text-amber-600">
                        <i className="ri-video-on-ai-line" title="Video Call"></i>
                      </button></Link>

                      
                      
                  </div>  
                </div>
              ))}
          </div>
        </Card>
      </aside>
    </div>
  );
};

export default Layout;
