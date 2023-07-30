var db = require("./query");

module.exports = {

    insertMany:function(collection,dataToInsert){
        return new Promise(async function(resolve,reject){
            // data = [
            //     {
            //       item: 'journal',
            //       qty: 25,
            //       size: { h: 14, w: 21, uom: 'cm' },
            //       status: 'A'
            //     },
            //     {
            //       item: 'notebook',
            //       qty: 50,
            //       size: { h: 8.5, w: 11, uom: 'in' },
            //       status: 'A'
            //     },
            //     {
            //       item: 'paper',
            //       qty: 100,
            //       size: { h: 8.5, w: 11, uom: 'in' },
            //       status: 'D'
            //     },
            //     {
            //       item: 'planner',
            //       qty: 75,
            //       size: { h: 22.85, w: 30, uom: 'cm' },
            //       status: 'D'
            //     },
            //     {
            //       item: 'postcard',
            //       qty: 45,
            //       size: { h: 10, w: 15.25, uom: 'cm' },
            //       status: 'A'
            //     }
            //   ]
            // data = [{ "_id": 1, "product": "A", "quantity": 10, "price": 5 },
            // { "_id": 2, "product": "B", "quantity": 5, "price": 10 },
            // { "_id": 3, "product": "A", "quantity": 7, "price": 8 },
            // { "_id": 4, "product": "C", "quantity": 3, "price": 15 },
            // { "_id": 5, "product": "B", "quantity": 12, "price": 7 }
            // ]
            data = [
                {
                  _id: '19990097',
                  name: 'House close to station & direct to opera house....',
                  accommodates: 16
                },
                { _id: '19587001', name: 'Kaena O Kekai', accommodates: 16 },
                {
                  _id: '20958766',
                  name: 'Great Complex of the Cellars',
                  accommodates: 25
                },
                {
                  _id: '12509339',
                  name: 'Barra da Tijuca beach house',
                  accommodates: 22
                },
                {
                  _id: '20455499',
                  name: 'DOWNTOWN VIP MONTREAL ,HIGH END DECOR,GOOD VALUE..',
                  accommodates: 30
                }
              ]
              try {
                const database = await db.connectDB();
                const result = await database.collection(collection).insertMany(data);
                resolve(result);
              } catch (error) {
                reject(error);
              }
        })
    }
}



// db.inventory.find({$and:[{qty:{$gte:25}},{status:"A"}]})
// db.posts.aggregate([])
// db.hotels.aggregate([ 
//     { 
//       $sort: { "accommodates": -1 } 
//     },
//     {
//       $project: {
//         "name": 1,
//         "accommodates": 1
//       }
//     },
//     {
//       $limit: 5
//     }
//   ]) 