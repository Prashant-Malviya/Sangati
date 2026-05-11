import type { FC, ReactElement, ReactNode } from "react";

interface CardInterface {
  children?: ReactElement;
  title?: ReactNode;
  footer?: ReactElement
  divider?:boolean
}

const Card: FC<CardInterface> = (
  {
    children,
    title,
    footer,
    divider=false,

  }
) => {
  return (
    <div className="bg-white shadow-lg px-5 py-4 rounded-lg border border-gray-100 space-y-2">
      {title && <h1 className="capitalize text-lg font-semibold">{title}</h1>}
      {divider &&
      <div className="border-b -mx-5 my-4 border-b-gray-100" />
      }
      {children && <div className="text-gray-500">{children}</div>}
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  );
};

export default Card;
