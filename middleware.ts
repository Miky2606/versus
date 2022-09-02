

import { NextRequest, NextResponse } from "next/server";
import { ResponseApi } from "./pages/api/interface/response";
import axios from "axios"


export default function middleware(req:NextRequest, res:NextResponse){
    const cookie = req.cookies
 
   

    if(cookie.get('token') === undefined){
     
    if (req.nextUrl.pathname.startsWith('/account')){
         return NextResponse.redirect(new URL('/login', req.url))
    }

}else{


    if (req.nextUrl.pathname.startsWith('/login') || req.nextUrl.pathname.startsWith('/signin') ){
        return NextResponse.redirect(new URL('/account', req.url))
   }

}
  

    return NextResponse.next()

}


const apiGetUser = (token:string)=>{
    const {API_URL} = process.env
    axios.get(API_URL+'/hello').then((res)=>{
        console.log(res.data);
        
    })
}
