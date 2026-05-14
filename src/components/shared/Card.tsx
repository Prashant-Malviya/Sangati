import type { FC, ReactElement, ReactNode } from "react";

interface CardInterface {
  children?: ReactElement;
  title?: ReactNode;
  footer?: ReactElement;
  divider?: boolean;
  key?: string | number;
  noPadding?: boolean;
}

const Card: FC<CardInterface> = ({
  noPadding,
  children,
  title,
  footer,
  divider = false,
  key = 0,
}) => {
  return (
    <div
      className={`bg-white shadow-lg ${noPadding ? "" : "px-5 py-4"} rounded-lg border border-gray-100 space-y-2`}
      key={key}
    >
      {title && <h1 className="capitalize text-lg font-semibold">{title}</h1>}
      {divider && <div className="border-b -mx-5 my-4 border-b-gray-100" />}
      {children && <div className="text-gray-500">{children}</div>}
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  );
};

export default Card;
