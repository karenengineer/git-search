export class BaseModel {
    public static transformCollection(items: any[]): any[] {
        return items && items.length ? items.map(item => this['transform'](item)) : [];
    }
}
