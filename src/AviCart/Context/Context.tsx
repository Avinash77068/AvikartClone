import { createContext, useEffect, useState } from "react";
import {Product} from '../TypeScript/Type'

export const Context= createContext({});

export default function ContextProvider({ children }: any) {
  const [ProductList, setProductList] = useState<Product[]>([]);
  const [ProductListAll, setProductListAll] = useState<Product[]>([]);
  const [category, setCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [filterData, setfilterData] = useState<string>("");
  const [loading,setLoading]=useState<boolean>(false)
  const [isopen,setIsOpen]=useState<boolean>(true)
  const [categories1,setCategories1]=useState<string>("")
  useEffect(() => {
    setLoading(true)
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const uniqeCategories:Set<string> = new Set(data.map((value:Product) => value.category)); //first sidebar data getting useState

        const categories = Array.from(uniqeCategories);
        setCategories(categories)
        setProductList(data);
        setProductListAll(data);
        // setLoading(false)
        
        setLoading(false)
        // console.log(data)
        
      }).catch((error)=>{
        setLoading(false)
      })
  }, []);



  useEffect(() => {
    
    if (category) {
      setLoading(true)
      fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(res=>res.json())
    .then(data=>{
      setProductList(data);
      setLoading(false)
    }).catch((error)=>{
      setLoading(false)
    })
    }
    else{
      setProductList(ProductListAll.filter(prd=> prd.category.includes(filterData))) 
    }
    
  }, [category]);

  
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/categories')
          .then(res=>res.json())
          
          .then((data)=>{
            setCategories1(data)
          })
  },[])


  return (
    <Context.Provider
      value={{ ProductList, setProductList, category, setCategory, categories,filterData,setfilterData,loading,categories1,setCategories1,setIsOpen,isopen}}
    >
      {children}
    </Context.Provider>
  );
}
