import { BaseModel } from './base-model';

export class User extends BaseModel{
    public avatar_url: string;
    public events_url: string;
    public followers_url: string;
    public following_url: string;
    public gists_url: string;
    public gravatar_id: string;
    public html_url: string;
    public id: number;
    public login: string;
    public node_id: string;
    public organizations_url: string;
    public received_events_url: string;
    public repos_url: string;
    public site_admin: string;
    public starred_url: string;
    public subscriptions_url: string;
    public type: string;
    public url: string;

    constructor(data: any = {}) {
        super();
        this.avatar_url = data.avatar_url;
        this.events_url = data.events_url;
        this.followers_url = data.followers_url;
        this.following_url = data.following_url;
        this.gists_url = data.gists_url;
        this.gravatar_id = data.gravatar_id;
        this.html_url = data.html_url;
        this.id = data.id;
        this.login = data.login;
        this.node_id = data.node_id;
        this.organizations_url = data.organizations_url;
        this.received_events_url = data.received_events_url;
        this.repos_url = data.repos_url;
        this.site_admin = data.site_admin;
        this.starred_url = data.starred_url;
        this.subscriptions_url = data.subscriptions_url;
        this.type = data.type;
        this.url = data.url;
    }

    public static transform(data: User): User {
        return new User(data);
    }
}
