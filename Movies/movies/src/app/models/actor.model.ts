export class Actor{
    name: string;
    dateOfBirth: Date;
    picture:File;
    biography:string;
}

export class ActorDTO{
    id:number
    name: string;
    dateOfBirth: Date;
    picture:string;
    biography:string;
}