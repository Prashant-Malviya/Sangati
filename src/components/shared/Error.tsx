import type { FC } from "react";

interface ErrorInterface {
  message: string;
}

const Error: FC<ErrorInterface> = ({ message }) => {
  if (!message) return null;

  return (
    <div
      className="
        w-full
        rounded-xl
        border border-red-200
        bg-red-50
        px-4 py-3
        shadow-sm
      "
    >
      <div className="animate__animated animate__fadeIn flex items-start gap-3">
        <div className="flex-shrink-0">
          <i className="ri-error-warning-line text-xl text-red-500" />
        </div>

        <div className="flex-1">
          <h4 className="font-semibold text-red-700">
            Something went wrong
          </h4>

          <p className="mt-1 text-sm text-red-600 break-words">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;