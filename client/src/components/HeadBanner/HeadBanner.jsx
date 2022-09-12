import Carousel from "react-bootstrap/Carousel";
import { images } from "../../constants";
import { Box, Typography } from "@mui/material";
import {theme} from '../../theme';

function UncontrolledExample() {
    const carouselData = [
        {
            image: images.chocomomo,
            title: "Choco Momo",
        },
        {
            image: images.extracheesemomo2,
            title: "Extra Cheese Momo",
        },
        {
            image: images.kurkureperimomo,
            title: "Kurkure Peri Momo",
        },
        {
            image: images.seekhmomo,
            title: "Seekh Momo",
        },
        {
            image: images.steamchessemomo,
            title: "Steam Cheese Momo",
        },
        {
            iamge: images.streammomo,
            title: "Steam Momo",
        },
        {
            image: images.tandurmomo,
            title: "Tandur Momo",
        }
    ];


  return (
    <Box sx={{ width: "100%", backgroundColor:theme.palette.background.light }}>
      <Carousel>
        {
            carouselData.map((item, index) => {
                return (
                    <Carousel.Item key={index}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                width: "100%",
                                justifyContent: "space-between",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                }}
                            >
                                <Box>
                                    <Typography variant="h2">{item.title}</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h5">The best momo in town</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ width: "100%" }}>
                                <img
                                    className="d-block w-100"
                                    src={item.image}
                                    alt="First slide"
                                    style={{ width:'100%', height:'auto', maxHeight:'600px' }}
                                />
                            </Box>
                        </Box>
                    </Carousel.Item>
                )
            })

        }
      </Carousel>
    </Box>
  );
}

export default UncontrolledExample;
