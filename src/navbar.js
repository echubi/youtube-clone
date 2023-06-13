import hamburger_menu from "./images/hamburger_menu.svg";
import youtube_logo from "./images/youtube_logo.svg";
import search from "./images/search.svg";
import voice_search from "./images/voice-search-icon.svg";
import upload from "./images/upload.svg";
import notification from "./images/notifications.svg";
import current_user_picture from "./images/channel-pictures/my-channel.jpeg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-section">
        <img
          className="hamburger-menu"
          src={hamburger_menu}
          alt="hamburger-menu"
        />
        <img className="youtube-logo" src={youtube_logo} alt="youtube-logo" />
      </div>
      <div className="middle-section">
        <input type="text" className="search-bar" placeholder="Search" />
        <button className="search-button">
          <img src={search} alt="search" className="search-icon" />
          <div className="tooltip">Search</div>
        </button>
        <button className="voice-search-button">
          <img src={voice_search} alt="" className="voice-search-icon" />
          <div className="tooltip">Search with your voice</div>
        </button>
      </div>
      <div className="right-section">
        <div className="upload-icon-container">
          <img src={upload} alt="" className="upload-icon" />
          <div className="tooltip">Create</div>
        </div>

        <div class="notifications-icon-container">
          <img
            src={notification}
            alt="upload-icon"
            className="notifications-icon"
          />
          <div class="notifications-count">3</div>
          <div className="tooltip">Search</div>
        </div>

        <img
          src={current_user_picture}
          alt="upload-icon"
          className="upload-icon"
        />
      </div>
    </nav>
  );
};

export default Navbar;
