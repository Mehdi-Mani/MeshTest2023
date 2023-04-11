// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace SurveyServiceTypes {
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
  HexColorCode: any;
  JSON: any;
};

export type Answer = {
  _id: Scalars['String'];
  correctValue: Scalars['String'];
  creatorId: Scalars['Int'];
  type: AnswerType;
};

export type AnswerEmbeded = {
  correctValue: Scalars['String'];
  type: AnswerType;
};

export type AnswerEmbededInput = {
  correctValue: Scalars['String'];
  type: AnswerType;
};

export type AnswerGroup = {
  _id: Scalars['String'];
  /** values shown to the user */
  availableValues: Array<Scalars['String']>;
  /** correct values */
  correctValues?: Maybe<Array<Scalars['String']>>;
  creatorId: Scalars['Int'];
  /** type: RadioBox, checkBox...  */
  type: AnswerGroupType;
};

export type AnswerGroupEmbeded = {
  /** values shown to the user */
  availableValues: Array<Scalars['String']>;
  /** correct values */
  correctValues?: Maybe<Array<Scalars['String']>>;
  /** type: RadioBox, checkBox...  */
  type: AnswerGroupType;
};

export type AnswerGroupEmbededInput = {
  /** values shown to the user */
  availableValues: Array<Scalars['String']>;
  /** correct values */
  correctValues?: InputMaybe<Array<Scalars['String']>>;
  /** type: RadioBox, checkBox...  */
  type: AnswerGroupType;
};

export type AnswerGroupInput = {
  /** values shown to the user */
  availableValues: Array<Scalars['String']>;
  /** correct values */
  correctValues?: InputMaybe<Array<Scalars['String']>>;
  creatorId: Scalars['Int'];
  /** type: RadioBox, checkBox...  */
  type: AnswerGroupType;
};

export type AnswerGroupType =
  | 'CHECKBOX'
  | 'RADIO';

export type AnswerType =
  | 'CODE'
  | 'NUMERIC'
  | 'RANGE'
  | 'TEXT';

export type AnswerableUnion = AnswerEmbeded | AnswerGroupEmbeded;

export type BlockUnion = Note | QuestionEmbeded | QuestionGroupEmbeded;

/** Domain/Field company works in */
export type Category = {
  /** Id of the category */
  _id: Scalars['String'];
  /** color used to represent this domain */
  color: Scalars['HexColorCode'];
  /** name of the domain */
  name: Scalars['String'];
};

export type CategoryInput = {
  /** Id of the category */
  _id: Scalars['String'];
  /** color used to represent this domain */
  color: Scalars['HexColorCode'];
  /** name of the domain */
  name: Scalars['String'];
};

export type CreateAnswerInput = {
  correctValue: Scalars['String'];
  creatorId: Scalars['Int'];
  type: AnswerType;
};

export type CreateCategoryInput = {
  /** color used to represent this domain */
  color: Scalars['HexColorCode'];
  /** name of the domain */
  name: Scalars['String'];
};

export type CreateQuestionAnswerGroupInput = {
  answerGroup?: InputMaybe<AnswerGroupEmbededInput>;
  categories?: InputMaybe<Array<InputMaybe<CategoryInput>>>;
  creatorId: Scalars['Int'];
  hint?: InputMaybe<Scalars['String']>;
  isPrivate: Scalars['Boolean'];
  time?: InputMaybe<QuestionTimeInput>;
  value: Scalars['String'];
};

export type CreateQuestionGroupInput = {
  categories?: InputMaybe<Array<InputMaybe<CreateCategoryInput>>>;
  creatorId: Scalars['Int'];
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  questions?: InputMaybe<Array<InputMaybe<CreateQuestionInput>>>;
};

export type CreateQuestionInput = {
  answer?: InputMaybe<AnswerEmbededInput>;
  categories?: InputMaybe<Array<InputMaybe<CategoryInput>>>;
  creatorId: Scalars['Int'];
  hint?: InputMaybe<Scalars['String']>;
  isPrivate: Scalars['Boolean'];
  time?: InputMaybe<QuestionTimeInput>;
  value: Scalars['String'];
};

