/**
 * Todo item type.
 */
export interface TodoItem {
  /**
   * Todo item id.
   */
  id: number
  /**
   * Todo item title.
   */
  title: string
  /**
   * Todo item completed.
   *
   * @default false
   */
  completed: boolean
  /**
   * Todo item user id.
   */
  userId: number
}

/**
 * Todo list type.
 */
export type TodoList = TodoItem[]
