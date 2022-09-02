import { NextPage } from "next";
import Link from "next/link";
import { useState, useEffect, SetStateAction } from "react";
import { ResponseApi } from "./api/interface/response";
import { User } from "./api/interface/userDB";
import axios from "axios"
import Loading from "./View/loading";
import { getCookie, setCookie } from "cookies-next";
import { redirect } from "next/dist/server/api-utils";
import Router, { useRouter } from "next/router";

const Signin: NextPage = () => {

  const [loading, setLoading] = useState<Boolean>(false)
 const [response, setResponse] = useState<ResponseApi>()
 const [user,setUser] = useState("")
 const [email,setEmail] = useState<string>("")
 const [password,setPassword] = useState<string>("")

 const handleSubmit = (e:React.FormEvent) => e.preventDefault()
 const handleUser = (e:any) => setUser(e.target.value)
 const handleEmail = (e:any) => setEmail(e.target.value)
 const handlePassword = (e:any) => setPassword(e.target.value)
 const route = useRouter()
const {API_URL} = process.env

 const userSend = () =>{

   const userData: User ={
    username: user,
    email: email,
    password: password,
    vs:[],
    verfified:false,
    os: window.navigator.userAgent
   }

 
   
   
   setLoading(true)

     axios.post<ResponseApi>( API_URL+'/hello', userData).then((res)=>{
        
    

      if (res){
        setResponse(res.data)
        
        if(response?.token !== ""){
          setCookie('token', res.data.token)
          Router.push({pathname:'/'})
        }
        
      

        setLoading(false)
      }

     })
 }



  return (
    <>
    { loading ? <Loading /> : <></>}
    {response?.error === "Error"? <div className="alert alert-dismissible alert-danger">
  <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
  <strong>Error!</strong> {response.msg}
</div> : <></>}

      <div className="container form">
        <div className="row">
          <div className="col "></div>
          <div className="col-xs-12 col-lg-6">
            {" "}
            <form onSubmit={handleSubmit}>
              <legend>
                Signup |{" "}
                <Link href="/login">
                  <a>Login</a>
                </Link>
              </legend>
            

              <div className="form-group" >
                <label htmlFor="exampleInputUser1" className="form-label mt-4">
                  Username
                </label>
                <input
                onChange={handleUser}
                  type="user"
                  className="form-control"
                  id="exampleInputUser1"
                  placeholder="Enter Username"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="form-label mt-4">
                  Email address
                </label>
                <input
                 onChange={handleEmail}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Email"
                  required
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>

              <div className="form-group">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label mt-4"
                >
                  Password
                </label>
                <input
                 onChange={handlePassword}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  required
                />
              </div>

              <br />

              <button type="submit" onClick={userSend} className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};

export default Signin;
