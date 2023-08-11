type ButtonProps = {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode | string;
};

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`text-zinc-50 bg-emerald-600 p-4 mx-2 rounded-md ${
        props.className || ""
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
