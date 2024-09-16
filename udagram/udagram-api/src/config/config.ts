import * as dotenv from 'dotenv';
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: `${process.env.POSTGRES_USERNAME}` || 'postgres',
  password: process.env.POSTGRES_PASSWORD ||'myPassword',
  database: process.env.POSTGRES_DB || 'postgres',
  host: process.env.POSTGRES_HOST || 'udagramdb.c4wf1rash89b.us-west-2.rds.amazonaws.com',
  aws_region: process.env.AWS_REGION || 'us-west-2',
  aws_profile: process.env.AWS_PROFILE || 'default',
  aws_media_bucket: process.env.AWS_BUCKET || 'arn:aws:s3:::mybucket033212455159',
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET || 'mysecretstring',
  },
};
