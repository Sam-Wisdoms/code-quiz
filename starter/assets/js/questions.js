export const questions = [
  {
    question: 'Which is an incorrect way to declare a variable in JavaScript?',
    options: ['var x = 5;', 'variable x = 5;', 'let x = 5;', 'const x = 5;'],
    answer: 'variable x = 5;'
  },
  {
    question: 'Which function is used to print content to the console?',
    options: ['console.log()', 'log.console()', 'print()', 'display()'],
    answer: 'console.log()'
  },
  {
    question: 'What does the "DOM" stand for in web development?',
    options: ['Data Object Model', 'Dynamic Object Model', 'Document Object Model', 'Design Object Model'],
    answer: 'Document Object Model'
  },
  {
    question: 'How do you comment a single line in JavaScript?',
    options: ['/* This is a comment */', '// This is a comment', '# This is a comment', '-- This is a comment'],
    answer: '// This is a comment'
  },
  {
    question: 'What does the "=== operator" do in JavaScript?',
    options: [
      'Checks for equality with type conversion',
      'Assigns a value to a variable',
      'Concatenates two strings',
      'Compares values without type conversion'
    ],
    answer: 'Compares values without type conversion'
  },
];

// for (let i = 0; i < questions.length; i++) {
//   const newDiv = document.createElement('div');
//   newDiv.classList.add('new-class');
//   newDiv.innerHTML = `<h1 id = "question-title">${questions[i].question}</h1>
//   <ol>
//     <li class = "optionsClass">${questions[i].options.length}</li>
//   </ol>`;

// document.getElementById('questions').appendChild(newDiv);
// }




  // console.log(questions)