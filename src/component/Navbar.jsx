import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Modal = ({ isOpen, onClose, children }) => {
  const modalStyle = {
    display: isOpen ? "block" : "none",
    position: "fixed",
    zIndex: 9999,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };

  const contentStyle = {
    backgroundColor: "#fff",
    margin: "10% auto",
    padding: "20px",
    borderRadius: "5px",
    width: "50%",
  };

  return (
    <div style={modalStyle} onClick={onClose}>
      <div style={contentStyle} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

const Navbar = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    film: "",
    year: "",
  });

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to server
    console.log("Form submitted:", formData);
    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      film: "",
      year: "",
    });
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ zIndex: 99 }}
        data-bs-theme="dark"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <span className="active">FOOD</span>
            <span>ID</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ "--bs-scroll-height": "100px" }}
            >
              <li className="nav-item">
                <Link
                  className={
                    currentUrl === "/" ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    currentUrl === "/menu" ? "nav-link active" : "nav-link"
                  }
                  to="/menu"
                >
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    currentUrl === "/review" ? "nav-link active" : "nav-link"
                  }
                  to="/review"
                >
                  Review
                </Link>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-danger rounded-pill"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={openModal}
                >
                  Request Menu
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <div class="modal-dialog">
          <form action="">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5 mb-3" id="exampleModalLabel">
                  Request Menu
                </h1>
              </div>
              <div class="modal-body">
                <div class="alert alert-info" role="alert">
                  Please Fill in Your Information to Request a Menu !
                </div>
                <div class="form-group">
                  <label for="">Your Name: </label>
                  <input required type="text" class="form-control" />
                </div>
                <div class="form-group my-3">
                  <label for="">Your Email: </label>
                  <input required type="email" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="">Menu Name: </label>
                  <input required type="text" class="form-control" />
                </div>
              </div>
              <div class="modal-footer mt-3 gap-3">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button type="submit" class="btn btn-primary">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;
