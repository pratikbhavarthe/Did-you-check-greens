type DetailTitleProps = {
  title: string;
};

export function DetailTitle(props: DetailTitleProps) {
  return (
    <span className="mb-1 overflow-hidden text-ellipsis whitespace-nowrap text-pink-500 md:mb-0">
      {props.title}
    </span>
  );
}
