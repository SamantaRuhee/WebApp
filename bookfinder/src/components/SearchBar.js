import React from 'react';
import { Button,} from 'semantic-ui-react';


function SearchBar(props) {
  return (
    <div className = "container">
      <div className = "row">     
        <section className = "col  s6 offset-s4">
          <form action = "" onSubmit = {props.handleSubmit}>
          <div className="col s6 " style={{backgroundColor:'white'}}>
            <input placeholder = "Search for Book" 
            type = "text" 
            onChange = {props.handleSearch}/>
          </div>  
          <div className="col s3 r3">
            <Button color='white' type = "submit" >submit</Button>
          </div>
          <div className="col s3 pull-s1">
            <select color = "black"  className="browser-default dropdown select-css" defaultValue = "Sort" onChange = {props.handleSort}>
              <option disabled value = "Sort">Sort</option>
              <option value = "Newest">Newest</option>
              <option value = "Oldest">Oldest</option>
              <option value = "Ascending">A-Z</option>
              <option value = "Descending">Z-A</option>
            </select>
          </div> 
          </form>
        </section>
      </div>
    </div>
  );
}

export default SearchBar;