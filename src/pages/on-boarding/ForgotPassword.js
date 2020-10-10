import React from 'react';
import { Form } from 'antd';
import { Button } from 'antd';
import TextInput from '../../components/TextInput';
import useHandleFormAction from '../../hooks/HandleFormAction';
import InlineLoader from '../../components/InlineLoader';
import { withRouter } from 'react-router-dom';

function ForgotPassword(props) {
  const formAction = useHandleFormAction(props.history, '/reset-password');
  return (
    <div style={{ padding: '15px', border: '1px solid black', backgroundColor: '#fff', width: '400px', margin: '15px auto' }}>
      <div>Forgot Password?</div>
      <Form layout='vertical'>
        <TextInput sid='email' disabled={formAction.loading} />
        {
          formAction.loading ?
            <InlineLoader /> :
            <Button onClick={formAction.handleAction}>Send OTP</Button>
        }
      </Form>
      <div>
        <div><Button type='link' onClick={() => { props.history.push('/login') }}>Go To Log In</Button></div>
      </div>
    </div>

  )
}

export default withRouter(ForgotPassword);
