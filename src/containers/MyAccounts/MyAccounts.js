import React from "react";
import "./MyAccounts.css";
import ztm from "./ZTM.jpg";
import email from "./email.svg";
import logo from "./logo.svg";
import username from "./username.svg";
import avatar from "./avatar.svg";
import password from "./password.svg";
import cancel from "./cancel.svg";

const MyAccounts = () => {
  return (
    <div className="component">
      <div className="navbar">
        <div className="logoWithText">
          <div className="logo">
            <img src={logo} alt="Logo of The Survey" width="50" height="50" />
          </div>
          <div className="text">
            <span className="survey">The Survey</span>
          </div>
        </div>
        <div className="signup">
          <button id="signUpButton">Sign Up</button>
        </div>
      </div>
      <div className="contentContainer">
        <div className="contentAndTitles">
          <div className="surveysTitle">
            <span>My Account:</span>
          </div>
          <div className="personalInfo">
            <div className="settingsTitle">
              <span>Personal Info</span>
            </div>
            <div className="changeInfoContainer">
              <div className="changeInfo">
                <div>
                  <img src={username} alt="username" />
                </div>
                <span className="infoDescription">
                  <span>Username: </span>
                </span>
                <span id="username" />
                <input
                  type="text"
                  name="username"
                  placeholder="Enter A New Username"
                  className="displayNone"
                  id="usernameInput"
                />
                <span className="changeButton" id="changeUsername">
                  <span>Change</span>
                </span>
              </div>
              <div className="changeInfo">
                <div>
                  <img src={email} width="25" height="15" />
                </div>

                <span className="infoDescription">
                  <span>Email: </span>
                </span>
                <span id="email" />
                <input
                  type="text"
                  name="email"
                  placeholder="Enter A New Email"
                  className="displayNone"
                  id="emailInput"
                />
                <span className="changeButton" id="changeEmail">
                  <span>Change</span>
                </span>
              </div>
              <div className="changeInfo">
                <div>
                  <img src={avatar} alt="avatar" />
                </div>
                <span className="infoDescription">
                  <span>Change Profile Photo: </span>
                </span>
                <span className="changeButton">
                  <span>Change</span>
                </span>
              </div>
            </div>
          </div>
          <div className="manageAccount">
            <div className="settingsTitle">
              <span>Manage Account</span>
            </div>
            <div className="manageInfo">
              <div>
                <span className="manageSpan">Change Password: </span>
              </div>
              <div>
                <img src={password} alt="avatar" />

                <input
                  type="password"
                  name="oldPassword"
                  placeholder="Old Password"
                />
              </div>
              <div>
                <img src={password} alt="avatar" />

                <input
                  type="password"
                  name="newPassword"
                  placeholder="New Password"
                />
              </div>
              <div>
                <img src={password} alt="avatar" />

                <input
                  type="password"
                  name="newPassword"
                  placeholder="New Password"
                />
              </div>
              <span className="changeButton">
                <span>Change</span>
              </span>
            </div>
            <div className="manageInfo">
              <div className="warning">
                <span>WARNING: DANGER ZONE !</span>
              </div>
              <div>
                <img src={cancel} alt="avatar" />

                <span className="infoDescription">
                  <span>Delete Account: </span>
                </span>
                <span className="deleteAccButton">
                  <span>Delete</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="links">
          <div className="leftLinks">
            <div className="linksTitle">
              <span>COMMUNITY</span>
            </div>
            <div className="theLinks">
              <a href="https://zerotomastery.io">Community Website</a>
              <a href="https://github.com/zero-to-mastery">Community Github</a>
              <a href="https://zero-to-mastery.github.io/ZtM-Job-Board/">
                ZTM Job-Board
              </a>
              <a href="https://www.udemy.com/the-complete-web-developer-in-2018/">
                ZTM Course
              </a>
              <a href="https://www.udemy.com/the-complete-junior-to-senior-web-developer-roadmap/">
                Senior Course
              </a>
            </div>
          </div>
          <div className="middleText">
            <div className="initiative">
              <span>An Initiative Of</span>
            </div>
            <div className="ztmLogo">
              <img src={ztm} width="200" height="200" />
            </div>
          </div>
          <div className="rightLinks">
            <div className="linksTitle">
              <span>THE SURVEY</span>
            </div>
            <div className="theLinks">
              <a href="https://github.com/zero-to-mastery/TheVerySpecialProject">
                Github Repo
              </a>
              <a href="https://github.com/zero-to-mastery/TheVerySpecialProject/graphs/contributors">
                Contributors
              </a>
              <a href="https://github.com/zero-to-mastery/TheVerySpecialProject/wiki">
                Wiki
              </a>
              <a href="https://github.com/zero-to-mastery/TheVerySpecialProject/blob/master/README.md">
                Coming Features
              </a>
              <a href="https://github.com/zero-to-mastery/TheVerySpecialProject/issues">
                Report A Bug
              </a>
            </div>
          </div>
        </div>
        <div className="bottomText">
          <span>
            Made With
            <span role="img" aria-label="love" className="love">
              🖤
            </span>
            By The ZTM Community
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyAccounts;
