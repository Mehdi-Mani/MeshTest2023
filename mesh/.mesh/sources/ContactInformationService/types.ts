// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace ContactInformationServiceTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  CountryCode: any;
  Date: any;
  DateTime: any;
  EmailAddress: any;
  HexColorCode: any;
  JSON: any;
  PhoneNumber: any;
};

/** Company public information */
export type Company = {
  /** UserId that take care of this company */
  RepresentedBy: Scalars['Int'];
  /** Id of the company */
  _id: Scalars['String'];
  contactInfo?: Maybe<ContactInfoType>;
  /** description of the company */
  description: Scalars['String'];
  domains?: Maybe<Array<Maybe<Domain>>>;
  /** Date of the fondation of the company */
  fondationDate: Scalars['Date'];
  /** Name of the company */
  name: Scalars['String'];
};

export type ContactInfoType = {
  _id: Scalars['String'];
  /** Country code using ISO 3166-1 Alpha-2 */
  countryCode?: Maybe<Scalars['CountryCode']>;
  fax?: Maybe<Scalars['String']>;
  phoneNumbers?: Maybe<Array<Maybe<Scalars['PhoneNumber']>>>;
  publicEmails?: Maybe<Array<Maybe<Scalars['EmailAddress']>>>;
  /** Field representing Company ID */
  refCompany?: Maybe<Scalars['String']>;
  /** Field representing User ID */
  refUser?: Maybe<Scalars['Int']>;
};

export type CreateCompanyInput = {
  /** UserId that take care of this company */
  RepresentedBy: Scalars['Int'];
  contactInfo?: InputMaybe<CreateContactInfoCompanyInputNullable>;
  /** description of the company */
  description: Scalars['String'];
  domains?: InputMaybe<Array<InputMaybe<CreateDomainInput>>>;
  /** Date of the fondation of the company */
  fondationDate?: Scalars['DateTime'];
  /** Name of the company */
  name: Scalars['String'];
};

export type CreateContactInfoCompanyInput = {
  /** Country code using ISO 3166-1 Alpha-2 */
  countryCode: Scalars['CountryCode'];
  fax?: InputMaybe<Scalars['String']>;
  phoneNumbers?: InputMaybe<Array<InputMaybe<Scalars['PhoneNumber']>>>;
  publicEmails?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
  /** Field representing Company ID */
  refCompany: Scalars['String'];
};

export type CreateContactInfoCompanyInputNullable = {
  /** Country code using ISO 3166-1 Alpha-2 */
  countryCode: Scalars['CountryCode'];
  fax?: InputMaybe<Scalars['String']>;
  phoneNumbers?: InputMaybe<Array<InputMaybe<Scalars['PhoneNumber']>>>;
  publicEmails?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
};

export type CreateContactInfoUserInput = {
  /** Country code using ISO 3166-1 Alpha-2 */
  countryCode: Scalars['CountryCode'];
  fax?: InputMaybe<Scalars['String']>;
  phoneNumbers?: InputMaybe<Array<InputMaybe<Scalars['PhoneNumber']>>>;
  publicEmails?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
  /** Field representing Company ID */
  refUser: Scalars['Int'];
};

export type CreateDomainInput = {
  /** color used to represent this domain */
  color: Scalars['HexColorCode'];
  /** name of the domain */
  name: Scalars['String'];
};

/** Domain/Field company works in */
export type Domain = {
  /** Id of the company */
  _id: Scalars['String'];
  /** color used to represent this domain */
  color: Scalars['HexColorCode'];
  /** name of the domain */
  name: Scalars['String'];
};

export type Mutation = {
  createCompany: Company;
  createContactInfoForCompany: ContactInfoType;
  createContactInfoForUser: ContactInfoType;
  createDomain: Domain;
  removeCompany: Company;
  removeContactInfo: ContactInfoType;
  removeDomain: Domain;
  updateCompany: Company;
  updateContactInfo: ContactInfoType;
  updateDomain: Domain;
};


export type MutationcreateCompanyArgs = {
  createCompanyInput: CreateCompanyInput;
};


export type MutationcreateContactInfoForCompanyArgs = {
  createContactInfoCompanyInput: CreateContactInfoCompanyInput;
};


export type MutationcreateContactInfoForUserArgs = {
  createContactInfoUserInput: CreateContactInfoUserInput;
};


export type MutationcreateDomainArgs = {
  createDomainInput: CreateDomainInput;
};


export type MutationremoveCompanyArgs = {
  id: Scalars['String'];
};


export type MutationremoveContactInfoArgs = {
  id: Scalars['String'];
};


export type MutationremoveDomainArgs = {
  id: Scalars['String'];
};


export type MutationupdateCompanyArgs = {
  updateCompanyInput: UpdateCompanyInput;
};


export type MutationupdateContactInfoArgs = {
  updateContactInfoInput: UpdateContactInfoInput;
};


