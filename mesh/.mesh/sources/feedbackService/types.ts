// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace FeedbackServiceTypes {
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
};

export type CreateFeedbackInput = {
  content: Scalars['String'];
  date: Scalars['Date'];
  rating: Scalars['Int'];
  surveyId: Scalars['String'];
  userId: Scalars['Int'];
};

export type Feedback = {
  /** Feedback id */
  _id: Scalars['String'];
  content: Scalars['String'];
  date: Scalars['Date'];
  rating: Scalars['Int'];
  surveyId: Scalars['String'];
  userId: Scalars['Int'];
};

export type FilteringInput = {
  /** Json string of filters to apply */
  filter_by: Scalars['JSON'];
};

export type Mutation = {
  createFeedback: Feedback;
  removeFeedback: Feedback;
  updateFeedback: Feedback;
};


export type MutationcreateFeedbackArgs = {
  createFeedbackInput: CreateFeedbackInput;
};


export type MutationremoveFeedbackArgs = {
  id: Scalars['String'];
};


export type MutationupdateFeedbackArgs = {
  updateFeedbackInput: UpdateFeedbackInput;
};

export type PaginationInput = {
  /** number of element per page. */
  nbElement: Scalars['Int'];
  /** Page of number. */
  page: Scalars['Int'];
};

export type Query = {
  feedback: Feedback;
  feedbacks: Array<Feedback>;
};


export type QueryfeedbackArgs = {
  id: Scalars['String'];
};


export type QueryfeedbacksArgs = {
  filter?: InputMaybe<FilteringInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortingInput>;
};

export type SortingInput = {
  /** Json string of field to sort by. value must be ASC or DESC */
  sort_by: Scalars['JSON'];
};

export type UpdateFeedbackInput = {
  _id: Scalars['String'];
  content?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['Date']>;
  rating?: InputMaybe<Scalars['Int']>;
  surveyId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Int']>;
};

  export type QuerySdk = {
      /** null **/
  feedback: InContextSdkMethod<Query['feedback'], QueryfeedbackArgs, MeshContext>,
  /** null **/
  feedbacks: InContextSdkMethod<Query['feedbacks'], QueryfeedbacksArgs, MeshContext>
  };

  export type MutationSdk = {
      /** null **/
  createFeedback: InContextSdkMethod<Mutation['createFeedback'], MutationcreateFeedbackArgs, MeshContext>,
  /** null **/
  removeFeedback: InContextSdkMethod<Mutation['removeFeedback'], MutationremoveFeedbackArgs, MeshContext>,
  /** null **/
  updateFeedback: InContextSdkMethod<Mutation['updateFeedback'], MutationupdateFeedbackArgs, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["feedbackService"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
