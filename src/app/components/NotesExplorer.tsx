"use client";
import { useState } from "react";
import { KortexDocument, sampleDocuments } from "../kortex_interview_sample1";
import NoteAccordion from "./NoteAccordion";

const NotesExplorer = () => {
  // State for storing all out sample Data (probably retrieved from internal API), current expanded notes, and current right-clicked menu open
  const [allDocuments, setAllDocuments] =
    useState<KortexDocument[]>(sampleDocuments);
  const [expandedNoteIDs, setExpandedNotesIDs] = useState<string[]>([]);
  const [contextMenuUuid, setContextMenuUuid] = useState<string>("");

  const toggleExpandedParents = (docUuid: string) => {
    const docIsAlreadyExpanded = expandedNoteIDs.includes(docUuid);

    const newExpandedNotesIDs = docIsAlreadyExpanded
      ? expandedNoteIDs.filter((uuid) => uuid !== docUuid)
      : [...expandedNoteIDs, docUuid];

    setExpandedNotesIDs(newExpandedNotesIDs);
  };

  const renderNotes = (currDocument: KortexDocument, depthCount: number) => {
    const hasChildren = allDocuments.filter(
      (doc) => doc.parent === currDocument.uuid
    );

    return (
      <div key={currDocument.uuid}>
        <NoteAccordion
          currDocument={currDocument}
          toggleExpandedParents={toggleExpandedParents}
          depthCount={depthCount}
          expandedNoteIDs={expandedNoteIDs}
          hasChildren={hasChildren}
          setContextMenuUuid={setContextMenuUuid}
          contextMenuUuid={contextMenuUuid}
          allDocuments={allDocuments}
          setAllDocuments={setAllDocuments}
        />

        {expandedNoteIDs.includes(currDocument.uuid) && hasChildren && (
          <div>
            {hasChildren.map((child) => renderNotes(child, depthCount + 1))}
          </div>
        )}
      </div>
    );
  };

  const depthCount = 0;

  return (
    <div className="py-2 px-1 border border-gray-700 rounded-xl w-72">
      {allDocuments
        .filter((document) => document.parent == null)
        .map((parentNote) => {
          return renderNotes(parentNote, depthCount);
        })}
    </div>
  );
};

export default NotesExplorer;
