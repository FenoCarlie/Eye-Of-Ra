import { useRef, useState } from "react";
import { image } from "./../../assets/images/image";
import DropdownMenu from "./DropDownMenu";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAuthentContext } from "../../contexts/AuthentContext";
import Modal from "./Modal";

function Header() {
  const { setToken } = useAuthentContext();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const triggerRef = useRef(null);
  const modalTriggerRef = useRef(null);

  const pathname = location.pathname;
  const origin = location.origin;
  const href = `${origin}${pathname}`;
  const homeHref = `${origin}/home`;

  const toggleDropdown = () => {
    setMenuIsOpen((prevState) => !prevState);
  };

  const onLogout = () => {
    // Fermer le dropdown avant d'ouvrir le modal
    setMenuIsOpen(false);
    setModalIsOpen(true);
  };

  return (
    <div className="header w-full h-auto flex flex-row px-3 py-2 sm:px-6 items-center justify-end">
      <span ref={triggerRef} onClick={toggleDropdown}>
        <img
          src={image.avatar_1}
          alt=""
          className="relative w-10 h-10 overflow-hidden rounded-full cursor-pointer"
        />
      </span>
      <DropdownMenu
        isOpen={menuIsOpen}
        toggleDropdown={toggleDropdown}
        childStyle={`w-full p-6 flex flex-col justify-center items-center`}
        contentStyle={`absolute`}
        triggerRef={triggerRef}
      >
        <section className="w-full flex justify-center mb-10">
          <span className="text-lg">FENO Aïdane Carlie</span>
        </section>
        <section
          className={`w-full grid grid-cols-4 gap-4 items-center mb-10 ${
            href == homeHref && "hidden"
          }`}
        >
          <Link
            to="/stream"
            className="flex justify-between h-full items-center flex-col mr-3"
          >
            <img
              src={image.stream}
              alt=""
              className="relative w-11 h-11 overflow-hidden cursor-pointer"
            />
            <label className="text-lg">Stream</label>
          </Link>
          <Link
            to="/drive"
            className="flex justify-between h-full items-center flex-col"
          >
            <img
              src={image.drive}
              alt=""
              className="relative w-9 h-9 overflow-hidden cursor-pointer"
            />
            <label className="text-lg">Drive</label>
          </Link>
        </section>
        <section className="w-full flex justify-center items-center">
          <span className="flex flex-row items-center justify-center">
            <IoSettingsOutline className="w-5 h-5 mr-3" />
            <label>Setting</label>
          </span>
          <span className="h-10 border-r-[1px] border-black mx-5"></span>
          <span />
          <button
            className="flex flex-row items-center justify-center"
            onClick={onLogout}
          >
            <MdLogout className="w-5 h-5 mr-3" />
            <label>LogOut</label>
          </button>
        </section>
      </DropdownMenu>

      <Modal isOpen={modalIsOpen} toggleModal={setModalIsOpen}>
        <h2>Confirm Logout</h2>
        <p>Are you sure you want to log out?</p>
        <button onClick={() => setModalIsOpen(false)}>Cancel</button>
        <button onClick={() => setToken(null)}>confirm</button>
      </Modal>
    </div>
  );
}

export default Header;
