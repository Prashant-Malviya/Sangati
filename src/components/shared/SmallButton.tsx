import type { FC } from "react";
import "remixicon/fonts/remixicon.css";

const baseStyle =
  "inline-flex items-center justify-center gap-1 rounded-md text-xs font-medium px-3 py-1 transition-colors duration-200 text-white";

const SmallButtonModel = {
  primary: `${baseStyle} bg-blue-500 hover:bg-blue-600`,
  secondary: `${baseStyle} bg-indigo-500 hover:bg-indigo-600`,
  danger: `${baseStyle} bg-red-500 hover:bg-red-600`,
  warning: `${baseStyle} bg-orange-500 hover:bg-orange-600`,
  dark: `${baseStyle} bg-zinc-500 hover:bg-zinc-600`,
  success: `${baseStyle} bg-green-500 hover:bg-green-600`,
  info: `${baseStyle} bg-cyan-500 hover:bg-cyan-600`,
  pink: `${baseStyle} bg-pink-500 hover:bg-pink-600`,
  darkPink: `${baseStyle} bg-pink-700 hover:bg-pink-800`,
  darkBlue: `${baseStyle} bg-blue-800 hover:bg-blue-900`,
  violet: `${baseStyle} bg-violet-900 hover:bg-violet-950`,

  like: `${baseStyle} bg-pink-500 hover:bg-pink-600 shadow-sm`,
  dislike: `${baseStyle} bg-indigo-600 hover:bg-indigo-700 shadow-sm`,
  comment: `${baseStyle} bg-teal-500 hover:bg-teal-600 shadow-sm`,
};

interface SmallButtonInterface {
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
  loading?: boolean;
}

const SmallButton: FC<SmallButtonInterface> = ({
  children = "Submit",
  type = "primary",
  onClick,
  icon,
  loading = false,
}) => {
  return (
    <button
      disabled={loading}
      onClick={onClick}
      className={`${SmallButtonModel[type]} ${
        loading ? "opacity-70 cursor-not-allowed" : ""
      }`}
    >
      {loading ? (
        <>
          <i className="ri-loader-4-line animate-spin text-sm"></i>
          Loading...
        </>
      ) : (
        <>
          {icon && <i className={`ri-${icon} text-sm`}></i>}
          {children}
        </>
      )}
    </button>
  );
};

export default SmallButton;