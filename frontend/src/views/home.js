import React from 'react';
import { CardTitle, CardText, Col, Button, Card } from "reactstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  const nextPage = (page) => {
    navigate("/" + page);
  }

  return (
    <div className="text-center">
      <h1>1144311 Project Computational Mathematics</h1>
      <div className="text-center">
        <a href=" https://wichit2s.gitlab.io/commath/01-Basic-Computing/index.html#">Click to open course material.</a>
      </div>
      <div className="box-centers">
        <Col>
          <Card className="margintop" style={{backgroundColor: ' #f6d327 ',backgroundImage:  'linear-gradient(315deg, #f6d327 26%, #fb7ba2 74%)'}}>
            <CardTitle>
              <h3 style={{ marginTop: "10px" }}>บทที่ 1</h3>
            </CardTitle>
            <CardText>
              <h4>Basic Computing</h4>
            </CardText>
            <Button className="btn-style" onClick={() => { nextPage("BasicComputing") }} color="danger">
              <h5 style={{ marginTop: "10px" }}>Start</h5>
            </Button>
          </Card>
        </Col>
        <br></br>
        <Col>
          <Card className="margin-top" style={{backgroundColor: ' #abe9cd ',backgroundImage:  'linear-gradient(315deg, #abe9cd 26%, #3eadcf 74%)'}}>
            <CardTitle>
              <h3 style={{ marginTop: "10px" }}>บทที่ 2</h3>
            </CardTitle>
            <CardText>
              <h4>LinearEquations</h4>
            </CardText>
            <Button className="btn-style" onClick={() => { nextPage("LinearEquations") }} color="primary">
              <h5 style={{ marginTop: "10px" }}>Start</h5>
            </Button>
          </Card>
        </Col>
        <br></br>
        <Col>
          <Card className="margin-top" style={{backgroundColor: ' #f8ef42 ',backgroundImage:  'linear-gradient(315deg, #f8ef42 26%, #0fd64f 74%)'}}>
            <CardTitle>
              <h3 style={{ marginTop: "10px" }}>บทที่ 3</h3>
            </CardTitle>
            <CardText>
              <h4>Interpolation</h4>
            </CardText>
            <Button className="btn-style" onClick={() => { nextPage("Interpolation") }} color="warning">
              <h5 style={{ marginTop: "10px" }}>Start</h5>
            </Button>
          </Card>
        </Col>
        <br></br>
        <Col>
          <Card className="margin-top" style={{backgroundColor: ' #97CC04 ',backgroundImage:  'linear-gradient(315deg, #97CC04 26%, #2D7DD2 74%)'}}>
            <CardTitle>
              <h3 style={{ marginTop: "10px" }}>บทที่ 4</h3>
            </CardTitle>
            <CardText>
              <h4>Differentiation</h4>
            </CardText>
            <Button className="btn-style" onClick={() => { nextPage("Differentiation") }} color="success">
              <h5 style={{ marginTop: "10px" }}>Start</h5>
            </Button>
          </Card>
        </Col>
        <br></br>
        <Col>
          <Card className="margin-top" style={{backgroundColor: ' #8B9098 ',backgroundImage:  'linear-gradient(315deg, #8B9098 26%, #6077C7 74%)'}}>
            <CardTitle>
              <h3 style={{ marginTop: "10px" }}>บทที่ 5</h3>
            </CardTitle>
            <CardText>
              <h4>Integration</h4>
            </CardText>
            <Button className="btn-style" onClick={() => { nextPage("Integration") }} color="secondary">
              <h5 style={{ marginTop: "10px" }}>Start</h5>
            </Button>
          </Card>
        </Col>
        <br></br>
        <Col>
          <Card className="margin-top" style={{backgroundColor: ' #1B3CE4 ',backgroundImage:  'linear-gradient(315deg, #1B3CE4 26%, #C76060 74%)'}}>
            <CardTitle>
              <h3 style={{ marginTop: "10px" }}>บทที่ 6</h3>
            </CardTitle>
            <CardText>
              <h4>Root-finding</h4>
            </CardText>
            <Button className="btn-style" onClick={() => { nextPage("Rootfinding") }} color="info" >
              <h5 style={{ marginTop: "10px" }}>Start</h5>
            </Button>
          </Card>
        </Col>
      </div>
    </div>
  );
}

export default Home;


