import NavBar from "./navbar";
import  {ReactNode, FunctionComponent } from "react"
interface BaseLayoutProps {
    children?: ReactNode;
  }

const Layout: FunctionComponent<BaseLayoutProps> = ({ children } ) =>{
return(
    <>
    
   <NavBar />

    <main>{children}</main>
    
    </>
)

}

export default Layout