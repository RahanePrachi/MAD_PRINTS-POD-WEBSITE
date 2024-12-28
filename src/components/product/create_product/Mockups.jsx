import React, { useState } from 'react'
import image1 from '../assets/mockups/image1.png'
import image2 from '../assets/mockups/image2.png'
import image3 from '../assets/mockups/image3.png'
import image4 from '../assets/mockups/image4.png'
import image5 from '../assets/mockups/image5.png'
import image6 from '../assets/mockups/image6.png'
import image7 from '../assets/mockups/image7.png'
import image8 from '../assets/mockups/image8.png'
import Form from 'react-bootstrap/Form';
import { Button, Row, Col, Card } from 'react-bootstrap';
import { MdDone } from "react-icons/md";

const Mockups = () => {

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ]

  const [selectedImage, setSelectOption] = useState(0)
  return (
    <div style={{
      width: "70%",
      margin: "0 auto", // Centers horizontally
      display: "flex",
      flexDirection: "column",
      alignItems: "center", // Centers horizontally within flex
      justifyContent: "center", // Centers vertically within flex
      minHeight: "100vh" // Ensures vertical centering across the viewport
    }}>
      <div className='fw-bold fs-4 pb-4 bt-4 me-auto' style={{ textAlign: "left" }}>
        Choose Mockups
      </div>

      <div style={{ backgroundColor: "#F9F9F9" }} className='p-4'>
        <div className='d-flex gap-2 p-1 pb-4'>
          <Button
            variant="outline-secondary"
            style={{
              borderColor: "#000088",
              borderWidth: "2px",
              color: "#000088"
            }}
          >
            All Mockups
          </Button>

          <Button
            variant="outline-secondary"
            style={{
              borderColor: "#43475545",
              color: "#222222",
              borderWidth: "2px",
              boxShadow: "0 4px 8px #5A7DBC0D"
            }}
          >
            Recently Added
          </Button>
          <Button
            variant="outline-secondary"
            style={{
              borderColor: "#43475545",
              color: "#222222",
              borderWidth: "2px",
              boxShadow: "0 4px 8px #5A7DBC0D"
            }}
          >
            Standard
          </Button>
          <Button
            className='ms-auto'
            variant="outline-secondary"
            style={{
              borderColor: "#BDBDBD",
              color: "#FFFFFF",
              borderWidth: "2px",
              boxShadow: "0 4px 8px #5A7DBC0D",
              backgroundColor: "#BDBDBD"
            }}
          >
            Download
          </Button>

        </div>
        <Row>

          {
            images.map((item, index) => {

              return <Col key={index} md={3} className='mb-4 bg-white'>
                <Card
                  onClick={() => setSelectOption(index)}
                  style={{ borderRadius: "16px", border: selectedImage === index ? "2px solid #000088" : "2px solid #C8C8C8", position: "relative", overflow: "hidden" }}
                >
                  {/* Checkbox positioned absolutely */}
                  <div
                    onClick={() => setSelectOption(index)}
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      zIndex: 2,
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        height: "35px",
                        width: "35px",
                        background: selectedImage === index ? "#000088" : "white",
                        border: "2px solid #C8C8C8",
                        borderRadius: "5px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {selectedImage === index && (
                        <MdDone color='white' size={30} />
                      )}
                    </div>
                  </div>

                  {/* Card Image */}
                  <Card.Img
                    variant="top"
                    src={item}
                    style={{ borderRadius: "8px 8px 0 0" }}
                  />
                </Card>
              </Col>


            })
          }
        </Row>
      </div>

    </div>
  )
}

export default Mockups