export interface Rating{
        rate: number,
        count: number
}

export interface Product {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    price: number;
    rating:Rating
  }

export interface UseType {
    ProductList: Product[];
    setProductList:  React.Dispatch<React.SetStateAction<Product[]>>;
    loading:boolean,
    filerData:string,
   Context:React.Context<{}>;
   categoreis1:string[];
   setCategories1: React.Dispatch<React.SetStateAction<string[]>>
   
  }

  
 
 