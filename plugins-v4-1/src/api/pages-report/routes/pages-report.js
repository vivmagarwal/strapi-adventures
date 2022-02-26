module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/pages-report',
     handler: 'pages-report.findAll',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
