import React from "react";
import { Link } from "react-router-dom";
import Metadata from "../Components/Metadata";

const NotFound = () => {
  return (
   <>
    <Metadata title="Page not found | RangMohey" />
  <section className='contactSection'>
<div className="container">
  <div className="row text-center">
<p className='mt-5'>Oops! The page you’re looking for doesn’t exist.
</p>
</div>
<div className="text-center py-5">
<Link to="/" className="commonButton">
        Go Back to Home
      </Link>
      </div>

 
 
</div>
  </section>
   </>
  );
};

export default NotFound;