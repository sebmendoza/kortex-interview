export enum KortexDocumentStatus {
  DRAFT = "Draft",
  KORENOTE = "Korenote",
}

export interface KortexDocument {
  title: string;
  uuid: string;
  content: string;
  status: KortexDocumentStatus;
  keywords: string[];
  date_created: string;
  date_modified: string;
  parent: string | null;
}

export const sampleDocuments: KortexDocument[] = [
  {
    title: "Romeo and Juliet",
    uuid: "1",
    content: "Thy sayeth to be or not to be, that is the question.",
    status: KortexDocumentStatus.DRAFT,
    keywords: ["Shakespeare", "Hamlet"],
    date_created: "2023-11-10T10:00:00.000Z",
    date_modified: "2023-11-11T11:00:00.000Z",
    parent: "4",
  },
  {
    title: "When Breath Becomes Air",
    uuid: "2",
    content: "What is the meaning of life?",
    status: KortexDocumentStatus.DRAFT,
    keywords: ["Cancer", "Hope"],
    date_created: "2023-11-07T07:00:00.000Z",
    date_modified: "2023-11-07T08:00:00.000Z",
    parent: null,
  },
  {
    title: "Hunger Games",
    uuid: "3",
    content: "May the odds be ever in your favor.",
    status: KortexDocumentStatus.KORENOTE,
    keywords: ["Shakespeare", "Fiction"],
    date_created: "2023-11-08T08:00:00.000Z",
    date_modified: "2023-11-09T09:00:00.000Z",
    parent: "4",
  },
  {
    title: "All Quiet on the Western Front",
    uuid: "4",
    content: "War is hell.",
    status: KortexDocumentStatus.KORENOTE,
    keywords: ["War"],
    date_created: "2023-11-09T09:00:00.000Z",
    date_modified: "2023-11-10T10:00:00.000Z",
    parent: "5",
  },
  {
    title: "Steve Jobs",
    uuid: "5",
    content: "Stay hungry, stay foolish.",
    status: KortexDocumentStatus.KORENOTE,
    keywords: ["Apple", "Jobs"],
    date_created: "2023-11-11T11:00:00.000Z",
    date_modified: "2023-11-12T12:00:00.000Z",
    parent: null,
  },
  {
    title: "Test",
    uuid: "6",
    content: "Stay hungry, stay foolish.",
    status: KortexDocumentStatus.KORENOTE,
    keywords: ["Apple", "Jobs"],
    date_created: "2023-11-11T11:00:00.000Z",
    date_modified: "2023-11-12T12:00:00.000Z",
    parent: null,
  },
  {
    title: "TestSub 1",
    uuid: "7",
    content: "Stay hungry, stay foolish.",
    status: KortexDocumentStatus.KORENOTE,
    keywords: ["Apple", "Jobs"],
    date_created: "2023-11-11T11:00:00.000Z",
    date_modified: "2023-11-12T12:00:00.000Z",
    parent: "6",
  },
];
