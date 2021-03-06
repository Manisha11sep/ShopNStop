
module.exports ={

    addToLineItem: (req, res) => {
        console.log("insde line item endpoint")
        const{orderid}= req.body
        const{cart} = req.session.user
    console.log("inside line items,",cart)
        cart.forEach((e)=>{
        req.app.get('db').createLineItems(orderid,e.id,e.qty ).then( () => {
            console.log("Added to line item");
        }).catch(error=>console.log(error))
      })
         
          
      },



    allOrdersAdmin:(req,res,next) =>{
       const dbInstance=req.app.get('db');
       dbInstance.admin_getorders().then(orders=>res.status(200).send(orders))
       .catch(error=>console.log(error))
    },

    orderByUserId:(req,res,next)=>{
        const dbInstance = req.app.get('db')
        console.log("inside order by user id",req.session.user.userid)
        const{userid} = req.session.user
        //******************Hardcoding the user id as most of user id do not have a order except userid 13 */
        // const userid=13
        dbInstance.orderByUserId(userid).then(order=>res.status(200).send(order))
        .catch(error =>console.log(error))

    },
    
}