export type CreateSurveyInput = {
  canBePaused: Scalars['Boolean'];
  description?: InputMaybe<Scalars['String']>;
  isPrivate: Scalars['Boolean'];
  name: Scalars['String'];
  notes?: InputMaybe<Array<NoteInput>>;
  questionGroups?: InputMaybe<Array<QuestionGroupEmbededInput>>;
  questions?: InputMaybe<Array<QuestionEmbededInput>>;
  time?: InputMaybe<Time>;
  userId: Scalars['Int'];
  version?: InputMaybe<Scalars['Int']>;
};

export type FilteringInput = {
  /** Json string of filters to apply */
  filter_by: Scalars['JSON'];
};

export type Mutation = {
  createAnswer: Answer;
  createAnswerGroup: AnswerGroup;
  createCategory: Category;
  createQuestion: Question;
  createQuestionAnswerGroup: Question;
  createQuestionGroup: QuestionGroup;
  createSurvey: Survey;
  downVoteQuestions: Array<Question>;
  removeAnswer: Answer;
  removeAnswerGroup: AnswerGroup;
  removeCategory: Category;
  removeQuestion: Question;
  removeQuestionGroup: QuestionGroup;
  removeSurvey: Survey;
  upVoteQuestions: Array<Question>;
  updateAnswer: Answer;
  updateAnswerGroup: AnswerGroup;
  updateCategory: Category;
  updateQuestion: Question;
  updateQuestionGroup: QuestionGroup;
  updateSurvey: Survey;
};


export type MutationcreateAnswerArgs = {
  createAnswerInput: CreateAnswerInput;
};


export type MutationcreateAnswerGroupArgs = {
  answerGroupInput: AnswerGroupInput;
};


export type MutationcreateCategoryArgs = {
  createCategoryInput: CreateCategoryInput;
};


export type MutationcreateQuestionArgs = {
  createQuestionInput: CreateQuestionInput;
};


export type MutationcreateQuestionAnswerGroupArgs = {
  createQuestionAnswerGroupInput: CreateQuestionAnswerGroupInput;
};


export type MutationcreateQuestionGroupArgs = {
  createQuestionGroupInput: CreateQuestionGroupInput;
};


export type MutationcreateSurveyArgs = {
  createSurveyInput: CreateSurveyInput;
};


export type MutationdownVoteQuestionsArgs = {
  ids: Array<Scalars['String']>;
};


export type MutationremoveAnswerArgs = {
  id: Scalars['String'];
};


export type MutationremoveAnswerGroupArgs = {
  id: Scalars['String'];
};


export type MutationremoveCategoryArgs = {
  id: Scalars['String'];
};


export type MutationremoveQuestionArgs = {
  id: Scalars['String'];
};


export type MutationremoveQuestionGroupArgs = {
  id: Scalars['String'];
};


export type MutationremoveSurveyArgs = {
  id: Scalars['String'];
};


export type MutationupVoteQuestionsArgs = {
  ids: Array<Scalars['String']>;
};


export type MutationupdateAnswerArgs = {
  updateAnswerInput: UpdateAnswerInput;
};


export type MutationupdateAnswerGroupArgs = {
  UpdateAnswerGroupInput: UpdateAnswerGroupInput;
};


export type MutationupdateCategoryArgs = {
  updateCategoryInput: UpdateCategoryInput;
};


export type MutationupdateQuestionArgs = {
  updateQuestionInput: UpdateQuestionInput;
};


export type MutationupdateQuestionGroupArgs = {
  updateQuestionGroupInput: UpdateQuestionGroupInput;
};


export type MutationupdateSurveyArgs = {
  updateSurveyInput: UpdateSurveyInput;
};

export type Note = {
  order: Scalars['Int'];
  type: NoteType;
  value: Scalars['String'];
};

