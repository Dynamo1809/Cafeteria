import { Component } from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Select from 'react-select';

import styles from './AuthForm.module.scss';

const WAKE_UP_OPTIONS = {
  BEFORE_NOON: 'BEFORE_NOON',
  AFTER_NOON: 'AFTER_NOON',
};

const SYRUP_OPTIONS = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export class AuthForm extends Component {
  state = {
    email: '',
    password: '',
    repeatPassword: '',
    agreed: false,
    wakeUpTime: WAKE_UP_OPTIONS.AFTER_NOON,
    syrup: null,
  }

  handleChange = (event) => {
    const { name, checked, type, value} = event.currentTarget;
    if( type === 'checkbox' ) {
      this.setState({ [name]: checked });
      return;
    }
    this.setState({ [name]: value})
    console.log(event.currentTarget.checked)
  }

  handleSelect = (syrup) => {
    this.setState({ syrup })
    console.log(syrup)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('state',this.state)
    // this.props.onSubmit(this.state);
    this.reset()
    console.log('props',this.props)
    console.log('state',this.state)
  }

  reset = (e) => this.setState({ email: '', password: '', repeatPassword: '', agreed: false, wakeUpTime: WAKE_UP_OPTIONS.AFTER_NOON, syrup: null })

  render() {
    console.log('render',this.state);
    const { email, password, repeatPassword, agreed, wakeUpTime, syrup } = this.state;
    
    return (
      <div className={styles.Wrapper}>
        <h2>Authorization form</h2>
        <form onSubmit={this.handleSubmit}>
          <div className={styles.InputWrapper}>
            <TextField 
              label="Enter your email"
              type="email" 
              name="email" 
              value={email} 
              onChange={this.handleChange}
              required
            />
          </div>
          <div className={styles.InputWrapper}>
            <TextField 
              label="Enter your password"
              type="password" 
              name="password" 
              value={password} 
              onChange={this.handleChange}
              required
            />
          </div>
          <div className={styles.InputWrapper}>
            <TextField 
              label="Repeat your password"
              type="password" 
              name="repeatPassword" 
              value={repeatPassword} 
              onChange={this.handleChange}
              required
            />
          </div> 
          <div>
            <FormControlLabel 
              control={
              <Checkbox 
                name="agreed" 
                checked={ agreed }
                onChange={this.handleChange} 
                color='primary'
                required/>
              }  
              label="I Agree to Privacy Policy" 
            />
          </div>
          <div className={styles.InputWrapper}>
            <label>
              Before noon
              <input
                type="radio"
                checked={wakeUpTime === WAKE_UP_OPTIONS.BEFORE_NOON}
                name="wakeUpTime"
                value={WAKE_UP_OPTIONS.BEFORE_NOON}
                onChange={this.handleChange}
              />
            </label>
            <label>
              After noon
              <input
                type="radio"
                checked={wakeUpTime === WAKE_UP_OPTIONS.AFTER_NOON}
                name="wakeUpTime"
                value={WAKE_UP_OPTIONS.AFTER_NOON}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className={styles.SelectWrapper}>
            <Select
              value={syrup}
              onChange={this.handleSelect}
              options={SYRUP_OPTIONS}
            />
          </div>
          <div>
            <Button
              // onClick={this.handleSubmit}
              type="submit"
              variant="contained"
              color="primary"
              // disabled={!agreed}
            >
              Submit
            </Button>
          </div>        
        </form>
      </div>     
    )
  }
}