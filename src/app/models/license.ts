import { BaseModel } from './base-model';

export class License extends BaseModel {
    public key: string;
    public name: string;
    public node_id: string;
    public spdx_id: string;
    public url: string;

    constructor(data: any = {}) {
        super();
        this.key = data.key;
        this.name = data.name;
        this.node_id = data.node_id;
        this.spdx_id = data.spdx_id;
        this.url = data.url;
    }

    public static transform(data: License): License {
        return new License(data);
    }
}
