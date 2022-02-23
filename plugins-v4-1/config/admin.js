module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '00e79cc356295ee478670fe106a779da'),
  },
});
