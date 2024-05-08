import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';

import App from './App';
import store from './store';
import Login from './components/Login';
import PollList from './components/PollList';
import Leaderboard from './components/Leaderboard';
import CreatePoll from './components/CreatePoll';
import AnswerPoll from './components/AnswerPoll';

// Test DOM component
describe('Test DOM component', () => {
  it("DOM test which uses the fireEvent function", () => {
    var app = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  
    // verify snapshot
    expect(app).toMatchSnapshot();
  
    // verify DOM component
    const loginTitle = screen.getByText(/Employee Polls/);
    const submitButton = screen.getByText(/Sign in/);
    const usernameInput = screen.getByPlaceholderText(/Username/);
    const passwordInput = screen.getByPlaceholderText(/Password/);
  
    expect(loginTitle).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  
    // DOM fire event
    fireEvent.change(usernameInput, { target: { value: 'zoshikanlu' } });
    fireEvent.change(passwordInput, { target: { value: 'pass246' } });
    fireEvent.click(submitButton);
    
    // Confirm hiding the login page when submitted successfully
    expect(loginTitle).not.toBeInTheDocument();
    expect(usernameInput).not.toBeInTheDocument();
    expect(passwordInput).not.toBeInTheDocument();
    expect(submitButton).not.toBeInTheDocument();
  })
  
});

// Test: component snapshot
describe("matches the snapshot when render component", () => {
  //Test: Login component
  it("Login", () => {
    var component = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    expect(component).toMatchSnapshot();
  })

  //Test: PollList component
  it("Home", () => {
    const mockStore = configureMockStore([thunk]);
    const initialState = {
      poll: {
        polls: []
      },
      loading: {
        isLoading: false
      },
      auth: {
        user: {
          answers: {}
        }
      }
    };

    const store = mockStore(initialState);
    var component = render(
      <Provider store={store}>
        <PollList />
      </Provider>
    );

    expect(component).toMatchSnapshot();
  })


  //Test: CreatePoll component
  it("Create poll", () => {
    const mockStore = configureMockStore([thunk]);
    const initialState = {
      auth: {
        isLoggedIn: false,
        user: { id: "", password: "" }
      },
      createPoll: {
        createPoll: false
      }
    };
    const store = mockStore(initialState);
    var component = render(
      <Provider store={store}>
        <CreatePoll />
      </Provider>
    );

    expect(component).toMatchSnapshot();
  })


  //Test: AnswerPoll component
  it("Answer poll", () => {
    var component = render(
      <Provider store={store}>
        <AnswerPoll />
      </Provider>
    );

    expect(component).toMatchSnapshot();
  })


  //Test: Leadersboard component
  it("leadersboard", () => {
    var component = render(
      <Provider store={store}>
        <Leaderboard />
      </Provider>
    );

    expect(component).toMatchSnapshot();
  })

})