import classNames from "classnames";

type ExternalLinkProps = {
  href: React.AnchorHTMLAttributes<HTMLAnchorElement>["href"];
  children: string;
};

export function ExternalLink(props: ExternalLinkProps) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames(
        "rounded-sm text-neutral-500 transition-[color,box-shadow] after:content-['_↗']",
        // State: hover
        "hover:text-black",
        // State: focus
        "focus-visible:ring-4 focus-visible:ring-blue-400/50"
      )}
    >
      {props.children}
    </a>
  );
}
