import React from 'react';
import { Link } from "react-router-dom";
import '../styles/cardstyle.css';


function BookCard(props) {
   
  return (
    <div className="col s12 m3">
    <div className="card text-center shadow">
      <div className="overflow">
        {props.image == null?(
          <img
          src="https://picsum.photos/200/300"
          alt=""
          style={{ width: "100", height: "200" }}
        />
      ) : (
        <img className="card-img-top"
        src={props.image}
        alt=""
        style={{ width: "300", height: "600" }} />)}
      </div>
      <div className="card-body text-dark">
      <span className="card-title " style= {{color:"green", fontSize: 15}}>Title:{props.title}</span>
      <br></br>
      <span className="card-content " style= {{color:"blue"}}>Author:{props.author}</span>
      <br></br>
      <span className="card-content" style= {{color:"darkgreen"}}>Published:{props.published}</span>
      
      <div class="card-action">
          <Link to={{pathname: "/bookDetails/" + props.title, title:props.title, author:props.author, published:props.published, image:props.image, description:props.description, props :props.props }}
            className="btn btn-outline-success"
          >See Details</Link>
                </div>
      </div>
    </div>
    </div>

           
  );
}

export default BookCard;