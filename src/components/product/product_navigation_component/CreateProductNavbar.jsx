import React, {useState, useEffect} from 'react'
import { Nav, Button } from 'react-bootstrap';
import { MdDone } from "react-icons/md";
import { getProductById } from '../../../services/apiService';
const CreateProductNavbar = ({steps, currentStep,handleNaviagteDesign, handlePublish , productId}) => {

    const [productData, setProductData] = useState(null);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
    useEffect(() => {
        if (!productId) return;
    
        const fetchProductData = async () => {
          setLoading(true);
          setError(null);
    
          try {
            const data = await getProductById(productId);
            console.log("Fetched product data:", data);
            setProductData(data); // Set the fetched data
          } catch (err) {
            console.error("Error fetching product:", err);
            setError(err.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchProductData();
      }, [productId]);
    return (
        <>

            <Nav
                className="ms-auto "
                style={{
                    gap: '10px',

                }}
            >
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="d-flex flex-column align-items-center  justify-content-center text-center pe-1"
                        style={{
                            borderTop: step.isCompleted ? '4px solid black' : '',

                        }}
                    >
                        <div
                            className="d-flex align-items-center justify-content-center mt-1"
                            style={{
                                width: '35px',
                                height: '35px',
                                borderRadius: '50%',
                                backgroundColor: step.isCompleted ? '#F4F6F8' : 'transparent',
                                border: step.isCompleted
                                    ? '3px solid #000088'
                                    : '3px solid #8E8E8E',
                            }}
                        >
                            <MdDone
                                size="20px"
                                color={step.isCompleted ? '#000088' : '#8E8E8E'}
                            />
                        </div>
                        <p
                            style={{
                                fontSize: '10px',
                                color: step.isCompleted ? '#000088' : '#8E8E8E',
                                paddingTop: '6px',
                                fontWeight: 'bold',
                            }}
                        >
                            {step.label}
                        </p>
                    </div>

                ))}

            </Nav>
            <Nav
                className="ms-auto "
                style={{
                    gap: '10px',

                }}
            >

                {currentStep === 1 && <Button
                    variant="primary"
                    className='fw-bold'
                    style={{
                        backgroundColor: "#000088", // Background color
                        color: "white", // Text color
                        borderColor: "#000088", // Border color (if needed)
                    }}
                    onClick={handleNaviagteDesign}
                >
                    Continue to Mockups
                </Button>}

                {currentStep === 2 && <Button
                    variant="primary"
                    className='fw-bold'
                    style={{
                        backgroundColor: "#000088", // Background color
                        color: "white", // Text color
                        borderColor: "#000088", // Border color (if needed)
                    }}
                    onClick={handleNaviagteDesign}
                >
                    Continue to Details
                </Button>}
                {currentStep === 3 && <Button
                    variant="primary"
                    className='fw-bold'
                    style={{
                        backgroundColor: "#000088", // Background color
                        color: "white", // Text color
                        borderColor: "#000088", // Border color (if needed)
                    }}
                    onClick={handleNaviagteDesign}
                >
                    Continue to Prices
                </Button>}
                {currentStep === 4 && <Button
                    variant="primary"
                    className='fw-bold'
                    style={{
                        backgroundColor: "#000088", // Background color
                        color: "white", // Text color
                        borderColor: "#000088", // Border color (if needed)
                    }}
                    onClick={handleNaviagteDesign}
                >
                    Continue to Review
                </Button>}
                {currentStep === 5 && <Button
                    variant="primary"
                    className='fw-bold'
                    style={{
                        backgroundColor: "#000088", // Background color
                        color: "white", // Text color
                        borderColor: "#000088", // Border color (if needed)
                    }}
                    onClick={handlePublish}
                >
                    Publish
                </Button>}

            </Nav>
        </>
    )
}

export default CreateProductNavbar