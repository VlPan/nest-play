export abstract class EntityService<T> {
  abstract findAll()

  abstract getById(id: string)

  abstract create(data: Partial<T>)
}