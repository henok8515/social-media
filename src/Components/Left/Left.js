import "./left.scss";
const iconData = [
  {
    icon: "/Assets/email.png",
    title: "email",
  },
  {
    icon: "/Assets/gear.png",
    title: "Setting",
  },
  {
    icon: "/Assets/home.png",
    title: "Home",
  },
  {
    icon: "/Assets/man.png",
    title: "My Profile",
  },
  {
    icon: "/Assets/love.png",
    title: "Activity",
  },
];
const group = [
  {
    title: "facebook",
    img: "/Assets/facebook.png",
  },
  {
    title: "instagram",
    img: "/Assets/instagram.png",
  },
  {
    title: "linkedin",
    img: "/Assets/linkedin.png",
  },
];
function Left() {
  return (
    <div className="left">
      <div className="left-first">
        <img alt="" src="/Assets/butterfly .png" className="logo" />
        <h4>instegram</h4>
      </div>
      <div className="left-second">
        <h2>Account</h2>

        {iconData.map((data) => (
          <div className="img-container">
            <img alt="" className="img" src={data.icon} /> <p>{data.title}</p>
          </div>
        ))}
      </div>
      <div className="left-third">
        {" "}
        <h2>your group</h2>
        {group.map((img) => (
          <div className="img-container">
            <img alt="" className="img" src={img.img} /> <p>{img.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Left;
