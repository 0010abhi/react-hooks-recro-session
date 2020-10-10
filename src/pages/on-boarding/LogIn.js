import React, { useContext, useEffect } from 'react';
import { Form } from 'antd';
import { Button } from 'antd';
import TextInput from '../../components/TextInput';
import PasswordInput from '../../components/PasswordInput';
import useHandleFormAction from '../../hooks/HandleFormAction';
import InlineLoader from '../../components/InlineLoader';
import { Link, withRouter } from 'react-router-dom';
import { Context as AuthContext } from '../../context/AuthContext';

function LogIn(props) {
  const formAction = useHandleFormAction('/dashboard/applications');
  const { state: { firstName, lastName }, changeLastName, changeName } = useContext(AuthContext);

  useEffect(() => {
    changeName('Abhishek')
    changeLastName('Sachdeva')
  }, []);

  return (
    <div>
      <header style={{ textAlign: 'center' }}>
        <h2>React Hooks Demo 2</h2>
      </header>
      <div style={{ display: 'flex' }}>
        <div style={{ fontSize: '24px', border: '1px solid black', padding: '15px', margin: '15px' }}><Link to='/home'>Home</Link></div>
        <div style={{ fontSize: '24px', border: '1px solid black', padding: '15px', margin: '15px' }}><Link to='/demo1'>Demo 1</Link></div>
      </div>
      <div style={{ padding: '15px', border: '1px solid black', backgroundColor: '#fff', width: '400px', margin: '15px auto' }}>

        <div>Log In</div>
        <div>
          {firstName + lastName}
        </div>

        <Form layout='vertical'>
          <TextInput sid='email' disabled={formAction.loading} />
          <PasswordInput sid='password' disabled={formAction.loading} />
          {
            formAction.loading ?
              <InlineLoader /> :
              <Button onClick={formAction.handleAction}>Log In</Button>
          }
        </Form>
        <div>
          <Button type='link' onClick={() => { props.history.push('/forgot-password') }}>Forgot Password?</Button>
          <div><span>Not a member? </span><Button type='link' onClick={() => { props.history.push('/signup') }}>Create Account</Button></div>
        </div>
      </div>
    </div>

  )
}

export default withRouter(LogIn);
