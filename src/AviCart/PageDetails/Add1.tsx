import { useContext, useEffect, useState } from "react";
import { Context } from "../Context/Context";
import { Product } from "../TypeScript/Type";

export default function Add1() {
  let { categories1 } = useContext<Product>(Context);
  const [inputData,setInputData]=useState({
    title:'',
    price:'',
    description:'',
    category:'',
    image:''

  })

  useEffect(() => {
    fetch('https://fakestoreapi.com/products',{
        method:"POST",
        body:JSON.stringify(
            {
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            }
        )
    })
        .then(res=>res.json())
        // .then(json=>console.log(json))
  }, []);
  const onChangeInput=(e:string[])=>{
    const {name,value}=e.target
    // console.log(name,value)
    setInputData(pre=> ({...pre, [name]: value}))
}
const Submitted=(e:string)=>{
    e.preventDefault()
    console.log(inputData)
}


  return (
    <div>
      <section className="body-font relative bg-gray-900 text-gray-400  justify-center items-center flex w-full">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-12 flex w-full flex-col text-center">
            <h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">
              Add New Product
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              Feel to free add any new product in it.
            </p>
          </div>

          <form className="mx-auto md:w-2/3 lg:w-1/2"  onSubmit={Submitted}>
            <div className="-m-2 flex flex-wrap">
              <div className="w-1/2 p-2">
                <div className="relative">
                  <input 
                  id="title"
                    type="text"
                    name="title"
                    className="peer w-full rounded border border-whit bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                    placeholder="Name"
                    defaultValue={inputData.title}
                    onChange={onChangeInput}
                  />
                  <label htmlFor="title" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">
                    Title
                  </label>
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <input
                  id="price"
                    type="number"
                    name="price"
                    className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                    placeholder="Price"
                    defaultValue={inputData.price}
                    onChange={onChangeInput}
                  />
                  <label htmlFor="price" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">
                    Price
                  </label>
                </div>
              </div>
              <div className="mt-4 w-full p-2">
                <div className="relative">
                  <textarea
                    id="description"
                    name="description"
                    className="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                    placeholder="description"
                    defaultValue={inputData.description}
                    onChange={onChangeInput}
                  ></textarea>
                  <label htmlFor="description" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">
                    Description
                  </label>
                </div>
              </div>
              <div className="flex">
                <div className="mt-4 w-full justify-between p-2 flex">
                  <select  
                  id="category"
                  name="category"
                  defaultValue={inputData.category}
                    onChange={onChangeInput} className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900">
                    {categories1.map((val) => {
                      return (
                        <option key={val} className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">
                          {val}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className=" w-full p-2">
                  <div className="relative pl-4 mt-3">
                    <input
                    id="image"
                      type="file"
                      name="image"
                      value={inputData.image}
                      onChange={onChangeInput}
                      className="peer w-full rounded border border-whit bg-gray-800 bg-opacity-40 py-1   pl-7 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                    />
                  </div>
                </div>
                
              </div>
              <div className="w-full p-2">
              <button className="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none">Button</button>
            </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
