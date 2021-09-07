export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  transform?: Maybe<ImageTransformOptions>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: Maybe<Array<Maybe<AssetFilter>>>;
  OR?: Maybe<Array<Maybe<AssetFilter>>>;
  contentType?: Maybe<Scalars['String']>;
  contentType_contains?: Maybe<Scalars['String']>;
  contentType_exists?: Maybe<Scalars['Boolean']>;
  contentType_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_not?: Maybe<Scalars['String']>;
  contentType_not_contains?: Maybe<Scalars['String']>;
  contentType_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  description?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName?: Maybe<Scalars['String']>;
  fileName_contains?: Maybe<Scalars['String']>;
  fileName_exists?: Maybe<Scalars['Boolean']>;
  fileName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_not?: Maybe<Scalars['String']>;
  fileName_not_contains?: Maybe<Scalars['String']>;
  fileName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  height?: Maybe<Scalars['Int']>;
  height_exists?: Maybe<Scalars['Boolean']>;
  height_gt?: Maybe<Scalars['Int']>;
  height_gte?: Maybe<Scalars['Int']>;
  height_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_lt?: Maybe<Scalars['Int']>;
  height_lte?: Maybe<Scalars['Int']>;
  height_not?: Maybe<Scalars['Int']>;
  height_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size?: Maybe<Scalars['Int']>;
  size_exists?: Maybe<Scalars['Boolean']>;
  size_gt?: Maybe<Scalars['Int']>;
  size_gte?: Maybe<Scalars['Int']>;
  size_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_lt?: Maybe<Scalars['Int']>;
  size_lte?: Maybe<Scalars['Int']>;
  size_not?: Maybe<Scalars['Int']>;
  size_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sys?: Maybe<SysFilter>;
  title?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url?: Maybe<Scalars['String']>;
  url_contains?: Maybe<Scalars['String']>;
  url_exists?: Maybe<Scalars['Boolean']>;
  url_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_not?: Maybe<Scalars['String']>;
  url_not_contains?: Maybe<Scalars['String']>;
  url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  width?: Maybe<Scalars['Int']>;
  width_exists?: Maybe<Scalars['Boolean']>;
  width_gt?: Maybe<Scalars['Int']>;
  width_gte?: Maybe<Scalars['Int']>;
  width_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_lt?: Maybe<Scalars['Int']>;
  width_lte?: Maybe<Scalars['Int']>;
  width_not?: Maybe<Scalars['Int']>;
  width_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  customOrderCollection?: Maybe<CustomOrderCollection>;
  entryCollection?: Maybe<EntryCollection>;
  footerCollection?: Maybe<FooterCollection>;
  hauteCoutureCollection?: Maybe<HauteCoutureCollection>;
  homeCollection?: Maybe<HomeCollection>;
  productCollection?: Maybe<ProductCollection>;
  staffNoteCollection?: Maybe<StaffNoteCollection>;
};

export type AssetLinkingCollectionsCustomOrderCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
};

export type AssetLinkingCollectionsFooterCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type AssetLinkingCollectionsHauteCoutureCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type AssetLinkingCollectionsHomeCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
};

export type AssetLinkingCollectionsProductCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type AssetLinkingCollectionsStaffNoteCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/8z7mw5knx30w/content_types/category) */
export type Category = Entry & {
  __typename?: 'Category';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<CategoryLinkingCollections>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
};

/** [See type definition](https://app.contentful.com/spaces/8z7mw5knx30w/content_types/category) */
export type CategoryLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/8z7mw5knx30w/content_types/category) */
export type CategorySlugArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/8z7mw5knx30w/content_types/category) */
export type CategoryTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/8z7mw5knx30w/content_types/category) */
export type CategoryDateArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type CategoryCollection = {
  __typename?: 'CategoryCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Category>>;
};

export type CategoryFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  slug_exists?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  date_exists?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['DateTime']>;
  date_not?: Maybe<Scalars['DateTime']>;
  date_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  date_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  date_gt?: Maybe<Scalars['DateTime']>;
  date_gte?: Maybe<Scalars['DateTime']>;
  date_lt?: Maybe<Scalars['DateTime']>;
  date_lte?: Maybe<Scalars['DateTime']>;
  OR?: Maybe<Array<Maybe<CategoryFilter>>>;
  AND?: Maybe<Array<Maybe<CategoryFilter>>>;
};

export type CategoryLinkingCollections = {
  __typename?: 'CategoryLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  staffNoteCollection?: Maybe<StaffNoteCollection>;
};

export type CategoryLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type CategoryLinkingCollectionsStaffNoteCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum CategoryOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: Maybe<ContentfulMetadataTagsFilter>;
  tags_exists?: Maybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/customOrder) */
export type CustomOrder = Entry & {
  __typename?: 'CustomOrder';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<CustomOrderLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<CustomOrderDescription>;
  imageCollection?: Maybe<AssetCollection>;
  mobileImageCollection?: Maybe<AssetCollection>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/customOrder) */
export type CustomOrderLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/customOrder) */
export type CustomOrderTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/customOrder) */
export type CustomOrderSlugArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/customOrder) */
export type CustomOrderDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/customOrder) */
export type CustomOrderImageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/customOrder) */
export type CustomOrderMobileImageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type CustomOrderCollection = {
  __typename?: 'CustomOrderCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<CustomOrder>>;
};

export type CustomOrderDescription = {
  __typename?: 'CustomOrderDescription';
  json: Scalars['JSON'];
  links: CustomOrderDescriptionLinks;
};

export type CustomOrderDescriptionAssets = {
  __typename?: 'CustomOrderDescriptionAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type CustomOrderDescriptionEntries = {
  __typename?: 'CustomOrderDescriptionEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type CustomOrderDescriptionLinks = {
  __typename?: 'CustomOrderDescriptionLinks';
  entries: CustomOrderDescriptionEntries;
  assets: CustomOrderDescriptionAssets;
};

export type CustomOrderFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  slug_exists?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  imageCollection_exists?: Maybe<Scalars['Boolean']>;
  mobileImageCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<CustomOrderFilter>>>;
  AND?: Maybe<Array<Maybe<CustomOrderFilter>>>;
};

export type CustomOrderLinkingCollections = {
  __typename?: 'CustomOrderLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type CustomOrderLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum CustomOrderOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: Maybe<Array<Maybe<EntryFilter>>>;
  OR?: Maybe<Array<Maybe<EntryFilter>>>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  sys?: Maybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/footer) */
export type Footer = Entry & {
  __typename?: 'Footer';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<FooterLinkingCollections>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  logoCollection?: Maybe<AssetCollection>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/footer) */
export type FooterLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/footer) */
export type FooterSlugArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/footer) */
export type FooterTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/footer) */
export type FooterContentArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/footer) */
export type FooterLogoCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type FooterCollection = {
  __typename?: 'FooterCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Footer>>;
};

export type FooterFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  slug_exists?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  content_exists?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Scalars['String']>;
  content_not?: Maybe<Scalars['String']>;
  content_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  content_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  content_contains?: Maybe<Scalars['String']>;
  content_not_contains?: Maybe<Scalars['String']>;
  logoCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<FooterFilter>>>;
  AND?: Maybe<Array<Maybe<FooterFilter>>>;
};

export type FooterLinkingCollections = {
  __typename?: 'FooterLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type FooterLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum FooterOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/hauteCouture) */
export type HauteCouture = Entry & {
  __typename?: 'HauteCouture';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<HauteCoutureLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<HauteCoutureDescription>;
  image?: Maybe<Asset>;
  orderSheet?: Maybe<Asset>;
  orderStepsImage?: Maybe<Asset>;
  orderStepsMobileImage?: Maybe<Asset>;
  formTitle?: Maybe<Scalars['String']>;
  formDescription?: Maybe<HauteCoutureFormDescription>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/hauteCouture) */
export type HauteCoutureLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/hauteCouture) */
export type HauteCoutureTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/hauteCouture) */
export type HauteCoutureSlugArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/hauteCouture) */
export type HauteCoutureDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/hauteCouture) */
export type HauteCoutureImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/hauteCouture) */
export type HauteCoutureOrderSheetArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/hauteCouture) */
export type HauteCoutureOrderStepsImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/hauteCouture) */
export type HauteCoutureOrderStepsMobileImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/hauteCouture) */
export type HauteCoutureFormTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/hauteCouture) */
export type HauteCoutureFormDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type HauteCoutureCollection = {
  __typename?: 'HauteCoutureCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<HauteCouture>>;
};

