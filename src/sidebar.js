import home from "./images/home.svg";
import explore from "./images/explore.svg";
import subscriptions from "./images/subscriptions.svg";
import originals from "./images/originals.svg";
import youtube_music from "./images/youtube_music.svg";
import library from "./images/library.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-link">
        <img src={home} alt="Home" />
        <div>Home</div>
      </div>
      <div className="sidebar-link">
        <img src={explore} alt="Explore" />
        <div>Explore</div>
      </div>
      <div className="sidebar-link">
        <img src={subscriptions} alt="Subscriptions" />
        <div>Subscriptions</div>
      </div>
      <div className="sidebar-link">
        <img src={originals} alt="Originals" />
        <div>Originals</div>
      </div>
      <div className="sidebar-link">
        <img src={youtube_music} alt="Youtube Music" />
        <div>YouTube Music</div>
      </div>
      <div className="sidebar-link">
        <img src={library} alt="Library" />
        <div>Library</div>
      </div>
    </div>
  );
};

export default Sidebar;
