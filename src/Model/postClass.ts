export class Post{
    public body: string;
    public id: number;
    public title: string;
    public userId: string;
    constructor(body: string, id: number, title: string, userId: string){
        this.body = body;
        this.id = id;
        this.title = title;
        this.userId = userId
    }
}