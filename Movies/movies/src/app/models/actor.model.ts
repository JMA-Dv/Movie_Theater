export class Actor{
    name: string;
    dateOfBirth: Date;
    picture:string;
    biography:string;
}

export class ActorDTO{
    name: string;
    dateOfBirth: Date;
    picture:File;
    biography:string;
}