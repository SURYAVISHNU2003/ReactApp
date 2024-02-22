import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
function Login() {
  return (
    <div>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header background-color='black' textAlign='center'>
        <Image src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMh-phnz2XntJD5O7o6_vHssJQlAjfL_fEHF6qFi9vHx8O3LXFe_b3n4RnhFw2XwN7o8Y&usqp=CAU'/> 
        <span style={{color:'white'}}>Log-in to your account</span>
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='purple' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        <p>New to us? <a href='#'>Sign Up</a></p>
      </Message>
    </Grid.Column>
  </Grid>
    </div>
  )
} 

export default Login
