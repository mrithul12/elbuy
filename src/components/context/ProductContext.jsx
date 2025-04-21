import { createContext, useEffect, useState } from "react";



export const ProductContext = createContext()

export const ProductProvider =({children})=>{
    const [product,setProduct] =useState([])
   
    const getProduct = async () =>{
      try{
          const response = await fetch('https://dummyjson.com/products')
          const data = await response.json()
          setProduct(data.products)
      }catch(error){
          console.log("fetch api not working", error);
      }
    
    }
    useEffect(()=>{
      getProduct();
  },[])
 
  const [add,setAdd] = useState([])
  let alertShown = false;
  const addTocart =(item)=>{
        setAdd((prev)=>{
          if(prev.some((cartItem)=>cartItem.id===item.id)){
            if(!alertShown){
                alertShown=true;
                alert("item is already selected")
            }
              
                return prev
            }
           return [...prev,item]
        })
  }
  const removeCart = (index)=>{
      setAdd((prev)=>{
       const updateCart = prev.filter((_,i)=>i!==index)
       return updateCart
      })
  }

    return(
        <ProductContext.Provider value={{product,addTocart,add,removeCart}}>
{children}
        </ProductContext.Provider>
    )
}