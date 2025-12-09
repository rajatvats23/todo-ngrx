export interface Todo {
  _id?: string;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
  completed: boolean;
}