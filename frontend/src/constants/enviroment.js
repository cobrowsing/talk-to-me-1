export const API_URL = process.env.NODE_ENV === "production" ? 'http://ec2-54-67-17-253.us-west-1.compute.amazonaws.com' : 'http://localhost';
export const API_PORT = process.env.NODE_ENV === "production" ? 80 : 3000;
export const isMobile = window.innerWidth < 600 ? true : false;