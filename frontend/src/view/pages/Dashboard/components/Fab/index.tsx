import { PlusIcon } from "@radix-ui/react-icons";

export function Fab() {
  return (
    <button
      className="fixed right-4 bottom-4 bg-teal-900 w-12 h-12 rounded-full flex items-center justify-center text-white"
    >
      <PlusIcon className="w-6 h-6" />
    </button>
  );
}