export type HauteCoutureDescription = {
  __typename?: 'HauteCoutureDescription';
  json: Scalars['JSON'];
  links: HauteCoutureDescriptionLinks;
};

export type HauteCoutureDescriptionAssets = {
  __typename?: 'HauteCoutureDescriptionAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type HauteCoutureDescriptionEntries = {
  __typename?: 'HauteCoutureDescriptionEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type HauteCoutureDescriptionLinks = {
  __typename?: 'HauteCoutureDescriptionLinks';
  entries: HauteCoutureDescriptionEntries;
  assets: HauteCoutureDescriptionAssets;
};

export type HauteCoutureFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  slug_exists?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  image_exists?: Maybe<Scalars['Boolean']>;
  orderSheet_exists?: Maybe<Scalars['Boolean']>;
  orderStepsImage_exists?: Maybe<Scalars['Boolean']>;
  orderStepsMobileImage_exists?: Maybe<Scalars['Boolean']>;
  formTitle_exists?: Maybe<Scalars['Boolean']>;
  formTitle?: Maybe<Scalars['String']>;
  formTitle_not?: Maybe<Scalars['String']>;
  formTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  formTitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  formTitle_contains?: Maybe<Scalars['String']>;
  formTitle_not_contains?: Maybe<Scalars['String']>;
  formDescription_exists?: Maybe<Scalars['Boolean']>;
  formDescription_contains?: Maybe<Scalars['String']>;
  formDescription_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<HauteCoutureFilter>>>;
  AND?: Maybe<Array<Maybe<HauteCoutureFilter>>>;
};

export type HauteCoutureFormDescription = {
  __typename?: 'HauteCoutureFormDescription';
  json: Scalars['JSON'];
  links: HauteCoutureFormDescriptionLinks;
};

export type HauteCoutureFormDescriptionAssets = {
  __typename?: 'HauteCoutureFormDescriptionAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type HauteCoutureFormDescriptionEntries = {
  __typename?: 'HauteCoutureFormDescriptionEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type HauteCoutureFormDescriptionLinks = {
  __typename?: 'HauteCoutureFormDescriptionLinks';
  entries: HauteCoutureFormDescriptionEntries;
  assets: HauteCoutureFormDescriptionAssets;
};

export type HauteCoutureLinkingCollections = {
  __typename?: 'HauteCoutureLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type HauteCoutureLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum HauteCoutureOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  FormTitleAsc = 'formTitle_ASC',
  FormTitleDesc = 'formTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/home) */
export type Home = Entry & {
  __typename?: 'Home';
  collaborationHomeDescription?: Maybe<HomeCollaborationHomeDescription>;
  collaborationImage?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  customOrderHomeDescription?: Maybe<HomeCustomOrderHomeDescription>;
  customOrderImage?: Maybe<Asset>;
  description?: Maybe<HomeDescription>;
  endSlideCollection?: Maybe<AssetCollection>;
  hauteCoutureHomeDescription?: Maybe<HomeHauteCoutureHomeDescription>;
  hauteCoutureImage?: Maybe<Asset>;
  interviewHomeDescription?: Maybe<HomeInterviewHomeDescription>;
  interviewImage?: Maybe<Asset>;
  linkedFrom?: Maybe<HomeLinkingCollections>;
  newsPickupCollection?: Maybe<HomeNewsPickupCollection>;
  productDescription?: Maybe<HomeProductDescription>;
  productHomeDescription?: Maybe<HomeProductHomeDescription>;
  productImage?: Maybe<Asset>;
  recruitingDescription?: Maybe<HomeRecruitingDescription>;
  recruitingHomeDescription?: Maybe<HomeRecruitingHomeDescription>;
  recruitingImage?: Maybe<Asset>;
  slug?: Maybe<Scalars['String']>;
  staffNoteDescription?: Maybe<HomeStaffNoteDescription>;
  staffNoteHomeDescription?: Maybe<HomeStaffNoteHomeDescription>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  topSlideCollection?: Maybe<AssetCollection>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/home) */
export type HomeCollaborationHomeDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/home) */
export type HomeCollaborationImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/home) */
export type HomeCustomOrderHomeDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/home) */
export type HomeCustomOrderImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/home) */
export type HomeDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/home) */
export type HomeEndSlideCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/home) */
export type HomeHauteCoutureHomeDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/home) */
export type HomeHauteCoutureImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/home) */
export type HomeInterviewHomeDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/home) */
export type HomeInterviewImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/home) */
export type HomeLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/home) */
export type HomeNewsPickupCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/home) */
export type HomeProductDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/home) */
export type HomeProductHomeDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/home) */
export type HomeProductImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/home) */
export type HomeRecruitingDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/home) */
export type HomeRecruitingHomeDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/home) */
export type HomeRecruitingImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/home) */
export type HomeSlugArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/home) */
export type HomeStaffNoteDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/home) */
export type HomeStaffNoteHomeDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/home) */
export type HomeTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/home) */
export type HomeTopSlideCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type HomeCollaborationHomeDescription = {
  __typename?: 'HomeCollaborationHomeDescription';
  json: Scalars['JSON'];
  links: HomeCollaborationHomeDescriptionLinks;
};

export type HomeCollaborationHomeDescriptionAssets = {
  __typename?: 'HomeCollaborationHomeDescriptionAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type HomeCollaborationHomeDescriptionEntries = {
  __typename?: 'HomeCollaborationHomeDescriptionEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type HomeCollaborationHomeDescriptionLinks = {
  __typename?: 'HomeCollaborationHomeDescriptionLinks';
  entries: HomeCollaborationHomeDescriptionEntries;
  assets: HomeCollaborationHomeDescriptionAssets;
};

