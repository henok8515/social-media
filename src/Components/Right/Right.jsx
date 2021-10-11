import { useHistory } from "react-router-dom";
import "./right.scss";
const data = [
  {
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];
const secondData = [
  {
    img: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    icon: "/Assets/love.png",
  },
  {
    img: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    icon: "/Assets/love.png",
  },
  {
    img: "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    icon: "/Assets/love.png",
  },
];
function Right() {
  let history = useHistory();
  return (
    <div className="right">
      <div className="right-first">
        {data.map((user) => (
          <img alt="" src={user.img} />
        ))}{" "}
        <button
          onClick={() => {
            history.push("/");
          }}
        >
          SignOut
        </button>
      </div>
      <div className="right-second-container">
        <div className="right-second">
          {secondData.map((users) => (
            <div className="activity">
              <div className="item1">
                <img alt="" src={users.img} className="item1-img" />{" "}
                <div className="item1-title">
                  <h3>todays activity</h3>
                  <p>covid 19</p>
                </div>
              </div>
              <div className="item2">
                <div className="item2-img"></div>
                <p>28%</p>
              </div>
              <div className="item3">
                <img alt="" src={users.icon} className="item3-img" />
                <button>2days</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Right;
