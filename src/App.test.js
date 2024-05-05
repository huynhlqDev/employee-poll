import { render, screen } from '@testing-library/react';
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

// Test render App component
test('renders App component', () => {
  var app = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const linkElement = screen.getByText(/Employee Polls/);
  expect(linkElement).toBeInTheDocument();
  expect(app).toMatchSnapshot();
});

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