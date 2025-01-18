import React from 'react'
import "./Category.css"
import { useParams } from "react-router-dom";
import Metadata from '../../Components/Metadata';

const Category = () => {
    const { categoryName } = useParams(); 
console.log(categoryName)
    const categories = {
        lehngas: [
          "/assets/card1.jpg",
          "/assets/card2.jpg",
          "/assets/card3.jpg",
        ],
        indowestern: [
          "/assets/card1.jpg",
          "/assets/card2.jpg",
          "/assets/card3.jpg",
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
        <div className="col-md-4 mb-4" key={index}>
          <div className="card">
            <img
              src={image}
              className="card-img-top img-fluid"
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