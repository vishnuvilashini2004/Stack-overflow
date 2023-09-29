import  Razorpay from 'razorpay';
import  crypto from "crypto";
const RAZORPAY_KEY_ID = 'rzp_test_j44SRCoxhCji7e'
const RAZORPAY_SECRET_KEY = 'EMRDK7JsIO23xocuaZJCeC2S'

const orders = (req, res) => {

    let instance = new Razorpay({ key_id: RAZORPAY_KEY_ID, key_secret: RAZORPAY_SECRET_KEY })

    var options = {
        amount: req.body.amount * 100,  // amount in the smallest currency unit
        currency: "INR",
    };

    instance.orders.create(options, function (err, order) {
        if (err) {
            return res.send({ code: 500, message: 'Server Err.' })
        }
        return res.send({ code: 200, message: 'order created', data: order })
    });
}


const verfiy = (req, res) => {


    let body = req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;

    var expectedSignature = crypto.createHmac('sha256', RAZORPAY_SECRET_KEY)
        .update(body.toString())
        .digest('hex');

    if (expectedSignature === req.body.response.razorpay_signature) {
        res.send({ code: 200, message: 'Sign Valid' });
    } else {

        res.send({ code: 500, message: 'Sign Invalid' });
    }
}

export {orders, verfiy}