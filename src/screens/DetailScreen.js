import React from 'react';
import { StyleSheet, Image} from 'react-native';
import { Center, Box, Button, ButtonText, VStack, HStack, Text } from "@gluestack-ui/themed";

import img0 from '../../src/img/img_book_fashinopolis.png';
import img1 from '../../src/img/img_book_chanel.png';
import img2 from '../../src/img/img_book_calligraphy.png';
import img3 from '../../src/img/img_book_ysl.png';
import img4 from '../../src/img/img_book_tbos.png';
import img5 from '../../src/img/img_book_stitchedup.png';

import Star from '../components/Star'

const images = [img0, img1, img2, img3, img4, img5];

const DetailScreen = ({ route }) => {
  const {
    title,
    artist,
    key,
    star,
    descriptions
  } = route.params;
  return (
    <Center backgroundColor='#fff' >
      <VStack>
        <Center paddingTop={50} paddingBottom={20}>
          <Image
            style={{ width: 210, height: 300 }}
            source={images[key]}
          />
        </Center>

        <Box paddingTop={10} paddingBottom={10}>
          <Center>
            <Text 
                fontFamily= "Roboto"
                fontSize={24}
                fontWeight="bold"
                paddingTop={10}
                paddingBottom={2}
            >{title}</Text>
            <Text 
                fontFamily= "Roboto"
                fontSize={14}
                paddingTop={10}
                paddingBottom={10}
            >{artist}</Text>
            <HStack marginTop={1} marginBottom={10}>
              <Star rating={star} />
              <Text paddingLeft={10}>{`${star}`}.0/5.0</Text>
            </HStack>
          </Center>
        </Box>
        <Center>
          <Text
              width={320}
              textAlign="center"
              fontSize= {14}
              fontFamil="Roboto"
              lineHeight={24}
              paddingBottom={30}
          >{descriptions}</Text>
        </Center>

        <Center paddingBottom={200}>
          <Button
            width={200}
            bgColor='#6200EE'
            onPress={() => null}
          >
            <ButtonText>
              BUY NOW FOR $46.99
            </ButtonText>
          </Button>
        </Center>

      </VStack>
    </Center>

  );
}
export default DetailScreen;