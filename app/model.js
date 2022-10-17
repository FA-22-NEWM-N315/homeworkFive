let cart = [];

let bookLists = {
  BOOKSETS: [
    {
      bookTitle: "Twilight",
      bookAuthor: "Stephenie Meyer",
      bookImg: "twilight.jpg",
      price: "$99.99",
      bookID: 0,
    },
    {
      bookTitle: "Harry Potter",
      bookAuthor: "J.K Rowling",
      bookImg: "hp-box-set.jpg",
      price: "$100",
      bookID: 1,
    },
    {
      bookTitle: "A Song of Ice and Fire",
      bookAuthor: "George RR Martin",
      bookImg: "got-box-set.jpg",
      price: "$100",
      bookID: 2,
    },
  ],

  HISTORY: [
    {
      bookTitle: "Finding Me",
      bookAuthor: "Viola Davis",
      bookImg: "finding-me.jpg",
      price: "$27.99",
      bookID: 3,
    },
    {
      bookTitle: "The Autobiography of Martin Luther King Jr.",
      bookAuthor: "Clayborne Carson",
      bookImg: "mlk-biography.jpg",
      price: "$19.99",
      bookID: 4,
    },
    {
      bookTitle: "The Autobiography of Eleanor Roosevelt",
      bookAuthor: "Eleanor Roosevelt",
      bookImg: "elenor-roosevelt-biography.jpg",
      price: "$17.99",
      bookID: 5,
    },
  ],

  HORROR: [
    {
      bookTitle: "Misery",
      bookAuthor: "Stephen King",
      bookImg: "misery.jpg",
      price: "$19.99",
      bookID: 6,
    },
    {
      bookTitle: "Frankenstein",
      bookAuthor: "Mary Shelley",
      bookImg: "frankenstein.jpg",
      price: "$15.99",
      bookID: 7,
    },
    {
      bookTitle: "Phantoms",
      bookAuthor: "Dean Koontz",
      bookImg: "phantoms.jpg",
      price: "$19.99",
      bookID: 8,
    },
  ],

  CHILDREN: [
    {
      bookTitle: "Winnie The Pooh",
      bookAuthor: "Ernest H. Shepard",
      bookImg: "winnie.jpg",
      price: "$19.99",
      bookID: 9,
    },
    {
      bookTitle: "The Cat In The Hat",
      bookAuthor: "Dr.Seuss",
      bookImg: "cat.jpg",
      price: "$15.99",
      bookID: 10,
    },
    {
      bookTitle: "Fun Facts About Space",
      bookAuthor: "Baby Professor",
      bookImg: "fun-facts-about-space.jpg",
      price: "$7.99",
      bookID: 11,
    },
  ],
};

export function changePage(pageID, callback) {
    // let page = pageID + "Content";
    console.log("page " + pageID);
    $.get(`pages/${pageID}.html`, function(data) {
        console.log(data);
        $("#app").html(data); 
    }).fail((error) => {
        if(error.status == "404") {
            alert("Page can not be found. Please check your url.");
        }
        console.log("error", error.status);
    });
    

    if (pageId == "books") {
        $.get(`pages/${pageId}.html`, function (data) {
          $("#app").html(data);
          $.each(bookLists, function (bookList) {
            $(".allBooks").append(` <div class="novels">
              <h3>${bookList}</h3>
            </div>
            <div class="allnovel"></div>`);
    
            // bookLists is an object, categories are defined as attributes of the object
            // bookList is the attribute/category of bookLists, to access the attribute of an object, use [] or . operator
            const booksUnderOneCategory = bookLists[bookList];
            // books under a category are organized as an array
            for (let i = 0; i < booksUnderOneCategory.length; i++) {
              const book = booksUnderOneCategory[i];
              // one book is defined as an object, use [] or . operator to access its attributes
              console.log(`Title: ${book.bookTitle}, Price: ${book.price}`);
            }
    
            $.each(booksUnderOneCategory, function (idx) {
              const book = booksUnderOneCategory[idx];
              $(".allnovel:last").append(`
                      <div class="novelinfo">
                        <div class="novel-info">
                        <img src="images/${book.bookImg}" alt=""/>
                          <!--div class="novel-image">
                          </div -->
                          <div class="text-novel">
                            <div class="novel-text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              Netus et malesuada fames ac.
                            </div>
                            <div class="price">
                              <h6>${book.price}</h6>
                            </div>
      
                            <button class="add" id="${book.bookID}" type="button">ADD TO CART</button>
                          </div>
                        </div>
                      `);
            });
          });
        });
        callback();
      } else if (pageId == "cart") {
        $.get(`pages/${pageId}.html`, function (data) {
          $("#app").html(data);
          $.each(cart, function (idx, bookId) {
            console.log(`book in cart: {cart index: ${idx}, bookID: ${bookId}}`);
            // look up the book added to cart in bookLists based on bookID
            let bookInCart = null;
            for (let attr in bookLists) {
              let booksOfOneCategory = bookLists[attr];
              bookInCart = booksOfOneCategory.find((book) => book.bookID == bookId);
              if (bookInCart != null) break;
            }
            console.log(bookInCart);
            $("#booksInCart").append(`<div class="book">
              <div class="bookImage"><img src="images/${bookInCart.bookImg}" alt="" /></div>
              <div class="bookInfo">
                <h4>${bookInCart.bookTitle}</h4>
                <p>${bookInCart.bookAuthor}</p>
                <p>${bookInCart.price}</p>
                <p>Quantity: 1</p>
              </div>
              </div>`);
          });
        });
      } else {
        let page = pageId + "Content";
        $("#app").html(eval(page));
      }
}

export function addToCart(bookID) {
    cart.push(bookID);
  }
  
