
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";



const Header: React.FC = () =>{
    const [toggle, setToggle] = useState(true);
    const menu = [
        
        {link:"/", label: "Home"},
        {link:"#produto", label: "Produto"},
        {link:"#contato", label: "Contato"},
        {link:"#recomendacoes", label: "Recomendações"}
        
    ];
   
    function change(){
        setToggle(!toggle)
    }

    
    return   (
        <header className=" bg-gray-900 fixed top-0 left-0 w-full">
            <nav className='flex flex-col justify-between mx-auto md:max-w-[58rem] text-white min-h-28  items-center font-bold md:flex-row'>
                <div className="flex justify-between w-full">

                    <div className="flex p-4 items-center justify-between w-full  md:px-0">
                        <Link href="/"><Image  src="/img/logo.png" alt="logo"  height={250} width={250} className=" cursor-pointer"/></Link>
                        
                        <label htmlFor="showmenu" className="md:hidden cursor-pointer" onClick={change}>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                {
                                
                                (toggle)
                                ? <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                : <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        
                                    
                                }
                            </svg>





                        </label>

                    </div>
                </div>
            <input type="checkbox" name="" id="showmenu" className=" hidden peer "/>
            

            

            <label   className=" justify-end  transition-all duration-600 gap-4  h-0 overflow-hidden  flex  peer-checked:h-40 bg-gray-900 w-full  flex-col items-end 
            md:h-auto md:flex-row px-8 md:px-0 peer-checked:py-4
            ">
                {
                    menu.map((e,key)=> <Link key={key} href={e.link}>{e.label}</Link>)
                }
                    
            </label>
            <label onClick={change} htmlFor="showmenu" className="h-screen w-full hidden  fixed left-0 top-0 z-[-1]  peer-checked:block"></label>
            </nav>
        </header>
    
    );
}

export default Header;

