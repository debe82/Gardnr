import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const LoginForm = () => {
  return (
    <>
       <Form className='p-5' onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={e => setMail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={e => Password(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Link to={"/1"}>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Link>
    </Form>
    </>
)}
