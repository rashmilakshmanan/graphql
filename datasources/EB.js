// const { RESTDataSource } = require('apollo-datasource-rest');
// const axios = require("axios");
// // const endpoint = "https://cip-1621266427-iam-sit.aipacn.com/xaas/enabler/producer/1.0.0/publish";
// // const headers = {
// // 	"content-type": "application/json",
// //     "Authorization": "Bearer b57742c5-4a0a-367a-9c3c-5b18e67a6eb7"
// // };
// // const graphqlQuery = {
// //     "operationName": "publishAPI",
// //     "query": `query publishAPI { author { id name } }`,
// //     "variables": {}
// // };
// const config = {
//     headers:{
//         "content-type": "application/json",
//         "Authorization": "Bearer b57742c5-4a0a-367a-9c3c-5b18e67a6eb7"
//     }
//   };
//   const url = "https://cip-1621266427-iam-sit.aipacn.com/xaas/enabler/producer/1.0.0/publish";
// class UserService extends RESTDataSource {
//   constructor() {
//     super();
//    // this.baseURL = 'https://sample-poc-8a5f.vercel.app/api';
//    this.baseURL='http://localhost:8000'
//   }
 
// //const express = require("express");
// //const app = express();
// //const axios = require("axios").create({baseUrl: "https://cip-1621266427-iam-sit.aipacn.com/xaas/enabler/producer/1.0.0"});
// async publishEvent(event,Authorization){
//         try{
//             const data =event
//         const response = await axios.post(url, data, config)
//         .then(res => console.log(res))
//         .catch(err => console.log(err))

// // async publishEvent(event,Authorization){
// //     try{
// //     const response = await axios.request({
// //         'method':'POST',
// //         'url':`https://cip-1621266427-iam-sit.aipacn.com/xaas/enabler/producer/1.0.0/publish`,
// //         'data':dataString
// //     });
// //     console.log(response.data);
// //     return{success:true};
// // }
// // catch(err){
// //     console.log(err);
// //     return{success:false}
// // }


// //   }

// // const response = axios({
// //   url: endpoint,
// //   method: 'post',
// //   headers: headers,
// //   data: graphqlQuery
// // });

// // console.log(response.data); // data
// // console.log(response.errors); // errors if any