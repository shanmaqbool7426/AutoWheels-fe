"use client";
import React from "react";
import {
  Anchor,
  Box,
  Group,
  Badge,
  Button,
  Card,
  Title,
  Input,
  Select,
  Text,
  Image,
  Flex,
  Rating,
  rem,
  Grid,
  Tabs,
} from "@mantine/core";
import {
  CarComparisonSmall,
  CarSmall,
  GearsHandle,
  SmallReviewIcon,
} from "@/components/Icons";
import WriteReviewModal from "@/components/ui/WriteReviewModal";
import QuickLinks from "@/components/QuickLinks";
import SearchBar from "./SearchBar"
import NewCarsCard from "@/components/ui/NewCarsCard"
import { IconSearch } from "@tabler/icons-react";
import BrowseByCategory from "@/modules/home/BrowseByCategory";
import ComparisonProducts from "@/modules/home/ComparisonProducts";
import BrowseVideos from "@/modules/home/BrowseVideos";
import BrowseBlogs from "@/modules/home/BrowseBlogs";
import { Carousel } from "@mantine/carousel";
import { useDisclosure } from "@mantine/hooks";

import BrowseByMakeAndBodies from "@/components/sections/BrowseByMakeAndBodies"

const NewCarsModule = ({makes,bodies,popularVehicles, fetchUpComingVehicles,fetchToyotaVehicles,fetchHondaVehicles}) => {
console.log('New Cars',fetchToyotaVehicles?.data)

  // const [opened, { open, close }] = useDisclosure(false);

  const tagsArray = [
    { name: "All (601)", isSelected: true },
    { name: "Service (39)" },
    { name: "Mileage (217)" },
    { name: "Looks (96)", isSelected: true },
    { name: "Comfort (155)" },
    { name: "Space (53)" },
    { name: "Power (53)" },
    { name: "More ..." },
  ];
  return (
    <>
      <section className="find-cars">
        <Box className="background-search-verlay" mb="100">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <nav className="mt-3">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Anchor href="#">Bikes</Anchor>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      <Anchor href="#">New Bikes</Anchor>
                    </li>
                  </ol>
                </nav>
                <Group>
                  <Button
                    leftSection={<CarSmall />}
                    variant="light"
                    radius="md"
                    size="md"
                    bg="#333"
                    c="white"
                    autoContrast
                  >
                    New Cars
                  </Button>
                  <Button
                    leftSection={<CarSmall />}
                    variant="light"
                    size="md"
                    radius="md"
                    bg="white"
                    c="#333"
                    autoContrast
                  >
                    Used Cars
                  </Button>
                  <Button
                    leftSection={<CarComparisonSmall />}
                    variant="light"
                    size="md"
                    radius="md"
                    bg="white"
                    c="#333"
                    autoContrast
                  >
                    Car Comparison
                  </Button>
                  <Button
                    leftSection={<SmallReviewIcon />}
                    variant="light"
                    size="md"
                    radius="md"
                    bg="white"
                    c="#333"
                    autoContrast
                  >
                    Car Reviews
                  </Button>
                </Group>
              </div>
              <div className="col-md-12">
              <SearchBar/>
              </div>
            </div>
          </div>
        </Box>

        <BrowseByMakeAndBodies makes={makes} bodies={bodies}/>
        <section className="popular-new-cars py-5">
          <div className="container">
            <div className="row">
              <Box className="col-md-12" mb="xl">
                <Title order={2}>
                  Popular New{" "}
                  <Text span c="#E90808" inherit>
                    Cars
                  </Text>
                </Title>
              </Box>
              {popularVehicles?.data?.results?.map((vehicle, index) => {
                return (
                  <Box className="col-md-3">
                  <NewCarsCard vehicle={vehicle} isRating={true}/>
                  </Box>
                );
              })}
            </div>
          </div>
        </section>
        <section className="newly-launched-cars bg-light py-5">
          <div className="container">
            <div className="row">
              <Box className="col-md-12" mb="xl">
                <Title order={2}>
                  Newly Launched{" "}
                  <Text span c="#E90808" inherit>
                    Cars
                  </Text>
                </Title>
              </Box>
              {fetchUpComingVehicles?.data?.results.map((vehicle, index) => {

                console.log('>>>>>>',vehicle)
                return (
                  <Box className="col-md-3" key={index}>
                    <NewCarsCard vehicle={vehicle} isRating={false}/>

                  </Box>
                );
              })}
            </div>
          </div>
        </section>
        <section className="upcoming-cars py-5">
          <div className="container">
            <div className="row">
              <Box className="col-md-12" mb="xl">
                <Title order={2}>
                  Newly Launched{" "}
                  <Text span c="#E90808" inherit>
                    Cars
                  </Text>
                </Title>
              </Box>
              {fetchUpComingVehicles?.data?.results?.map((vehicle, index) => {
                return (
                  <Box className="col-md-3" key={index}>
                  <NewCarsCard vehicle={vehicle} isRating={false}/>
                  </Box>
                );
              })}
            </div>
          </div>
        </section>
        <section className="cars-by-model bg-light py-5">
          <div className="container">
            <div className="row">
              <Box className="col-md-12" mb="xl">
                <Title order={2}>
                  Toyota New Car{" "}
                  <Text span c="#E90808" inherit>
                    Models
                  </Text>
                </Title>
              </Box>
              {fetchToyotaVehicles?.data?.results?.map((vehicle, index) => {
                return (
                  <Box className="col-md-3" key={index}>
                   <NewCarsCard vehicle={vehicle} isRating={false}/>
                  </Box>
                );
              })}
            </div>
          </div>
        </section>
        <section className="cars-by-model py-5">
          <div className="container">
            <div className="row">
              <Box className="col-md-12" mb="xl">
                <Title order={2}>
                  Honda New Car{" "}
                  <Text span c="#E90808" inherit>
                    Models
                  </Text>
                </Title>
              </Box>
              {fetchHondaVehicles?.data?.results?.map((vehicle, index) => {
                return (
                  <Box className="col-md-3" key={index}>
                   <NewCarsCard vehicle={vehicle} isRating={false}/>
                  </Box>
                );
              })}
            </div>
          </div>
        </section>

        <ComparisonProducts />
        <BrowseVideos />
        <BrowseBlogs />

        <section className="latest-reviews py-5">
          <div className="container">
            <Card shadow="0px 4px 20px 0px #00000014" padding="xl">
              <Title order={2} mb="lg">
                Latest Reviews of Toyota Corolla 2024
              </Title>
              <Box className="give-review" my="xl">
                <Grid>
                  <Grid.Col span={4}>
                    <Box>
                      <Flex align="center" gap="xs">
                        <Rating size={rem(42)} defaultValue={1} count={1} />
                        <Text size={rem(42)} fw="700">
                          4.3
                        </Text>
                        <Text ml="xl">
                          Based on 601 <br /> User reviews
                        </Text>
                      </Flex>
                    </Box>
                  </Grid.Col>
                  <Grid.Col span={4}>
                    <Button color="#EB2321" size="lg" fullWidth onClick={open}>
                      Write a Review
                    </Button>
                  </Grid.Col>
                </Grid>
              </Box>
              <Box className="reviews-by-tags" mb="xl">
                <Group>
                  {tagsArray.map((item, index) => {
                    return (
                      <Button
                        key={index}
                        variant={item.isSelected ? "filled" : "default"}
                        color={item.isSelected ? "#EB2321" : "#333333"}
                        autoContrast
                        size="md"
                        fw={500}
                      >
                        {item.name}
                      </Button>
                    );
                  })}
                </Group>
              </Box>

              <Box className="customer-reviews">
                <Tabs defaultValue="Latest" color="#EB2321">
                  <Tabs.List>
                    <Tabs.Tab
                      value="Latest"
                      p="md"
                      px="xl"
                      ff="heading"
                      fw={600}
                    >
                      Latest
                    </Tabs.Tab>
                  </Tabs.List>

                  <Tabs.Panel value="Latest" py="xl">
                    <Carousel
                      loop
                      withControls={true}
                      controlsOffset="xl"
                      controlSize={40}
                      slideSize="33.33333%"
                      slideGap="none"
                      align="start"
                      slidesToScroll={3}
                    >
                      {[1, 2, 3, 4, 5].map((_, index) => {
                        return (
                          <Carousel.Slide key={index}>
                            <Card
                              shadow="0px 4px 20px 0px rgba(0, 0, 0, 0.08)"
                              padding="lg"
                              m="md"
                            >
                              <Group mb="md">
                                <Rating defaultValue={3} count={5} />
                                <Text span inherit c="dimmed" size="sm">
                                  For LXI Opt S-CNG
                                </Text>
                              </Group>
                              <Group gap={5}>
                                <Title order={4} lineClamp={1}>
                                  Cool Car For A Small Family
                                </Title>
                                <Text c="dimmed" lineClamp={3}>
                                  The car's looks are amazing. In terms of
                                  comfort, it's acceptable. However, the mileage
                                  could be bet
                                </Text>
                                <Anchor href="#" c="#EB2321">
                                  Read More
                                </Anchor>
                              </Group>

                              <Box className="review-card-footer" mt="md">
                                <Text>By pooja kate</Text>
                                <Text c="dimmed">Oct 24, 2023 | 62 Views</Text>
                              </Box>
                            </Card>
                          </Carousel.Slide>
                        );
                      })}
                    </Carousel>
                  </Tabs.Panel>
                </Tabs>
              </Box>
            </Card>
          </div>
        </section>

        <QuickLinks />
      </section>
      {/* <WriteReviewModal opened={opened} close={close} /> */}
    </>
  );
};

export default NewCarsModule;