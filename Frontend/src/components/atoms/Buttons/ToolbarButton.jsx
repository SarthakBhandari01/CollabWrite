import { cn } from "@/lib/utils";

// eslint-disable-next-line no-unused-vars
export const ToolbarButton = ({ onClick, isActive, icon: Icon }) => {
  return (
    <button
      type="button"
      aria-pressed={isActive}
      onClick={onClick}
      className={cn(
        "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
        isActive && "bg-neutral-200/80"
      )}
    >
      <Icon className="size-5" />
    </button>
  );
};
