import Mailjet from "node-mailjet";

const mailjet = Mailjet.apiConnect(
  process.env.REACT_APP_MAILJET_API_KEY,
  process.env.REACT_APP_MAILJET_SECRET_KEY
);

export const sendEmail = (toEmail, subject, text) => {
  return mailjet
    .post("send", { version: "v3.1" })
    .request({
      Messages: [
        {
          From: {
            Email: "your-email@domain.com",
            Name: "Your Name",
          },
          To: [
            {
              Email: toEmail,
              Name: "Recipient Name",
            },
          ],
          Subject: subject,
          TextPart: text,
        },
      ],
    })
    .then((result) => {
      console.log(result.body);
      return result.body;
    })
    .catch((err) => {
      console.error(err.statusCode);
      throw err;
    });
};

export const fetchEmails = (email) => {
  return Promise.resolve([
    { text: "This is a previous message", timestamp: new Date() },
    { text: "This is another message", timestamp: new Date() },
  ]);
};
