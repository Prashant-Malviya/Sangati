import { href, Link } from "react-router-dom";
import Avatar from "../shared/Avatar";
import Card from "../shared/Card";

const Layout = () => {

  const asideSize = 350

  const sectionDimension = {
    widht: `calc(100% - ${asideSize}px)`,
    marginLeft: asideSize,
  }

  const sidebarStyle = {
    backgroundImage:
      "radial-gradient( circle farthest-corner at 6.3% 21.8%,  rgba(236,6,117,1) 0%, rgba(13,32,67,1) 90% )",
  };

  const menus = [
    {
      icon: "ri-home-9-line",
      href: "/app",
      label: "dashboard",
    },
    {
      icon: "ri-chat-smile-3-line",
      href: "/posts",
      label: "my posts",
    },
    {
      icon: "ri-group-line",
      href: "/friends",
      label: "friends",
    },
  ];

  return (
    <div className="min-h-screen">
      <aside className="bg-white fixed top-0 left-0 h-full p-8 overflow-auto" style={{width: asideSize}}>
        <div className=" space-y-8 h-full rounded-2xl p-8" style={sidebarStyle}>
          <Avatar
            title="Prashant Malviya"
            subtitle="Full Stack Developer"
            image="/images/avatar.png"
            titleColor="white"
            subtitleColor="#ddd"
          />

          <div>
            {menus.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="flex items-center gap-3 text-gray-300 py-3 hover:text-white"
              >
                <i className={`${item.icon} text-xl`}></i>
                <label className="capitalize">{item.label}</label>
              </Link>
            ))}

            <button className="flex items-center gap-2 text-gray-300 py-3 hover:text-white">
              <i className="ri-logout-circle-r-line text-xl"></i>
              <label>Logout</label>
            </button>
          </div>
        </div>
      </aside>

      <section className="rounded-2xl p-8 " style={sectionDimension}>
        
      </section>

      <aside className="bg-white fixed top-0 right-0 h-full overflow-auto" style={{width:asideSize}}>
        
        <Card></Card>

      </aside>
    </div>
  );
};

export default Layout;
