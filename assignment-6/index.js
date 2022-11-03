//project note:
// please search book name like: python, javascript.
// in case of miss match search I tried to show a error text "plese try to type correct books name" by using .catch(error => displayError(error)); but i did not found expected result.






document.getElementById('error-message').style.display = 'none';
const loadSingleUser = () => {
    const searchField = document.getElementById('search-text');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';
    document.getElementById('error-message').style.display = 'none';


    // load data
    const url = `https://openlibrary.org/search.json?q=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => book(data.docs))
        .catch(error => displayError(error));

}


const book = bookName => {
    //console.log(bookName);
    // book amount found part.
    const bookTotal = document.getElementById("book-amount");
    const bookp = document.createElement('p');
    bookp.innerHTML = bookName.length + ' books found';
    bookTotal.appendChild(bookp);

    //book details part
    const bookField = document.getElementById("book-details");
    bookName.forEach(books => {


        const bookDiv = document.createElement("div");
        bookDiv.classList.add('check');
        bookDiv.innerHTML = `<img src="covers.openlibrary.org/b/id/${books.cover_i}-M.jpg" > <br>
        <style>
        .bonous{
            
            display:flex;
            justify-content: space-around;
        }
        </style>
        <div class="bonous">
        <p> Book Cover id:${books.cover_i}</p>
        <p> Author Name: ${books.author_name[0]}</p>
        </div>
        <p> Book Name:${books.title}</p>
        <p> First Publish :${books.first_publish_year}</p>
        <p> Publisher :${books.publisher[0]}</p>`;
        bookField.appendChild(bookDiv);


    });
    // ${ books.cover_i }

}

const displayError = error => {
    document.getElementById('error-message').style.display = 'block';
}


