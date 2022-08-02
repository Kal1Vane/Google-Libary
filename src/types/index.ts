export type ResponseDataBooks = {
  kind: string,
  totalItems: number,
  items: BooksItem[]
}

export type BooksItem = {
  kind: string,
  id: string,
  etag: string,
  selfLink: string,
  volumeInfo: VolumeInfo,
  saleInfo: SaleInfo,
  accessInfo: AcessInfo,
  searchInfo?: SearchInfo
}

type VolumeInfo = {
  title: string,
  subtitle?: string,
  authors: string[],
  publishedDate: string,
  description: string,
  readingModes?: {
    text: boolean;
    image: boolean;
  },
  pageCount?: number,
  printType?: string,
  categories?: string[],
  language?: string,
  previewLink?: string,
  infoLink?: string,
  canonicalVolumeLink?: string,
}
type SaleInfo = {
  country: string,
  saleability: string,
  isEbook: boolean,
}
type AcessInfo = {
  country: string,
  viewability: string,
  embeddable: boolean,
  publicDomain: boolean,
  textToSpeechPermission: string,
  epub: {
    isAvailable: boolean
  },
  pdf: {
    isAvailable: boolean
  },
  webReaderLink: string,
  accessViewStatus: string,
  quoteSharingAllowed: boolean
}
type SearchInfo = {
  textSnippet: string,
}


export enum NameApiStore {
  dataApi = 'DATAAPI'
}

