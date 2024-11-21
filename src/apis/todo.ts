import type { TodoItem, TodoList } from '@/types/todo'

const { request } = useRequest()

/**
 * Get todo list.
 */
export function getTodoListApi() {
  return request.get<TodoList>('/todos')
}

/**
 * Get todo item.
 *
 * @param id number
 */
export function getTodoItemApi(id: number) {
  return request.get<TodoItem>(`/todos`, {
    params: {
      id,
    },
  })
}

/**
 * Create todo item.
 *
 * @param data TodoItem
 */
export function createTodoItemApi(data: TodoItem) {
  return request.post<TodoItem>('/todos', data)
}

/**
 * Update todo item.
 *
 * @param data TodoItem
 */
export function updateTodoItemApi(data: TodoItem) {
  return request.put<TodoItem>('/todos', data)
}

/**
 * Delete todo item.
 *
 * @param id number
 */
export function deleteTodoItemApi(id: number) {
  return request.delete(`/todos/${id}`)
}
