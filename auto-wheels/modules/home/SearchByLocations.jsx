"use client";
import {
  Anchor,
  Flex,
  Input,
  SimpleGrid,
  Text,
  Title,
  Image,
  Card,
  Grid,
} from "@mantine/core";
import NextImage from "next/image";
import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const SearchByLocations = () => {
  return (
    <section className="search-by-location py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Flex justify="space-between" align="center">
              <Title order={2}>
                Get trusted used Cars{" "}
                <Text span c="#E90808" inherit>
                  Nearby
                </Text>
              </Title>

              <Anchor component={Link} href="#" c="#E90808">
                Show all Makes
              </Anchor>
            </Flex>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-8">
            <div className="row g-3">
              <div className="col">
                <Card
                  mb="md"
                  className="align-items-center"
                  component={Anchor}
                  td="none"
                  padding="md"
                  shadow="0px 4px 20px 0px rgba(0, 0, 0, 0.0784313725)"
                >
                  <NextImage
                    src="/locations/karachi.svg"
                    width={80}
                    height={95}
                    alt="Karachi"
                  />
                  <Text size="sm" c="dimmed">
                    {" "}
                    Used cars in
                  </Text>
                  <Title fw={600} order={6}>
                    Karachi
                  </Title>
                </Card>
              </div>
              <div className="col">
                <Card
                  mb="md"
                  className="align-items-center"
                  component={Anchor}
                  td="none"
                  padding="md"
                  shadow="0px 4px 20px 0px rgba(0, 0, 0, 0.0784313725)"
                >
                  <NextImage
                    src={"/locations/islamabad.svg"}
                    width={80}
                    height={95}
                    alt="Islamabad"
                  />
                  <Text size="sm" c="dimmed">
                    {" "}
                    Used cars in
                  </Text>
                  <Title fw={600} order={6}>
                    Islamabad
                  </Title>
                </Card>
              </div>
              <div className="col">
                <Card
                  mb="md"
                  className="align-items-center"
                  component={Anchor}
                  td="none"
                  padding="md"
                  shadow="0px 4px 20px 0px rgba(0, 0, 0, 0.0784313725)"
                >
                  <NextImage
                    src={"/locations/lahore.svg"}
                    width={80}
                    height={95}
                    alt="Lahore"
                  />
                  <Text size="sm" c="dimmed">
                    {" "}
                    Used cars in
                  </Text>
                  <Title fw={600} order={6}>
                    Lahore
                  </Title>
                </Card>
              </div>
              <div className="col">
                <Card
                  mb="md"
                  className="align-items-center"
                  component={Anchor}
                  td="none"
                  padding="md"
                  shadow="0px 4px 20px 0px rgba(0, 0, 0, 0.0784313725)"
                >
                  <NextImage
                    src={"/locations/faisalabad.svg"}
                    width={80}
                    height={95}
                    alt="Faisalabad"
                  />
                  <Text size="sm" c="dimmed">
                    {" "}
                    Used cars in
                  </Text>
                  <Title fw={600} order={6}>
                    Faisalabad
                  </Title>
                </Card>
              </div>
              <div className="col">
                <Card
                  mb="md"
                  className="align-items-center"
                  component={Anchor}
                  td="none"
                  padding="md"
                  shadow="0px 4px 20px 0px rgba(0, 0, 0, 0.0784313725)"
                >
                  <NextImage
                    src={"/locations/peshawar.svg"}
                    width={80}
                    height={95}
                    alt="Peshawar"
                  />
                  <Text size="sm" c="dimmed">
                    {" "}
                    Used cars in
                  </Text>
                  <Title fw={600} order={6}>
                    Peshawar
                  </Title>
                </Card>
              </div>
            </div>
            <div className="row g-3">
              <div className="col">
                <Card
                  mb="md"
                  className="align-items-center"
                  component={Anchor}
                  td="none"
                  padding="md"
                  shadow="0px 4px 20px 0px rgba(0, 0, 0, 0.0784313725)"
                >
                  <NextImage
                    src="/locations/karachi.svg"
                    width={80}
                    height={95}
                    alt="Karachi"
                  />
                  <Text size="sm" c="dimmed">
                    {" "}
                    Used cars in
                  </Text>
                  <Title fw={600} order={6}>
                    Karachi
                  </Title>
                </Card>
              </div>
              <div className="col">
                <Card
                  mb="md"
                  className="align-items-center"
                  component={Anchor}
                  td="none"
                  padding="md"
                  shadow="0px 4px 20px 0px rgba(0, 0, 0, 0.0784313725)"
                >
                  <NextImage
                    src={"/locations/islamabad.svg"}
                    width={80}
                    height={95}
                    alt="Islamabad"
                  />
                  <Text size="sm" c="dimmed">
                    {" "}
                    Used cars in
                  </Text>
                  <Title fw={600} order={6}>
                    Islamabad
                  </Title>
                </Card>
              </div>
              <div className="col">
                <Card
                  mb="md"
                  className="align-items-center"
                  component={Anchor}
                  td="none"
                  padding="md"
                  shadow="0px 4px 20px 0px rgba(0, 0, 0, 0.0784313725)"
                >
                  <NextImage
                    src={"/locations/lahore.svg"}
                    width={80}
                    height={95}
                    alt="Lahore"
                  />
                  <Text size="sm" c="dimmed">
                    {" "}
                    Used cars in
                  </Text>
                  <Title fw={600} order={6}>
                    Lahore
                  </Title>
                </Card>
              </div>
              <div className="col">
                <Card
                  mb="md"
                  className="align-items-center"
                  component={Anchor}
                  td="none"
                  padding="md"
                  shadow="0px 4px 20px 0px rgba(0, 0, 0, 0.0784313725)"
                >
                  <NextImage
                    src={"/locations/faisalabad.svg"}
                    width={80}
                    height={95}
                    alt="Faisalabad"
                  />
                  <Text size="sm" c="dimmed">
                    {" "}
                    Used cars in
                  </Text>
                  <Title fw={600} order={6}>
                    Faisalabad
                  </Title>
                </Card>
              </div>
              <div className="col">
                <Card
                  mb="md"
                  className="align-items-center"
                  component={Anchor}
                  td="none"
                  padding="md"
                  shadow="0px 4px 20px 0px rgba(0, 0, 0, 0.0784313725)"
                >
                  <NextImage
                    src={"/locations/peshawar.svg"}
                    width={80}
                    height={95}
                    alt="Peshawar"
                  />
                  <Text size="sm" c="dimmed">
                    {" "}
                    Used cars in
                  </Text>
                  <Title fw={600} order={6}>
                    Peshawar
                  </Title>
                </Card>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-none d-lg-block position-relative">
            <Title c="dimmed" fw={400} ta="center" order={4} my="xl">
              I am looking to buy a second <br /> hand car in
            </Title>
            <Input
              leftSection={<FaLocationDot />}
              placeholder="Enter your city"
              size="md"
              mx="xl"
            />
            <Image
              pos="absolute"
              bottom={0}
              src={"/locations/locations-bg.svg"}
              className="img-fluid"
              alt="Location Vector Background"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchByLocations;
