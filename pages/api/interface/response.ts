export interface ResponseFunc{
    GET?: Function;
    POST?: Function;
    PUT?:Function;
    DELETE?:Function; 
}

export interface ResponseApi {
    error?:string,
    msg:string,
   token?:string,
}