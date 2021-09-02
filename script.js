let inspirationalQuotes = [
   `When you want to succeed as bad as you want to breathe then youll be successful.`,
   `Pain is temporary. It may last for a minute, or an hour or a day, or even a year. 
   But eventually, it will subside. And something else takes its place. 
   If I quit, however, it will last forever.`,
   `The most important thing is this: To be able at any moment, to sacrifice 
   what you are, for what you will become!`,
   `Everybody has a dream, but not everybody has a grind.`

];

let randomNumber = Math.floor(Math.random() * 3);
let quote = inspirationalQuotes[randomNumber];
console.log(quote);