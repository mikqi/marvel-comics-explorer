export interface ICharacterDataWrapper {
  code?: number
  status?: string
  copyright?: string
  attributionText?: string
  attributionHTML?: string
  data?: ICharacterDataContainer
  etag?: string
}

export interface ICharacterDataContainer {
  offset?: number
  limit?: number
  total?: number
  count?: number
  results?: [ICharacter]
}

export interface ICharacter {
  id?: number
  name?: string
  description?: string
  modified?: Date
  resourceURI?: string
  urls?: [IUrl]
  thumbnail: IImage
  comics: IComicList
  stories: IStoryList
  events: IEventList
  series: ISeriesList
}

export interface IUrl {
  type?: string
  url?: string
}

export interface IImage {
  path?: string
  extension?: string
}

export interface IComicList {
  available?: number
  returned?: number
  collectionURI?: string
  items?: [IComicSummary]
}

export interface IComicSummary {
  resourceURI?: string
  name?: string
}

export interface IStoryList {
  available?: number
  returned?: number
  collectionURI?: string
  items?: [IStorySummary]
}

export interface IStorySummary {
  resourceURI?: string
  name?: string
  type?: string
}

export interface IEventList {
  available?: number
  returned?: number
  collectionURI?: string
  items?: [IEventSummary]
}

export interface IEventSummary {
  resourceURI?: string
  name?: string
}

export interface ISeriesList {
  available?: number
  returned?: number
  collectionURI?: string
  items?: [ISeriesSummary]
}

export interface ISeriesSummary {
  resourceURI?: string
  name?: string
}
