import { useContext } from "react";
// import { ImageArr } from "../imagearr/ImageArr";
import { IoStarSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { Context } from "../Context/Context";
import { Product, UseType } from "../TypeScript/Type";



export default function Card() {
  let { ProductList, setProductList } = useContext<UseType>(Context);
  
  
  

  const ProductId = (product: Product) => {
    // const clickedProduct = ProductList.find(item => item.id === product.id)

    const count: number = product.rating.count + 1;

    setProductList((pre) =>
      pre.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            rating: { ...item.rating, count },
            
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="ml-[205px]">
     
        <div className="  flex  flex-wrap  justify-between  mt-[70px]  ">

          {
          
         
      ProductList?.map((val) => {

            return (
              <>
              <div className="max-w-full  border-2 border-grey-400 mt-2 ">
                  <div className=" grid grid-flow-row">
                    <div className="w-[220px]  pt-3">
                    <figure className="bg-white justify-center flex items-center h-[150px]"><img src={val.image} className=" w-[150px] h-[150px] object-contain "/></figure>
                    <div className="gap-[4px]">
                      <p className="pl-5 text-[12px] font-Roboto-flex">{val.title}</p>
                      <p className="pl-5 text-[12px] font-Roboto-flex">{val.price} रुपये</p>
                      <p className="pl-5 text-[12px] font-Roboto-flex">Free delivery</p>
                      
                     <div className="flex">
                     
                     <p className="flex pl-5 text-[10px] font-Roboto-flex "> 
                     <FaHeart
                      className={`text-slate-900   font-Roboto-flex  text-[16px]`}
                      onClick={() => ProductId(val)}
                    /> 
                     <IoStarSharp className="text-green-700  text-[16px]" />
                     <IoStarSharp className="text-green-700  text-[16px]" />
                     <IoStarSharp className="text-green-700  text-[16px]" />
                     <IoStarSharp className="text-green-700  text-[16px]" />
                     <IoStarSharp className="text-yellow-300 text-[16px] " /> </p>
                     

                     <p className="pl-5 text-[12px] font-Roboto-flex -mt-[5px]"> ( {val.rating.count} )</p>
                     </div>
                      </div>
                    </div>
                  </div>
              </div>
              
              
                    
                    
                  
              
             
              </>
            );
          })
          
          }
        </div>
      
    </div>
  );
}
