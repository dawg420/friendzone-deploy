import "./topbar.css";
import React, { useEffect, useState } from "react";
import {
  Menu,
  Person,
  Chat,
  Notifications,
  Home,
  Forum,
  People,
  Message,
  Settings,
  Logout,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { getAuth, signOut } from "firebase/auth";
import { getUserInfo, getNotifications } from "../../firebase";
import { onSnapshot } from "firebase/firestore";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FriendReq from "../friendreq/FriendReq";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Notifs from "../notifs/Notifs";

export function FriendModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Friend Requests
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.contents.map((friendEmail2) => (
          <FriendReq ownEmail={props.ownEmail} friendEmail={friendEmail2} />
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export function NotifModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Notifications
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.contents}</Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Topbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState();
  const [friendReq, setFriendReq] = useState([]);
  const [friendModalShow, setFriendModalShow] = useState(false);
  const [notifModalShow, setNotifModalShow] = useState(false);
  const [ownEmail, setOwnEmail] = useState();
  const [unreadMsg, setUnreadMsg] = useState(0);
  const [notifData, setNotifData] = useState([]);
  const navigate = useNavigate();

  useEffect(
    () =>
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          setLoggedIn(true);
          const info = await getUserInfo(user.email);
          setUser(info);
          setFriendReq(info.incFriendReq);
          setOwnEmail(info.email);
          setUnreadMsg(info.unreadMsg);
          const notifQuery = await getNotifications(user.email);
          onSnapshot(notifQuery, (notifSnapshot) => {
            notifSnapshot.forEach((doc) => {
              let props = {
                to: doc.data().to,
                from: doc.data().from,
                postId: doc.data().postId,
                notifId: doc.data().refId,
                closeNotif: () => setNotifModalShow(false),
              };
              setNotifData((arr) => [...arr, <Notifs {...props} />]);
            });
          });
        } else {
          setLoggedIn(false);
        }
      }),
    []
  );

  const popoverFriends = (
    <Popover id="popover-positioned-bottom">
      <Popover.Body>
        <div>You have no new Friend requests!</div>
      </Popover.Body>
    </Popover>
  );

  const popoverMsg = (
    <Popover id="popover-positioned-bottom">
      <Popover.Header as="h3">Messages</Popover.Header>
      <Popover.Body>
        <div>You have {!unreadMsg ? 0 : unreadMsg} new Messages!</div>
      </Popover.Body>
      <Button variant="link" onClick={() => navigate("/dashboard/messages")}>
        Go to your messages
      </Button>
    </Popover>
  );

  const popoverNotifs = (
    <Popover id="popover-positioned-bottom">
      <Popover.Body>
        <div>You have no new Notifications!</div>
      </Popover.Body>
    </Popover>
  );

  const auth = getAuth();
  const logout = async () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <nav className="navbar bg-light fixed-top">
        <div className="container-fluid">
          <div className="col">
            {loggedIn ? (
              <button
                className="btn btn-light"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                <Menu />
              </button>
            ) : null}
            <span className="logo">FriendZone</span>
          </div>
          {loggedIn ? (
            <div className="col d-flex flex-row-reverse">
              <span>
                <span>
                  <OverlayTrigger
                    trigger={friendReq.length === 0 ? "click" : null}
                    placement="bottom"
                    overlay={popoverFriends}
                  >
                    <button
                      type="button"
                      className="btn btn-primary me-3 position-relative"
                      onClick={() => {
                        return friendReq.length === 0
                          ? null
                          : setFriendModalShow(true);
                      }}
                    >
                      <Person />
                      {friendReq.length === 0 ? null : (
                        <span className="position-absolute top-0 start-70 translate-middle badge rounded-pill bg-danger">
                          {friendReq.length}
                          <span className="visually-hidden">
                            friend requests
                          </span>
                        </span>
                      )}
                    </button>
                  </OverlayTrigger>
                </span>
                <span>
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={popoverMsg}
                  >
                    <button className="btn btn-primary me-3 position-relative">
                      <Chat />
                      {!unreadMsg ? null : (
                        <span className="position-absolute top-0 start-70 translate-middle badge rounded-pill bg-danger">
                          {unreadMsg}
                          <span className="visually-hidden">messages</span>
                        </span>
                      )}
                    </button>
                  </OverlayTrigger>
                </span>
                <span>
                  <OverlayTrigger
                    trigger={notifData.length === 0 ? "click" : null}
                    placement="bottom"
                    overlay={popoverNotifs}
                  >
                    <button
                      className="btn btn-primary me-3 position-relative"
                      onClick={() => {
                        return notifData.length === 0
                          ? null
                          : setNotifModalShow(true);
                      }}
                    >
                      <Notifications />
                      {notifData.length === 0 ? null : (
                        <span className="position-absolute top-0 start-70 translate-middle badge rounded-pill bg-danger">
                          {notifData.length}
                          <span className="visually-hidden">notifications</span>
                        </span>
                      )}
                    </button>
                  </OverlayTrigger>
                </span>
              </span>
            </div>
          ) : null}
        </div>
        <FriendModal
          show={friendModalShow}
          onHide={() => setFriendModalShow(false)}
          contents={friendReq}
          ownEmail={ownEmail}
        />
        <NotifModal
          show={notifModalShow}
          onHide={() => setNotifModalShow(false)}
          contents={notifData.map((notif) => notif)}
        />
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              FriendZone
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <Nav variant="pills" defaultActiveKey="#" className="flex-column">
              <Nav.Link
                eventKey="Home"
                onClick={() => navigate("/dashboard/home")}
              >
                <Home />
                Home
              </Nav.Link>
              <Nav.Link
                eventKey="Profile"
                onClick={() => navigate("/dashboard/myProfile")}
              >
                <Person />
                Profile
              </Nav.Link>
              <Nav.Link
                eventKey="Discussions"
                onClick={() => navigate("/dashboard/discussions")}
              >
                <Forum />
                Discussions
              </Nav.Link>
              <Nav.Link
                eventKey="People"
                onClick={() => navigate("/dashboard/people")}
              >
                <People />
                People
              </Nav.Link>
              <Nav.Link
                eventKey="Messages"
                onClick={() => navigate("/dashboard/messages")}
              >
                <Message />
                Messages
              </Nav.Link>
              <Nav.Link
                eventKey="Settings"
                onClick={() => navigate("/dashboard/settings")}
              >
                <Settings />
                Settings
              </Nav.Link>
              <Nav.Link eventKey="Logout" onClick={logout}>
                <Logout />
                Logout
              </Nav.Link>
            </Nav>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Topbar;
