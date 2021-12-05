console.log("Quiz");

var kbc = {
    question_list: [
    {
        numb: '1',
        text: "What does HTML stand for?",
        correct_answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language",
            ],
        price_amount: "1000",
    },
    {
        numb: '2',
        text: "Which one of the following also known as Conditional Expression:",
        correct_answer: "Hyper Text Markup Language",
        options: [
            "Alternative to if-else",
            "Switch statement",
            "If-then-else statement",
            "Hyper Tool Multi Language",
            ],
        price_amount: "5000",
    },
    {
        numb: '3',
        text: "What does HTML stand for?",
        correct_answer: "immediate if",
        options: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "immediate if",
            ],
        price_amount: "10000",
    },
    {
        numb: '4',
        text: "What does HTML stand for?",
        correct_answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language",
            ],
        price_amount: "20000",
    },
    {
        numb: '5',
        text: "What does HTML stand for?",
        correct_answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language",
            ],
        price_amount: "40000",
    },
    {
        numb: '6',
        text: "What does HTML stand for?",
        correct_answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language",
            ],
        price_amount: "80000",
    },
    {
        numb: '7',
        text: "What does HTML stand for?",
        correct_answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language",
            ],
        price_amount: "100000",
    },
  ],

  winning_prize: function (question_list, current) {
    var price = this.question_list[current].price_amount;
    return price;
  }, //The total amount which the player has won. //need to calculate.

  current_question_no: function (num) {
    return num;
  },
  print_question: function (question_list, val) {
    console.log(this.question_list[val].numb);
    console.log(this.question_list[val].text);
    console.log(this.question_list[val].options);
  },

  select_answer: function (real_ans, answer) {
    if (real_ans.toLowerCase() == answer.toLowerCase()) {
      console.log("correct answer");
      return true;
    } else {
      console.log("Wrong answer");
      return false;
    }
  }, 

  main_fun: function () {
    var final_price = 0;

    for (var i = 0; i < kbc.question_list.length; i++) {
      var val = kbc.current_question_no(i);

      var answer = prompt("Enter the correct answer",kbc.print_question(kbc.question_list, val));
      var bool = kbc.select_answer(kbc.question_list[i].correct_answer, answer);
      if (bool == true) {
        final_price = kbc.winning_prize(kbc.question_list, val);
        console.log("Prize money till now", final_price);

        if (i == kbc.question_list.length - 1) {
          console.log("Congratulations!!! You have won", final_price);
        }
      } else {
        console.log("Better Luck next time ");
        break;
      }
    }
  },
};

kbc.main_fun();
