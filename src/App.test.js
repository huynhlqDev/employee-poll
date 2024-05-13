import { render, screen, fireEvent } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import { renderWithProviders } from "./setupTests";

import store from './store';
import App from './App';
import Login from './components/Login';
import PollList from './components/PollList';
import Leaderboard from './components/Leaderboard';
import CreatePoll from './components/CreatePoll';
import AnswerPoll from './components/AnswerPoll';

// Test DOM component
describe('Test DOM component', () => {
  it("DOM test which uses the fireEvent function", () => {
    var app = renderWithProviders(<App />, store);

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
    var login = renderWithProviders(<Login />, store);
    expect(login).toMatchSnapshot();
  })

  //Test: PollList component
  it("Home", () => {
    const mockStore = configureMockStore([thunk]);
    const initialState = {
      polls: {
        polls: [],
        loading: false
      },
      user: {
        user: {
          answers: {}
        }
      }
    };

    const store = mockStore(initialState);
    var pollList = renderWithProviders(<PollList />, store);

    expect(pollList).toMatchSnapshot();
  })


  //Test: CreatePoll component
  it("Create poll", () => {
    const mockStore = configureMockStore([thunk]);
    const initialState = {
      user: {
        isLoggedIn: false,
        user: { id: "", password: "" }
      },
      createPoll: {
        createPoll: false
      }
    };

    const store = mockStore(initialState);
    var component = renderWithProviders(<CreatePoll />, store);

    expect(component).toMatchSnapshot();
  })


  //Test: AnswerPoll component
  it("Answer poll", () => {
    var component = renderWithProviders(<AnswerPoll />, store);

    expect(component).toMatchSnapshot();
  })


  //Test: Leadersboard component
  it("leadersboard", () => {
    var component = renderWithProviders(
      <Leaderboard />, store);

    expect(component).toMatchSnapshot();
  })

})