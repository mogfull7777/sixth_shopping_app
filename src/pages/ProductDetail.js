import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {Button, Card, Col, Container, Form, Image, ListGroup, Row} from "react-bootstrap";

const ProductDetail = () => {

    const params = useParams();

    const [product, setProduct] = useState({});
    const [qty, setQty] = useState(0)


    const getProduct = async () => {

        try {

            const { data, status } = await axios.get(`http://localhost:9090/api/products/${params.productId}`)

            if (status === 200) {
                setProduct(data)
            }

        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <Container>
            <Row>
                <Col>

                    <Link className={'btn btn-light my-3'} to={'/'}>
                        Go Back
                    </Link>

                    <>

                        <Row>
                            <Col>
                                <Image src={product.image} alt={product.name} fluid />
                            </Col>

                            <Col md={4}>
                                <ListGroup>
                                    <ListGroup.Item>
                                        <h3>{product.name}</h3>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <h3>{product.rating}</h3>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        Price : ${product.price}
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        description : {product.description}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>

                            <Col>

                                <Card>

                                    <ListGroup>

                                        <ListGroup.Item>
                                            <Row>
                                                <Col>price:</Col>
                                                <Col>
                                                    <strong>${product.price}</strong>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>

                                        {/* Product Count : status  */}

                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Status</Col>
                                                <Col>
                                                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>

                                        {product.countInStock > 0 && (

                                            <ListGroup.Item>

                                                <Row>

                                                    <Col>
                                                        QTY
                                                    </Col>

                                                    <Col>
                                                        <Form.Control
                                                            as={'select'}
                                                            value={qty}
                                                            onChange={e => setQty(e.target.value)}
                                                        >
                                                            {[...Array(product.countInStock).keys()].map(
                                                                (x) => (
                                                                    <option key={x+1} value={x+1}>
                                                                        {x+1}
                                                                    </option>
                                                                )
                                                            )}
                                                        </Form.Control>

                                                    </Col>

                                                </Row>

                                            </ListGroup.Item>

                                        )}

                                    {/*  Product Count : add to cart  */}

                                        <ListGroup.Item>
                                            <Button
                                                className={'btn-block'}
                                                type={'button'}
                                                disabled={product.countInStock === 0}
                                            >
                                                Add to Cart
                                            </Button>
                                        </ListGroup.Item>

                                    </ListGroup>

                                </Card>

                            </Col>

                        </Row>

                    </>

                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;