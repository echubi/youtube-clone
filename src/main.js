import thumbnail_1 from "./images/thumbnails/thumbnail-1.webp";
import thumbnail_2 from "./images/thumbnails/thumbnail-2.webp";
import thumbnail_3 from "./images/thumbnails/thumbnail-3.webp";
import thumbnail_4 from "./images/thumbnails/thumbnail-4.webp";
import thumbnail_5 from "./images/thumbnails/thumbnail-5.webp";
import thumbnail_6 from "./images/thumbnails/thumbnail-6.webp";
import channel_1 from "./images/channel-pictures/channel-1.jpeg";
import channel_2 from "./images/channel-pictures/channel-2.jpeg";
import channel_3 from "./images/channel-pictures/channel-3.jpeg";
import channel_4 from "./images/channel-pictures/channel-4.jpeg";
import channel_5 from "./images/channel-pictures/channel-5.jpeg";
import channel_6 from "./images/channel-pictures/channel-6.jpeg";

const Main = () => {
  return (
    <div className="video-grid">
      <div className="video-preview">
        <div className="thumbnail-row">
          <img className="thumbnail" src={thumbnail_1} alt="thumbnail1" />
          <div className="video-time">14:20</div>
        </div>
        <div className="video-info-grid">
          <div className="channel-picture">
            <img className="profile-picture" src={channel_1} alt="" />
          </div>
          <div className="video-info">
            <p className="video-title">
              Talking Tech and AI with Google CEO Sundar Pichai!
            </p>
            <p className="video-author">Marques Brownlee</p>
            <p className="video-stats">3.4M views &#183; 6 months ago</p>
          </div>
        </div>
      </div>

      <div className="video-preview">
        <div className="thumbnail-row">
          <img className="thumbnail" src={thumbnail_2} alt="thumbnail2" />
          <div className="video-time">8:22</div>
        </div>
        <div className="video-info-grid">
          <div className="channel-picture">
            <img className="profile-picture" src={channel_2} alt="" />
          </div>
          <div className="video-info">
            <p className="video-title">Try Not To Laugh Challenge #9</p>
            <p className="video-author">Markiplier</p>
            <p className="video-stats">19M views &#183; 4 years ago</p>
          </div>
        </div>
      </div>

      <div className="video-preview">
        <div className="thumbnail-row">
          <img className="thumbnail" src={thumbnail_3} alt="" />
          <div className="video-time">9:13</div>
        </div>
        <div className="video-info-grid">
          <div className="channel-picture">
            <img className="profile-picture" src={channel_3} alt="" />
          </div>
          <div className="video-info">
            <p className="video-title">
              Crazy Tik Toks Taken Moments Before DISASTER
            </p>
            <p className="video-author">SSSniperWolf</p>
            <p className="video-stats">12M views &#183; 1 year ago</p>
          </div>
        </div>
      </div>

      <div className="video-preview">
        <div className="thumbnail-row">
          <img className="thumbnail" src={thumbnail_4} alt="" />
          <div className="video-time">22:09</div>
        </div>
        <div className="video-info-grid">
          <div className="channel-picture">
            <img className="profile-picture" src={channel_4} alt="" />
          </div>
          <div className="video-info">
            <p className="video-title">
              The Simplest Math Problem No One Can Solve - Collatz Conjecture
            </p>

            <p className="video-author">Veritasium</p>
            <p className="video-stats">18M views &#183; 4 months ago</p>
          </div>
        </div>
      </div>

      <div className="video-preview">
        <div className="thumbnail-row">
          <img className="thumbnail" src={thumbnail_5} alt="" />
          <div className="video-time">11:17</div>
        </div>
        <div className="video-info-grid">
          <div className="channel-picture">
            <img className="profile-picture" src={channel_5} alt="" />
          </div>
          <div className="video-info">
            <p className="video-title">
              Kadane's Algorithm to Maximum Sum Subarray Problem
            </p>
            <p className="video-author">CS Dojo</p>
            <p className="video-stats">519K views &#183; 5 years ago</p>
          </div>
        </div>
      </div>

      <div className="video-preview">
        <div className="thumbnail-row">
          <img className="thumbnail" src={thumbnail_6} alt="" />
          <div className="video-time">19:59</div>
        </div>
        <div className="video-info-grid">
          <div className="channel-picture">
            <img className="profile-picture" src={channel_6} alt="" />
          </div>
          <div className="video-info">
            <p className="video-title">
              Anything You Can Fit In The Circle I’ll Pay For
            </p>
            <p className="video-author">MrBeast</p>
            <p className="video-stats">141M views &#183; 1 year ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
