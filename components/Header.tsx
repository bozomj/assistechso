
import { useState } from "react";
import React, { JSX, ReactElement } from "react";

interface Props{
     id?: string
}
const Header: React.FC<Props> = ({id}) =>{
    let menu = [
        
        <a href="/" >Home</a>,
        <a href="produto/">Produto</a>,
        <a href="#contato">Contato</a>,
        <a href="plus/">Plus</a>
        
    ];


    const [toggle, setToggle] = useState(true);
  
  
  menu = menu.map((e)=>{
    
    if( (e.props.children).toLocaleLowerCase() == id?.toLocaleLowerCase()){

            e = React.cloneElement(e,{
            className: (e.props.className + ' text-amber-600')
        })
    }

    return e;

  });
//    let toggle: boolean = false;
   

   
function change(){
    setToggle(!toggle)
}

    
 return   (
    <header className=" bg-gray-900 fixed top-0 left-0 w-full">
        <nav className='flex flex-col justify-between mx-auto md:w-2/3 text-white min-h-28  items-center font-bold md:flex-row'>
            <div className="flex justify-between w-full">

                <div className="flex p-8 items-center justify-between w-full  ">
                    <a href="/"><img src="/img/logo.png" alt="" width="250" className="px-4 cursor-pointer"/></a>
                    
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
           

           

           <label  htmlFor="showmenu" className=" transition-all duration-600 gap-4  h-0 overflow-hidden  flex  peer-checked:h-40 bg-gray-900 w-full  flex-col items-end px-8 
           md:h-auto md:flex-row 
           ">
            

                {...menu}
            
                
           </label>
           <label htmlFor="showmenu" className="h-screen w-full hidden  fixed left-0 top-0 z-[-1]  peer-checked:block"></label>
        </nav>
        
        

  </header>
  
  );
}

function func(){
    alert('uii nossinhá');
}

function marque(txt: string, txt2: string){
   txt = txt.toLocaleLowerCase();
    txt2 = txt2.toLocaleLowerCase();
    return (  (txt == txt2) ? 'text-red-600' : '')
}

export default Header;

