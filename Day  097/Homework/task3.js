// ფილმის (movie) ობიექტი
// შექმენით movie ობიექტი, რომელსაც აქვს შემდეგი თვისებები და მეთოდი:

 
// title: ფილმის სათაური.

 
// director: რეჟისორის სახელი.

 
// releaseYear: გამოქვეყნების წელი.

 
// duration: ფილმის ხანგრძლივობა წუთებში.

 
// getMovieInfo: მეთოდი, რომელიც დააბრუნებს ფილმის მონაცემებს ტექსტის სახით.



const movie = {
    title : "harry potter",
    diewctor : "ilia kviciani",
    releaseYear : 2021,
    duration : 120,
    getMovieInfo : function(){
        return this.title + " " + this.diewctor + " " + this.releaseYear + " " + this.duration
    }
}