export type HomeCollection = {
  __typename?: 'HomeCollection';
  items: Array<Maybe<Home>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type HomeCustomOrderHomeDescription = {
  __typename?: 'HomeCustomOrderHomeDescription';
  json: Scalars['JSON'];
  links: HomeCustomOrderHomeDescriptionLinks;
};

export type HomeCustomOrderHomeDescriptionAssets = {
  __typename?: 'HomeCustomOrderHomeDescriptionAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type HomeCustomOrderHomeDescriptionEntries = {
  __typename?: 'HomeCustomOrderHomeDescriptionEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type HomeCustomOrderHomeDescriptionLinks = {
  __typename?: 'HomeCustomOrderHomeDescriptionLinks';
  entries: HomeCustomOrderHomeDescriptionEntries;
  assets: HomeCustomOrderHomeDescriptionAssets;
};

export type HomeDescription = {
  __typename?: 'HomeDescription';
  json: Scalars['JSON'];
  links: HomeDescriptionLinks;
};

export type HomeDescriptionAssets = {
  __typename?: 'HomeDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type HomeDescriptionEntries = {
  __typename?: 'HomeDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type HomeDescriptionLinks = {
  __typename?: 'HomeDescriptionLinks';
  assets: HomeDescriptionAssets;
  entries: HomeDescriptionEntries;
};

export type HomeFilter = {
  AND?: Maybe<Array<Maybe<HomeFilter>>>;
  OR?: Maybe<Array<Maybe<HomeFilter>>>;
  collaborationHomeDescription_contains?: Maybe<Scalars['String']>;
  collaborationHomeDescription_exists?: Maybe<Scalars['Boolean']>;
  collaborationHomeDescription_not_contains?: Maybe<Scalars['String']>;
  collaborationImage_exists?: Maybe<Scalars['Boolean']>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  customOrderHomeDescription_contains?: Maybe<Scalars['String']>;
  customOrderHomeDescription_exists?: Maybe<Scalars['Boolean']>;
  customOrderHomeDescription_not_contains?: Maybe<Scalars['String']>;
  customOrderImage_exists?: Maybe<Scalars['Boolean']>;
  description_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description_not_contains?: Maybe<Scalars['String']>;
  endSlideCollection_exists?: Maybe<Scalars['Boolean']>;
  hauteCoutureHomeDescription_contains?: Maybe<Scalars['String']>;
  hauteCoutureHomeDescription_exists?: Maybe<Scalars['Boolean']>;
  hauteCoutureHomeDescription_not_contains?: Maybe<Scalars['String']>;
  hauteCoutureImage_exists?: Maybe<Scalars['Boolean']>;
  interviewHomeDescription_contains?: Maybe<Scalars['String']>;
  interviewHomeDescription_exists?: Maybe<Scalars['Boolean']>;
  interviewHomeDescription_not_contains?: Maybe<Scalars['String']>;
  interviewImage_exists?: Maybe<Scalars['Boolean']>;
  newsPickupCollection_exists?: Maybe<Scalars['Boolean']>;
  productDescription_contains?: Maybe<Scalars['String']>;
  productDescription_exists?: Maybe<Scalars['Boolean']>;
  productDescription_not_contains?: Maybe<Scalars['String']>;
  productHomeDescription_contains?: Maybe<Scalars['String']>;
  productHomeDescription_exists?: Maybe<Scalars['Boolean']>;
  productHomeDescription_not_contains?: Maybe<Scalars['String']>;
  productImage_exists?: Maybe<Scalars['Boolean']>;
  recruitingDescription_contains?: Maybe<Scalars['String']>;
  recruitingDescription_exists?: Maybe<Scalars['Boolean']>;
  recruitingDescription_not_contains?: Maybe<Scalars['String']>;
  recruitingHomeDescription_contains?: Maybe<Scalars['String']>;
  recruitingHomeDescription_exists?: Maybe<Scalars['Boolean']>;
  recruitingHomeDescription_not_contains?: Maybe<Scalars['String']>;
  recruitingImage_exists?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_exists?: Maybe<Scalars['Boolean']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  staffNoteDescription_contains?: Maybe<Scalars['String']>;
  staffNoteDescription_exists?: Maybe<Scalars['Boolean']>;
  staffNoteDescription_not_contains?: Maybe<Scalars['String']>;
  staffNoteHomeDescription_contains?: Maybe<Scalars['String']>;
  staffNoteHomeDescription_exists?: Maybe<Scalars['Boolean']>;
  staffNoteHomeDescription_not_contains?: Maybe<Scalars['String']>;
  sys?: Maybe<SysFilter>;
  title?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  topSlideCollection_exists?: Maybe<Scalars['Boolean']>;
};

export type HomeHauteCoutureHomeDescription = {
  __typename?: 'HomeHauteCoutureHomeDescription';
  json: Scalars['JSON'];
  links: HomeHauteCoutureHomeDescriptionLinks;
};

export type HomeHauteCoutureHomeDescriptionAssets = {
  __typename?: 'HomeHauteCoutureHomeDescriptionAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type HomeHauteCoutureHomeDescriptionEntries = {
  __typename?: 'HomeHauteCoutureHomeDescriptionEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type HomeHauteCoutureHomeDescriptionLinks = {
  __typename?: 'HomeHauteCoutureHomeDescriptionLinks';
  entries: HomeHauteCoutureHomeDescriptionEntries;
  assets: HomeHauteCoutureHomeDescriptionAssets;
};

export type HomeInterviewHomeDescription = {
  __typename?: 'HomeInterviewHomeDescription';
  json: Scalars['JSON'];
  links: HomeInterviewHomeDescriptionLinks;
};

export type HomeInterviewHomeDescriptionAssets = {
  __typename?: 'HomeInterviewHomeDescriptionAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type HomeInterviewHomeDescriptionEntries = {
  __typename?: 'HomeInterviewHomeDescriptionEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type HomeInterviewHomeDescriptionLinks = {
  __typename?: 'HomeInterviewHomeDescriptionLinks';
  entries: HomeInterviewHomeDescriptionEntries;
  assets: HomeInterviewHomeDescriptionAssets;
};

export type HomeLinkingCollections = {
  __typename?: 'HomeLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type HomeLinkingCollectionsEntryCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
};

export type HomeNewsPickupCollection = {
  __typename?: 'HomeNewsPickupCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<News>>;
};

export enum HomeOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export type HomeProductDescription = {
  __typename?: 'HomeProductDescription';
  json: Scalars['JSON'];
  links: HomeProductDescriptionLinks;
};

export type HomeProductDescriptionAssets = {
  __typename?: 'HomeProductDescriptionAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type HomeProductDescriptionEntries = {
  __typename?: 'HomeProductDescriptionEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type HomeProductDescriptionLinks = {
  __typename?: 'HomeProductDescriptionLinks';
  entries: HomeProductDescriptionEntries;
  assets: HomeProductDescriptionAssets;
};

export type HomeProductHomeDescription = {
  __typename?: 'HomeProductHomeDescription';
  json: Scalars['JSON'];
  links: HomeProductHomeDescriptionLinks;
};

export type HomeProductHomeDescriptionAssets = {
  __typename?: 'HomeProductHomeDescriptionAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type HomeProductHomeDescriptionEntries = {
  __typename?: 'HomeProductHomeDescriptionEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type HomeProductHomeDescriptionLinks = {
  __typename?: 'HomeProductHomeDescriptionLinks';
  entries: HomeProductHomeDescriptionEntries;
  assets: HomeProductHomeDescriptionAssets;
};

export type HomeRecruitingDescription = {
  __typename?: 'HomeRecruitingDescription';
  json: Scalars['JSON'];
  links: HomeRecruitingDescriptionLinks;
};

export type HomeRecruitingDescriptionAssets = {
  __typename?: 'HomeRecruitingDescriptionAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type HomeRecruitingDescriptionEntries = {
  __typename?: 'HomeRecruitingDescriptionEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type HomeRecruitingDescriptionLinks = {
  __typename?: 'HomeRecruitingDescriptionLinks';
  entries: HomeRecruitingDescriptionEntries;
  assets: HomeRecruitingDescriptionAssets;
};

export type HomeRecruitingHomeDescription = {
  __typename?: 'HomeRecruitingHomeDescription';
  json: Scalars['JSON'];
  links: HomeRecruitingHomeDescriptionLinks;
};

export type HomeRecruitingHomeDescriptionAssets = {
  __typename?: 'HomeRecruitingHomeDescriptionAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type HomeRecruitingHomeDescriptionEntries = {
  __typename?: 'HomeRecruitingHomeDescriptionEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type HomeRecruitingHomeDescriptionLinks = {
  __typename?: 'HomeRecruitingHomeDescriptionLinks';
  entries: HomeRecruitingHomeDescriptionEntries;
  assets: HomeRecruitingHomeDescriptionAssets;
};

export type HomeStaffNoteDescription = {
  __typename?: 'HomeStaffNoteDescription';
  json: Scalars['JSON'];
  links: HomeStaffNoteDescriptionLinks;
};

export type HomeStaffNoteDescriptionAssets = {
  __typename?: 'HomeStaffNoteDescriptionAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type HomeStaffNoteDescriptionEntries = {
  __typename?: 'HomeStaffNoteDescriptionEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type HomeStaffNoteDescriptionLinks = {
  __typename?: 'HomeStaffNoteDescriptionLinks';
  entries: HomeStaffNoteDescriptionEntries;
  assets: HomeStaffNoteDescriptionAssets;
};

export type HomeStaffNoteHomeDescription = {
  __typename?: 'HomeStaffNoteHomeDescription';
  json: Scalars['JSON'];
  links: HomeStaffNoteHomeDescriptionLinks;
};

export type HomeStaffNoteHomeDescriptionAssets = {
  __typename?: 'HomeStaffNoteHomeDescriptionAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type HomeStaffNoteHomeDescriptionEntries = {
  __typename?: 'HomeStaffNoteHomeDescriptionEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type HomeStaffNoteHomeDescriptionLinks = {
  __typename?: 'HomeStaffNoteHomeDescriptionLinks';
  entries: HomeStaffNoteHomeDescriptionEntries;
  assets: HomeStaffNoteHomeDescriptionAssets;
};

export enum ImageFormat {
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP',
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB',
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: Maybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: Maybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: Maybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: Maybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: Maybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: Maybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: Maybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: Maybe<Scalars['Dimension']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/navigation) */
export type Navigation = Entry & {
  __typename?: 'Navigation';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<NavigationLinkingCollections>;
  menu?: Maybe<Scalars['JSON']>;
  slug?: Maybe<Scalars['String']>;
  sns?: Maybe<Scalars['JSON']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/navigation) */
export type NavigationLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/navigation) */
export type NavigationMenuArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/navigation) */
export type NavigationSlugArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/navigation) */
export type NavigationSnsArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/navigation) */
export type NavigationTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type NavigationCollection = {
  __typename?: 'NavigationCollection';
  items: Array<Maybe<Navigation>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type NavigationFilter = {
  AND?: Maybe<Array<Maybe<NavigationFilter>>>;
  OR?: Maybe<Array<Maybe<NavigationFilter>>>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  slug?: Maybe<Scalars['String']>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_exists?: Maybe<Scalars['Boolean']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sys?: Maybe<SysFilter>;
  title?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type NavigationLinkingCollections = {
  __typename?: 'NavigationLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type NavigationLinkingCollectionsEntryCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
};

export enum NavigationOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/bdipztv4q6kp/content_types/news) */
export type News = Entry & {
  __typename?: 'News';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<NewsLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  category?: Maybe<NewsCategory>;
  content?: Maybe<NewsContent>;
};

/** [See type definition](https://app.contentful.com/spaces/bdipztv4q6kp/content_types/news) */
export type NewsLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/bdipztv4q6kp/content_types/news) */
export type NewsTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/bdipztv4q6kp/content_types/news) */
export type NewsSlugArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/bdipztv4q6kp/content_types/news) */
export type NewsDateArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/bdipztv4q6kp/content_types/news) */
export type NewsCategoryArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/bdipztv4q6kp/content_types/news) */
export type NewsContentArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/bdipztv4q6kp/content_types/newsCategory) */
export type NewsCategory = Entry & {
  __typename?: 'NewsCategory';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<NewsCategoryLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/bdipztv4q6kp/content_types/newsCategory) */
