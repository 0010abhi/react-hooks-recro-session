import React from 'react';
import { Form } from 'antd';
import { Button } from 'antd';
import TextInput from '../../components/TextInput';
import useHandleFormAction from '../../hooks/HandleFormAction';
import InlineLoader from '../../components/InlineLoader';
import { withRouter } from 'react-router-dom';

function ActivateAccount(props) {
  const formAction = useHandleFormAction(props.history, '/login')
  return (
    <div style={{ padding: '15px', border: '1px solid black', backgroundColor: '#fff', width: '400px', margin: '15px auto' }}>
      <div>Enter The OTP sent to your mail</div>
      <Form layout='vertical'>
        <TextInput sid='otp' disabled={formAction.loading} />
        {
          formAction.loading ?
            <InlineLoader /> :
            <Button onClick={formAction.handleAction}>Activate Account</Button>
        }
      </Form>
      <div>
        <div><Button type='link' onClick={() => { props.history.push('/login') }}>Go To Log In</Button></div>
      </div>
    </div>
  )
}

export default withRouter(ActivateAccount);
