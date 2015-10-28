var mongoose = require('mongoose');
var personSchema = new mongoose.Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: "",
        trim: true
    },
    name: {
        type: String,
        default: "",
        trim: true,
        required: "Name cannot be blank"
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model("Person", personSchema);
