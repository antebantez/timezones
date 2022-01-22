import { Card, Button, Row } from '../utilities/components-bootstrap';

export default function MissingPage() {
  return (<>
    <Card>
      <Row>
        <h1>404</h1>
      </Row>
      <Row>
        <h2>That page doesn't exist!</h2>
      </Row>
      <Row>
        {/* Function på kanpp kvar att skapa */}
        <Button>Back to home page</Button>
        </Row>
    </Card>
    </>
  );
}