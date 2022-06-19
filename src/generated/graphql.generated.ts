import { gql } from '@apollo/client';
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
  float8: any;
  timestamptz: any;
  uuid: any;
};

export type Boolean_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _cast?: InputMaybe<Boolean_Cast_Exp>;
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type Int_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _cast?: InputMaybe<Int_Cast_Exp>;
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

export type Float8_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _cast?: InputMaybe<Float8_Cast_Exp>;
  _eq?: InputMaybe<Scalars['float8']>;
  _gt?: InputMaybe<Scalars['float8']>;
  _gte?: InputMaybe<Scalars['float8']>;
  _in?: InputMaybe<Array<Scalars['float8']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['float8']>;
  _lte?: InputMaybe<Scalars['float8']>;
  _neq?: InputMaybe<Scalars['float8']>;
  _nin?: InputMaybe<Array<Scalars['float8']>>;
};

/** columns and relationships of "levels" */
export type Levels = {
  __typename?: 'levels';
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  max?: Maybe<Scalars['float8']>;
  min?: Maybe<Scalars['float8']>;
  type?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "levels" */
export type Levels_Aggregate = {
  __typename?: 'levels_aggregate';
  aggregate?: Maybe<Levels_Aggregate_Fields>;
  nodes: Array<Levels>;
};

/** aggregate fields of "levels" */
export type Levels_Aggregate_Fields = {
  __typename?: 'levels_aggregate_fields';
  avg?: Maybe<Levels_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Levels_Max_Fields>;
  min?: Maybe<Levels_Min_Fields>;
  stddev?: Maybe<Levels_Stddev_Fields>;
  stddev_pop?: Maybe<Levels_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Levels_Stddev_Samp_Fields>;
  sum?: Maybe<Levels_Sum_Fields>;
  var_pop?: Maybe<Levels_Var_Pop_Fields>;
  var_samp?: Maybe<Levels_Var_Samp_Fields>;
  variance?: Maybe<Levels_Variance_Fields>;
};


/** aggregate fields of "levels" */
export type Levels_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Levels_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Levels_Avg_Fields = {
  __typename?: 'levels_avg_fields';
  id?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "levels". All fields are combined with a logical 'AND'. */
export type Levels_Bool_Exp = {
  _and?: InputMaybe<Array<Levels_Bool_Exp>>;
  _not?: InputMaybe<Levels_Bool_Exp>;
  _or?: InputMaybe<Array<Levels_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  max?: InputMaybe<Float8_Comparison_Exp>;
  min?: InputMaybe<Float8_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "levels" */
export enum Levels_Constraint {
  /** unique or primary key constraint on columns "id" */
  LevelsPkey = 'levels_pkey'
}

/** input type for incrementing numeric columns in table "levels" */
export type Levels_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  max?: InputMaybe<Scalars['float8']>;
  min?: InputMaybe<Scalars['float8']>;
};

/** input type for inserting data into table "levels" */
export type Levels_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  max?: InputMaybe<Scalars['float8']>;
  min?: InputMaybe<Scalars['float8']>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Levels_Max_Fields = {
  __typename?: 'levels_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['float8']>;
  min?: Maybe<Scalars['float8']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Levels_Min_Fields = {
  __typename?: 'levels_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['float8']>;
  min?: Maybe<Scalars['float8']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "levels" */
export type Levels_Mutation_Response = {
  __typename?: 'levels_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Levels>;
};

/** on_conflict condition type for table "levels" */
export type Levels_On_Conflict = {
  constraint: Levels_Constraint;
  update_columns?: Array<Levels_Update_Column>;
  where?: InputMaybe<Levels_Bool_Exp>;
};

/** Ordering options when selecting data from "levels". */
export type Levels_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max?: InputMaybe<Order_By>;
  min?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: levels */
export type Levels_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "levels" */
export enum Levels_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Max = 'max',
  /** column name */
  Min = 'min',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "levels" */
export type Levels_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  max?: InputMaybe<Scalars['float8']>;
  min?: InputMaybe<Scalars['float8']>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Levels_Stddev_Fields = {
  __typename?: 'levels_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Levels_Stddev_Pop_Fields = {
  __typename?: 'levels_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Levels_Stddev_Samp_Fields = {
  __typename?: 'levels_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Levels_Sum_Fields = {
  __typename?: 'levels_sum_fields';
  id?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['float8']>;
  min?: Maybe<Scalars['float8']>;
};

/** update columns of table "levels" */
export enum Levels_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Max = 'max',
  /** column name */
  Min = 'min',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Levels_Var_Pop_Fields = {
  __typename?: 'levels_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Levels_Var_Samp_Fields = {
  __typename?: 'levels_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Levels_Variance_Fields = {
  __typename?: 'levels_variance_fields';
  id?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "levels" */
  delete_levels?: Maybe<Levels_Mutation_Response>;
  /** delete single row from the table: "levels" */
  delete_levels_by_pk?: Maybe<Levels>;
  /** delete data from the table: "questions" */
  delete_questions?: Maybe<Questions_Mutation_Response>;
  /** delete single row from the table: "questions" */
  delete_questions_by_pk?: Maybe<Questions>;
  /** delete data from the table: "quiz_questions" */
  delete_quiz_questions?: Maybe<Quiz_Questions_Mutation_Response>;
  /** delete single row from the table: "quiz_questions" */
  delete_quiz_questions_by_pk?: Maybe<Quiz_Questions>;
  /** delete data from the table: "quiz_submissions" */
  delete_quiz_submissions?: Maybe<Quiz_Submissions_Mutation_Response>;
  /** delete single row from the table: "quiz_submissions" */
  delete_quiz_submissions_by_pk?: Maybe<Quiz_Submissions>;
  /** delete data from the table: "quizzes" */
  delete_quizzes?: Maybe<Quizzes_Mutation_Response>;
  /** delete single row from the table: "quizzes" */
  delete_quizzes_by_pk?: Maybe<Quizzes>;
  /** delete data from the table: "responses" */
  delete_responses?: Maybe<Responses_Mutation_Response>;
  /** delete single row from the table: "responses" */
  delete_responses_by_pk?: Maybe<Responses>;
  /** delete data from the table: "students" */
  delete_students?: Maybe<Students_Mutation_Response>;
  /** delete single row from the table: "students" */
  delete_students_by_pk?: Maybe<Students>;
  /** delete data from the table: "subjects" */
  delete_subjects?: Maybe<Subjects_Mutation_Response>;
  /** delete single row from the table: "subjects" */
  delete_subjects_by_pk?: Maybe<Subjects>;
  /** delete data from the table: "teachers" */
  delete_teachers?: Maybe<Teachers_Mutation_Response>;
  /** delete single row from the table: "teachers" */
  delete_teachers_by_pk?: Maybe<Teachers>;
  /** delete data from the table: "tests" */
  delete_tests?: Maybe<Tests_Mutation_Response>;
  /** delete single row from the table: "tests" */
  delete_tests_by_pk?: Maybe<Tests>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "levels" */
  insert_levels?: Maybe<Levels_Mutation_Response>;
  /** insert a single row into the table: "levels" */
  insert_levels_one?: Maybe<Levels>;
  /** insert data into the table: "questions" */
  insert_questions?: Maybe<Questions_Mutation_Response>;
  /** insert a single row into the table: "questions" */
  insert_questions_one?: Maybe<Questions>;
  /** insert data into the table: "quiz_questions" */
  insert_quiz_questions?: Maybe<Quiz_Questions_Mutation_Response>;
  /** insert a single row into the table: "quiz_questions" */
  insert_quiz_questions_one?: Maybe<Quiz_Questions>;
  /** insert data into the table: "quiz_submissions" */
  insert_quiz_submissions?: Maybe<Quiz_Submissions_Mutation_Response>;
  /** insert a single row into the table: "quiz_submissions" */
  insert_quiz_submissions_one?: Maybe<Quiz_Submissions>;
  /** insert data into the table: "quizzes" */
  insert_quizzes?: Maybe<Quizzes_Mutation_Response>;
  /** insert a single row into the table: "quizzes" */
  insert_quizzes_one?: Maybe<Quizzes>;
  /** insert data into the table: "responses" */
  insert_responses?: Maybe<Responses_Mutation_Response>;
  /** insert a single row into the table: "responses" */
  insert_responses_one?: Maybe<Responses>;
  /** insert data into the table: "students" */
  insert_students?: Maybe<Students_Mutation_Response>;
  /** insert a single row into the table: "students" */
  insert_students_one?: Maybe<Students>;
  /** insert data into the table: "subjects" */
  insert_subjects?: Maybe<Subjects_Mutation_Response>;
  /** insert a single row into the table: "subjects" */
  insert_subjects_one?: Maybe<Subjects>;
  /** insert data into the table: "teachers" */
  insert_teachers?: Maybe<Teachers_Mutation_Response>;
  /** insert a single row into the table: "teachers" */
  insert_teachers_one?: Maybe<Teachers>;
  /** insert data into the table: "tests" */
  insert_tests?: Maybe<Tests_Mutation_Response>;
  /** insert a single row into the table: "tests" */
  insert_tests_one?: Maybe<Tests>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "levels" */
  update_levels?: Maybe<Levels_Mutation_Response>;
  /** update single row of the table: "levels" */
  update_levels_by_pk?: Maybe<Levels>;
  /** update data of the table: "questions" */
  update_questions?: Maybe<Questions_Mutation_Response>;
  /** update single row of the table: "questions" */
  update_questions_by_pk?: Maybe<Questions>;
  /** update data of the table: "quiz_questions" */
  update_quiz_questions?: Maybe<Quiz_Questions_Mutation_Response>;
  /** update single row of the table: "quiz_questions" */
  update_quiz_questions_by_pk?: Maybe<Quiz_Questions>;
  /** update data of the table: "quiz_submissions" */
  update_quiz_submissions?: Maybe<Quiz_Submissions_Mutation_Response>;
  /** update single row of the table: "quiz_submissions" */
  update_quiz_submissions_by_pk?: Maybe<Quiz_Submissions>;
  /** update data of the table: "quizzes" */
  update_quizzes?: Maybe<Quizzes_Mutation_Response>;
  /** update single row of the table: "quizzes" */
  update_quizzes_by_pk?: Maybe<Quizzes>;
  /** update data of the table: "responses" */
  update_responses?: Maybe<Responses_Mutation_Response>;
  /** update single row of the table: "responses" */
  update_responses_by_pk?: Maybe<Responses>;
  /** update data of the table: "students" */
  update_students?: Maybe<Students_Mutation_Response>;
  /** update single row of the table: "students" */
  update_students_by_pk?: Maybe<Students>;
  /** update data of the table: "subjects" */
  update_subjects?: Maybe<Subjects_Mutation_Response>;
  /** update single row of the table: "subjects" */
  update_subjects_by_pk?: Maybe<Subjects>;
  /** update data of the table: "teachers" */
  update_teachers?: Maybe<Teachers_Mutation_Response>;
  /** update single row of the table: "teachers" */
  update_teachers_by_pk?: Maybe<Teachers>;
  /** update data of the table: "tests" */
  update_tests?: Maybe<Tests_Mutation_Response>;
  /** update single row of the table: "tests" */
  update_tests_by_pk?: Maybe<Tests>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_LevelsArgs = {
  where: Levels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Levels_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_QuestionsArgs = {
  where: Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Questions_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Quiz_QuestionsArgs = {
  where: Quiz_Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Quiz_Questions_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Quiz_SubmissionsArgs = {
  where: Quiz_Submissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Quiz_Submissions_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_QuizzesArgs = {
  where: Quizzes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Quizzes_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ResponsesArgs = {
  where: Responses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Responses_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_StudentsArgs = {
  where: Students_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Students_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_SubjectsArgs = {
  where: Subjects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Subjects_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_TeachersArgs = {
  where: Teachers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Teachers_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_TestsArgs = {
  where: Tests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tests_By_PkArgs = {
  id: Scalars['Int'];
  slug: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_LevelsArgs = {
  objects: Array<Levels_Insert_Input>;
  on_conflict?: InputMaybe<Levels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Levels_OneArgs = {
  object: Levels_Insert_Input;
  on_conflict?: InputMaybe<Levels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuestionsArgs = {
  objects: Array<Questions_Insert_Input>;
  on_conflict?: InputMaybe<Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Questions_OneArgs = {
  object: Questions_Insert_Input;
  on_conflict?: InputMaybe<Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quiz_QuestionsArgs = {
  objects: Array<Quiz_Questions_Insert_Input>;
  on_conflict?: InputMaybe<Quiz_Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quiz_Questions_OneArgs = {
  object: Quiz_Questions_Insert_Input;
  on_conflict?: InputMaybe<Quiz_Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quiz_SubmissionsArgs = {
  objects: Array<Quiz_Submissions_Insert_Input>;
  on_conflict?: InputMaybe<Quiz_Submissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quiz_Submissions_OneArgs = {
  object: Quiz_Submissions_Insert_Input;
  on_conflict?: InputMaybe<Quiz_Submissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuizzesArgs = {
  objects: Array<Quizzes_Insert_Input>;
  on_conflict?: InputMaybe<Quizzes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quizzes_OneArgs = {
  object: Quizzes_Insert_Input;
  on_conflict?: InputMaybe<Quizzes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ResponsesArgs = {
  objects: Array<Responses_Insert_Input>;
  on_conflict?: InputMaybe<Responses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Responses_OneArgs = {
  object: Responses_Insert_Input;
  on_conflict?: InputMaybe<Responses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StudentsArgs = {
  objects: Array<Students_Insert_Input>;
  on_conflict?: InputMaybe<Students_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Students_OneArgs = {
  object: Students_Insert_Input;
  on_conflict?: InputMaybe<Students_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SubjectsArgs = {
  objects: Array<Subjects_Insert_Input>;
  on_conflict?: InputMaybe<Subjects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subjects_OneArgs = {
  object: Subjects_Insert_Input;
  on_conflict?: InputMaybe<Subjects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TeachersArgs = {
  objects: Array<Teachers_Insert_Input>;
  on_conflict?: InputMaybe<Teachers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Teachers_OneArgs = {
  object: Teachers_Insert_Input;
  on_conflict?: InputMaybe<Teachers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TestsArgs = {
  objects: Array<Tests_Insert_Input>;
  on_conflict?: InputMaybe<Tests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tests_OneArgs = {
  object: Tests_Insert_Input;
  on_conflict?: InputMaybe<Tests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_LevelsArgs = {
  _inc?: InputMaybe<Levels_Inc_Input>;
  _set?: InputMaybe<Levels_Set_Input>;
  where: Levels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Levels_By_PkArgs = {
  _inc?: InputMaybe<Levels_Inc_Input>;
  _set?: InputMaybe<Levels_Set_Input>;
  pk_columns: Levels_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_QuestionsArgs = {
  _inc?: InputMaybe<Questions_Inc_Input>;
  _set?: InputMaybe<Questions_Set_Input>;
  where: Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Questions_By_PkArgs = {
  _inc?: InputMaybe<Questions_Inc_Input>;
  _set?: InputMaybe<Questions_Set_Input>;
  pk_columns: Questions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Quiz_QuestionsArgs = {
  _inc?: InputMaybe<Quiz_Questions_Inc_Input>;
  _set?: InputMaybe<Quiz_Questions_Set_Input>;
  where: Quiz_Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Quiz_Questions_By_PkArgs = {
  _inc?: InputMaybe<Quiz_Questions_Inc_Input>;
  _set?: InputMaybe<Quiz_Questions_Set_Input>;
  pk_columns: Quiz_Questions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Quiz_SubmissionsArgs = {
  _inc?: InputMaybe<Quiz_Submissions_Inc_Input>;
  _set?: InputMaybe<Quiz_Submissions_Set_Input>;
  where: Quiz_Submissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Quiz_Submissions_By_PkArgs = {
  _inc?: InputMaybe<Quiz_Submissions_Inc_Input>;
  _set?: InputMaybe<Quiz_Submissions_Set_Input>;
  pk_columns: Quiz_Submissions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_QuizzesArgs = {
  _inc?: InputMaybe<Quizzes_Inc_Input>;
  _set?: InputMaybe<Quizzes_Set_Input>;
  where: Quizzes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Quizzes_By_PkArgs = {
  _inc?: InputMaybe<Quizzes_Inc_Input>;
  _set?: InputMaybe<Quizzes_Set_Input>;
  pk_columns: Quizzes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ResponsesArgs = {
  _inc?: InputMaybe<Responses_Inc_Input>;
  _set?: InputMaybe<Responses_Set_Input>;
  where: Responses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Responses_By_PkArgs = {
  _inc?: InputMaybe<Responses_Inc_Input>;
  _set?: InputMaybe<Responses_Set_Input>;
  pk_columns: Responses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_StudentsArgs = {
  _inc?: InputMaybe<Students_Inc_Input>;
  _set?: InputMaybe<Students_Set_Input>;
  where: Students_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Students_By_PkArgs = {
  _inc?: InputMaybe<Students_Inc_Input>;
  _set?: InputMaybe<Students_Set_Input>;
  pk_columns: Students_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SubjectsArgs = {
  _inc?: InputMaybe<Subjects_Inc_Input>;
  _set?: InputMaybe<Subjects_Set_Input>;
  where: Subjects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Subjects_By_PkArgs = {
  _inc?: InputMaybe<Subjects_Inc_Input>;
  _set?: InputMaybe<Subjects_Set_Input>;
  pk_columns: Subjects_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TeachersArgs = {
  _inc?: InputMaybe<Teachers_Inc_Input>;
  _set?: InputMaybe<Teachers_Set_Input>;
  where: Teachers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Teachers_By_PkArgs = {
  _inc?: InputMaybe<Teachers_Inc_Input>;
  _set?: InputMaybe<Teachers_Set_Input>;
  pk_columns: Teachers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TestsArgs = {
  _inc?: InputMaybe<Tests_Inc_Input>;
  _set?: InputMaybe<Tests_Set_Input>;
  where: Tests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tests_By_PkArgs = {
  _inc?: InputMaybe<Tests_Inc_Input>;
  _set?: InputMaybe<Tests_Set_Input>;
  pk_columns: Tests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "levels" */
  levels: Array<Levels>;
  /** fetch aggregated fields from the table: "levels" */
  levels_aggregate: Levels_Aggregate;
  /** fetch data from the table: "levels" using primary key columns */
  levels_by_pk?: Maybe<Levels>;
  /** fetch data from the table: "questions" */
  questions: Array<Questions>;
  /** fetch aggregated fields from the table: "questions" */
  questions_aggregate: Questions_Aggregate;
  /** fetch data from the table: "questions" using primary key columns */
  questions_by_pk?: Maybe<Questions>;
  /** fetch data from the table: "quiz_questions" */
  quiz_questions: Array<Quiz_Questions>;
  /** fetch aggregated fields from the table: "quiz_questions" */
  quiz_questions_aggregate: Quiz_Questions_Aggregate;
  /** fetch data from the table: "quiz_questions" using primary key columns */
  quiz_questions_by_pk?: Maybe<Quiz_Questions>;
  /** fetch data from the table: "quiz_submissions" */
  quiz_submissions: Array<Quiz_Submissions>;
  /** fetch aggregated fields from the table: "quiz_submissions" */
  quiz_submissions_aggregate: Quiz_Submissions_Aggregate;
  /** fetch data from the table: "quiz_submissions" using primary key columns */
  quiz_submissions_by_pk?: Maybe<Quiz_Submissions>;
  /** fetch data from the table: "quizzes" */
  quizzes: Array<Quizzes>;
  /** fetch aggregated fields from the table: "quizzes" */
  quizzes_aggregate: Quizzes_Aggregate;
  /** fetch data from the table: "quizzes" using primary key columns */
  quizzes_by_pk?: Maybe<Quizzes>;
  /** fetch data from the table: "responses" */
  responses: Array<Responses>;
  /** fetch aggregated fields from the table: "responses" */
  responses_aggregate: Responses_Aggregate;
  /** fetch data from the table: "responses" using primary key columns */
  responses_by_pk?: Maybe<Responses>;
  /** fetch data from the table: "students" */
  students: Array<Students>;
  /** fetch aggregated fields from the table: "students" */
  students_aggregate: Students_Aggregate;
  /** fetch data from the table: "students" using primary key columns */
  students_by_pk?: Maybe<Students>;
  /** fetch data from the table: "subjects" */
  subjects: Array<Subjects>;
  /** fetch aggregated fields from the table: "subjects" */
  subjects_aggregate: Subjects_Aggregate;
  /** fetch data from the table: "subjects" using primary key columns */
  subjects_by_pk?: Maybe<Subjects>;
  /** fetch data from the table: "teachers" */
  teachers: Array<Teachers>;
  /** fetch aggregated fields from the table: "teachers" */
  teachers_aggregate: Teachers_Aggregate;
  /** fetch data from the table: "teachers" using primary key columns */
  teachers_by_pk?: Maybe<Teachers>;
  /** fetch data from the table: "tests" */
  tests: Array<Tests>;
  /** fetch aggregated fields from the table: "tests" */
  tests_aggregate: Tests_Aggregate;
  /** fetch data from the table: "tests" using primary key columns */
  tests_by_pk?: Maybe<Tests>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootLevelsArgs = {
  distinct_on?: InputMaybe<Array<Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Levels_Order_By>>;
  where?: InputMaybe<Levels_Bool_Exp>;
};


export type Query_RootLevels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Levels_Order_By>>;
  where?: InputMaybe<Levels_Bool_Exp>;
};


export type Query_RootLevels_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootQuestionsArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Query_RootQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Query_RootQuestions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootQuiz_QuestionsArgs = {
  distinct_on?: InputMaybe<Array<Quiz_Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quiz_Questions_Order_By>>;
  where?: InputMaybe<Quiz_Questions_Bool_Exp>;
};


export type Query_RootQuiz_Questions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quiz_Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quiz_Questions_Order_By>>;
  where?: InputMaybe<Quiz_Questions_Bool_Exp>;
};


export type Query_RootQuiz_Questions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootQuiz_SubmissionsArgs = {
  distinct_on?: InputMaybe<Array<Quiz_Submissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quiz_Submissions_Order_By>>;
  where?: InputMaybe<Quiz_Submissions_Bool_Exp>;
};


export type Query_RootQuiz_Submissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quiz_Submissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quiz_Submissions_Order_By>>;
  where?: InputMaybe<Quiz_Submissions_Bool_Exp>;
};


export type Query_RootQuiz_Submissions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootQuizzesArgs = {
  distinct_on?: InputMaybe<Array<Quizzes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quizzes_Order_By>>;
  where?: InputMaybe<Quizzes_Bool_Exp>;
};


export type Query_RootQuizzes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quizzes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quizzes_Order_By>>;
  where?: InputMaybe<Quizzes_Bool_Exp>;
};


export type Query_RootQuizzes_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootResponsesArgs = {
  distinct_on?: InputMaybe<Array<Responses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Responses_Order_By>>;
  where?: InputMaybe<Responses_Bool_Exp>;
};


export type Query_RootResponses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Responses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Responses_Order_By>>;
  where?: InputMaybe<Responses_Bool_Exp>;
};


export type Query_RootResponses_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootStudentsArgs = {
  distinct_on?: InputMaybe<Array<Students_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};


export type Query_RootStudents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Students_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};


export type Query_RootStudents_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSubjectsArgs = {
  distinct_on?: InputMaybe<Array<Subjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subjects_Order_By>>;
  where?: InputMaybe<Subjects_Bool_Exp>;
};


export type Query_RootSubjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subjects_Order_By>>;
  where?: InputMaybe<Subjects_Bool_Exp>;
};


export type Query_RootSubjects_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTeachersArgs = {
  distinct_on?: InputMaybe<Array<Teachers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Teachers_Order_By>>;
  where?: InputMaybe<Teachers_Bool_Exp>;
};


export type Query_RootTeachers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Teachers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Teachers_Order_By>>;
  where?: InputMaybe<Teachers_Bool_Exp>;
};


export type Query_RootTeachers_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTestsArgs = {
  distinct_on?: InputMaybe<Array<Tests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tests_Order_By>>;
  where?: InputMaybe<Tests_Bool_Exp>;
};


export type Query_RootTests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tests_Order_By>>;
  where?: InputMaybe<Tests_Bool_Exp>;
};


export type Query_RootTests_By_PkArgs = {
  id: Scalars['Int'];
  slug: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "questions" */
export type Questions = {
  __typename?: 'questions';
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  levelId?: Maybe<Scalars['Int']>;
  point?: Maybe<Scalars['Int']>;
  subjectId: Scalars['Int'];
  text?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "questions" */
export type Questions_Aggregate = {
  __typename?: 'questions_aggregate';
  aggregate?: Maybe<Questions_Aggregate_Fields>;
  nodes: Array<Questions>;
};

/** aggregate fields of "questions" */
export type Questions_Aggregate_Fields = {
  __typename?: 'questions_aggregate_fields';
  avg?: Maybe<Questions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Questions_Max_Fields>;
  min?: Maybe<Questions_Min_Fields>;
  stddev?: Maybe<Questions_Stddev_Fields>;
  stddev_pop?: Maybe<Questions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Questions_Stddev_Samp_Fields>;
  sum?: Maybe<Questions_Sum_Fields>;
  var_pop?: Maybe<Questions_Var_Pop_Fields>;
  var_samp?: Maybe<Questions_Var_Samp_Fields>;
  variance?: Maybe<Questions_Variance_Fields>;
};


/** aggregate fields of "questions" */
export type Questions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Questions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Questions_Avg_Fields = {
  __typename?: 'questions_avg_fields';
  id?: Maybe<Scalars['Float']>;
  levelId?: Maybe<Scalars['Float']>;
  point?: Maybe<Scalars['Float']>;
  subjectId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "questions". All fields are combined with a logical 'AND'. */
export type Questions_Bool_Exp = {
  _and?: InputMaybe<Array<Questions_Bool_Exp>>;
  _not?: InputMaybe<Questions_Bool_Exp>;
  _or?: InputMaybe<Array<Questions_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  levelId?: InputMaybe<Int_Comparison_Exp>;
  point?: InputMaybe<Int_Comparison_Exp>;
  subjectId?: InputMaybe<Int_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "questions" */
export enum Questions_Constraint {
  /** unique or primary key constraint on columns "id" */
  QuestionsPkey = 'questions_pkey'
}

/** input type for incrementing numeric columns in table "questions" */
export type Questions_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  levelId?: InputMaybe<Scalars['Int']>;
  point?: InputMaybe<Scalars['Int']>;
  subjectId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "questions" */
export type Questions_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  levelId?: InputMaybe<Scalars['Int']>;
  point?: InputMaybe<Scalars['Int']>;
  subjectId?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Questions_Max_Fields = {
  __typename?: 'questions_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  levelId?: Maybe<Scalars['Int']>;
  point?: Maybe<Scalars['Int']>;
  subjectId?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Questions_Min_Fields = {
  __typename?: 'questions_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  levelId?: Maybe<Scalars['Int']>;
  point?: Maybe<Scalars['Int']>;
  subjectId?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "questions" */
export type Questions_Mutation_Response = {
  __typename?: 'questions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Questions>;
};

/** on_conflict condition type for table "questions" */
export type Questions_On_Conflict = {
  constraint: Questions_Constraint;
  update_columns?: Array<Questions_Update_Column>;
  where?: InputMaybe<Questions_Bool_Exp>;
};

/** Ordering options when selecting data from "questions". */
export type Questions_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  levelId?: InputMaybe<Order_By>;
  point?: InputMaybe<Order_By>;
  subjectId?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: questions */
export type Questions_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "questions" */
export enum Questions_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  LevelId = 'levelId',
  /** column name */
  Point = 'point',
  /** column name */
  SubjectId = 'subjectId',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "questions" */
export type Questions_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  levelId?: InputMaybe<Scalars['Int']>;
  point?: InputMaybe<Scalars['Int']>;
  subjectId?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Questions_Stddev_Fields = {
  __typename?: 'questions_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  levelId?: Maybe<Scalars['Float']>;
  point?: Maybe<Scalars['Float']>;
  subjectId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Questions_Stddev_Pop_Fields = {
  __typename?: 'questions_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  levelId?: Maybe<Scalars['Float']>;
  point?: Maybe<Scalars['Float']>;
  subjectId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Questions_Stddev_Samp_Fields = {
  __typename?: 'questions_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  levelId?: Maybe<Scalars['Float']>;
  point?: Maybe<Scalars['Float']>;
  subjectId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Questions_Sum_Fields = {
  __typename?: 'questions_sum_fields';
  id?: Maybe<Scalars['Int']>;
  levelId?: Maybe<Scalars['Int']>;
  point?: Maybe<Scalars['Int']>;
  subjectId?: Maybe<Scalars['Int']>;
};

/** update columns of table "questions" */
export enum Questions_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  LevelId = 'levelId',
  /** column name */
  Point = 'point',
  /** column name */
  SubjectId = 'subjectId',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Questions_Var_Pop_Fields = {
  __typename?: 'questions_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  levelId?: Maybe<Scalars['Float']>;
  point?: Maybe<Scalars['Float']>;
  subjectId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Questions_Var_Samp_Fields = {
  __typename?: 'questions_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  levelId?: Maybe<Scalars['Float']>;
  point?: Maybe<Scalars['Float']>;
  subjectId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Questions_Variance_Fields = {
  __typename?: 'questions_variance_fields';
  id?: Maybe<Scalars['Float']>;
  levelId?: Maybe<Scalars['Float']>;
  point?: Maybe<Scalars['Float']>;
  subjectId?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "quiz_questions" */
export type Quiz_Questions = {
  __typename?: 'quiz_questions';
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  questionId: Scalars['Int'];
  quizId: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "quiz_questions" */
export type Quiz_Questions_Aggregate = {
  __typename?: 'quiz_questions_aggregate';
  aggregate?: Maybe<Quiz_Questions_Aggregate_Fields>;
  nodes: Array<Quiz_Questions>;
};

/** aggregate fields of "quiz_questions" */
export type Quiz_Questions_Aggregate_Fields = {
  __typename?: 'quiz_questions_aggregate_fields';
  avg?: Maybe<Quiz_Questions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Quiz_Questions_Max_Fields>;
  min?: Maybe<Quiz_Questions_Min_Fields>;
  stddev?: Maybe<Quiz_Questions_Stddev_Fields>;
  stddev_pop?: Maybe<Quiz_Questions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Quiz_Questions_Stddev_Samp_Fields>;
  sum?: Maybe<Quiz_Questions_Sum_Fields>;
  var_pop?: Maybe<Quiz_Questions_Var_Pop_Fields>;
  var_samp?: Maybe<Quiz_Questions_Var_Samp_Fields>;
  variance?: Maybe<Quiz_Questions_Variance_Fields>;
};


/** aggregate fields of "quiz_questions" */
export type Quiz_Questions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Quiz_Questions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Quiz_Questions_Avg_Fields = {
  __typename?: 'quiz_questions_avg_fields';
  id?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
  quizId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "quiz_questions". All fields are combined with a logical 'AND'. */
export type Quiz_Questions_Bool_Exp = {
  _and?: InputMaybe<Array<Quiz_Questions_Bool_Exp>>;
  _not?: InputMaybe<Quiz_Questions_Bool_Exp>;
  _or?: InputMaybe<Array<Quiz_Questions_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  questionId?: InputMaybe<Int_Comparison_Exp>;
  quizId?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "quiz_questions" */
export enum Quiz_Questions_Constraint {
  /** unique or primary key constraint on columns "id" */
  QuizQuestionsPkey = 'quiz_questions_pkey'
}

/** input type for incrementing numeric columns in table "quiz_questions" */
export type Quiz_Questions_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  questionId?: InputMaybe<Scalars['Int']>;
  quizId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "quiz_questions" */
export type Quiz_Questions_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  questionId?: InputMaybe<Scalars['Int']>;
  quizId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Quiz_Questions_Max_Fields = {
  __typename?: 'quiz_questions_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
  quizId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Quiz_Questions_Min_Fields = {
  __typename?: 'quiz_questions_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
  quizId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "quiz_questions" */
export type Quiz_Questions_Mutation_Response = {
  __typename?: 'quiz_questions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Quiz_Questions>;
};

/** on_conflict condition type for table "quiz_questions" */
export type Quiz_Questions_On_Conflict = {
  constraint: Quiz_Questions_Constraint;
  update_columns?: Array<Quiz_Questions_Update_Column>;
  where?: InputMaybe<Quiz_Questions_Bool_Exp>;
};

/** Ordering options when selecting data from "quiz_questions". */
export type Quiz_Questions_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  questionId?: InputMaybe<Order_By>;
  quizId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: quiz_questions */
export type Quiz_Questions_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "quiz_questions" */
export enum Quiz_Questions_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  QuestionId = 'questionId',
  /** column name */
  QuizId = 'quizId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "quiz_questions" */
export type Quiz_Questions_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  questionId?: InputMaybe<Scalars['Int']>;
  quizId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Quiz_Questions_Stddev_Fields = {
  __typename?: 'quiz_questions_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
  quizId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Quiz_Questions_Stddev_Pop_Fields = {
  __typename?: 'quiz_questions_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
  quizId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Quiz_Questions_Stddev_Samp_Fields = {
  __typename?: 'quiz_questions_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
  quizId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Quiz_Questions_Sum_Fields = {
  __typename?: 'quiz_questions_sum_fields';
  id?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
  quizId?: Maybe<Scalars['Int']>;
};

/** update columns of table "quiz_questions" */
export enum Quiz_Questions_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  QuestionId = 'questionId',
  /** column name */
  QuizId = 'quizId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Quiz_Questions_Var_Pop_Fields = {
  __typename?: 'quiz_questions_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
  quizId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Quiz_Questions_Var_Samp_Fields = {
  __typename?: 'quiz_questions_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
  quizId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Quiz_Questions_Variance_Fields = {
  __typename?: 'quiz_questions_variance_fields';
  id?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
  quizId?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "quiz_submissions" */
export type Quiz_Submissions = {
  __typename?: 'quiz_submissions';
  createdAt: Scalars['timestamptz'];
  finDate?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  passed?: Maybe<Scalars['Boolean']>;
  quizId: Scalars['Int'];
  result?: Maybe<Scalars['float8']>;
  slug?: Maybe<Scalars['uuid']>;
  startDate?: Maybe<Scalars['timestamptz']>;
  studentId: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "quiz_submissions" */
export type Quiz_Submissions_Aggregate = {
  __typename?: 'quiz_submissions_aggregate';
  aggregate?: Maybe<Quiz_Submissions_Aggregate_Fields>;
  nodes: Array<Quiz_Submissions>;
};

/** aggregate fields of "quiz_submissions" */
export type Quiz_Submissions_Aggregate_Fields = {
  __typename?: 'quiz_submissions_aggregate_fields';
  avg?: Maybe<Quiz_Submissions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Quiz_Submissions_Max_Fields>;
  min?: Maybe<Quiz_Submissions_Min_Fields>;
  stddev?: Maybe<Quiz_Submissions_Stddev_Fields>;
  stddev_pop?: Maybe<Quiz_Submissions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Quiz_Submissions_Stddev_Samp_Fields>;
  sum?: Maybe<Quiz_Submissions_Sum_Fields>;
  var_pop?: Maybe<Quiz_Submissions_Var_Pop_Fields>;
  var_samp?: Maybe<Quiz_Submissions_Var_Samp_Fields>;
  variance?: Maybe<Quiz_Submissions_Variance_Fields>;
};


/** aggregate fields of "quiz_submissions" */
export type Quiz_Submissions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Quiz_Submissions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Quiz_Submissions_Avg_Fields = {
  __typename?: 'quiz_submissions_avg_fields';
  id?: Maybe<Scalars['Float']>;
  quizId?: Maybe<Scalars['Float']>;
  result?: Maybe<Scalars['Float']>;
  studentId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "quiz_submissions". All fields are combined with a logical 'AND'. */
export type Quiz_Submissions_Bool_Exp = {
  _and?: InputMaybe<Array<Quiz_Submissions_Bool_Exp>>;
  _not?: InputMaybe<Quiz_Submissions_Bool_Exp>;
  _or?: InputMaybe<Array<Quiz_Submissions_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  finDate?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  passed?: InputMaybe<Boolean_Comparison_Exp>;
  quizId?: InputMaybe<Int_Comparison_Exp>;
  result?: InputMaybe<Float8_Comparison_Exp>;
  slug?: InputMaybe<Uuid_Comparison_Exp>;
  startDate?: InputMaybe<Timestamptz_Comparison_Exp>;
  studentId?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "quiz_submissions" */
export enum Quiz_Submissions_Constraint {
  /** unique or primary key constraint on columns "id" */
  QuizSubmissionsPkey = 'quiz_submissions_pkey'
}

/** input type for incrementing numeric columns in table "quiz_submissions" */
export type Quiz_Submissions_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  quizId?: InputMaybe<Scalars['Int']>;
  result?: InputMaybe<Scalars['float8']>;
  studentId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "quiz_submissions" */
export type Quiz_Submissions_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  finDate?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  passed?: InputMaybe<Scalars['Boolean']>;
  quizId?: InputMaybe<Scalars['Int']>;
  result?: InputMaybe<Scalars['float8']>;
  slug?: InputMaybe<Scalars['uuid']>;
  startDate?: InputMaybe<Scalars['timestamptz']>;
  studentId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Quiz_Submissions_Max_Fields = {
  __typename?: 'quiz_submissions_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  finDate?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  quizId?: Maybe<Scalars['Int']>;
  result?: Maybe<Scalars['float8']>;
  slug?: Maybe<Scalars['uuid']>;
  startDate?: Maybe<Scalars['timestamptz']>;
  studentId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Quiz_Submissions_Min_Fields = {
  __typename?: 'quiz_submissions_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  finDate?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  quizId?: Maybe<Scalars['Int']>;
  result?: Maybe<Scalars['float8']>;
  slug?: Maybe<Scalars['uuid']>;
  startDate?: Maybe<Scalars['timestamptz']>;
  studentId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "quiz_submissions" */
export type Quiz_Submissions_Mutation_Response = {
  __typename?: 'quiz_submissions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Quiz_Submissions>;
};

/** on_conflict condition type for table "quiz_submissions" */
export type Quiz_Submissions_On_Conflict = {
  constraint: Quiz_Submissions_Constraint;
  update_columns?: Array<Quiz_Submissions_Update_Column>;
  where?: InputMaybe<Quiz_Submissions_Bool_Exp>;
};

/** Ordering options when selecting data from "quiz_submissions". */
export type Quiz_Submissions_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  finDate?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  passed?: InputMaybe<Order_By>;
  quizId?: InputMaybe<Order_By>;
  result?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  startDate?: InputMaybe<Order_By>;
  studentId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: quiz_submissions */
export type Quiz_Submissions_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "quiz_submissions" */
export enum Quiz_Submissions_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FinDate = 'finDate',
  /** column name */
  Id = 'id',
  /** column name */
  Passed = 'passed',
  /** column name */
  QuizId = 'quizId',
  /** column name */
  Result = 'result',
  /** column name */
  Slug = 'slug',
  /** column name */
  StartDate = 'startDate',
  /** column name */
  StudentId = 'studentId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "quiz_submissions" */
export type Quiz_Submissions_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  finDate?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  passed?: InputMaybe<Scalars['Boolean']>;
  quizId?: InputMaybe<Scalars['Int']>;
  result?: InputMaybe<Scalars['float8']>;
  slug?: InputMaybe<Scalars['uuid']>;
  startDate?: InputMaybe<Scalars['timestamptz']>;
  studentId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Quiz_Submissions_Stddev_Fields = {
  __typename?: 'quiz_submissions_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  quizId?: Maybe<Scalars['Float']>;
  result?: Maybe<Scalars['Float']>;
  studentId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Quiz_Submissions_Stddev_Pop_Fields = {
  __typename?: 'quiz_submissions_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  quizId?: Maybe<Scalars['Float']>;
  result?: Maybe<Scalars['Float']>;
  studentId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Quiz_Submissions_Stddev_Samp_Fields = {
  __typename?: 'quiz_submissions_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  quizId?: Maybe<Scalars['Float']>;
  result?: Maybe<Scalars['Float']>;
  studentId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Quiz_Submissions_Sum_Fields = {
  __typename?: 'quiz_submissions_sum_fields';
  id?: Maybe<Scalars['Int']>;
  quizId?: Maybe<Scalars['Int']>;
  result?: Maybe<Scalars['float8']>;
  studentId?: Maybe<Scalars['Int']>;
};

/** update columns of table "quiz_submissions" */
export enum Quiz_Submissions_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FinDate = 'finDate',
  /** column name */
  Id = 'id',
  /** column name */
  Passed = 'passed',
  /** column name */
  QuizId = 'quizId',
  /** column name */
  Result = 'result',
  /** column name */
  Slug = 'slug',
  /** column name */
  StartDate = 'startDate',
  /** column name */
  StudentId = 'studentId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Quiz_Submissions_Var_Pop_Fields = {
  __typename?: 'quiz_submissions_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  quizId?: Maybe<Scalars['Float']>;
  result?: Maybe<Scalars['Float']>;
  studentId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Quiz_Submissions_Var_Samp_Fields = {
  __typename?: 'quiz_submissions_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  quizId?: Maybe<Scalars['Float']>;
  result?: Maybe<Scalars['Float']>;
  studentId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Quiz_Submissions_Variance_Fields = {
  __typename?: 'quiz_submissions_variance_fields';
  id?: Maybe<Scalars['Float']>;
  quizId?: Maybe<Scalars['Float']>;
  result?: Maybe<Scalars['Float']>;
  studentId?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "quizzes" */
export type Quizzes = {
  __typename?: 'quizzes';
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['float8']>;
  subjectId: Scalars['Int'];
  teacherId: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "quizzes" */
export type Quizzes_Aggregate = {
  __typename?: 'quizzes_aggregate';
  aggregate?: Maybe<Quizzes_Aggregate_Fields>;
  nodes: Array<Quizzes>;
};

/** aggregate fields of "quizzes" */
export type Quizzes_Aggregate_Fields = {
  __typename?: 'quizzes_aggregate_fields';
  avg?: Maybe<Quizzes_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Quizzes_Max_Fields>;
  min?: Maybe<Quizzes_Min_Fields>;
  stddev?: Maybe<Quizzes_Stddev_Fields>;
  stddev_pop?: Maybe<Quizzes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Quizzes_Stddev_Samp_Fields>;
  sum?: Maybe<Quizzes_Sum_Fields>;
  var_pop?: Maybe<Quizzes_Var_Pop_Fields>;
  var_samp?: Maybe<Quizzes_Var_Samp_Fields>;
  variance?: Maybe<Quizzes_Variance_Fields>;
};


/** aggregate fields of "quizzes" */
export type Quizzes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Quizzes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Quizzes_Avg_Fields = {
  __typename?: 'quizzes_avg_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
  subjectId?: Maybe<Scalars['Float']>;
  teacherId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "quizzes". All fields are combined with a logical 'AND'. */
export type Quizzes_Bool_Exp = {
  _and?: InputMaybe<Array<Quizzes_Bool_Exp>>;
  _not?: InputMaybe<Quizzes_Bool_Exp>;
  _or?: InputMaybe<Array<Quizzes_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  score?: InputMaybe<Float8_Comparison_Exp>;
  subjectId?: InputMaybe<Int_Comparison_Exp>;
  teacherId?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "quizzes" */
export enum Quizzes_Constraint {
  /** unique or primary key constraint on columns "id" */
  QuizzesPkey = 'quizzes_pkey'
}

/** input type for incrementing numeric columns in table "quizzes" */
export type Quizzes_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  score?: InputMaybe<Scalars['float8']>;
  subjectId?: InputMaybe<Scalars['Int']>;
  teacherId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "quizzes" */
export type Quizzes_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  score?: InputMaybe<Scalars['float8']>;
  subjectId?: InputMaybe<Scalars['Int']>;
  teacherId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Quizzes_Max_Fields = {
  __typename?: 'quizzes_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['float8']>;
  subjectId?: Maybe<Scalars['Int']>;
  teacherId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Quizzes_Min_Fields = {
  __typename?: 'quizzes_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['float8']>;
  subjectId?: Maybe<Scalars['Int']>;
  teacherId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "quizzes" */
export type Quizzes_Mutation_Response = {
  __typename?: 'quizzes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Quizzes>;
};

/** on_conflict condition type for table "quizzes" */
export type Quizzes_On_Conflict = {
  constraint: Quizzes_Constraint;
  update_columns?: Array<Quizzes_Update_Column>;
  where?: InputMaybe<Quizzes_Bool_Exp>;
};

/** Ordering options when selecting data from "quizzes". */
export type Quizzes_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  subjectId?: InputMaybe<Order_By>;
  teacherId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: quizzes */
export type Quizzes_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "quizzes" */
export enum Quizzes_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Score = 'score',
  /** column name */
  SubjectId = 'subjectId',
  /** column name */
  TeacherId = 'teacherId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "quizzes" */
export type Quizzes_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  score?: InputMaybe<Scalars['float8']>;
  subjectId?: InputMaybe<Scalars['Int']>;
  teacherId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Quizzes_Stddev_Fields = {
  __typename?: 'quizzes_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
  subjectId?: Maybe<Scalars['Float']>;
  teacherId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Quizzes_Stddev_Pop_Fields = {
  __typename?: 'quizzes_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
  subjectId?: Maybe<Scalars['Float']>;
  teacherId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Quizzes_Stddev_Samp_Fields = {
  __typename?: 'quizzes_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
  subjectId?: Maybe<Scalars['Float']>;
  teacherId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Quizzes_Sum_Fields = {
  __typename?: 'quizzes_sum_fields';
  id?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['float8']>;
  subjectId?: Maybe<Scalars['Int']>;
  teacherId?: Maybe<Scalars['Int']>;
};

/** update columns of table "quizzes" */
export enum Quizzes_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Score = 'score',
  /** column name */
  SubjectId = 'subjectId',
  /** column name */
  TeacherId = 'teacherId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Quizzes_Var_Pop_Fields = {
  __typename?: 'quizzes_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
  subjectId?: Maybe<Scalars['Float']>;
  teacherId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Quizzes_Var_Samp_Fields = {
  __typename?: 'quizzes_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
  subjectId?: Maybe<Scalars['Float']>;
  teacherId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Quizzes_Variance_Fields = {
  __typename?: 'quizzes_variance_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
  subjectId?: Maybe<Scalars['Float']>;
  teacherId?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "responses" */
export type Responses = {
  __typename?: 'responses';
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  questionId: Scalars['Int'];
  text?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  valid?: Maybe<Scalars['Boolean']>;
};

/** aggregated selection of "responses" */
export type Responses_Aggregate = {
  __typename?: 'responses_aggregate';
  aggregate?: Maybe<Responses_Aggregate_Fields>;
  nodes: Array<Responses>;
};

/** aggregate fields of "responses" */
export type Responses_Aggregate_Fields = {
  __typename?: 'responses_aggregate_fields';
  avg?: Maybe<Responses_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Responses_Max_Fields>;
  min?: Maybe<Responses_Min_Fields>;
  stddev?: Maybe<Responses_Stddev_Fields>;
  stddev_pop?: Maybe<Responses_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Responses_Stddev_Samp_Fields>;
  sum?: Maybe<Responses_Sum_Fields>;
  var_pop?: Maybe<Responses_Var_Pop_Fields>;
  var_samp?: Maybe<Responses_Var_Samp_Fields>;
  variance?: Maybe<Responses_Variance_Fields>;
};


/** aggregate fields of "responses" */
export type Responses_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Responses_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Responses_Avg_Fields = {
  __typename?: 'responses_avg_fields';
  id?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "responses". All fields are combined with a logical 'AND'. */
export type Responses_Bool_Exp = {
  _and?: InputMaybe<Array<Responses_Bool_Exp>>;
  _not?: InputMaybe<Responses_Bool_Exp>;
  _or?: InputMaybe<Array<Responses_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  questionId?: InputMaybe<Int_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  valid?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "responses" */
export enum Responses_Constraint {
  /** unique or primary key constraint on columns "id" */
  ResponsesPkey = 'responses_pkey'
}

/** input type for incrementing numeric columns in table "responses" */
export type Responses_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  questionId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "responses" */
export type Responses_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  questionId?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  valid?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Responses_Max_Fields = {
  __typename?: 'responses_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Responses_Min_Fields = {
  __typename?: 'responses_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "responses" */
export type Responses_Mutation_Response = {
  __typename?: 'responses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Responses>;
};

/** on_conflict condition type for table "responses" */
export type Responses_On_Conflict = {
  constraint: Responses_Constraint;
  update_columns?: Array<Responses_Update_Column>;
  where?: InputMaybe<Responses_Bool_Exp>;
};

/** Ordering options when selecting data from "responses". */
export type Responses_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  questionId?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  valid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: responses */
export type Responses_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "responses" */
export enum Responses_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  QuestionId = 'questionId',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Valid = 'valid'
}

/** input type for updating data in table "responses" */
export type Responses_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  questionId?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  valid?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Responses_Stddev_Fields = {
  __typename?: 'responses_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Responses_Stddev_Pop_Fields = {
  __typename?: 'responses_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Responses_Stddev_Samp_Fields = {
  __typename?: 'responses_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Responses_Sum_Fields = {
  __typename?: 'responses_sum_fields';
  id?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
};

/** update columns of table "responses" */
export enum Responses_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  QuestionId = 'questionId',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Valid = 'valid'
}

/** aggregate var_pop on columns */
export type Responses_Var_Pop_Fields = {
  __typename?: 'responses_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Responses_Var_Samp_Fields = {
  __typename?: 'responses_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Responses_Variance_Fields = {
  __typename?: 'responses_variance_fields';
  id?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "students" */
export type Students = {
  __typename?: 'students';
  createdAt: Scalars['timestamptz'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  lastName?: Maybe<Scalars['String']>;
  teacherId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['timestamptz'];
  userId: Scalars['Int'];
};

/** aggregated selection of "students" */
export type Students_Aggregate = {
  __typename?: 'students_aggregate';
  aggregate?: Maybe<Students_Aggregate_Fields>;
  nodes: Array<Students>;
};

/** aggregate fields of "students" */
export type Students_Aggregate_Fields = {
  __typename?: 'students_aggregate_fields';
  avg?: Maybe<Students_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Students_Max_Fields>;
  min?: Maybe<Students_Min_Fields>;
  stddev?: Maybe<Students_Stddev_Fields>;
  stddev_pop?: Maybe<Students_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Students_Stddev_Samp_Fields>;
  sum?: Maybe<Students_Sum_Fields>;
  var_pop?: Maybe<Students_Var_Pop_Fields>;
  var_samp?: Maybe<Students_Var_Samp_Fields>;
  variance?: Maybe<Students_Variance_Fields>;
};


/** aggregate fields of "students" */
export type Students_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Students_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Students_Avg_Fields = {
  __typename?: 'students_avg_fields';
  id?: Maybe<Scalars['Float']>;
  teacherId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "students". All fields are combined with a logical 'AND'. */
export type Students_Bool_Exp = {
  _and?: InputMaybe<Array<Students_Bool_Exp>>;
  _not?: InputMaybe<Students_Bool_Exp>;
  _or?: InputMaybe<Array<Students_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  firstName?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  lastName?: InputMaybe<String_Comparison_Exp>;
  teacherId?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "students" */
export enum Students_Constraint {
  /** unique or primary key constraint on columns "id" */
  StudentsPkey = 'students_pkey'
}

/** input type for incrementing numeric columns in table "students" */
export type Students_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  teacherId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "students" */
export type Students_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  lastName?: InputMaybe<Scalars['String']>;
  teacherId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Students_Max_Fields = {
  __typename?: 'students_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  teacherId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Students_Min_Fields = {
  __typename?: 'students_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  teacherId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "students" */
export type Students_Mutation_Response = {
  __typename?: 'students_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Students>;
};

/** on_conflict condition type for table "students" */
export type Students_On_Conflict = {
  constraint: Students_Constraint;
  update_columns?: Array<Students_Update_Column>;
  where?: InputMaybe<Students_Bool_Exp>;
};

/** Ordering options when selecting data from "students". */
export type Students_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  teacherId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: students */
export type Students_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "students" */
export enum Students_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  TeacherId = 'teacherId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "students" */
export type Students_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  lastName?: InputMaybe<Scalars['String']>;
  teacherId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Students_Stddev_Fields = {
  __typename?: 'students_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  teacherId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Students_Stddev_Pop_Fields = {
  __typename?: 'students_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  teacherId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Students_Stddev_Samp_Fields = {
  __typename?: 'students_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  teacherId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Students_Sum_Fields = {
  __typename?: 'students_sum_fields';
  id?: Maybe<Scalars['Int']>;
  teacherId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** update columns of table "students" */
export enum Students_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  TeacherId = 'teacherId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type Students_Var_Pop_Fields = {
  __typename?: 'students_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  teacherId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Students_Var_Samp_Fields = {
  __typename?: 'students_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  teacherId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Students_Variance_Fields = {
  __typename?: 'students_variance_fields';
  id?: Maybe<Scalars['Float']>;
  teacherId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "subjects" */
export type Subjects = {
  __typename?: 'subjects';
  createdAt: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  intitule?: Maybe<Scalars['String']>;
  subjectId?: Maybe<Scalars['Int']>;
  teacherId: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "subjects" */
export type Subjects_Aggregate = {
  __typename?: 'subjects_aggregate';
  aggregate?: Maybe<Subjects_Aggregate_Fields>;
  nodes: Array<Subjects>;
};

/** aggregate fields of "subjects" */
export type Subjects_Aggregate_Fields = {
  __typename?: 'subjects_aggregate_fields';
  avg?: Maybe<Subjects_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Subjects_Max_Fields>;
  min?: Maybe<Subjects_Min_Fields>;
  stddev?: Maybe<Subjects_Stddev_Fields>;
  stddev_pop?: Maybe<Subjects_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Subjects_Stddev_Samp_Fields>;
  sum?: Maybe<Subjects_Sum_Fields>;
  var_pop?: Maybe<Subjects_Var_Pop_Fields>;
  var_samp?: Maybe<Subjects_Var_Samp_Fields>;
  variance?: Maybe<Subjects_Variance_Fields>;
};


/** aggregate fields of "subjects" */
export type Subjects_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Subjects_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Subjects_Avg_Fields = {
  __typename?: 'subjects_avg_fields';
  id?: Maybe<Scalars['Float']>;
  subjectId?: Maybe<Scalars['Float']>;
  teacherId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "subjects". All fields are combined with a logical 'AND'. */
export type Subjects_Bool_Exp = {
  _and?: InputMaybe<Array<Subjects_Bool_Exp>>;
  _not?: InputMaybe<Subjects_Bool_Exp>;
  _or?: InputMaybe<Array<Subjects_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  intitule?: InputMaybe<String_Comparison_Exp>;
  subjectId?: InputMaybe<Int_Comparison_Exp>;
  teacherId?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "subjects" */
export enum Subjects_Constraint {
  /** unique or primary key constraint on columns "id" */
  SubjectsPkey = 'subjects_pkey'
}

/** input type for incrementing numeric columns in table "subjects" */
export type Subjects_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  subjectId?: InputMaybe<Scalars['Int']>;
  teacherId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "subjects" */
export type Subjects_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  intitule?: InputMaybe<Scalars['String']>;
  subjectId?: InputMaybe<Scalars['Int']>;
  teacherId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Subjects_Max_Fields = {
  __typename?: 'subjects_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  intitule?: Maybe<Scalars['String']>;
  subjectId?: Maybe<Scalars['Int']>;
  teacherId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Subjects_Min_Fields = {
  __typename?: 'subjects_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  intitule?: Maybe<Scalars['String']>;
  subjectId?: Maybe<Scalars['Int']>;
  teacherId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "subjects" */
export type Subjects_Mutation_Response = {
  __typename?: 'subjects_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Subjects>;
};

/** on_conflict condition type for table "subjects" */
export type Subjects_On_Conflict = {
  constraint: Subjects_Constraint;
  update_columns?: Array<Subjects_Update_Column>;
  where?: InputMaybe<Subjects_Bool_Exp>;
};

/** Ordering options when selecting data from "subjects". */
export type Subjects_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  intitule?: InputMaybe<Order_By>;
  subjectId?: InputMaybe<Order_By>;
  teacherId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: subjects */
export type Subjects_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "subjects" */
export enum Subjects_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Intitule = 'intitule',
  /** column name */
  SubjectId = 'subjectId',
  /** column name */
  TeacherId = 'teacherId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "subjects" */
export type Subjects_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  intitule?: InputMaybe<Scalars['String']>;
  subjectId?: InputMaybe<Scalars['Int']>;
  teacherId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Subjects_Stddev_Fields = {
  __typename?: 'subjects_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  subjectId?: Maybe<Scalars['Float']>;
  teacherId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Subjects_Stddev_Pop_Fields = {
  __typename?: 'subjects_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  subjectId?: Maybe<Scalars['Float']>;
  teacherId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Subjects_Stddev_Samp_Fields = {
  __typename?: 'subjects_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  subjectId?: Maybe<Scalars['Float']>;
  teacherId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Subjects_Sum_Fields = {
  __typename?: 'subjects_sum_fields';
  id?: Maybe<Scalars['Int']>;
  subjectId?: Maybe<Scalars['Int']>;
  teacherId?: Maybe<Scalars['Int']>;
};

/** update columns of table "subjects" */
export enum Subjects_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Intitule = 'intitule',
  /** column name */
  SubjectId = 'subjectId',
  /** column name */
  TeacherId = 'teacherId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Subjects_Var_Pop_Fields = {
  __typename?: 'subjects_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  subjectId?: Maybe<Scalars['Float']>;
  teacherId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Subjects_Var_Samp_Fields = {
  __typename?: 'subjects_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  subjectId?: Maybe<Scalars['Float']>;
  teacherId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Subjects_Variance_Fields = {
  __typename?: 'subjects_variance_fields';
  id?: Maybe<Scalars['Float']>;
  subjectId?: Maybe<Scalars['Float']>;
  teacherId?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "levels" */
  levels: Array<Levels>;
  /** fetch aggregated fields from the table: "levels" */
  levels_aggregate: Levels_Aggregate;
  /** fetch data from the table: "levels" using primary key columns */
  levels_by_pk?: Maybe<Levels>;
  /** fetch data from the table: "questions" */
  questions: Array<Questions>;
  /** fetch aggregated fields from the table: "questions" */
  questions_aggregate: Questions_Aggregate;
  /** fetch data from the table: "questions" using primary key columns */
  questions_by_pk?: Maybe<Questions>;
  /** fetch data from the table: "quiz_questions" */
  quiz_questions: Array<Quiz_Questions>;
  /** fetch aggregated fields from the table: "quiz_questions" */
  quiz_questions_aggregate: Quiz_Questions_Aggregate;
  /** fetch data from the table: "quiz_questions" using primary key columns */
  quiz_questions_by_pk?: Maybe<Quiz_Questions>;
  /** fetch data from the table: "quiz_submissions" */
  quiz_submissions: Array<Quiz_Submissions>;
  /** fetch aggregated fields from the table: "quiz_submissions" */
  quiz_submissions_aggregate: Quiz_Submissions_Aggregate;
  /** fetch data from the table: "quiz_submissions" using primary key columns */
  quiz_submissions_by_pk?: Maybe<Quiz_Submissions>;
  /** fetch data from the table: "quizzes" */
  quizzes: Array<Quizzes>;
  /** fetch aggregated fields from the table: "quizzes" */
  quizzes_aggregate: Quizzes_Aggregate;
  /** fetch data from the table: "quizzes" using primary key columns */
  quizzes_by_pk?: Maybe<Quizzes>;
  /** fetch data from the table: "responses" */
  responses: Array<Responses>;
  /** fetch aggregated fields from the table: "responses" */
  responses_aggregate: Responses_Aggregate;
  /** fetch data from the table: "responses" using primary key columns */
  responses_by_pk?: Maybe<Responses>;
  /** fetch data from the table: "students" */
  students: Array<Students>;
  /** fetch aggregated fields from the table: "students" */
  students_aggregate: Students_Aggregate;
  /** fetch data from the table: "students" using primary key columns */
  students_by_pk?: Maybe<Students>;
  /** fetch data from the table: "subjects" */
  subjects: Array<Subjects>;
  /** fetch aggregated fields from the table: "subjects" */
  subjects_aggregate: Subjects_Aggregate;
  /** fetch data from the table: "subjects" using primary key columns */
  subjects_by_pk?: Maybe<Subjects>;
  /** fetch data from the table: "teachers" */
  teachers: Array<Teachers>;
  /** fetch aggregated fields from the table: "teachers" */
  teachers_aggregate: Teachers_Aggregate;
  /** fetch data from the table: "teachers" using primary key columns */
  teachers_by_pk?: Maybe<Teachers>;
  /** fetch data from the table: "tests" */
  tests: Array<Tests>;
  /** fetch aggregated fields from the table: "tests" */
  tests_aggregate: Tests_Aggregate;
  /** fetch data from the table: "tests" using primary key columns */
  tests_by_pk?: Maybe<Tests>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootLevelsArgs = {
  distinct_on?: InputMaybe<Array<Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Levels_Order_By>>;
  where?: InputMaybe<Levels_Bool_Exp>;
};


export type Subscription_RootLevels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Levels_Order_By>>;
  where?: InputMaybe<Levels_Bool_Exp>;
};


export type Subscription_RootLevels_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootQuestionsArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Subscription_RootQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Subscription_RootQuestions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootQuiz_QuestionsArgs = {
  distinct_on?: InputMaybe<Array<Quiz_Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quiz_Questions_Order_By>>;
  where?: InputMaybe<Quiz_Questions_Bool_Exp>;
};


export type Subscription_RootQuiz_Questions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quiz_Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quiz_Questions_Order_By>>;
  where?: InputMaybe<Quiz_Questions_Bool_Exp>;
};


export type Subscription_RootQuiz_Questions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootQuiz_SubmissionsArgs = {
  distinct_on?: InputMaybe<Array<Quiz_Submissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quiz_Submissions_Order_By>>;
  where?: InputMaybe<Quiz_Submissions_Bool_Exp>;
};


export type Subscription_RootQuiz_Submissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quiz_Submissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quiz_Submissions_Order_By>>;
  where?: InputMaybe<Quiz_Submissions_Bool_Exp>;
};


export type Subscription_RootQuiz_Submissions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootQuizzesArgs = {
  distinct_on?: InputMaybe<Array<Quizzes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quizzes_Order_By>>;
  where?: InputMaybe<Quizzes_Bool_Exp>;
};


export type Subscription_RootQuizzes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quizzes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quizzes_Order_By>>;
  where?: InputMaybe<Quizzes_Bool_Exp>;
};


export type Subscription_RootQuizzes_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootResponsesArgs = {
  distinct_on?: InputMaybe<Array<Responses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Responses_Order_By>>;
  where?: InputMaybe<Responses_Bool_Exp>;
};


export type Subscription_RootResponses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Responses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Responses_Order_By>>;
  where?: InputMaybe<Responses_Bool_Exp>;
};


export type Subscription_RootResponses_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootStudentsArgs = {
  distinct_on?: InputMaybe<Array<Students_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};


export type Subscription_RootStudents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Students_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};


export type Subscription_RootStudents_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSubjectsArgs = {
  distinct_on?: InputMaybe<Array<Subjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subjects_Order_By>>;
  where?: InputMaybe<Subjects_Bool_Exp>;
};


export type Subscription_RootSubjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subjects_Order_By>>;
  where?: InputMaybe<Subjects_Bool_Exp>;
};


export type Subscription_RootSubjects_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTeachersArgs = {
  distinct_on?: InputMaybe<Array<Teachers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Teachers_Order_By>>;
  where?: InputMaybe<Teachers_Bool_Exp>;
};


export type Subscription_RootTeachers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Teachers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Teachers_Order_By>>;
  where?: InputMaybe<Teachers_Bool_Exp>;
};


export type Subscription_RootTeachers_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTestsArgs = {
  distinct_on?: InputMaybe<Array<Tests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tests_Order_By>>;
  where?: InputMaybe<Tests_Bool_Exp>;
};


export type Subscription_RootTests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tests_Order_By>>;
  where?: InputMaybe<Tests_Bool_Exp>;
};


export type Subscription_RootTests_By_PkArgs = {
  id: Scalars['Int'];
  slug: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "teachers" */
export type Teachers = {
  __typename?: 'teachers';
  createdAt: Scalars['timestamptz'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  lastName?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  userId: Scalars['Int'];
};

/** aggregated selection of "teachers" */
export type Teachers_Aggregate = {
  __typename?: 'teachers_aggregate';
  aggregate?: Maybe<Teachers_Aggregate_Fields>;
  nodes: Array<Teachers>;
};

/** aggregate fields of "teachers" */
export type Teachers_Aggregate_Fields = {
  __typename?: 'teachers_aggregate_fields';
  avg?: Maybe<Teachers_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Teachers_Max_Fields>;
  min?: Maybe<Teachers_Min_Fields>;
  stddev?: Maybe<Teachers_Stddev_Fields>;
  stddev_pop?: Maybe<Teachers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Teachers_Stddev_Samp_Fields>;
  sum?: Maybe<Teachers_Sum_Fields>;
  var_pop?: Maybe<Teachers_Var_Pop_Fields>;
  var_samp?: Maybe<Teachers_Var_Samp_Fields>;
  variance?: Maybe<Teachers_Variance_Fields>;
};


/** aggregate fields of "teachers" */
export type Teachers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Teachers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Teachers_Avg_Fields = {
  __typename?: 'teachers_avg_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "teachers". All fields are combined with a logical 'AND'. */
export type Teachers_Bool_Exp = {
  _and?: InputMaybe<Array<Teachers_Bool_Exp>>;
  _not?: InputMaybe<Teachers_Bool_Exp>;
  _or?: InputMaybe<Array<Teachers_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  firstName?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  lastName?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "teachers" */
export enum Teachers_Constraint {
  /** unique or primary key constraint on columns "id" */
  TeachersPkey = 'teachers_pkey'
}

/** input type for incrementing numeric columns in table "teachers" */
export type Teachers_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "teachers" */
export type Teachers_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  lastName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Teachers_Max_Fields = {
  __typename?: 'teachers_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Teachers_Min_Fields = {
  __typename?: 'teachers_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "teachers" */
export type Teachers_Mutation_Response = {
  __typename?: 'teachers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Teachers>;
};

/** on_conflict condition type for table "teachers" */
export type Teachers_On_Conflict = {
  constraint: Teachers_Constraint;
  update_columns?: Array<Teachers_Update_Column>;
  where?: InputMaybe<Teachers_Bool_Exp>;
};

/** Ordering options when selecting data from "teachers". */
export type Teachers_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: teachers */
export type Teachers_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "teachers" */
export enum Teachers_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "teachers" */
export type Teachers_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  lastName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Teachers_Stddev_Fields = {
  __typename?: 'teachers_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Teachers_Stddev_Pop_Fields = {
  __typename?: 'teachers_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Teachers_Stddev_Samp_Fields = {
  __typename?: 'teachers_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Teachers_Sum_Fields = {
  __typename?: 'teachers_sum_fields';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** update columns of table "teachers" */
export enum Teachers_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type Teachers_Var_Pop_Fields = {
  __typename?: 'teachers_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Teachers_Var_Samp_Fields = {
  __typename?: 'teachers_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Teachers_Variance_Fields = {
  __typename?: 'teachers_variance_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "tests" */
export type Tests = {
  __typename?: 'tests';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  slug: Scalars['uuid'];
  status?: Maybe<Scalars['Boolean']>;
};

/** aggregated selection of "tests" */
export type Tests_Aggregate = {
  __typename?: 'tests_aggregate';
  aggregate?: Maybe<Tests_Aggregate_Fields>;
  nodes: Array<Tests>;
};

/** aggregate fields of "tests" */
export type Tests_Aggregate_Fields = {
  __typename?: 'tests_aggregate_fields';
  avg?: Maybe<Tests_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Tests_Max_Fields>;
  min?: Maybe<Tests_Min_Fields>;
  stddev?: Maybe<Tests_Stddev_Fields>;
  stddev_pop?: Maybe<Tests_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tests_Stddev_Samp_Fields>;
  sum?: Maybe<Tests_Sum_Fields>;
  var_pop?: Maybe<Tests_Var_Pop_Fields>;
  var_samp?: Maybe<Tests_Var_Samp_Fields>;
  variance?: Maybe<Tests_Variance_Fields>;
};


/** aggregate fields of "tests" */
export type Tests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Tests_Avg_Fields = {
  __typename?: 'tests_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "tests". All fields are combined with a logical 'AND'. */
export type Tests_Bool_Exp = {
  _and?: InputMaybe<Array<Tests_Bool_Exp>>;
  _not?: InputMaybe<Tests_Bool_Exp>;
  _or?: InputMaybe<Array<Tests_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  slug?: InputMaybe<Uuid_Comparison_Exp>;
  status?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "tests" */
export enum Tests_Constraint {
  /** unique or primary key constraint on columns "slug", "id" */
  TestsPkey = 'tests_pkey'
}

/** input type for incrementing numeric columns in table "tests" */
export type Tests_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "tests" */
export type Tests_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Tests_Max_Fields = {
  __typename?: 'tests_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Tests_Min_Fields = {
  __typename?: 'tests_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "tests" */
export type Tests_Mutation_Response = {
  __typename?: 'tests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tests>;
};

/** on_conflict condition type for table "tests" */
export type Tests_On_Conflict = {
  constraint: Tests_Constraint;
  update_columns?: Array<Tests_Update_Column>;
  where?: InputMaybe<Tests_Bool_Exp>;
};

/** Ordering options when selecting data from "tests". */
export type Tests_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tests */
export type Tests_Pk_Columns_Input = {
  id: Scalars['Int'];
  slug: Scalars['uuid'];
};

/** select columns of table "tests" */
export enum Tests_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug',
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "tests" */
export type Tests_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Tests_Stddev_Fields = {
  __typename?: 'tests_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Tests_Stddev_Pop_Fields = {
  __typename?: 'tests_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Tests_Stddev_Samp_Fields = {
  __typename?: 'tests_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Tests_Sum_Fields = {
  __typename?: 'tests_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "tests" */
export enum Tests_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug',
  /** column name */
  Status = 'status'
}

/** aggregate var_pop on columns */
export type Tests_Var_Pop_Fields = {
  __typename?: 'tests_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Tests_Var_Samp_Fields = {
  __typename?: 'tests_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Tests_Variance_Fields = {
  __typename?: 'tests_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Timestamptz_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _cast?: InputMaybe<Timestamptz_Cast_Exp>;
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  confirmed?: InputMaybe<Boolean_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  confirmed?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Confirmed = 'confirmed',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Confirmed = 'confirmed',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Uuid_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _cast?: InputMaybe<Uuid_Cast_Exp>;
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};
