import classNames from "classnames";
import React from "react";

type DetailTagListItemProps = {
  text: string;
  intent?: "default" | "danger";
};

export function DetailTagListItem({
  text,
  intent = "default",
}: DetailTagListItemProps) {
  return (
    <span
      className={classNames(
        "rounded px-2",
        intent === "danger"
          ? "bg-lime-200 text-lime-900"
          : "bg-blue-200 text-blue-900"
      )}
    >
      {text}
    </span>
  );
}