export type NewsCategoryLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/bdipztv4q6kp/content_types/newsCategory) */
export type NewsCategoryTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/bdipztv4q6kp/content_types/newsCategory) */
export type NewsCategorySlugArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type NewsCategoryCollection = {
  __typename?: 'NewsCategoryCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<NewsCategory>>;
};

export type NewsCategoryFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  slug_exists?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<NewsCategoryFilter>>>;
  AND?: Maybe<Array<Maybe<NewsCategoryFilter>>>;
};

export type NewsCategoryLinkingCollections = {
  __typename?: 'NewsCategoryLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  newsCollection?: Maybe<NewsCollection>;
};

export type NewsCategoryLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type NewsCategoryLinkingCollectionsNewsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum NewsCategoryOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type NewsCollection = {
  __typename?: 'NewsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<News>>;
};

export type NewsContent = {
  __typename?: 'NewsContent';
  json: Scalars['JSON'];
  links: NewsContentLinks;
};

export type NewsContentAssets = {
  __typename?: 'NewsContentAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type NewsContentEntries = {
  __typename?: 'NewsContentEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type NewsContentLinks = {
  __typename?: 'NewsContentLinks';
  entries: NewsContentEntries;
  assets: NewsContentAssets;
};

export type NewsFilter = {
  category?: Maybe<CfNewsCategoryNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  slug_exists?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  date_exists?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['DateTime']>;
  date_not?: Maybe<Scalars['DateTime']>;
  date_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  date_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  date_gt?: Maybe<Scalars['DateTime']>;
  date_gte?: Maybe<Scalars['DateTime']>;
  date_lt?: Maybe<Scalars['DateTime']>;
  date_lte?: Maybe<Scalars['DateTime']>;
  category_exists?: Maybe<Scalars['Boolean']>;
  content_exists?: Maybe<Scalars['Boolean']>;
  content_contains?: Maybe<Scalars['String']>;
  content_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<NewsFilter>>>;
  AND?: Maybe<Array<Maybe<NewsFilter>>>;
};

export type NewsLinkingCollections = {
  __typename?: 'NewsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homeCollection?: Maybe<HomeCollection>;
};

export type NewsLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type NewsLinkingCollectionsHomeCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum NewsOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/product) */
export type Product = Entry & {
  __typename?: 'Product';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ProductLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  imageCollection?: Maybe<AssetCollection>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/product) */
export type ProductLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/product) */
export type ProductTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/product) */
export type ProductSlugArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/product) */
export type ProductDateArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/product) */
export type ProductDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/pdt7v3ruuhi4/content_types/product) */
export type ProductImageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type ProductCollection = {
  __typename?: 'ProductCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Product>>;
};

export type ProductFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  slug_exists?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  date_exists?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['DateTime']>;
  date_not?: Maybe<Scalars['DateTime']>;
  date_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  date_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  date_gt?: Maybe<Scalars['DateTime']>;
  date_gte?: Maybe<Scalars['DateTime']>;
  date_lt?: Maybe<Scalars['DateTime']>;
  date_lte?: Maybe<Scalars['DateTime']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  imageCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<ProductFilter>>>;
  AND?: Maybe<Array<Maybe<ProductFilter>>>;
};

export type ProductLinkingCollections = {
  __typename?: 'ProductLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type ProductLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum ProductOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  category?: Maybe<Category>;
  categoryCollection?: Maybe<CategoryCollection>;
  customOrder?: Maybe<CustomOrder>;
  customOrderCollection?: Maybe<CustomOrderCollection>;
  entryCollection?: Maybe<EntryCollection>;
  footer?: Maybe<Footer>;
  footerCollection?: Maybe<FooterCollection>;
  hauteCouture?: Maybe<HauteCouture>;
  hauteCoutureCollection?: Maybe<HauteCoutureCollection>;
  home?: Maybe<Home>;
  homeCollection?: Maybe<HomeCollection>;
  navigation?: Maybe<Navigation>;
  navigationCollection?: Maybe<NavigationCollection>;
  news?: Maybe<News>;
  newsCategory?: Maybe<NewsCategory>;
  newsCategoryCollection?: Maybe<NewsCategoryCollection>;
  newsCollection?: Maybe<NewsCollection>;
  product?: Maybe<Product>;
  productCollection?: Maybe<ProductCollection>;
  recruiting?: Maybe<Recruiting>;
  recruitingCollection?: Maybe<RecruitingCollection>;
  staffNote?: Maybe<StaffNote>;
  staffNoteCollection?: Maybe<StaffNoteCollection>;
};

export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
};

export type QueryAssetCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<AssetOrder>>>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<AssetFilter>;
};

export type QueryCategoryArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type QueryCategoryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CategoryFilter>;
  order?: Maybe<Array<Maybe<CategoryOrder>>>;
};

export type QueryCustomOrderArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type QueryCustomOrderCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CustomOrderFilter>;
  order?: Maybe<Array<Maybe<CustomOrderOrder>>>;
};

export type QueryEntryCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<EntryOrder>>>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<EntryFilter>;
};

export type QueryFooterArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type QueryFooterCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<FooterFilter>;
  order?: Maybe<Array<Maybe<FooterOrder>>>;
};

export type QueryHauteCoutureArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type QueryHauteCoutureCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<HauteCoutureFilter>;
  order?: Maybe<Array<Maybe<HauteCoutureOrder>>>;
};

export type QueryHomeArgs = {
  id: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
};

export type QueryHomeCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<HomeOrder>>>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<HomeFilter>;
};

export type QueryNavigationArgs = {
  id: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
};

export type QueryNavigationCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<NavigationOrder>>>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<NavigationFilter>;
};

export type QueryNewsArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type QueryNewsCategoryArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type QueryNewsCategoryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<NewsCategoryFilter>;
  order?: Maybe<Array<Maybe<NewsCategoryOrder>>>;
};

export type QueryNewsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<NewsFilter>;
  order?: Maybe<Array<Maybe<NewsOrder>>>;
};

export type QueryProductArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type QueryProductCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<ProductFilter>;
  order?: Maybe<Array<Maybe<ProductOrder>>>;
};

export type QueryRecruitingArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type QueryRecruitingCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<RecruitingFilter>;
  order?: Maybe<Array<Maybe<RecruitingOrder>>>;
};

export type QueryStaffNoteArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type QueryStaffNoteCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<StaffNoteFilter>;
  order?: Maybe<Array<Maybe<StaffNoteOrder>>>;
};

/** [See type definition](https://app.contentful.com/spaces/8z7mw5knx30w/content_types/recruiting) */
export type Recruiting = Entry & {
  __typename?: 'Recruiting';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<RecruitingLinkingCollections>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  formLabel?: Maybe<Scalars['String']>;
  formUrl?: Maybe<Scalars['String']>;
  content?: Maybe<RecruitingContent>;
  notes?: Maybe<RecruitingNotes>;
};

/** [See type definition](https://app.contentful.com/spaces/8z7mw5knx30w/content_types/recruiting) */
export type RecruitingLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/8z7mw5knx30w/content_types/recruiting) */
export type RecruitingSlugArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/8z7mw5knx30w/content_types/recruiting) */
export type RecruitingTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/8z7mw5knx30w/content_types/recruiting) */
export type RecruitingFormLabelArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/8z7mw5knx30w/content_types/recruiting) */
export type RecruitingFormUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/8z7mw5knx30w/content_types/recruiting) */
export type RecruitingContentArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/8z7mw5knx30w/content_types/recruiting) */
export type RecruitingNotesArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type RecruitingCollection = {
  __typename?: 'RecruitingCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Recruiting>>;
};

