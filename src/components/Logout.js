import React, { useContext } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { CgSmileSad } from "react-icons/cg";
import { GrClose } from "react-icons/gr";
import { State } from "../context/stateContext";
import AuthContext from "../context/auth";

export default function Logout() {
  const { setShowLogoutModal } = useContext(State);
  const { logout } = useContext(AuthContext);

  return (
    <div className="transition-all duration-200 bg-black bg-opacity-75 fixed left-0 right-0 bottom-0 top-0 z-20">
      <div className="w-9/12 max-w-2xl bg-white p-8 rounded shadow fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
     
      </div>
    </div>
  );
}
