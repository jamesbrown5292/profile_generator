const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  console.log(`Nice to meet you, ${answer} `);
  rl.question('What\'s an activity you like doing? ', (activity) => {
    console.log('Sounds fun!');
    rl.question('What do you listen to while doing that? ', (music) => {
      console.log('Nice.');
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {
        console.log('Wow! Me too');
        rl.question('What\'s your favourite thing to eat for that meal?' , (food) => {
          console.log('Mmmmm. Delicious. ');
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            console.log('Cool.');
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (power) => {
              console.log('That\'s interesting! ');
              console.log(`${answer} loves listening to ${music} while ${activity}, \ndevouring ${food} for ${meal}, prefers ${sport} over any other sport, \nand is amazing at ${power}. `);
              rl.close();
            });
          });
        });
      });
    });
  });
});



