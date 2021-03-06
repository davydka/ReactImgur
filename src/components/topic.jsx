var React = require('react');
var Actions = require('../actions');
var Reflux = require('reflux');

var ImageStore = require('../stores/image-store');

module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(ImageStore, 'onChange')
	],

	getInitialState: function(){
		return {
			images: []
		}
	},

	componentWillMount: function(){
		Actions.getImages(this.props.params.id);
	},

	render: function(){
		return <div>

		</div>
	},

	onChange: function(event, images){
		this.setState({
			images: images
		})
	}
});