import React from 'react';
import { Form } from 'antd';
import { Button } from 'antd';
import TextInput from '../../components/TextInput';
import PasswordInput from '../../components/PasswordInput';
import useHandleFormAction from '../../hooks/HandleFormAction';
import InlineLoader from '../../components/InlineLoader';
import { withRouter } from 'react-router-dom';

function ResetPassword(props) {
  const formAction = useHandleFormAction(props.history, '/login');
  return (
    <div style={{ padding: '15px', border: '1px solid black', backgroundColor: '#fff', width: '400px', margin: '15px auto' }}>
      <div>Reset Password</div>
      <Form layout='vertical'>
        <TextInput sid='otp' disabled={formAction.loading} />
        <PasswordInput sid='password' disabled={formAction.loading} />
        <PasswordInput sid='confirmPassword' disabled={formAction.loading} />
        {
          formAction.loading ?
            <InlineLoader /> :
            <Button onClick={formAction.handleAction}>Set New Password</Button>
        }
      </Form>
      <div>
        <div><Button type='link' onClick={() => { props.history.push('/login') }}>Go To Log In</Button></div>
      </div>
    </div>
  )
}

export default withRouter(ResetPassword);
