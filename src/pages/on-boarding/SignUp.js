import React from 'react';
import { Form } from 'antd';
import { Button } from 'antd';
import TextInput from '../../components/TextInput';
import PasswordInput from '../../components/PasswordInput';
import useHandleFormAction from '../../hooks/HandleFormAction';
import InlineLoader from '../../components/InlineLoader';
import InputGroup from '../../components/InputGroup';
import { withRouter } from 'react-router-dom';

function SignUp(props) {
  const formAction = useHandleFormAction('/activate-account');
  return (
    <div style={{ padding: '15px', backgroundColor: '#fff', width: '400px', margin: '15px auto' }}>
      <div>Sign Up</div>
      <Form layout='vertical'>
        <TextInput sid='firstName' disabled={formAction.loading} />
        <TextInput sid='lastName' disabled={formAction.loading} />
        <TextInput sid='email' disabled={formAction.loading} />
        <PasswordInput sid='password' disabled={formAction.loading} />
        <InputGroup sid='phoneNumber' disabled={formAction.loading} />
        <p>I have read and accepted the Sastoo terms of service, use policy and privacy policy.</p>
        {
          formAction.loading ?
            <InlineLoader /> :
            <Button onClick={formAction.handleAction}>Sign Up</Button>
        }
      </Form>
      <div>
        <div><span>Already a member? </span><Button type='link' onClick={() => { props.history.push('/login') }}>Log In</Button></div>
      </div>
    </div>
  )
}

export default withRouter(SignUp);
