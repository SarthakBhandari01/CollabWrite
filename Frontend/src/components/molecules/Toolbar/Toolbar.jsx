import { FontFamilyButton } from "@/components/atoms/Buttons/FontFamilyButton";
import { HeadingLevelButton } from "@/components/atoms/Buttons/HeadingLevelButton";
import { HighlightColorButton } from "@/components/atoms/Buttons/HighlightColorButton";
import { TextColorButton } from "@/components/atoms/Buttons/TextColorButton";
import { ToolbarButton } from "@/components/atoms/Buttons/ToolbarButton";
import { Separator } from "@/components/ui/separator";
import { useEditorStore } from "@/store/useEditorStore";
import {
  BoldIcon,
  ItalicIcon,
  ListTodoIcon,
  MessageSquarePlusIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  SpellCheckIcon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";

export const Toolbar = () => {
  const { editor } = useEditorStore();

  const sections = [
    [
      {
        label: "Undo",
        icon: Undo2Icon,
        onClick: () => editor?.chain().focus().undo().run(),
      },
      {
        label: "Redo",
        icon: Redo2Icon,
        onClick: () => editor?.chain().focus().redo().run(),
      },
      {
        label: "Print",
        icon: PrinterIcon,
        onClick: () => window.print(),
      },
      {
        label: "Spell Check",
        icon: SpellCheckIcon,
        onClick: () => {
          const current = editor?.view.dom.getAttribute("spellCheck");
          editor?.view.dom.setAttribute(
            "spellCheck",
            current === "false" ? "true" : "false"
          );
        },
      },
    ],
    [
      {
        label: "Bold",
        icon: BoldIcon,
        isActive: editor?.isActive("bold"),
        onClick: () => editor?.chain().focus().toggleBold().run(),
      },
      {
        label: "Italic",
        icon: ItalicIcon,
        isActive: editor?.isActive("italic"),
        onClick: () => editor?.chain().focus().toggleItalic().run(),
      },
      {
        label: "Underline",
        icon: UnderlineIcon,
        isActive: editor?.isActive("underline"),
        onClick: () => editor?.chain().focus().toggleUnderline().run(),
      },
    ],
    [
      {
        label: "Comment",
        icon: MessageSquarePlusIcon,
        onClick: () => console.log("Todo: Comment"),
        isActive: false,
      },
      {
        label: "List Todo",
        icon: ListTodoIcon,
        onClick: () => editor?.chain().focus().toggleTaskList().run(),
        isActive: editor?.isActive("taskList"),
      },
      {
        label: "Remove Formatting",
        icon: RemoveFormattingIcon,
        onClick: () => editor?.chain().focus().unsetAllMarks().run(),
      },
    ],
  ];
  return (
    <div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center  gap-x-1.5 overflow-x-auto">
      {sections[0].map((item) => {
        return (
          <ToolbarButton
            key={item.label}
            onClick={item.onClick}
            icon={item.icon}
          />
        );
      })}
      <Separator orientation="vertical" className="h-4  bg-gray-400" />
      <FontFamilyButton />
      <Separator orientation="vertical" className="h-4  bg-gray-400" />
      <HeadingLevelButton />
      <Separator orientation="vertical" className="h-4   bg-gray-400" />
      {sections[1].map((item) => {
        return (
          <ToolbarButton
            key={item.label}
            onClick={item.onClick}
            icon={item.icon}
            isActive={item.isActive}
          />
        );
      })}
      <TextColorButton />
      <HighlightColorButton />
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      {sections[2].map((item) => {
        return (
          <ToolbarButton
            key={item.label}
            onClick={item.onClick}
            icon={item.icon}
            isActive={item.isActive}
          />
        );
      })}
    </div>
  );
};