export type MutationupdateDomainArgs = {
  updateDomainInput: UpdateDomainInput;
};

export type Query = {
  companies: Array<Company>;
  company: Company;
  contactInfo: ContactInfoType;
  contactInfos: Array<ContactInfoType>;
  domain: Domain;
  domains: Array<Domain>;
};


export type QuerycompaniesArgs = {
  sortedPaginatedInput?: InputMaybe<SortedPaginatedFiltredInput>;
};


export type QuerycompanyArgs = {
  id: Scalars['String'];
};


export type QuerycontactInfoArgs = {
  id: Scalars['String'];
};


export type QuerycontactInfosArgs = {
  sortedPaginatedFiltredInput?: InputMaybe<SortedPaginatedFiltredInput>;
};


export type QuerydomainArgs = {
  id: Scalars['String'];
};


export type QuerydomainsArgs = {
  sortedPaginatedInput?: InputMaybe<SortedPaginatedFiltredInput>;
};

export type SortedPaginatedFiltredInput = {
  /** Json string of filters to apply */
  filter_by?: InputMaybe<Scalars['JSON']>;
  /** number of element per page. default 5 */
  nbElement?: InputMaybe<Scalars['Int']>;
  /** Page of number. default 1 */
  page?: InputMaybe<Scalars['Int']>;
  /** Json string of field to sort by. value must be ASC or DESC */
  sort_by?: InputMaybe<Scalars['JSON']>;
};

export type UpdateCompanyInput = {
  /** UserId that take care of this company */
  RepresentedBy?: InputMaybe<Scalars['Int']>;
  contactInfo?: InputMaybe<CreateContactInfoCompanyInputNullable>;
  /** description of the company */
  description?: InputMaybe<Scalars['String']>;
  domains?: InputMaybe<Array<CreateDomainInput>>;
  /** Date of the fondation of the company */
  fondationDate?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  /** Name of the company */
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateContactInfoInput = {
  _id: Scalars['String'];
  /** Country code using ISO 3166-1 Alpha-2 */
  countryCode?: InputMaybe<Scalars['CountryCode']>;
  fax?: InputMaybe<Scalars['String']>;
  phoneNumbers?: InputMaybe<Array<Scalars['PhoneNumber']>>;
  publicEmails?: InputMaybe<Array<Scalars['EmailAddress']>>;
};

export type UpdateDomainInput = {
  /** Id of the company */
  _id: Scalars['String'];
  /** color used to represent this domain */
  color?: InputMaybe<Scalars['HexColorCode']>;
  /** name of the domain */
  name?: InputMaybe<Scalars['String']>;
};

  export type QuerySdk = {
      /** null **/
  companies: InContextSdkMethod<Query['companies'], QuerycompaniesArgs, MeshContext>,
  /** null **/
  company: InContextSdkMethod<Query['company'], QuerycompanyArgs, MeshContext>,
  /** null **/
  contactInfo: InContextSdkMethod<Query['contactInfo'], QuerycontactInfoArgs, MeshContext>,
  /** null **/
  contactInfos: InContextSdkMethod<Query['contactInfos'], QuerycontactInfosArgs, MeshContext>,
  /** null **/
  domain: InContextSdkMethod<Query['domain'], QuerydomainArgs, MeshContext>,
  /** null **/
  domains: InContextSdkMethod<Query['domains'], QuerydomainsArgs, MeshContext>
  };

  export type MutationSdk = {
      /** null **/
  createCompany: InContextSdkMethod<Mutation['createCompany'], MutationcreateCompanyArgs, MeshContext>,
  /** null **/
  createContactInfoForCompany: InContextSdkMethod<Mutation['createContactInfoForCompany'], MutationcreateContactInfoForCompanyArgs, MeshContext>,
  /** null **/
  createContactInfoForUser: InContextSdkMethod<Mutation['createContactInfoForUser'], MutationcreateContactInfoForUserArgs, MeshContext>,
  /** null **/
  createDomain: InContextSdkMethod<Mutation['createDomain'], MutationcreateDomainArgs, MeshContext>,
  /** null **/
  removeCompany: InContextSdkMethod<Mutation['removeCompany'], MutationremoveCompanyArgs, MeshContext>,
  /** null **/
  removeContactInfo: InContextSdkMethod<Mutation['removeContactInfo'], MutationremoveContactInfoArgs, MeshContext>,
  /** null **/
  removeDomain: InContextSdkMethod<Mutation['removeDomain'], MutationremoveDomainArgs, MeshContext>,
  /** null **/
  updateCompany: InContextSdkMethod<Mutation['updateCompany'], MutationupdateCompanyArgs, MeshContext>,
  /** null **/
  updateContactInfo: InContextSdkMethod<Mutation['updateContactInfo'], MutationupdateContactInfoArgs, MeshContext>,
  /** null **/
  updateDomain: InContextSdkMethod<Mutation['updateDomain'], MutationupdateDomainArgs, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["ContactInformationService"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
