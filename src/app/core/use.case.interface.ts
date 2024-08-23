export interface UseCase<T = unknown, R = void> {
  execute(params?: T): Promise<R | Error>;
}
