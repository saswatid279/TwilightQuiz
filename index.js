console.log("Welcome to this quiz on Twilight");
var readlineSync=require('readline-sync');
const chalk = require('chalk');
var userinput=readlineSync.question("Press e to quit,otherwise press any other key to play this quiz");
var uscore=0;
var username=readlineSync.question("Enter your name");
if(userinput.toLowerCase()=='e')
{
  console.log("You choose to quit");
  process.exit(0);
}
console.log("So you have decided to play the quiz.\nLet's see how much you can score.");
console.log(chalk.yellow("1 mark will be deducted for each wrong answer\n"));
var questions=[
  {
    "ques":"What instrument does Edward play?\na:Violin\nb:Piano\nc:Guitar\n",
    "ans":"b"
  },
  {
    "ques":"Which vampire was NOT turned by Carlisle Cullen?\na:Edward\nb:Alice\nc:Jasper\n",
    "ans":"c"
  },
  {
    "ques":"What is it called when werewolves change shape?\na:Phasing\nb:Transforming\nc:Shifting\n",
    "ans":"a"
  },
  {
    "ques":"According to Breaking Dawn, how many chromosomes does a vampire have?\na:23\nb:24\nc:25\n",
    "ans":"c"
  },
  {
    "ques":"Which Cullen voted against Bella becoming a vampire?\na:Jasper\nb:Rosalie\nc:Esme\n",
    "ans":"b"
  }
]

var highscores=[
    {
      "name":"Rick",
      "score":"5"
    },
    {
      "name":"Nick",
      "score":"4"
    },
]
function playquiz(question)
{
  var useranswer=readlineSync.question(question.ques);
  if(useranswer.toLowerCase()==question.ans)
  {
    console.log(chalk.green("You are right"));
    console.log(++uscore);
  }
  else
  {
    console.log(chalk.red("You are wrong"));
    console.log(--uscore);
  }
}
for(var i=0;i<questions.length;i++)
{
  playquiz(questions[i]);
}
console.log(chalk.bgRed("Your final score is "+uscore));
if(uscore==5)
console.log(chalk.green("You have beaten the highest score"));
else
console.log(chalk.red("You have not beaten the highest score"));
var newplayer={
      "name":username,
      "score":uscore
    }

highscores.push(newplayer);

var temp;
for(var j=0;j<highscores.length-1;j++)
{
  for(var n=0;n<highscores.length-j-1;n++)
  {
    if(highscores[n].score<highscores[n+1].score)
    {
      temp=highscores[n];
      highscores[n]=highscores[n+1];
      highscores[n+1]=temp;
    }
  }
}
console.log("Name"+"\t\t"+"Scores");
for(var j=0;j<highscores.length;j++)
{
  console.log(highscores[j].name+"\t\t\t"+highscores[j].score);
}

