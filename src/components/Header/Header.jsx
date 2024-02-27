import React, { useRef, useState } from "react";
import { Container } from "reactstrap";
import Modal from "react-modal";
import "./header.css";

const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About",
    url: "#about",
  },
  {
    display: "EdTech",
    url: "#edtech",
  },
  {
    display: "Course",
    url: "#course",
  },
  {
    display: "Blog",
    url: "",
  },
];

const Header = () => {
  const menuRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className="d-flex align-items-center gap-1">
              <i className="ri-terminal-box-fill"></i> CodeVista.
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <button onClick={openModal}>Connect</button>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>

      {/* Modal for Login Form */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Login Form"
        ariaHideApp={false}
      >
        <iframe
          src="https://applogin1.netlify.app/"
          width="90%"
          height="90%"
          frameBorder="0"
        ></iframe>

        <button
          onClick={closeModal}
          style={{
            padding: "10px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </Modal>
    </header>
  );
};

export default Header;
