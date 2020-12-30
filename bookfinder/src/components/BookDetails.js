import React from 'react';
import {Link} from "react-router-dom";


const BookDetails = (props) => {
   return( <div>
    <div class="row">
      <div class="col s12 m7">
        <div class="card" >
              <img
                src={props.location.image}
                alt=""
                style={{ width: '110%', height: "600" }}
              />
            <div style={{backgroundColor:'white',width:600, height:200}}>
            <span class="card-title">{props.location.title}</span>
            <span class="card-title">{props.location.author}</span>
            <span class="card-title">{props.location.published}</span>
          <div class="card-content">
            <p>{props.location.description}</p>
          </div>
          <div class="card-action">
            <Link to={{pathname: "/" , books:props.location.props}}>Go to search page!</Link>
          </div>
        </div>
          </div>
      </div>
    </div>
  </div>
   )

}

export default BookDetails;