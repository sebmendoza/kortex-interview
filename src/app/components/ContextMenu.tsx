"use client";

import {
  CheckIcon,
  Cross1Icon,
  TrashIcon,
  FileIcon,
  Pencil2Icon,
} from "@radix-ui/react-icons";
import { v4 as uuidv4 } from "uuid";
import {
  KortexDocument,
  KortexDocumentStatus,
} from "../kortex_interview_sample1";
import { useState } from "react";

type ContextMenuProps = {
  setContextMenuUuid: (docUuid: string) => void;
  currDocument: KortexDocument;
  allDocuments: KortexDocument[];
  setAllDocuments: (documents: KortexDocument[]) => void;
};

export default function ContextMenu({
  setContextMenuUuid,
  currDocument,
  allDocuments,
  setAllDocuments,
}: ContextMenuProps) {
  const [startRenaming, setStartRenaming] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState("");

  const contextMenu = [
    {
      label: "Delete",
      icon: <TrashIcon />,
      handleClick: () => deleteDocument(currDocument),
    },
    {
      label: "Add Note",
      icon: <FileIcon />,
      handleClick: () => addChild(currDocument),
    },
    {
      label: "Rename",
      icon: <Pencil2Icon />,
      handleClick: () => setStartRenaming(true),
    },
  ];

  const addChild = (parentDocument: KortexDocument) => {
    const newDocument: KortexDocument = {
      title: "New Page",
      uuid: uuidv4(),
      content: "",
      status: KortexDocumentStatus.DRAFT,
      keywords: [],
      date_created: "string",
      date_modified: "string",
      parent: parentDocument.uuid,
    };

    setAllDocuments([...allDocuments, newDocument]);
  };

  const deleteDocument = (documentToDelete: KortexDocument) => {
    const newParent = documentToDelete.parent;

    // Update the parents of the children documents with their new parent
    const newDocuments = allDocuments.map((doc) => {
      return doc.parent === documentToDelete.uuid
        ? { ...doc, parent: newParent }
        : doc;
    });

    // Remove the document from array of documents
    const updatedDocuments = newDocuments.filter(
      (doc) => doc.uuid !== documentToDelete.uuid
    );

    // Update the state with the modified array
    setAllDocuments(updatedDocuments);
    setContextMenuUuid("");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    // Check if the Enter key is pressed
    if (event.key === "Enter") {
      renameDocument(currDocument, newTitle);
    }
  };

  const renameDocument = (document: KortexDocument, newTitle: string) => {
    // Create a new object with the updated title
    const newDocument: KortexDocument = {
      ...document, // Copy all existing properties
      title: newTitle, // Update the title
    };

    // replace the item with the updated object
    const updatedDocuments = allDocuments.map((doc: KortexDocument) => {
      return doc.uuid == document.uuid ? newDocument : doc;
    });

    setAllDocuments(updatedDocuments);
    setContextMenuUuid("");
    setStartRenaming(false);
  };

  return (
    <>
      <div className="flex justify-end px-4 text-white">
        <Cross1Icon onClick={() => setContextMenuUuid("")} />
      </div>
      <div className="p-2 bg-neutral-950 flex flex-col gap-1">
        {contextMenu.map((item) => (
          <div
            className="flex items-center gap-2 justify-between bg-opacity-75 bg-black px-2 py-1 rounded-lg text-white"
            onClick={item.handleClick}
            key={item.label}
          >
            {startRenaming && item.label == "Rename" ? (
              <>
                <input
                  type="text"
                  placeholder="New Title"
                  value={newTitle}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  className="focus:border-0 focus:outline-none rounded-lg px-2 w-full bg-gray-700 text-white"
                />
                <CheckIcon
                  onClick={() => renameDocument(currDocument, newTitle)}
                />
              </>
            ) : (
              <>
                <p>{item.label}</p>
                {item.icon}
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
