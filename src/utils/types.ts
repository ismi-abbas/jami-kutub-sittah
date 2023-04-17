export interface Hadith {
  number: number;
  arab: string;
  id: string;
}

export interface KitabHadith {
  name: string;
  author: string;
  authorRealName: string;
  publisher?: string;
  datePublished?: string;
  url: string;
  bookId: number;
}

export type GetAllProcedureResult = Promise<Hadith[]>;
