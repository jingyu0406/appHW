import React from "react";
import { StyleSheet} from "react-native";
import { Box, VStack, Text, Pressable, Image } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

import img0 from '../../src/img/img_book_fashinopolis.png';
import img1 from '../../src/img/img_book_chanel.png';
import img2 from '../../src/img/img_book_calligraphy.png';
import img3 from '../../src/img/img_book_ysl.png';
import img4 from '../../src/img/img_book_tbos.png';
import img5 from '../../src/img/img_book_stitchedup.png';

import Star from './Star.js'

const images = [img0, img1, img2, img3, img4, img5];

const AlbumDetail = ({ album }) => {
  const { navigate } = useNavigation();
  return (
    <Box margin={8} borderRadius={3} shadow={2} width={140}>
      <VStack bg='#fff' >
        <VStack marginBottom={10}>
          <Pressable
            onPress={() => album.press ? navigate('Detail', album) : null}
          >
            <Image width={140} height={200}
              source={images[album.key]}
            />
          </Pressable>
        </VStack>

        <VStack marginTop={8} marginBottom={8} paddingLeft={2} >
          {album.star > 0 ? <Star rating={album.star } /> : null}
          <Text bold fontFamily="Roboto" fontSize={16}>{album.title}</Text>
          <Text fontFamily="Roboto" fontSize={14} >{album.artist}</Text>
        </VStack>
      </VStack>
    </Box>
  )
};


export default AlbumDetail;