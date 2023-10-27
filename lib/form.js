const form = (title, message) => {
  return `
    <h3>You have a new Email</h3>
    <p>${title}</p>  
    <h3>Message</h3>
    <p>${message}</p>
    `;
};

module.exports = {
  form,
};