export type RecruitingContent = {
  __typename?: 'RecruitingContent';
  json: Scalars['JSON'];
  links: RecruitingContentLinks;
};

export type RecruitingContentAssets = {
  __typename?: 'RecruitingContentAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type RecruitingContentEntries = {
  __typename?: 'RecruitingContentEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type RecruitingContentLinks = {
  __typename?: 'RecruitingContentLinks';
  entries: RecruitingContentEntries;
  assets: RecruitingContentAssets;
};

export type RecruitingFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  slug_exists?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  formLabel_exists?: Maybe<Scalars['Boolean']>;
  formLabel?: Maybe<Scalars['String']>;
  formLabel_not?: Maybe<Scalars['String']>;
  formLabel_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  formLabel_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  formLabel_contains?: Maybe<Scalars['String']>;
  formLabel_not_contains?: Maybe<Scalars['String']>;
  formUrl_exists?: Maybe<Scalars['Boolean']>;
  formUrl?: Maybe<Scalars['String']>;
  formUrl_not?: Maybe<Scalars['String']>;
  formUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  formUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  formUrl_contains?: Maybe<Scalars['String']>;
  formUrl_not_contains?: Maybe<Scalars['String']>;
  content_exists?: Maybe<Scalars['Boolean']>;
  content_contains?: Maybe<Scalars['String']>;
  content_not_contains?: Maybe<Scalars['String']>;
  notes_exists?: Maybe<Scalars['Boolean']>;
  notes_contains?: Maybe<Scalars['String']>;
  notes_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<RecruitingFilter>>>;
  AND?: Maybe<Array<Maybe<RecruitingFilter>>>;
};

export type RecruitingLinkingCollections = {
  __typename?: 'RecruitingLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type RecruitingLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type RecruitingNotes = {
  __typename?: 'RecruitingNotes';
  json: Scalars['JSON'];
  links: RecruitingNotesLinks;
};

export type RecruitingNotesAssets = {
  __typename?: 'RecruitingNotesAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type RecruitingNotesEntries = {
  __typename?: 'RecruitingNotesEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type RecruitingNotesLinks = {
  __typename?: 'RecruitingNotesLinks';
  entries: RecruitingNotesEntries;
  assets: RecruitingNotesAssets;
};

export enum RecruitingOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  FormLabelAsc = 'formLabel_ASC',
  FormLabelDesc = 'formLabel_DESC',
  FormUrlAsc = 'formUrl_ASC',
  FormUrlDesc = 'formUrl_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/8z7mw5knx30w/content_types/staffNote) */
export type StaffNote = Entry & {
  __typename?: 'StaffNote';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<StaffNoteLinkingCollections>;
  slug?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  content?: Maybe<StaffNoteContent>;
  categoryCollection?: Maybe<StaffNoteCategoryCollection>;
};

/** [See type definition](https://app.contentful.com/spaces/8z7mw5knx30w/content_types/staffNote) */
export type StaffNoteLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/8z7mw5knx30w/content_types/staffNote) */
export type StaffNoteSlugArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/8z7mw5knx30w/content_types/staffNote) */
export type StaffNoteDateArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/8z7mw5knx30w/content_types/staffNote) */
export type StaffNoteTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/8z7mw5knx30w/content_types/staffNote) */
export type StaffNoteImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/8z7mw5knx30w/content_types/staffNote) */
export type StaffNoteContentArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/8z7mw5knx30w/content_types/staffNote) */
export type StaffNoteCategoryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type StaffNoteCategoryCollection = {
  __typename?: 'StaffNoteCategoryCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Category>>;
};

export type StaffNoteCollection = {
  __typename?: 'StaffNoteCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<StaffNote>>;
};

export type StaffNoteContent = {
  __typename?: 'StaffNoteContent';
  json: Scalars['JSON'];
  links: StaffNoteContentLinks;
};

export type StaffNoteContentAssets = {
  __typename?: 'StaffNoteContentAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type StaffNoteContentEntries = {
  __typename?: 'StaffNoteContentEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type StaffNoteContentLinks = {
  __typename?: 'StaffNoteContentLinks';
  entries: StaffNoteContentEntries;
  assets: StaffNoteContentAssets;
};

export type StaffNoteFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  slug_exists?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  date_exists?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['DateTime']>;
  date_not?: Maybe<Scalars['DateTime']>;
  date_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  date_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  date_gt?: Maybe<Scalars['DateTime']>;
  date_gte?: Maybe<Scalars['DateTime']>;
  date_lt?: Maybe<Scalars['DateTime']>;
  date_lte?: Maybe<Scalars['DateTime']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  image_exists?: Maybe<Scalars['Boolean']>;
  content_exists?: Maybe<Scalars['Boolean']>;
  content_contains?: Maybe<Scalars['String']>;
  content_not_contains?: Maybe<Scalars['String']>;
  categoryCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<StaffNoteFilter>>>;
  AND?: Maybe<Array<Maybe<StaffNoteFilter>>>;
};

export type StaffNoteLinkingCollections = {
  __typename?: 'StaffNoteLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type StaffNoteLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum StaffNoteOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: Maybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_not?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  id?: Maybe<Scalars['String']>;
  id_contains?: Maybe<Scalars['String']>;
  id_exists?: Maybe<Scalars['Boolean']>;
  id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_not?: Maybe<Scalars['String']>;
  id_not_contains?: Maybe<Scalars['String']>;
  id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedAt_exists?: Maybe<Scalars['Boolean']>;
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedVersion?: Maybe<Scalars['Float']>;
  publishedVersion_exists?: Maybe<Scalars['Boolean']>;
  publishedVersion_gt?: Maybe<Scalars['Float']>;
  publishedVersion_gte?: Maybe<Scalars['Float']>;
  publishedVersion_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  publishedVersion_lt?: Maybe<Scalars['Float']>;
  publishedVersion_lte?: Maybe<Scalars['Float']>;
  publishedVersion_not?: Maybe<Scalars['Float']>;
  publishedVersion_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type CfNewsCategoryNestedFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  slug_exists?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<CfNewsCategoryNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfNewsCategoryNestedFilter>>>;
};

export type FooterFragment = {
  __typename?: 'Footer';
  content?: Maybe<string>;
  logoCollection?: Maybe<{
    __typename?: 'AssetCollection';
    items: Array<
      Maybe<{
        __typename?: 'Asset';
        url?: Maybe<string>;
        title?: Maybe<string>;
        sys: { __typename?: 'Sys'; id: string };
      }>
    >;
  }>;
};

export type HomeLaboViewFragment = {
  __typename?: 'Home';
  description?: Maybe<{ __typename?: 'HomeDescription'; json: any }>;
  interviewImage?: Maybe<{ __typename?: 'Asset'; url?: Maybe<string> }>;
  interviewHomeDescription?: Maybe<{
    __typename?: 'HomeInterviewHomeDescription';
    json: any;
  }>;
  staffNoteHomeDescription?: Maybe<{
    __typename?: 'HomeStaffNoteHomeDescription';
    json: any;
  }>;
  recruitingImage?: Maybe<{ __typename?: 'Asset'; url?: Maybe<string> }>;
  recruitingHomeDescription?: Maybe<{
    __typename?: 'HomeRecruitingHomeDescription';
    json: any;
  }>;
};

export type HomeLaboLatestStaffNoteFragment = {
  __typename?: 'StaffNote';
  content?: Maybe<{ __typename?: 'StaffNoteContent'; json: any }>;
};

