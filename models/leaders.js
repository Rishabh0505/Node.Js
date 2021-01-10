const mongoose=require('mongoose');
const Schema=mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency=mongoose.Types.Currency;

var leaderSchema=new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image:{
        type: String,
        required: true,
       
        
    },
    designation: {
        type: String,
        default: ""
    },
    abbr: {
        type: Currency,
        required: true,
        
    },
    description: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        required: false
    }
}, {
    timestamps: true
});
var leaders = mongoose.model('Promotion',leaderSchema);

module.exports=leaders;