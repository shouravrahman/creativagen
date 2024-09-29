import clsx from "clsx";

type Props = {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
};

export default function PreviewTab({ active, children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        active
            ? "   bg-blue-500"
          : "text-blue-500 bg-transparent hover:bg-blue-100 focus:bg-blue-100",
        "px-4 py-2 text-sm rounded-lg font-medium focus:outline-none focus:ring"
      )}
    >
      {children}
    </button>
  );
}
