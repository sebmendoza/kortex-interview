"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { ChevronDownIcon } from "@radix-ui/react-icons";

type NoteTitleProps = {
  title: string;
  docUuid: string;
  hasChild: boolean;
  isExpanded?: boolean;
};

export default function NoteTitle({
  title,
  docUuid,
  hasChild,
  isExpanded,
}: NoteTitleProps) {
  const searchParams = useSearchParams();

  const router = useRouter();
  const currentNote = searchParams.get("note");

  return (
    <div
      className={`flex items-center ${
        currentNote == docUuid ? "text-white" : "text-gray-600"
      } group-hover:text-gray-300 transition duration-200 ease-in`}
      onClick={() => {
        router.push(`/?note=${docUuid}`);
      }}
    >
      {hasChild ? (
        <ChevronDownIcon
          className={`mr-1 ${
            isExpanded ? "rotate-180" : "rotate-0"
          } transition duration-300 ease-in-out`}
        />
      ) : (
        <div className="w-4 h-1"> </div>
      )}
      <h3 className="">{title}</h3>
    </div>
  );
}
