import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import home from "./pages/Home";
import search from "./pages/Search";
import articles from "./pages/Articles";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import {/* getCookie, */ authenticateUser} from "./utils/handleSessions";


class App extends React.Component {

// new code starts here //

 render(){
    return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={home}/>
          <Route exact path="/search" component={search} />
          <Route exact path="/articles" component={articles} />
          <Route component={NoMatch} />
        </Switch>
      </div>
  //   </Router>
  )}
}


// new code ends here //

  // check cookie
  // getCookie();

  // state = {
  //   authenticated: false,
  //   loading: false
  // }

  // authenticate = () => authenticateUser()
  //   .then(auth => this.setState({authenticated: auth.data, loading:false}))
  //   .catch(err => console.log(err))

  // componentWillMount(){
  //   this.authenticate();
  // }
  
  // PrivateRoute = ({ component: Component, ...rest }) => (
  //   <Route {...rest} render={  (props) => (
  //     this.state.authenticated === true 
  //       ? <Component {...props} />
  //       : this.state.loading === true
  //         ?<div></div>
  //         : <Redirect to='/' />
  //   )} />
  // )

  // render(){
  //   return (
  //   <Router>
  //     <div>
  //       <Nav />
  //       <Switch>
  //         <Route exact path="/" render={(props) => <Login {...props} authenticate={this.authenticate} authenticated={this.state.authenticated} />} />
  //         <Route exact path="/signup"  render={(props) => <Signup {...props} authenticate={this.authenticate} authenticated={this.state.authenticated} />} />
  //         <this.PrivateRoute exact path="/articles" component={articles} />
  //         <Route component={NoMatch} />
  //       </Switch>
  //     </div>
//   //   </Router>
//   )}
// }

export default App;
