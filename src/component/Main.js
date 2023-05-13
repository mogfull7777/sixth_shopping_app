import React, {useEffect, useState} from 'react';
import {Button, Card, Carousel, Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";

const Main = () => {

    const carouselItem = [
        {
            "id" : "1",
            "title" : "d-block w-100",
            "desc" : "First slide",
            "img" : require('../img/one.jpg'),
            "label" : "Make a gift!"
        },
        {
            "id" : "2",
            "title" : "d-block w-100",
            "desc" : "Second slide",
            "img" : require('../img/two.jpg'),
            "label" : "Let's think of the Earth together!"
        },
        {
            "id" : "3",
            "title" : "d-block w-100",
            "desc" : "Third slide",
            "img" : require('../img/three.jpg'),
            "label" : "Your environment will improve!"
        }
    ]

    const [products, setProducts] = useState()

    const getProducts = async () => {

        const address = 'http://localhost:9090/api/products'

        try {

            const productGeting = await axios.get(address);

            setProducts(productGeting.data.products)

            console.log(productGeting.data.products)

        } catch (err) {

            console.log(err.massage)

        }


    }

    useEffect(() => {
        getProducts()
    }, [])


    return (
        <div>
            <>

            {/*  benner  */}

                <Carousel nextLabel={""} prevLabel={""}>

                    {carouselItem && carouselItem.map(e => (
                        <Carousel.Item>
                            <img
                                className={e.title}
                                src={e.img}
                                alt={e.desc}
                            />
                            <Carousel.Caption>
                                <h3 style={{color: 'white'}}>{e.desc}</h3>
                                <p>{e.label}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}

                </Carousel>

            {/*  item list   */}

                <Container>
                    <Row>
                        {products && products.map(m => (
                            <Col>
                                <Card style={{ width: '18rem' }} className={"mt-4"}>
                                    <Card.Img
                                    variant="top"
                                    src={m.image}
                                    />
                                    <Card.Body>
                                        <Card.Title>{m.name}</Card.Title>
                                        <Card.Text>
                                            {m.createdAt}
                                        </Card.Text>
                                        <Card.Text>
                                            {m.brand}
                                        </Card.Text>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Link to={`/${m._id}`}>
                                            <Button varian="primary">Go somewhere</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>

            </>
        </div>
    );
};

export default Main;