export type NoteInput = {
  order: Scalars['Int'];
  type: NoteType;
  value: Scalars['String'];
};

export type NoteType =
  | 'ALERT'
  | 'INFO'
  | 'WARNING';

export type PaginationInput = {
  /** number of element per page. */
  nbElement: Scalars['Int'];
  /** Page of number. */
  page: Scalars['Int'];
};

export type Query = {
  answer: Answer;
  answerGroup: AnswerGroup;
  answerGroups: Array<AnswerGroup>;
  answers: Array<Answer>;
  categories: Array<Category>;
  category: Category;
  question: Question;
  questionGroup: QuestionGroup;
  questionGroups: Array<QuestionGroup>;
  questions: Array<Question>;
  survey: Survey;
  surveys: Array<Survey>;
};


export type QueryanswerArgs = {
  id: Scalars['String'];
};


export type QueryanswerGroupArgs = {
  id: Scalars['String'];
};


export type QueryanswerGroupsArgs = {
  filter?: InputMaybe<FilteringInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortingInput>;
};


export type QueryanswersArgs = {
  filter?: InputMaybe<FilteringInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortingInput>;
};


export type QuerycategoriesArgs = {
  filter?: InputMaybe<FilteringInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortingInput>;
};


export type QuerycategoryArgs = {
  id: Scalars['String'];
};


export type QueryquestionArgs = {
  id: Scalars['String'];
};


export type QueryquestionGroupArgs = {
  id: Scalars['String'];
};


export type QueryquestionGroupsArgs = {
  filter?: InputMaybe<FilteringInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortingInput>;
};


export type QueryquestionsArgs = {
  filter?: InputMaybe<FilteringInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortingInput>;
};


export type QuerysurveyArgs = {
  id: Scalars['String'];
};


export type QuerysurveysArgs = {
  filter?: InputMaybe<FilteringInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortingInput>;
};

export type Question = {
  _id: Scalars['String'];
  answer: Array<AnswerableUnion>;
  categories?: Maybe<Array<Maybe<Category>>>;
  creatorId: Scalars['Int'];
  grantedTimeUnit?: Maybe<QuestionTime>;
  grantedTimeValue?: Maybe<Scalars['String']>;
  hint?: Maybe<Scalars['String']>;
  isPrivate: Scalars['Boolean'];
  popularity: Scalars['Int'];
  value: Scalars['String'];
};

export type QuestionEmbeded = {
  grantedTimeUnit?: Maybe<QuestionTime>;
  grantedTimeValue?: Maybe<Scalars['String']>;
  hint?: Maybe<Scalars['String']>;
  order: Scalars['Int'];
  popularity: Scalars['Int'];
  value: Scalars['String'];
};

export type QuestionEmbededInput = {
  grantedTimeUnit?: InputMaybe<QuestionTime>;
  grantedTimeValue?: InputMaybe<Scalars['String']>;
  hint?: InputMaybe<Scalars['String']>;
  order: Scalars['Int'];
  popularity?: Scalars['Int'];
  value: Scalars['String'];
};

export type QuestionGroup = {
  _id: Scalars['String'];
  categories?: Maybe<Array<Maybe<Category>>>;
  creatorId: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  questions?: Maybe<Array<QuestionEmbeded>>;
};

export type QuestionGroupEmbeded = {
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  order: Scalars['Int'];
  questions: Array<QuestionEmbeded>;
};

export type QuestionGroupEmbededInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  order: Scalars['Int'];
  questions: Array<QuestionEmbededInput>;
};

export type QuestionGroupInput = {
  _id: Scalars['String'];
  categories?: InputMaybe<Array<InputMaybe<CategoryInput>>>;
  creatorId: Scalars['Int'];
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  questions?: InputMaybe<Array<QuestionEmbededInput>>;
};

export type QuestionTime =
  | 'MIN'
  | 'SEC';

