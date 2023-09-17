const request = require('request');

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// Function to count completed tasks for each user
function countCompletedTasksByUser(tasks) {
  const completedTasksByUser = {};

  tasks.forEach(task => {
    if (task.completed) {
      if (!completedTasksByUser[task.userId]) {
        completedTasksByUser[task.userId] = 1;
      } else {
        completedTasksByUser[task.userId]++;
      }
    }
  });

  return completedTasksByUser;
}

// Make a request to the API
request(apiUrl, { json: true }, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('API returned a non-200 status code:', response.statusCode);
  } else {
    const completedTasks = countCompletedTasksByUser(body);

    // Print users with completed tasks
    for (const userId in completedTasks) {
      console.log(`${userId}: ${completedTasks[userId]}`);
    }
  }
});
