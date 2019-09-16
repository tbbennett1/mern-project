const ItemSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	price: {
		type: Number,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: false
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Item = mongoose.model('item', ItemSchema);