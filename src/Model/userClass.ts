export class User{
    public address: any;
    public company: any;
    public email: string;
    public id: number;
    public name: string;
    public phone: string;
    public username: string;
    public website: string;

    constructor(address: any, company: any, email: string, id: number, 
        name: string, phone: string, username: string, website: string){
            this.address = address;
            this.company = company;
            this.email = email;
            this.id = id;
            this.name = name;
            this.phone = phone;
            this.username = username;
            this.website = website;
        }

}