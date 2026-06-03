import type { FC } from "react";
import 'remixicon/fonts/remixicon.css'

const ButtonModel = {
  primary:
    "bg-blue-500 hover:bg-blue-600 rounded font-medium text-white px-6 py-2",

  secondary:
    "bg-indigo-500 hover:bg-indigo-600 rounded font-medium text-white px-6 py-2",

  danger:
    "bg-red-500 hover:bg-red-600 rounded font-medium text-white px-6 py-2",

  warning:
    "bg-orange-500 hover:bg-orange-600 rounded font-medium text-white px-6 py-2",

  dark: "bg-zinc-500 hover:bg-zinc-600 rounded font-medium text-white px-6 py-2",

  success:
    "bg-green-500 hover:bg-green-600 rounded font-medium text-white px-6 py-2",

  info: "bg-cyan-500 hover:bg-cyan-600 rounded font-medium text-white px-6 py-2",

  pink: "bg-pink-500 hover:bg-pink-600 rounded font-medium text-white px-6 py-2",

  darkPink:
    "bg-pink-700 hover:bg-pink-800 rounded font-medium text-white px-6 py-2",

  darkBlue:
    "bg-blue-800 hover:bg-blue-900 rounded font-medium text-white px-6 py-2",

  violet:
    "bg-violet-900 hover:bg-violet-950 rounded font-medium text-white px-6 py-2",

  // NEW PROFESSIONAL SOCIAL COLORS
  like: "bg-pink-500 hover:bg-pink-600 rounded font-medium text-white px-6 py-2",

  dislike:
    "bg-indigo-600 hover:bg-indigo-700 rounded font-medium text-white px-6 py-2",

  comment:
    "bg-teal-500 hover:bg-teal-600 rounded font-medium text-white px-6 py-2",
};

interface ButtonInterface {
  children: string;
  type?:
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "dark"
    | "success"
    | "info"
    | "pink"
    | "darkPink"
    | "darkBlue"
    | "violet"
    | "like"
    | "dislike"
    | "comment";
  onClick?: () => void;
  icon?: string;
  key?: string | number;
  loading?: boolean
}

const Button: FC<ButtonInterface> = ({
  children = "submit",
  type = "danger",
  onClick,
  icon,
  key = 0,
  loading = false
}) => {

  if(loading)
    return(
      <button disabled className="text-gray-400">
        <i className="fa fa-spinner fa-spin mr-2"></i>
        Loading...
      </button>
    )


  return (
    <button className={ButtonModel[type]} onClick={onClick} key={key}>
      {icon && <i className={`ri-${icon} mr-1`}></i>}

      {children}
    </button>
  );
};

export default Button;
