import { Observable } from 'rxjs';

import { Task, TaskStatus } from 'app/tasks/task';

/**
 * Service interface for implementations that handle tiny tasks.
 */
export interface TaskService {

  /**
   * Returns the list of all tasks.
   *
   * @returns an `Observable` holding the list of tasks
   */
  getAll(): Observable<Task[]>;

  /**
   * Adds a new task to the list of tasks.
   *
   * @param name the task's name
   * @returns an `Observable` holding the created task
   */
  create(name: string): Observable<Task>;

  /**
   * Removes the task with the given ID from the list of tasks.
   *
   * @param id the ID of the task to be removed
   * @returns an empty `Observable`
   */
  delete(id: string): Observable<void>;


  /**
   *
   * @param id the ID of the task to be status changed
   * @param status new task status
   * @returns an `Observable` holding the task with new status
   */
  updateStatus(id: string, status: TaskStatus): Observable<Task>;
   /**
    *
    * @returns an empty `Observable`
    */
  clearDoneTasks(): Observable<Task>;
}