export type QuestionTimeInput = {
  grantedTimeUnit: QuestionTime;
  grantedTimeValue: Scalars['String'];
};

export type SortingInput = {
  /** Json string of field to sort by. value must be ASC or DESC */
  sort_by: Scalars['JSON'];
};

export type Survey = {
  _id: Scalars['String'];
  canBePaused: Scalars['Boolean'];
  content?: Maybe<Array<BlockUnion>>;
  description?: Maybe<Scalars['String']>;
  isPrivate: Scalars['Boolean'];
  name: Scalars['String'];
  totalTime?: Maybe<Scalars['Int']>;
  totalTimeUnit?: Maybe<TimeUnit>;
  userId: Scalars['Int'];
  version?: Maybe<Scalars['Int']>;
};

export type Time = {
  unit: TimeUnit;
  value: Scalars['Int'];
};

export type TimeUnit =
  | 'DAYS'
  | 'HOURS'
  | 'MIN'
  | 'MONTHS'
  | 'SEC'
  | 'WEEKS';

export type UpdateAnswerGroupInput = {
  _id: Scalars['String'];
  /** values shown to the user */
  availableValues?: InputMaybe<Array<Scalars['String']>>;
  /** correct values */
  correctValues?: InputMaybe<Array<Scalars['String']>>;
  creatorId?: InputMaybe<Scalars['Int']>;
  /** type: RadioBox, checkBox...  */
  type?: InputMaybe<AnswerGroupType>;
};

export type UpdateAnswerInput = {
  _id: Scalars['String'];
  correctValue?: InputMaybe<Scalars['String']>;
  creatorId?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<AnswerType>;
};

