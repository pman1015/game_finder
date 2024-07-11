import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

const domain = process.env.CORS_DOMAIN;
const regex = new RegExp(`http.*:\/\/.*${domain}`);

if (!domain && !process.env.DEV_MODE) {
  console.error('CORS_DOMAIN is not defined in .env file');
  process.exit(1);
}
if (!process.env.DEV_MODE) {
  if (!domain) {
    console.error('CORS_DOMAIN is not defined in .env file');
    process.exit(1);
  }
  app.use(
    cors({
      origin: function (origin, callback) {
        console.log(origin);

        if (origin.match(regex)) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
    })
  );
}
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
