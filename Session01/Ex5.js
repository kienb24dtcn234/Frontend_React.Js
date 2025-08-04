let response = {
  data: {
    id: 1,
    title: "Destructuring in JavaScript",
    author: {
      name: "Dev",
      email: "Dev@gmail.com",
    },
  },
};

function extractData(response) {
  let { title, author } = response.data;
  let { name: authorName, email: authorEmail } = author;

  console.log(title);
  console.log(authorName);
  console.log(authorEmail);
}

extractData(response);