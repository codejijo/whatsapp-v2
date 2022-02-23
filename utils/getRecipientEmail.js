const getRecipientEmail = (users, userLoggedIn) =>
  users?.filter((toFilter) => toFilter !== userLoggedIn?.email)[0];

export default getRecipientEmail;
