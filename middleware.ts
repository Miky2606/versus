

import { NextRequest, NextResponse } from "next/server";



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



