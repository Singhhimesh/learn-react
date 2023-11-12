import { Card, Button } from "flowbite-react";
import { FaCartPlus } from "react-icons/fa";

const Home = () => {
    return <>
        <div className="container">
            <Card
                className="max-w-sm h-[50px] w-[50px]"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                renderImage={() => <img width={500} height={500} src="https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D" alt="image 1" />}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    IPhone 14 pro
                </h5>
                
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <Button.Group className="group">
                        <Button color="red">
                            <FaCartPlus />
                            Add to Cart
                        </Button>
                        <Button color="red">Buy Now</Button>
                    </Button.Group>
                </p>
            </Card>
        </div>
    </>
};

export default Home;