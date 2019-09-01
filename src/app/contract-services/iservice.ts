export interface IService<Object> {
    existById(id: number): boolean;
    exist(object: Object): boolean;
    
    get(object: Object): Object;
    getById(id: number): Object;
    getAll(): Object[];

    delete(object: Object): Object;
    deleteById(id: number): Object;

    create(object: Object): Object;
    update(object: Object): Object;
}
