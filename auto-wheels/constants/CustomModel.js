import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Center,
  Grid,
  Image,
  Input,
  List,
  Modal,
  Paper,
  ScrollArea,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { BsArrowRight, BsSearch } from 'react-icons/bs';

const CustomModel = ({ isOpen, onClose:closeModal  ,selection,setSelection }) => {
  const [opened, { open, close }] = useDisclosure(isOpen);


  useEffect(() => {
    if (isOpen) open();
    else close();
  }, [isOpen, open, close]);

  useEffect(() => {
    console.log('Current Selection:', selection);
  }, [selection]);

  const handleSelection = (type, value) => {
    setSelection(prev => {
      const updatedSelection = { ...prev, [type]: value };

      if (type === 'make') {
        return {
          ...updatedSelection,
          model: '',  // Reset model and variant
          variant: '',
        };
      }

      if (type === 'model') {
        return {
          ...updatedSelection,
          variant: '',  // Reset variant
        };
      }

      return updatedSelection;
    });
  };

 const makes = [
  'Toyota',
  'Honda',
  'BMW',
  'Kia',
  'Ford',
  'Chevrolet'
]; // Example makes

const models = {
  Toyota: ['Corolla', 'Camry', 'Yaris', 'Highlander', 'RAV4'],
  Honda: ['Civic', 'Accord', 'CR-V', 'Fit', 'Pilot'],
  BMW: ['320i', 'X5', 'M3', 'X3', 'Z4'],
  Kia: ['Sportage', 'Soul', 'Forte', 'Seltos', 'K5'],
  Ford: ['Mustang', 'F-150', 'Escape', 'Explorer', 'Fusion'],
  Chevrolet: ['Malibu', 'Silverado', 'Equinox', 'Cruze', 'Traverse'],
};

const variants = {
  Corolla: [
    'Hybrid WxB 1797cc, Automatic, Hybrid',
    '2014 - 2024 Altis Grande X CVT-i 1.8 Beige Interior',
    '2022 - 2023 SE 2.0L CVT',
  ],
  Camry: [
    '2022 - 2023 SE 2.5L',
    '2022 - 2023 XSE V6',
    '2021 - 2022 XLE Hybrid',
  ],
  Civic: [
    '2022 - 2023 LX 2.0L',
    '2022 - 2023 Sport 1.5T',
    '2021 - 2022 EX-L 2.0L',
  ],
  Accord: [
    '2022 - 2023 EX 1.5T',
    '2022 - 2023 Touring Hybrid',
    '2021 - 2022 Sport 2.0T',
  ],
  '320i': [
    '2022 - 2023 Sedan 2.0L',
    '2021 - 2022 xDrive 2.0L',
    '2021 - 2022 M Sport',
  ],
  'X5': [
    '2022 - 2023 xDrive40i',
    '2022 - 2023 xDrive50i',
    '2021 - 2022 M50i',
  ],
  'Mustang': [
    '2022 - 2023 GT 5.0L',
    '2022 - 2023 EcoBoost 2.3L',
    '2021 - 2022 Mach 1',
  ],
  'F-150': [
    '2022 - 2023 Lariat 2.7L V6',
    '2022 - 2023 King Ranch 5.0L V8',
    '2021 - 2022 Raptor 3.5L V6',
  ],
  // Add more models and variants as needed
};


  return (
    <Box>
      <Modal
        opened={opened}
        onClose={close || closeModal}
        withCloseButton={false}
        size="50%"
        padding={0}
      >
        <Paper
          className="search-modal-header"
          p="xs"
          shadow="0px 2px 5px 0px #00000014"
        >
          <Center>
            <Button
              className={`tab-button ${!selection.model && !selection.variant ? 'active' : ''}`}
              color="#E90808"
              size="xs"
              mr="md"
              onClick={() => {
                if (selection.make) {
                  setSelection(prev => ({ ...prev, make: '' }));
                }
              }}
            >
              Make
            </Button>
            <Button
              className={`tab-button ${selection.make && !selection.model ? 'active' : ''}`}
              variant="subtle"
              bg="#F3F3F3"
              color="#878787"
              size="xs"
              mr="md"
              autoContrast
              onClick={() => {
                if (selection.model) {
                  setSelection(prev => ({ ...prev, model: '' }));
                }
              }}
            >
              Model
            </Button>
            <Button
              className={`tab-button ${selection.model ? 'active' : ''}`}
              variant="subtle"
              bg="#F3F3F3"
              color="#878787"
              size="xs"
              mr="md"
              autoContrast
              onClick={() => {
                if (selection.variant) {
                  setSelection(prev => ({ ...prev, variant: '' }));
                }
              }}
            >
              Variants
            </Button>
          </Center>
        </Paper>
        <Grid gutter={0}>
          <Grid.Col span={4} p="md" pt="xl" className="border-end">
            <Input
              placeholder="Search by Car Make"
              leftSection={<BsSearch />}
            />
            <Title order={5} my="sm" fw={600}>
              Popular
            </Title>
            <ScrollArea
              h={250}
              offsetScrollbars
              scrollbarSize={5}
              scrollHideDelay={500}
              scrollbars="y"
            >
              <List className="search-dropdown-lists" listStyleType="none">
                {makes.map(make => (
                  <List.Item
                    key={make}
                    className={`search-dropdown-lists__item ${selection.make === make ? 'selected' : ''}`}
                    icon={<Image src={`/megamenu/search-menu/${make.toLowerCase()}-sm.svg`} />}
                    onClick={() => handleSelection('make', make)}
                  >
                    {make} <BsArrowRight />
                  </List.Item>
                ))}
              </List>
            </ScrollArea>
          </Grid.Col>
          <Grid.Col span={4} p="md" pt="xl" className="border-end">
            <Input
              placeholder="Search by Car Model"
              leftSection={<BsSearch />}
            />
            <Title order={5} my="sm" fw={600}>
              All Models
            </Title>
            <ScrollArea
              h={250}
              offsetScrollbars
              scrollbarSize={5}
              scrollHideDelay={500}
              scrollbars="y"
            >
              <List className="search-dropdown-lists" listStyleType="none">
                {selection.make && models[selection.make]?.map(model => (
                  <List.Item
                    key={model}
                    className={`search-dropdown-lists__item ${selection.model === model ? 'selected' : ''}`}
                    onClick={() => handleSelection('model', model)}
                  >
                    {model} <BsArrowRight />
                  </List.Item>
                ))}
              </List>
            </ScrollArea>
          </Grid.Col>
          <Grid.Col span={4} p="md" pt="xl" className="border-end">
            <Input
              placeholder="Search by Car Variant"
              leftSection={<BsSearch />}
            />
            <Title order={5} my="sm" fw={600}>
              Variants
            </Title>
            <ScrollArea
              offsetScrollbars
              scrollbarSize={5}
              scrollHideDelay={500}
              scrollbars="y"
            >
              <List className="search-dropdown-lists" listStyleType="none">
                {selection.model && variants[selection.model]?.map(variant => (
                  <List.Item
                    key={variant}
                    className={`search-dropdown-lists__item ${selection.variant === variant ? 'selected' : ''}`}
                    onClick={() => handleSelection('variant', variant)}
                  >
                    {variant} <BsArrowRight />
                  </List.Item>
                ))}
              </List>
            </ScrollArea>
          </Grid.Col>
        </Grid>
        <Box className='text-center mb-2' >
            <Button   className={`tab-button ${!selection.model && !selection.variant ? 'active' : ''}`}
              color="#E90808"
              size="xs"
              mr="md"
              onClick={closeModal}>Done</Button>
        </Box>
      </Modal>

   
    </Box>
  );
};

export default CustomModel;