export type UpdateCategoryInput = {
  /** Id of the company */
  _id: Scalars['String'];
  /** color used to represent this domain */
  color?: InputMaybe<Scalars['HexColorCode']>;
  /** name of the domain */
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateQuestionGroupInput = {
  _id: Scalars['String'];
  categories?: InputMaybe<Array<CreateCategoryInput>>;
  creatorId?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  questions?: InputMaybe<Array<CreateQuestionInput>>;
};

export type UpdateQuestionInput = {
  _id: Scalars['String'];
  answer?: InputMaybe<AnswerEmbededInput>;
  categories?: InputMaybe<Array<CategoryInput>>;
  creatorId?: InputMaybe<Scalars['Int']>;
  hint?: InputMaybe<Scalars['String']>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<QuestionTimeInput>;
  value?: InputMaybe<Scalars['String']>;
};

export type UpdateSurveyInput = {
  _id: Scalars['String'];
  canBePaused?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Array<NoteInput>>;
  questionGroups?: InputMaybe<Array<QuestionGroupEmbededInput>>;
  questions?: InputMaybe<Array<QuestionEmbededInput>>;
  time?: InputMaybe<Time>;
  userId?: InputMaybe<Scalars['Int']>;
  version?: InputMaybe<Scalars['Int']>;
};

  export type QuerySdk = {
      /** null **/
  answer: InContextSdkMethod<Query['answer'], QueryanswerArgs, MeshContext>,
  /** null **/
  answerGroup: InContextSdkMethod<Query['answerGroup'], QueryanswerGroupArgs, MeshContext>,
  /** null **/
  answerGroups: InContextSdkMethod<Query['answerGroups'], QueryanswerGroupsArgs, MeshContext>,
  /** null **/
  answers: InContextSdkMethod<Query['answers'], QueryanswersArgs, MeshContext>,
  /** null **/
  categories: InContextSdkMethod<Query['categories'], QuerycategoriesArgs, MeshContext>,
  /** null **/
  category: InContextSdkMethod<Query['category'], QuerycategoryArgs, MeshContext>,
  /** null **/
  question: InContextSdkMethod<Query['question'], QueryquestionArgs, MeshContext>,
  /** null **/
  questionGroup: InContextSdkMethod<Query['questionGroup'], QueryquestionGroupArgs, MeshContext>,
  /** null **/
  questionGroups: InContextSdkMethod<Query['questionGroups'], QueryquestionGroupsArgs, MeshContext>,
  /** null **/
  questions: InContextSdkMethod<Query['questions'], QueryquestionsArgs, MeshContext>,
  /** null **/
  survey: InContextSdkMethod<Query['survey'], QuerysurveyArgs, MeshContext>,
  /** null **/
  surveys: InContextSdkMethod<Query['surveys'], QuerysurveysArgs, MeshContext>
  };

  export type MutationSdk = {
      /** null **/
  createAnswer: InContextSdkMethod<Mutation['createAnswer'], MutationcreateAnswerArgs, MeshContext>,
  /** null **/
  createAnswerGroup: InContextSdkMethod<Mutation['createAnswerGroup'], MutationcreateAnswerGroupArgs, MeshContext>,
  /** null **/
  createCategory: InContextSdkMethod<Mutation['createCategory'], MutationcreateCategoryArgs, MeshContext>,
  /** null **/
  createQuestion: InContextSdkMethod<Mutation['createQuestion'], MutationcreateQuestionArgs, MeshContext>,
  /** null **/
  createQuestionAnswerGroup: InContextSdkMethod<Mutation['createQuestionAnswerGroup'], MutationcreateQuestionAnswerGroupArgs, MeshContext>,
  /** null **/
  createQuestionGroup: InContextSdkMethod<Mutation['createQuestionGroup'], MutationcreateQuestionGroupArgs, MeshContext>,
  /** null **/
  createSurvey: InContextSdkMethod<Mutation['createSurvey'], MutationcreateSurveyArgs, MeshContext>,
  /** null **/
  downVoteQuestions: InContextSdkMethod<Mutation['downVoteQuestions'], MutationdownVoteQuestionsArgs, MeshContext>,
  /** null **/
  removeAnswer: InContextSdkMethod<Mutation['removeAnswer'], MutationremoveAnswerArgs, MeshContext>,
  /** null **/
  removeAnswerGroup: InContextSdkMethod<Mutation['removeAnswerGroup'], MutationremoveAnswerGroupArgs, MeshContext>,
  /** null **/
  removeCategory: InContextSdkMethod<Mutation['removeCategory'], MutationremoveCategoryArgs, MeshContext>,
  /** null **/
  removeQuestion: InContextSdkMethod<Mutation['removeQuestion'], MutationremoveQuestionArgs, MeshContext>,
  /** null **/
  removeQuestionGroup: InContextSdkMethod<Mutation['removeQuestionGroup'], MutationremoveQuestionGroupArgs, MeshContext>,
  /** null **/
  removeSurvey: InContextSdkMethod<Mutation['removeSurvey'], MutationremoveSurveyArgs, MeshContext>,
  /** null **/
  upVoteQuestions: InContextSdkMethod<Mutation['upVoteQuestions'], MutationupVoteQuestionsArgs, MeshContext>,
  /** null **/
  updateAnswer: InContextSdkMethod<Mutation['updateAnswer'], MutationupdateAnswerArgs, MeshContext>,
  /** null **/
  updateAnswerGroup: InContextSdkMethod<Mutation['updateAnswerGroup'], MutationupdateAnswerGroupArgs, MeshContext>,
  /** null **/
  updateCategory: InContextSdkMethod<Mutation['updateCategory'], MutationupdateCategoryArgs, MeshContext>,
  /** null **/
  updateQuestion: InContextSdkMethod<Mutation['updateQuestion'], MutationupdateQuestionArgs, MeshContext>,
  /** null **/
  updateQuestionGroup: InContextSdkMethod<Mutation['updateQuestionGroup'], MutationupdateQuestionGroupArgs, MeshContext>,
  /** null **/
  updateSurvey: InContextSdkMethod<Mutation['updateSurvey'], MutationupdateSurveyArgs, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["surveyService"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
