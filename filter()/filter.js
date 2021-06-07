// create a function that filters an array of objects to find hotels rated at least N stars or higher

const data = [
    {
        name: 'Hilton',
        rating: 4.7
    },
    {
        name: 'Best Western',
        rating: 3.8
    },
    {
        name: 'Bob\'s Hotel',
        rating: 2.5
    },
    {
        name: 'Marriot',
        rating: 4.2
    }
];

function filterByRating(data, ratingMinimum, ratingMaximum) {
    data = data.filter(data => data.rating >= (ratingMinimum ?? 0));
    data = data.filter(data => data.rating <= (ratingMaximum ?? 5));
    return data;
}

const hotelsWithAtLeast4Stars = filterByRating(data, 4);
console.log(hotelsWithAtLeast4Stars);
// OUTPUT
// [{ name: 'Hilton', rating: 4.7 }, { name: 'Marriot', rating: 4.2 } ]

const hotelsWithAtLeast3Stars = filterByRating(data, 3);
console.log(hotelsWithAtLeast3Stars);
// OUTPUT
// [
//     { name: 'Hilton', rating: 4.7 },
//     { name: 'Best Western', rating: 3.8 },
//     { name: 'Marriot', rating: 4.2 }
//   ]

const hotelsBetween3and4Stars = filterByRating(data, 3, 4);
console.log(hotelsBetween3and4Stars);
// OUTPUT
// [ { name: 'Best Western', rating: 3.8 } ]

const hotelsWith3orLessStars = filterByRating(data, null, 3);
console.log(hotelsWith3orLessStars);
// OUTPUT
// [ { name: "Bob's Hotel", rating: 2.5 } ]