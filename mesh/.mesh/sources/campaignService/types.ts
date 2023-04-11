// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace CampaignServiceTypes {
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
  Date: any;
  JSON: any;
  ObjectID: any;
};

export type Campaign = {
  /** Feedback id */
  _id: Scalars['String'];
  date: Scalars['Date'];
  invitations?: Maybe<Array<InvitationNoCampaign>>;
  name: Scalars['String'];
  userId: Scalars['Int'];
};

export type CampaignNoInvitation = {
  /** Feedback id */
  _id: Scalars['String'];
  date: Scalars['Date'];
  name: Scalars['String'];
  userId: Scalars['Int'];
};

export type CreateCampaignInput = {
  date: Scalars['Date'];
  name: Scalars['String'];
  userId: Scalars['Int'];
};

export type CreateInvitationBatchInput = {
  accessible: Scalars['Boolean'];
  availability: Scalars['Boolean'];
  campaignId?: InputMaybe<Scalars['ObjectID']>;
  invokerId: Scalars['Int'];
  /** Array of user that will receive the invitation */
  receiverIds: Array<Scalars['Int']>;
  surveyId: Scalars['ObjectID'];
};

export type CreateInvitationInput = {
  accessible: Scalars['Boolean'];
  availability: Scalars['Boolean'];
  campaignId?: InputMaybe<Scalars['ObjectID']>;
  invokerId: Scalars['Int'];
  receiverId: Scalars['Int'];
  surveyId: Scalars['ObjectID'];
};

export type FilteringInput = {
  /** Json string of filters to apply */
  filter_by: Scalars['JSON'];
};

export type Invitation = {
  _id: Scalars['String'];
  accessible: Scalars['Boolean'];
  availability: Scalars['Boolean'];
  campaign?: Maybe<CampaignNoInvitation>;
  invokerId: Scalars['Int'];
  receiverId: Scalars['Int'];
  surveyId: Scalars['String'];
  token: Scalars['String'];
};

export type InvitationNoCampaign = {
  _id: Scalars['String'];
  accessible: Scalars['Boolean'];
  availability: Scalars['Boolean'];
  invokerId: Scalars['Int'];
  receiverId: Scalars['Int'];
  surveyId: Scalars['String'];
  token: Scalars['String'];
};

export type Mutation = {
  consumeInvitation: Session;
  createCampaign: Campaign;
  createInvitation: Invitation;
  createInvitations: Array<Invitation>;
  removeCampaign: Campaign;
  removeInvitation: Invitation;
  removeSession: Session;
  updateCampaign: Campaign;
  updateInvitation: Invitation;
  updateSession: Session;
};


export type MutationconsumeInvitationArgs = {
  token: Scalars['String'];
};


export type MutationcreateCampaignArgs = {
  createCampaignInput: CreateCampaignInput;
};


export type MutationcreateInvitationArgs = {
  createInvitationInput: CreateInvitationInput;
};


export type MutationcreateInvitationsArgs = {
  createInvitationBatchInput: CreateInvitationBatchInput;
};


export type MutationremoveCampaignArgs = {
  id: Scalars['String'];
};


export type MutationremoveInvitationArgs = {
  id: Scalars['String'];
};


export type MutationremoveSessionArgs = {
  id: Scalars['String'];
};


export type MutationupdateCampaignArgs = {
  updateCampaignInput: UpdateCampaignInput;
};


export type MutationupdateInvitationArgs = {
  updateInvitationInput: UpdateInvitationInput;
};


export type MutationupdateSessionArgs = {
  updateSessionInput: UpdateSessionInput;
};

export type PaginationInput = {
  /** number of element per page. */
  nbElement: Scalars['Int'];
  /** Page of number. */
  page: Scalars['Int'];
};

export type Query = {
  campaign: Campaign;
  campaigns: Array<Campaign>;
  invitation: Invitation;
  invitations: Array<Invitation>;
  session: Session;
  sessions: Array<Session>;
};


export type QuerycampaignArgs = {
  id: Scalars['String'];
};


export type QuerycampaignsArgs = {
  filter?: InputMaybe<FilteringInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortingInput>;
};


export type QueryinvitationArgs = {
  id: Scalars['String'];
};


export type QueryinvitationsArgs = {
  filter?: InputMaybe<FilteringInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortingInput>;
};


export type QuerysessionArgs = {
  id: Scalars['String'];
};


export type QuerysessionsArgs = {
  filter?: InputMaybe<FilteringInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortingInput>;
};

