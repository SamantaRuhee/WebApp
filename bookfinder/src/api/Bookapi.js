import axios from 'axios';

const bookApi =axios.create({
    baseURL: "https://www.googleapis.com/"
});

const getBookData = (searchValue, setBook, startIndex, setTotalResults, sortTerm)=>{
    bookApi.get("/books/v1/volumes",{
        params:{
            q: searchValue,
            maxResults : 12,
            orderBy: sortTerm,
            startIndex : startIndex
        }
    }).then((response) =>{
        setBook(response.data.items);
        if(startIndex==0)
        setTotalResults(response.data.totalItems);
    })
}



export default getBookData;