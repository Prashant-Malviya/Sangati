import type { FC } from "react";

const IconButtonModel = {
  primary:
    "bg-blue-50 text-blue-500 hover:bg-blue-500 hover:text-white rounded font-medium w-9 h-9 flex items-center justify-center",

  secondary:
    "bg-indigo-50 text-indigo-500 hover:bg-indigo-500 hover:text-white rounded font-medium w-9 h-9 flex items-center justify-center",

  danger:
    "bg-red-50 text-red-500 hover:bg-red-500 hover:text-white rounded font-medium w-9 h-9 flex items-center justify-center",

  warning:
    "bg-orange-50 text-orange-500 hover:bg-orange-500 hover:text-white rounded font-medium w-9 h-9 flex items-center justify-center",

  dark: "bg-zinc-50 text-zinc-500 hover:bg-zinc-500 hover:text-white rounded font-medium w-9 h-9 flex items-center justify-center",

  success:
    "bg-green-50 text-green-500 hover:bg-green-500 hover:text-white rounded font-medium w-9 h-9 flex items-center justify-center",

  info: "bg-cyan-50 text-cyan-500 hover:bg-cyan-500 hover:text-white rounded font-medium w-9 h-9 flex items-center justify-center",

  pink: "bg-pink-50 text-pink-500 hover:bg-pink-500 hover:text-white rounded font-medium w-9 h-9 flex items-center justify-center",
};

interface IconButtonInterface {
  type?:
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "dark"
    | "success"
    | "info"
    | "pink";
  onClick?: () => void;
  icon: string;
  key?: string | number;
}

const IconButton: FC<IconButtonInterface> = ({
  type = "primary",
  onClick,
  icon,
  key = 0,
}) => {
  return (
    <button className={IconButtonModel[type]} onClick={onClick} key={key}>
      <i className={`ri-${icon} text-base`}></i>
    </button>
  );
};

export default IconButton;
