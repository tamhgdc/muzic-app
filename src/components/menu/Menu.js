import React from "react";
import MenuItem from "./MenuItem";
import {
  AiFillHome,
  AiOutlineDingding,
  AiOutlineLogout,
  AiOutlineGift,
  AiFillGithub,
  AiFillGoogleCircle,
  AiFillHtml5,
  AiFillSetting,
} from "react-icons/ai";
import CartPlay from "./CartPlay";

const listHead = [
  {
    title: "Home",
    icon: <AiFillHome />,
    to: "/",
  },
  {
    title: "AM",
    icon: <AiOutlineDingding />,
    to: "/am",
  },
  {
    title: "Community",
    icon: <AiOutlineGift />,
    to: "/community",
  },
];
const listSocial = [
  {
    title: "Friends",
    icon: <AiFillGithub />,
    to: "/friends",
  },
  {
    title: "Parties",
    icon: <AiFillGoogleCircle />,
    to: "/parties",
  },
  {
    title: "Media",
    icon: <AiFillHtml5 />,
    to: "/media",
  },
];
const listGeneral = [
  {
    title: "Setting",
    icon: <AiFillSetting />,
    to: "/setting",
  },
  {
    title: "Log out",
    icon: <AiOutlineLogout />,
    to: "/out",
  },
];
const Menu = () => {
  return (
    <div className="fixed pr-8 -translate-x-[150%] border-r border-gray-600 lg:static lg:translate-x-0">
      <img src="/logo.png" alt="logo" className="max-w-[10rem] mb-7" />
      <MenuItemRender list={listHead} title={"Menu"}></MenuItemRender>
      <MenuItemRender list={listSocial} title={"Social"}></MenuItemRender>
      <MenuItemRender list={listGeneral} title={"Menu"}></MenuItemRender>
      <CartPlay></CartPlay>
    </div>
  );
};

const MenuItemRender = ({ list, title }) => {
  return (
    <>
      <h3 className="mb-2 text-lg font-medium uppercase">{title}</h3>
      {list.map((item) => (
        <MenuItem key={item.title} to={item.to} icon={item.icon}>
          {item.title}
        </MenuItem>
      ))}
    </>
  );
};

export default Menu;
