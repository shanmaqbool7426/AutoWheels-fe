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
  SimpleGrid,
} from "@mantine/core";
import {
  CarComparisonSmall,
  CarSmall,
  GearsHandle,
  SmallReviewIcon,
} from "@/components/Icons";
import QuickLinks from "@/components/QuickLinks";

import { IconSearch } from "@tabler/icons-react";
import BrowseByCategory from "@/modules/home/BrowseByCategory";
import ComparisonProducts from "@/modules/home/ComparisonProducts";
import BrowseVideos from "@/modules/home/BrowseVideos";
import BrowseBlogs from "@/modules/home/BrowseBlogs";
import { Carousel } from "@mantine/carousel";
import Link from "next/link";

const NewCarsFindSection = () => {
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
                <Box className="search-wrapper-card" mt="xl">
                  <Card
                    shadow="0px 4px 20px 0px #00000014"
                    padding="lg"
                    radius="md"
                  >
                    <Title order={3} mb="md">
                      Find New Cars in Pakistan
                    </Title>
                    <div className="row mb-2">
                      <div className="col-md-3">
                        <Input
                          size="md"
                          radius="md"
                          placeholder="Search by Car Make or Model"
                          leftSection={<IconSearch size={16} />}
                        />
                      </div>
                      <div className="col-md-3">
                        <Select
                          size="md"
                          radius="md"
                          leftSection={<GearsHandle />}
                          placeholder="Choose Make"
                          data={["React", "Angular", "Vue", "Svelte"]}
                        />
                      </div>
                      <div className="col-md-3">
                        <Select
                          size="md"
                          radius="md"
                          placeholder="Choose Make"
                          data={["React", "Angular", "Vue", "Svelte"]}
                        />
                      </div>
                      <div className="col-md-3">
                        <Button
                          fullWidth
                          size="md"
                          radius="md"
                          bg="#E90808"
                          leftSection={<IconSearch size={16} />}
                        >
                          Search
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Box>
              </div>
            </div>
          </div>
        </Box>

        <BrowseByCategory />
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
              {[...Array(8).keys()].map((_, index) => {
                return (
                  <Box className="col-md-3">
                    <Card
                      shadow="0px 4px 20px 0px #00000014"
                      pb="xl"
                      pt="0"
                      px="0"
                      mb="xl"
                    >
                      <Image
                        p="lg"
                        pt="xl"
                        src="/find-cars/img-square.png"
                        height={130}
                        alt="Mehran"
                        className="img-fluid"
                      />

                      <Flex direction="column" align="center" gap="xs">
                        <Title order={5} fw={500} c="#E90808">
                          Toyota Corolla
                        </Title>
                        <Text fw={600} fs="xl">
                          Rs 54.79 - 75.49 Lacs
                        </Text>
                        <Flex align="center" justify="center" gap="xs">
                          <Rating defaultValue={2} />
                          <Text span inherit>
                            (3/5)
                          </Text>
                        </Flex>
                      </Flex>
                    </Card>
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
              {[...Array(4).keys()].map((_, index) => {
                return (
                  <Box className="col-md-3">
                    <Card
                      shadow="0px 4px 20px 0px #00000014"
                      pb="xl"
                      pt="0"
                      px="0"
                      mb="xl"
                    >
                      <Image
                        p="lg"
                        pt="xl"
                        src="/find-cars/img-square.png"
                        height={130}
                        alt="Mehran"
                        className="img-fluid"
                      />

                      <Flex direction="column" align="center" gap="xs">
                        <Title order={5} fw={500} c="#E90808">
                          Toyota Corolla
                        </Title>
                        <Text fw={600} fs="xl">
                          Rs 54.79 - 75.49 Lacs
                        </Text>
                        <Text span inherit>
                          (Launched Expected 2024*)
                        </Text>
                      </Flex>
                    </Card>
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
              {[...Array(8).keys()].map((_, index) => {
                return (
                  <Box className="col-md-3">
                    <Card
                      shadow="0px 4px 20px 0px #00000014"
                      pb="xl"
                      pt="0"
                      px="0"
                      mb="xl"
                    >
                      <Image
                        p="lg"
                        pt="xl"
                        src="/find-cars/img-square.png"
                        height={130}
                        alt="Mehran"
                        className="img-fluid"
                      />

                      <Flex direction="column" align="center" gap="xs">
                        <Title order={5} fw={500} c="#E90808">
                          Toyota Corolla
                        </Title>
                        <Text fw={600} fs="xl">
                          Rs 54.79 - 75.49 Lacs
                        </Text>
                        <Text span inherit>
                          (Launched Expected 2024*)
                        </Text>
                      </Flex>
                    </Card>
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
              {[...Array(8).keys()].map((_, index) => {
                return (
                  <Box className="col-md-3">
                    <Card
                      shadow="0px 4px 20px 0px #00000014"
                      pb="xl"
                      pt="0"
                      px="0"
                      mb="xl"
                    >
                      <Image
                        p="lg"
                        pt="xl"
                        src="/find-cars/img-square.png"
                        height={130}
                        alt="Mehran"
                        className="img-fluid"
                      />

                      <Flex direction="column" align="center" gap="xs">
                        <Title order={5} fw={500} c="#E90808">
                          Toyota Corolla
                        </Title>
                        <Text fw={600} fs="xl">
                          Rs 54.79 - 75.49 Lacs
                        </Text>
                        <Flex align="center" justify="center" gap="xs">
                          <Rating defaultValue={2} />
                          <Text span inherit>
                            (3/5)
                          </Text>
                        </Flex>
                      </Flex>
                    </Card>
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
              {[...Array(8).keys()].map((_, index) => {
                return (
                  <Box className="col-md-3">
                    <Card
                      shadow="0px 4px 20px 0px #00000014"
                      pb="xl"
                      pt="0"
                      px="0"
                      mb="xl"
                    >
                      <Image
                        p="lg"
                        pt="xl"
                        src="/find-cars/img-square.png"
                        height={130}
                        alt="Mehran"
                        className="img-fluid"
                      />

                      <Flex direction="column" align="center" gap="xs">
                        <Title order={5} fw={500} c="#E90808">
                          Toyota Corolla
                        </Title>
                        <Text fw={600} fs="xl">
                          Rs 54.79 - 75.49 Lacs
                        </Text>
                        <Flex align="center" justify="center" gap="xs">
                          <Rating defaultValue={2} />
                          <Text span inherit>
                            (3/5)
                          </Text>
                        </Flex>
                      </Flex>
                    </Card>
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
                    <Box>
                      <Button color="#EB2321" size="lg" fullWidth>
                        Write a Review
                      </Button>
                    </Box>
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
    </>
  );
};

export default NewCarsFindSection;
