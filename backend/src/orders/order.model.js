const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure email is unique if needed
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address.'] // Regex for email validation
    },
    address: {
        city: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true, // Make country required
        },
        state: {
            type: String,
            required: true, // Make state required
        },
        zipcode: {
            type: String,
            required: true, // Make zipcode required
        },
    },
    phone: {
        type: String, // Change to String to handle leading zeros
        required: true,
    },
    productIds: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book',
            required: true,
        }
    ],
    totalPrice: {
        type: Number,
        required: true,
        min: [0, 'Total price cannot be negative.'] // Minimum value validation
    }
}, {
    timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
