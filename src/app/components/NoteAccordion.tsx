import * as Accordion from "@radix-ui/react-accordion";
import { KortexDocument } from "../kortex_interview_sample1";
import NoteTitle from "./NoteTitle";
import GreyDots from "./GreyDots";

import ContextMenu from "./ContextMenu";

type NoteAccordionProps = {
  currDocument: KortexDocument;
  toggleExpandedParents: (docUuid: string) => void;
  depthCount: number;
  expandedNoteIDs: string[];
  hasChildren: KortexDocument[];
  setContextMenuUuid: (docUuid: string) => void;
  contextMenuUuid: string;
  allDocuments: KortexDocument[];
  setAllDocuments: (documents: KortexDocument[]) => void;
};

export default function NoteAccordion({
  currDocument,
  toggleExpandedParents,
  depthCount,
  expandedNoteIDs,
  hasChildren,
  setContextMenuUuid,
  contextMenuUuid,
  allDocuments,
  setAllDocuments,
}: NoteAccordionProps) {
  const handleContextMenu = (event: React.MouseEvent, docUuid: string) => {
    event.preventDefault();
    setContextMenuUuid(docUuid);
  };

  return (
    <div>
      <Accordion.Root
        type="single"
        collapsible
        onContextMenu={(event) => handleContextMenu(event, currDocument.uuid)}
        value={contextMenuUuid}
        onClick={() => {
          // Added this to prevent showing children notes when you are pressing the ContextMenu
          if (contextMenuUuid == "") {
            toggleExpandedParents(currDocument.uuid);
          }
        }}
        disabled={contextMenuUuid !== ""}
      >
        <Accordion.Item
          value={currDocument.uuid}
          className={`rounded-lg py-[2px] group hover:bg-neutral-950 !cursor-pointer transition duration-200 ease-in pr-2 ${
            currDocument.uuid == contextMenuUuid ? "bg-neutral-950" : ""
          }`}
        >
          <Accordion.Header>
            <Accordion.Trigger>
              <div className="flex items-center">
                <GreyDots count={depthCount} />
                <NoteTitle
                  title={currDocument.title}
                  docUuid={currDocument.uuid}
                  hasChild={hasChildren.length > 0}
                  isExpanded={expandedNoteIDs.includes(currDocument.uuid)}
                />
              </div>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            <ContextMenu
              setContextMenuUuid={setContextMenuUuid}
              currDocument={currDocument}
              allDocuments={allDocuments}
              setAllDocuments={setAllDocuments}
            />
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}
