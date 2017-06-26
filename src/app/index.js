var React = require('react');
var ReactDOM = require('react-dom');

require('./css/style.css');

//Create Friends List component
var FriendComponent = React.createClass({
  getInitialState: function(){
    return {
      friends: []
    };
  },
  componentDidMount: function() {
    fetch('http://rest.learncode.academy/api/johnbob/friends').then(function(data){
      return data.json();
    }).then( json => {
      this.setState({
        friends: json
      });
    });
  },
  render: function() {
    var friend = this.state.friends;
    friend = friend.map(function(item, i){
      return(
        <div className="col-md-3" key={i}>
          <form>
            <label>Name:</label><span className="clearfix">{item.name}</span>
            <label>Age:</label><span className="clearfix">{item.age}</span>
            <div className="btnContainer">
              <input type="submit" className="btn btn-primary" value="Edit"/>
              <input type="submit" className="btn btn-delete" value="Delete"/>
            </div>
          </form>
        </div>
      );
    });

    return(
      <div className="container">
        {friend}
      </div>
    );
  }
});

ReactDOM.render(<FriendComponent />, document.getElementById('FriendsApp'));
