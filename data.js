window.review = [
  {
    name: "Alex Smith",
    date: "2023-Jan-23",
    rating: 5,
    text: "Very good game, have to play once in a life time",
  },
  {
    name: "The Dodo",
    date: "2000-Feb-13",
    rating: 4,
    text: "Truly a hidden gem",
  },
  {
    name: "Noob",
    date: "2020-Aug-2",
    rating: 1,
    text: "trash, I kept dyin. too hard not fun",
  },
  {
    name: "GodHAnd",
    date: "2023-Aug-30",
    rating: 1,
    text: "Too easy, wish it was harder but it was fun",
  },
  {
    name: "Nobody",
    date: "2023-Oct-10",
    rating: 5,
    text: "Thank you, I really liked the game",
  },
];

const { review } = window;

const reviewbox = document.getElementById("reviewbox");

function createreviewCard(reviews) {
  const reviewContainer = document.createElement("div");
  reviewContainer.classList.add("review-box");

  reviews.forEach((review) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const details = document.createElement("div");
    details.classList.add("desc");
    const name = document.createElement("h2");
    name.classList.add("title");
    const date = document.createElement("time");
    date.classList.add("date");
    const rating = document.createElement("span");
    rating.classList.add("stars");
    const text = document.createElement("p");

    text.classList.add("text");
    const numStar = stars(review.rating);
    name.innerText = review.name;
    date.innerText = review.date;
    rating.innerHTML = numStar;
    text.innerText = review.text;
    reviewbox.appendChild(card);

    card.appendChild(details);
    details.appendChild(name);
    details.appendChild(date);
    details.appendChild(rating);
    details.appendChild(text);
  });

  return reviewbox;
}

function stars(rating) {
  const fullStar = "\u2605";
  const emptystar = "\u2606";
  const maxstar = 5;

  const fullStarsCount = Math.floor(rating);
  const emptyStarsCount = maxstar - fullStarsCount;
  const starsHTML =
    fullStar.repeat(fullStarsCount) + emptystar.repeat(emptyStarsCount);
    
  
  return starsHTML;
}

createreviewCard(window.review);

function addReview(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const rating = parseInt(document.getElementById("rating").value);
  const text = document.getElementById("comment").value;
const formattedDate=formatDate(date);
  window.review.push({
    name: name,
    date: formattedDate,
    rating: rating,
    text: text,
  });
  document.getElementById("reviewform").reset();

  const reviewbox = document.getElementById("reviewbox");
  reviewbox.innerHTML = "";
  createreviewCard(window.review);
}
function formatDate(inputDate) {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const dateParts = inputDate.split("-");
  const year = dateParts[0];
  const month = months[parseInt(dateParts[1]) - 1];
  const day = dateParts[2];

  return `${year}-${month}-${day}`;
}