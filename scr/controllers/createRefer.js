const connection = require('../../index')
const {main} = require('../utils')
const  createRefer =async (req , res )=>{

        const data = req.body;
        console.log(data);

        //  insert the data 
    //    const result =await connection.query(`
    //     INSERT INTO data (referrer_name ,referrer_email , referee_name , referee_email , referee_number , course_name)
    //     VALUES (? , ? , ? , ? ,? ,?)`
    //     , [data.referrer_name  , data.referrer_email , data.referee_name  ,data.referee_email , data.referee_number  , data.course_name  ])

    const sql = 'INSERT INTO data SET ?';
    connection.query(sql, data, (error, results) => {
        if (error) {
            console.error('Error inserting data:', error);
            if (!res.headersSent) {
                res.status(500).send('Error inserting data');
            }
        } 
        else {
            console.log('Data inserted successfully:', results);
            if (!res.headersSent) {
                res.send('Data received and inserted successfully');
            }
        }
        });
        
        // mail sender 
        
        main().catch(console.error) ; 
        
       return  res.send(`Data received successfully `);
    
};



module.exports = {createRefer};