export type RecruitingViewPostFragment = {
  __typename?: 'Recruiting';
  slug?: Maybe<string>;
  title?: Maybe<string>;
  formLabel?: Maybe<string>;
  formUrl?: Maybe<string>;
  content?: Maybe<{
    __typename?: 'RecruitingContent';
    json: any;
    links: {
      __typename?: 'RecruitingContentLinks';
      assets: {
        __typename?: 'RecruitingContentAssets';
        block: Array<
          Maybe<{
            __typename?: 'Asset';
            url?: Maybe<string>;
            description?: Maybe<string>;
            width?: Maybe<number>;
            height?: Maybe<number>;
            sys: { __typename?: 'Sys'; id: string };
          }>
        >;
      };
      entries: {
        __typename?: 'RecruitingContentEntries';
        hyperlink: Array<
          Maybe<
            | {
                __typename: 'Category';
                sys: { __typename?: 'Sys'; id: string };
              }
            | {
                __typename: 'CustomOrder';
                sys: { __typename?: 'Sys'; id: string };
              }
            | { __typename: 'Footer'; sys: { __typename?: 'Sys'; id: string } }
            | {
                __typename: 'HauteCouture';
                sys: { __typename?: 'Sys'; id: string };
              }
            | { __typename: 'Home'; sys: { __typename?: 'Sys'; id: string } }
            | {
                __typename: 'Navigation';
                sys: { __typename?: 'Sys'; id: string };
              }
            | { __typename: 'News'; sys: { __typename?: 'Sys'; id: string } }
            | {
                __typename: 'NewsCategory';
                sys: { __typename?: 'Sys'; id: string };
              }
            | { __typename: 'Product'; sys: { __typename?: 'Sys'; id: string } }
            | {
                __typename: 'Recruiting';
                slug?: Maybe<string>;
                sys: { __typename?: 'Sys'; id: string };
              }
            | {
                __typename: 'StaffNote';
                slug?: Maybe<string>;
                sys: { __typename?: 'Sys'; id: string };
              }
          >
        >;
      };
    };
  }>;
  notes?: Maybe<{
    __typename?: 'RecruitingNotes';
    json: any;
    links: {
      __typename?: 'RecruitingNotesLinks';
      assets: {
        __typename?: 'RecruitingNotesAssets';
        block: Array<
          Maybe<{
            __typename?: 'Asset';
            url?: Maybe<string>;
            description?: Maybe<string>;
            width?: Maybe<number>;
            height?: Maybe<number>;
            sys: { __typename?: 'Sys'; id: string };
          }>
        >;
      };
    };
  }>;
};

export type RecruitingViewCategoriesFragment = {
  __typename?: 'Recruiting';
  title?: Maybe<string>;
  slug?: Maybe<string>;
  sys: { __typename?: 'Sys'; id: string };
};

export type RecruitingViewDescriptionFragment = {
  __typename?: 'Home';
  recruitingDescription?: Maybe<{
    __typename?: 'HomeRecruitingDescription';
    json: any;
  }>;
};

export type StaffNotesArchiveViewPostFragment = {
  __typename?: 'StaffNote';
  slug?: Maybe<string>;
  title?: Maybe<string>;
  date?: Maybe<any>;
  content?: Maybe<{ __typename?: 'StaffNoteContent'; json: any }>;
  image?: Maybe<{
    __typename?: 'Asset';
    url?: Maybe<string>;
    description?: Maybe<string>;
  }>;
};

export type StaffNotesArchiveViewDescriptionFragment = {
  __typename?: 'Home';
  staffNoteDescription?: Maybe<{
    __typename?: 'HomeStaffNoteDescription';
    json: any;
  }>;
};

export type StaffNotesArchiveViewPostWithIdFragment = {
  __typename?: 'StaffNote';
  slug?: Maybe<string>;
  title?: Maybe<string>;
  date?: Maybe<any>;
  sys: { __typename?: 'Sys'; id: string };
  content?: Maybe<{ __typename?: 'StaffNoteContent'; json: any }>;
  image?: Maybe<{
    __typename?: 'Asset';
    url?: Maybe<string>;
    description?: Maybe<string>;
  }>;
};

export type StaffNotesArchiveViewCategoryFragment = {
  __typename?: 'Category';
  title?: Maybe<string>;
  slug?: Maybe<string>;
  sys: { __typename?: 'Sys'; id: string };
};

export type StaffNotesSingleViewPostFragment = {
  __typename?: 'StaffNote';
  date?: Maybe<any>;
  title?: Maybe<string>;
  image?: Maybe<{
    __typename?: 'Asset';
    url?: Maybe<string>;
    description?: Maybe<string>;
    width?: Maybe<number>;
    height?: Maybe<number>;
  }>;
  content?: Maybe<{
    __typename?: 'StaffNoteContent';
    json: any;
    links: {
      __typename?: 'StaffNoteContentLinks';
      assets: {
        __typename?: 'StaffNoteContentAssets';
        block: Array<
          Maybe<{
            __typename?: 'Asset';
            url?: Maybe<string>;
            description?: Maybe<string>;
            width?: Maybe<number>;
            height?: Maybe<number>;
            sys: { __typename?: 'Sys'; id: string };
          }>
        >;
      };
      entries: {
        __typename?: 'StaffNoteContentEntries';
        hyperlink: Array<
          Maybe<
            | {
                __typename: 'Category';
                sys: { __typename?: 'Sys'; id: string };
              }
            | {
                __typename: 'CustomOrder';
                sys: { __typename?: 'Sys'; id: string };
              }
            | { __typename: 'Footer'; sys: { __typename?: 'Sys'; id: string } }
            | {
                __typename: 'HauteCouture';
                sys: { __typename?: 'Sys'; id: string };
              }
            | { __typename: 'Home'; sys: { __typename?: 'Sys'; id: string } }
            | {
                __typename: 'Navigation';
                sys: { __typename?: 'Sys'; id: string };
              }
            | { __typename: 'News'; sys: { __typename?: 'Sys'; id: string } }
            | {
                __typename: 'NewsCategory';
                sys: { __typename?: 'Sys'; id: string };
              }
            | { __typename: 'Product'; sys: { __typename?: 'Sys'; id: string } }
            | {
                __typename: 'Recruiting';
                slug?: Maybe<string>;
                sys: { __typename?: 'Sys'; id: string };
              }
            | {
                __typename: 'StaffNote';
                slug?: Maybe<string>;
                sys: { __typename?: 'Sys'; id: string };
              }
          >
        >;
      };
    };
  }>;
  categoryCollection?: Maybe<{
    __typename?: 'StaffNoteCategoryCollection';
    items: Array<
      Maybe<{
        __typename?: 'Category';
        slug?: Maybe<string>;
        title?: Maybe<string>;
        sys: { __typename?: 'Sys'; id: string };
      }>
    >;
  }>;
};

export type StaffNotesSingleViewSiblingsPostsFragment = {
  __typename?: 'StaffNote';
  slug?: Maybe<string>;
  title?: Maybe<string>;
};

