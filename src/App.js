// TODO delete Layout
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import MyLoader from './components/Loader/Loader';
import { getIsLoading } from './redux/contacts/contacts-selectors';
import { authOperations } from './redux/auth';
import Container from './components/Container';
import AppBar from './components/AppBar';
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/contacts" component={ContactsView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
        </Switch>
        {this.props.isLoading && <MyLoader />}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
