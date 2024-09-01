
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import QuotationForm from './components/QuotationForm';
function App() {
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center w-100">
    <Container>
      <QuotationForm/>
    </Container>
  </div>
  );
}

export default App;