export type GetAllCategoriesQueryVariables = Exact<{
  locale: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;

export type GetAllCategoriesQuery = {
  __typename?: 'Query';
  categoryCollection?: Maybe<{
    __typename?: 'CategoryCollection';
    total: number;
    items: Array<
      Maybe<{
        __typename?: 'Category';
        title?: Maybe<string>;
        slug?: Maybe<string>;
        sys: { __typename?: 'Sys'; id: string };
      }>
    >;
  }>;
};

export type NavigationStoreFragment = {
  __typename?: 'Navigation';
  menu?: Maybe<any>;
  sns?: Maybe<any>;
};

export type GetNavigationStoreQueryVariables = Exact<{
  locale: Scalars['String'];
  slug: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
}>;

export type GetNavigationStoreQuery = {
  __typename?: 'Query';
  navigationCollection?: Maybe<{
    __typename?: 'NavigationCollection';
    items: Array<
      Maybe<{ __typename?: 'Navigation'; menu?: Maybe<any>; sns?: Maybe<any> }>
    >;
  }>;
};

export type NavigationLaboFragment = {
  __typename?: 'Navigation';
  menu?: Maybe<any>;
};

export type GetNavigationLaboQueryVariables = Exact<{
  locale: Scalars['String'];
  slug: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
}>;

export type GetNavigationLaboQuery = {
  __typename?: 'Query';
  navigationCollection?: Maybe<{
    __typename?: 'NavigationCollection';
    items: Array<Maybe<{ __typename?: 'Navigation'; menu?: Maybe<any> }>>;
  }>;
};

export type NavigationAboutFragment = {
  __typename?: 'Navigation';
  menu?: Maybe<any>;
};

export type GetNavigationAboutQueryVariables = Exact<{
  locale: Scalars['String'];
  slug: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
}>;

export type GetNavigationAboutQuery = {
  __typename?: 'Query';
  navigationCollection?: Maybe<{
    __typename?: 'NavigationCollection';
    items: Array<Maybe<{ __typename?: 'Navigation'; menu?: Maybe<any> }>>;
  }>;
};

export type GetAllStaffNotesByCategoryQueryVariables = Exact<{
  locale: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  slug: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;

export type GetAllStaffNotesByCategoryQuery = {
  __typename?: 'Query';
  categoryCollection?: Maybe<{
    __typename?: 'CategoryCollection';
    items: Array<
      Maybe<{
        __typename?: 'Category';
        title?: Maybe<string>;
        linkedFrom?: Maybe<{
          __typename?: 'CategoryLinkingCollections';
          staffNoteCollection?: Maybe<{
            __typename?: 'StaffNoteCollection';
            total: number;
            items: Array<
              Maybe<{
                __typename?: 'StaffNote';
                slug?: Maybe<string>;
                title?: Maybe<string>;
                date?: Maybe<any>;
                sys: { __typename?: 'Sys'; id: string };
                content?: Maybe<{ __typename?: 'StaffNoteContent'; json: any }>;
                image?: Maybe<{
                  __typename?: 'Asset';
                  url?: Maybe<string>;
                  description?: Maybe<string>;
                }>;
              }>
            >;
          }>;
        }>;
      }>
    >;
  }>;
};

export type GetAllStaffNotesQueryVariables = Exact<{
  locale: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;

export type GetAllStaffNotesQuery = {
  __typename?: 'Query';
  staffNoteCollection?: Maybe<{
    __typename?: 'StaffNoteCollection';
    total: number;
    items: Array<
      Maybe<{
        __typename?: 'StaffNote';
        slug?: Maybe<string>;
        title?: Maybe<string>;
        date?: Maybe<any>;
        sys: { __typename?: 'Sys'; id: string };
        content?: Maybe<{ __typename?: 'StaffNoteContent'; json: any }>;
        image?: Maybe<{
          __typename?: 'Asset';
          url?: Maybe<string>;
          description?: Maybe<string>;
        }>;
      }>
    >;
  }>;
};

export type GetAllStaffNotesForSitemapQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;

export type GetAllStaffNotesForSitemapQuery = {
  __typename?: 'Query';
  staffNoteCollection?: Maybe<{
    __typename?: 'StaffNoteCollection';
    total: number;
    items: Array<
      Maybe<{
        __typename?: 'StaffNote';
        slug?: Maybe<string>;
        sys: { __typename?: 'Sys'; publishedAt?: Maybe<any> };
      }>
    >;
  }>;
};

export type GetAllCategoriesForSitemapQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;

export type GetAllCategoriesForSitemapQuery = {
  __typename?: 'Query';
  categoryCollection?: Maybe<{
    __typename?: 'CategoryCollection';
    total: number;
    items: Array<
      Maybe<{
        __typename?: 'Category';
        slug?: Maybe<string>;
        sys: { __typename?: 'Sys'; publishedAt?: Maybe<any> };
      }>
    >;
  }>;
};

export type GetFooterQueryVariables = Exact<{
  locale: Scalars['String'];
  slug: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
}>;

export type GetFooterQuery = {
  __typename?: 'Query';
  footerCollection?: Maybe<{
    __typename?: 'FooterCollection';
    items: Array<
      Maybe<{
        __typename?: 'Footer';
        content?: Maybe<string>;
        logoCollection?: Maybe<{
          __typename?: 'AssetCollection';
          items: Array<
            Maybe<{
              __typename?: 'Asset';
              url?: Maybe<string>;
              title?: Maybe<string>;
              sys: { __typename?: 'Sys'; id: string };
            }>
          >;
        }>;
      }>
    >;
  }>;
};

export type GetSiblingsStaffNotesQueryVariables = Exact<{
  locale: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  date: Scalars['DateTime'];
  slug: Scalars['String'];
}>;

export type GetSiblingsStaffNotesQuery = {
  __typename?: 'Query';
  previous?: Maybe<{
    __typename?: 'StaffNoteCollection';
    items: Array<
      Maybe<{
        __typename?: 'StaffNote';
        slug?: Maybe<string>;
        title?: Maybe<string>;
      }>
    >;
  }>;
  next?: Maybe<{
    __typename?: 'StaffNoteCollection';
    items: Array<
      Maybe<{
        __typename?: 'StaffNote';
        slug?: Maybe<string>;
        title?: Maybe<string>;
      }>
    >;
  }>;
};

export type RichTextAssetFragment = {
  __typename?: 'Asset';
  url?: Maybe<string>;
  description?: Maybe<string>;
  width?: Maybe<number>;
  height?: Maybe<number>;
  sys: { __typename?: 'Sys'; id: string };
};

type RichTextEntryHyperlink_Category_Fragment = {
  __typename: 'Category';
  sys: { __typename?: 'Sys'; id: string };
};

type RichTextEntryHyperlink_CustomOrder_Fragment = {
  __typename: 'CustomOrder';
  sys: { __typename?: 'Sys'; id: string };
};

type RichTextEntryHyperlink_Footer_Fragment = {
  __typename: 'Footer';
  sys: { __typename?: 'Sys'; id: string };
};

type RichTextEntryHyperlink_HauteCouture_Fragment = {
  __typename: 'HauteCouture';
  sys: { __typename?: 'Sys'; id: string };
};

type RichTextEntryHyperlink_Home_Fragment = {
  __typename: 'Home';
  sys: { __typename?: 'Sys'; id: string };
};

type RichTextEntryHyperlink_Navigation_Fragment = {
  __typename: 'Navigation';
  sys: { __typename?: 'Sys'; id: string };
};

type RichTextEntryHyperlink_News_Fragment = {
  __typename: 'News';
  sys: { __typename?: 'Sys'; id: string };
};

type RichTextEntryHyperlink_NewsCategory_Fragment = {
  __typename: 'NewsCategory';
  sys: { __typename?: 'Sys'; id: string };
};

type RichTextEntryHyperlink_Product_Fragment = {
  __typename: 'Product';
  sys: { __typename?: 'Sys'; id: string };
};

type RichTextEntryHyperlink_Recruiting_Fragment = {
  __typename: 'Recruiting';
  slug?: Maybe<string>;
  sys: { __typename?: 'Sys'; id: string };
};

type RichTextEntryHyperlink_StaffNote_Fragment = {
  __typename: 'StaffNote';
  slug?: Maybe<string>;
  sys: { __typename?: 'Sys'; id: string };
};

export type RichTextEntryHyperlinkFragment =
  | RichTextEntryHyperlink_Category_Fragment
  | RichTextEntryHyperlink_CustomOrder_Fragment
  | RichTextEntryHyperlink_Footer_Fragment
  | RichTextEntryHyperlink_HauteCouture_Fragment
  | RichTextEntryHyperlink_Home_Fragment
  | RichTextEntryHyperlink_Navigation_Fragment
  | RichTextEntryHyperlink_News_Fragment
  | RichTextEntryHyperlink_NewsCategory_Fragment
  | RichTextEntryHyperlink_Product_Fragment
  | RichTextEntryHyperlink_Recruiting_Fragment
  | RichTextEntryHyperlink_StaffNote_Fragment;

export type GetHomeLaboQueryVariables = Exact<{
  locale: Scalars['String'];
  slug: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
}>;

export type GetHomeLaboQuery = {
  __typename?: 'Query';
  homeCollection?: Maybe<{
    __typename?: 'HomeCollection';
    items: Array<
      Maybe<{
        __typename?: 'Home';
        description?: Maybe<{ __typename?: 'HomeDescription'; json: any }>;
        interviewImage?: Maybe<{ __typename?: 'Asset'; url?: Maybe<string> }>;
        interviewHomeDescription?: Maybe<{
          __typename?: 'HomeInterviewHomeDescription';
          json: any;
        }>;
        staffNoteHomeDescription?: Maybe<{
          __typename?: 'HomeStaffNoteHomeDescription';
          json: any;
        }>;
        recruitingImage?: Maybe<{ __typename?: 'Asset'; url?: Maybe<string> }>;
        recruitingHomeDescription?: Maybe<{
          __typename?: 'HomeRecruitingHomeDescription';
          json: any;
        }>;
      }>
    >;
  }>;
  staffNoteCollection?: Maybe<{
    __typename?: 'StaffNoteCollection';
    items: Array<
      Maybe<{
        __typename?: 'StaffNote';
        content?: Maybe<{ __typename?: 'StaffNoteContent'; json: any }>;
      }>
    >;
  }>;
};

export type GetRecruitingSingleQueryVariables = Exact<{
  locale: Scalars['String'];
  slug: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
}>;

export type GetRecruitingSingleQuery = {
  __typename?: 'Query';
  homeCollection?: Maybe<{
    __typename?: 'HomeCollection';
    items: Array<
      Maybe<{
        __typename?: 'Home';
        recruitingDescription?: Maybe<{
          __typename?: 'HomeRecruitingDescription';
          json: any;
        }>;
      }>
    >;
  }>;
  recruitingCollection?: Maybe<{
    __typename?: 'RecruitingCollection';
    items: Array<
      Maybe<{
        __typename?: 'Recruiting';
        slug?: Maybe<string>;
        title?: Maybe<string>;
        formLabel?: Maybe<string>;
        formUrl?: Maybe<string>;
        content?: Maybe<{
          __typename?: 'RecruitingContent';
          json: any;
          links: {
            __typename?: 'RecruitingContentLinks';
            assets: {
              __typename?: 'RecruitingContentAssets';
              block: Array<
                Maybe<{
                  __typename?: 'Asset';
                  url?: Maybe<string>;
                  description?: Maybe<string>;
                  width?: Maybe<number>;
                  height?: Maybe<number>;
                  sys: { __typename?: 'Sys'; id: string };
                }>
              >;
            };
            entries: {
              __typename?: 'RecruitingContentEntries';
              hyperlink: Array<
                Maybe<
                  | {
                      __typename: 'Category';
                      sys: { __typename?: 'Sys'; id: string };
                    }
                  | {
                      __typename: 'CustomOrder';
                      sys: { __typename?: 'Sys'; id: string };
                    }
                  | {
                      __typename: 'Footer';
                      sys: { __typename?: 'Sys'; id: string };
                    }
                  | {
                      __typename: 'HauteCouture';
                      sys: { __typename?: 'Sys'; id: string };
                    }
                  | {
                      __typename: 'Home';
                      sys: { __typename?: 'Sys'; id: string };
                    }
                  | {
                      __typename: 'Navigation';
                      sys: { __typename?: 'Sys'; id: string };
                    }
                  | {
                      __typename: 'News';
                      sys: { __typename?: 'Sys'; id: string };
                    }
                  | {
                      __typename: 'NewsCategory';
                      sys: { __typename?: 'Sys'; id: string };
                    }
                  | {
                      __typename: 'Product';
                      sys: { __typename?: 'Sys'; id: string };
                    }
                  | {
                      __typename: 'Recruiting';
                      slug?: Maybe<string>;
                      sys: { __typename?: 'Sys'; id: string };
                    }
                  | {
                      __typename: 'StaffNote';
                      slug?: Maybe<string>;
                      sys: { __typename?: 'Sys'; id: string };
                    }
                >
              >;
            };
          };
        }>;
        notes?: Maybe<{
          __typename?: 'RecruitingNotes';
          json: any;
          links: {
            __typename?: 'RecruitingNotesLinks';
            assets: {
              __typename?: 'RecruitingNotesAssets';
              block: Array<
                Maybe<{
                  __typename?: 'Asset';
                  url?: Maybe<string>;
                  description?: Maybe<string>;
                  width?: Maybe<number>;
                  height?: Maybe<number>;
                  sys: { __typename?: 'Sys'; id: string };
                }>
              >;
            };
          };
        }>;
      }>
    >;
  }>;
  recruitingAllPosts?: Maybe<{
    __typename?: 'RecruitingCollection';
    items: Array<
      Maybe<{
        __typename?: 'Recruiting';
        title?: Maybe<string>;
        slug?: Maybe<string>;
        sys: { __typename?: 'Sys'; id: string };
      }>
    >;
  }>;
};

export type GetRecruitingSinglePathsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetRecruitingSinglePathsQuery = {
  __typename?: 'Query';
  recruitingCollection?: Maybe<{
    __typename?: 'RecruitingCollection';
    items: Array<Maybe<{ __typename?: 'Recruiting'; slug?: Maybe<string> }>>;
  }>;
};

export type GetStaffNotesSingleQueryVariables = Exact<{
  locale: Scalars['String'];
  slug: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
}>;

export type GetStaffNotesSingleQuery = {
  __typename?: 'Query';
  staffNoteCollection?: Maybe<{
    __typename?: 'StaffNoteCollection';
    items: Array<
      Maybe<{
        __typename?: 'StaffNote';
        date?: Maybe<any>;
        title?: Maybe<string>;
        image?: Maybe<{
          __typename?: 'Asset';
          url?: Maybe<string>;
          description?: Maybe<string>;
          width?: Maybe<number>;
          height?: Maybe<number>;
        }>;
        content?: Maybe<{
          __typename?: 'StaffNoteContent';
          json: any;
          links: {
            __typename?: 'StaffNoteContentLinks';
            assets: {
              __typename?: 'StaffNoteContentAssets';
              block: Array<
                Maybe<{
                  __typename?: 'Asset';
                  url?: Maybe<string>;
                  description?: Maybe<string>;
                  width?: Maybe<number>;
                  height?: Maybe<number>;
                  sys: { __typename?: 'Sys'; id: string };
                }>
              >;
            };
            entries: {
              __typename?: 'StaffNoteContentEntries';
              hyperlink: Array<
                Maybe<
                  | {
                      __typename: 'Category';
                      sys: { __typename?: 'Sys'; id: string };
                    }
                  | {
                      __typename: 'CustomOrder';
                      sys: { __typename?: 'Sys'; id: string };
                    }
                  | {
                      __typename: 'Footer';
                      sys: { __typename?: 'Sys'; id: string };
                    }
                  | {
                      __typename: 'HauteCouture';
                      sys: { __typename?: 'Sys'; id: string };
                    }
                  | {
                      __typename: 'Home';
                      sys: { __typename?: 'Sys'; id: string };
                    }
                  | {
                      __typename: 'Navigation';
                      sys: { __typename?: 'Sys'; id: string };
                    }
                  | {
                      __typename: 'News';
                      sys: { __typename?: 'Sys'; id: string };
                    }
                  | {
                      __typename: 'NewsCategory';
                      sys: { __typename?: 'Sys'; id: string };
                    }
                  | {
                      __typename: 'Product';
                      sys: { __typename?: 'Sys'; id: string };
                    }
                  | {
                      __typename: 'Recruiting';
                      slug?: Maybe<string>;
                      sys: { __typename?: 'Sys'; id: string };
                    }
                  | {
                      __typename: 'StaffNote';
                      slug?: Maybe<string>;
                      sys: { __typename?: 'Sys'; id: string };
                    }
                >
              >;
            };
          };
        }>;
        categoryCollection?: Maybe<{
          __typename?: 'StaffNoteCategoryCollection';
          items: Array<
            Maybe<{
              __typename?: 'Category';
              slug?: Maybe<string>;
              title?: Maybe<string>;
              sys: { __typename?: 'Sys'; id: string };
            }>
          >;
        }>;
      }>
    >;
  }>;
};

export type GetStaffNotesSinglePathsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetStaffNotesSinglePathsQuery = {
  __typename?: 'Query';
  staffNoteCollection?: Maybe<{
    __typename?: 'StaffNoteCollection';
    items: Array<Maybe<{ __typename?: 'StaffNote'; slug?: Maybe<string> }>>;
  }>;
};

export type GetStaffNotesArchiveCategoryQueryVariables = Exact<{
  locale: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
}>;

export type GetStaffNotesArchiveCategoryQuery = {
  __typename?: 'Query';
  homeCollection?: Maybe<{
    __typename?: 'HomeCollection';
    items: Array<
      Maybe<{
        __typename?: 'Home';
        staffNoteDescription?: Maybe<{
          __typename?: 'HomeStaffNoteDescription';
          json: any;
        }>;
      }>
    >;
  }>;
  allCategories?: Maybe<{
    __typename?: 'CategoryCollection';
    items: Array<
      Maybe<{
        __typename?: 'Category';
        title?: Maybe<string>;
        slug?: Maybe<string>;
        sys: { __typename?: 'Sys'; id: string };
      }>
    >;
  }>;
};

export type GetStaffNotesArchiveCategoryPathsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetStaffNotesArchiveCategoryPathsQuery = {
  __typename?: 'Query';
  categoryCollection?: Maybe<{
    __typename?: 'CategoryCollection';
    items: Array<Maybe<{ __typename?: 'Category'; slug?: Maybe<string> }>>;
  }>;
};

export type GetStaffNotesArchiveQueryVariables = Exact<{
  locale: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
}>;

export type GetStaffNotesArchiveQuery = {
  __typename?: 'Query';
  homeCollection?: Maybe<{
    __typename?: 'HomeCollection';
    items: Array<
      Maybe<{
        __typename?: 'Home';
        staffNoteDescription?: Maybe<{
          __typename?: 'HomeStaffNoteDescription';
          json: any;
        }>;
      }>
    >;
  }>;
};
