import React from 'react'
import "./Category.css"
import { useParams } from "react-router-dom";
import Metadata from '../../Components/Metadata';

const Category = () => {
    const { categoryName } = useParams(); 
console.log(categoryName)
    const categories = {
        lehngas: [
          "/assets/product/only models-01.png",
          "/assets/product/only models-07.png",
          "/assets/product/only models-08.png",
          "/assets/product/only models-09.png",
          "/assets/product/only models-10.png",
          "/assets/product/only models-11.png",
          "/assets/product/only models-12.png",
         
        ],
        indowestern: [
          "/assets/product/only models-02.png",
          "/assets/product/only models-03.png",
          "/assets/product/only models-04.png",
          "/assets/product/only models-05.png",
          "/assets/product/only models-06.png",
          "/assets/product/only models-13.png",
          "/assets/product/only models-14.png",
          "/assets/product/only models-15.png",
          "/assets/product/only models-16.png",
          "/assets/product/only models-18.png",
        ],
      };
  return (
    <>
     <Metadata title = {`${categoryName} | RangMohey`} />
    <section className="categoryBackground">
    <div className="container mt-5 pb-5">
    <h1 className="text-center mb-5 display-5">
      {categoryName}
    </h1>
    <div className="row">
      {categories[categoryName]?.map((image, index) => (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
          <div className="card bg-transparent border-0">
            <img
              src={image}
              className="card-img-top img-fluid w-100"
              style={{ height: "450px", objectFit: "cover" }} 
              alt={`${categoryName}-${index}`}
            />
          </div>
        </div>
      )) || (
        <p className="text-center">No items found for this category.</p>
      )}
    </div>
  </div>
  </section>
  </>
);
  
}

export default Category