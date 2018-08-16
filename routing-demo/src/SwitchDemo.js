import React from 'react';
import { withRouter, Switch, Route, Link } from 'react-router-dom';

const Homepage = () => <div>HOMEPAGE</div>;

const About = () => <div>ABOUT</div>;

const Name = ({ match }) => <div>Hello, {match.params.name}</div>;

const teachers = ['Tim', 'Colt', 'Matt', 'Elie'];
const Teachers = ({teachers}) => (
   <ul>
      {teachers.map((teach, ind) => (
         <li key={ind}><Link to={'/' + teach}>{teach}</Link></li>
      ))}
   </ul>
);

const SwitchDemo = ({ history }) => (
   <div>
      <Switch>
         <Route exact path="/" component={Homepage} />
         <Route path="/about" component={About} />
         <Route path="/teachers" render={props => (
            <Teachers {...props} teachers={teachers} />
         )} />
         <Route exact path="/:name" component={Name} />
      </Switch>
      <button onClick={() => history.push('/')}>
         Go Home
      </button>
   </div>
);

export default withRouter(SwitchDemo);