export type Response = {
  order: Scalars['Int'];
  timeSpentUnit: ResponseTime;
  value: Array<Scalars['String']>;
};

export type ResponseGroup = {
  order: Scalars['Int'];
  responses: Array<Response>;
};

export type ResponseGroupInput = {
  order: Scalars['Int'];
  responses: Array<ResponseInput>;
};

export type ResponseInput = {
  order: Scalars['Int'];
  timeSpentUnit: ResponseTimeInput;
  value: Array<Scalars['String']>;
};

export type ResponseTime = {
  timeSpentUnit: ResponseTimeUnit;
  timeSpentValue: Scalars['Int'];
};

export type ResponseTimeInput = {
  timeSpentUnit: ResponseTimeUnit;
  timeSpentValue: Scalars['Int'];
};

export type ResponseTimeUnit =
  | 'MINUTES'
  | 'SECONDS';

export type ResponseUnion = Response | ResponseGroup;

export type Session = {
  _id: Scalars['String'];
  invokerId: Scalars['Int'];
  receiverId: Scalars['Int'];
  responses: Array<ResponseUnion>;
  status: SessionStatus;
  survey: Scalars['JSON'];
};

export type SessionStatus =
  | 'ABANDONNED'
  | 'ACTIVE'
  | 'DONE'
  | 'ORPHENED'
  | 'PAUSED';

export type SortingInput = {
  /** Json string of field to sort by. value must be ASC or DESC */
  sort_by: Scalars['JSON'];
};

export type UpdateCampaignInput = {
  _id: Scalars['String'];
  date?: InputMaybe<Scalars['Date']>;
  invitationsId?: InputMaybe<Array<Scalars['ObjectID']>>;
  name?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type UpdateInvitationInput = {
  _id: Scalars['String'];
  accessible: Scalars['Boolean'];
  availability: Scalars['Boolean'];
  campaignId?: InputMaybe<Scalars['ObjectID']>;
};

export type UpdateSessionInput = {
  _id: Scalars['String'];
  invokerId?: InputMaybe<Scalars['Int']>;
  receiverId?: InputMaybe<Scalars['Int']>;
  responses?: InputMaybe<Array<ResponseInput>>;
  responsesGroup?: InputMaybe<Array<ResponseGroupInput>>;
  status?: InputMaybe<SessionStatus>;
};

  export type QuerySdk = {
      /** null **/
  campaign: InContextSdkMethod<Query['campaign'], QuerycampaignArgs, MeshContext>,
  /** null **/
  campaigns: InContextSdkMethod<Query['campaigns'], QuerycampaignsArgs, MeshContext>,
  /** null **/
  invitation: InContextSdkMethod<Query['invitation'], QueryinvitationArgs, MeshContext>,
  /** null **/
  invitations: InContextSdkMethod<Query['invitations'], QueryinvitationsArgs, MeshContext>,
  /** null **/
  session: InContextSdkMethod<Query['session'], QuerysessionArgs, MeshContext>,
  /** null **/
  sessions: InContextSdkMethod<Query['sessions'], QuerysessionsArgs, MeshContext>
  };

  export type MutationSdk = {
      /** null **/
  consumeInvitation: InContextSdkMethod<Mutation['consumeInvitation'], MutationconsumeInvitationArgs, MeshContext>,
  /** null **/
  createCampaign: InContextSdkMethod<Mutation['createCampaign'], MutationcreateCampaignArgs, MeshContext>,
  /** null **/
  createInvitation: InContextSdkMethod<Mutation['createInvitation'], MutationcreateInvitationArgs, MeshContext>,
  /** null **/
  createInvitations: InContextSdkMethod<Mutation['createInvitations'], MutationcreateInvitationsArgs, MeshContext>,
  /** null **/
  removeCampaign: InContextSdkMethod<Mutation['removeCampaign'], MutationremoveCampaignArgs, MeshContext>,
  /** null **/
  removeInvitation: InContextSdkMethod<Mutation['removeInvitation'], MutationremoveInvitationArgs, MeshContext>,
  /** null **/
  removeSession: InContextSdkMethod<Mutation['removeSession'], MutationremoveSessionArgs, MeshContext>,
  /** null **/
  updateCampaign: InContextSdkMethod<Mutation['updateCampaign'], MutationupdateCampaignArgs, MeshContext>,
  /** null **/
  updateInvitation: InContextSdkMethod<Mutation['updateInvitation'], MutationupdateInvitationArgs, MeshContext>,
  /** null **/
  updateSession: InContextSdkMethod<Mutation['updateSession'], MutationupdateSessionArgs, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["campaignService"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
