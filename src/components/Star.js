import { Box, Image } from '@gluestack-ui/themed';
import React from 'react';
import { View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Star = ({ rating }) => {
  const starbox = [];
  for (let i = 0; i < rating; i++) {
    starbox.push(<Image source={require("../img/icon/icon_star_filled.png")} marginLeft={1} marginRight={2} width={14} height={14}/>)
  }
  let s = starbox.length;
  while (s < 5) {
    starbox.push(<Image source={require("../img/icon/icon_star_empty.png")} marginLeft={1} marginRight={2} width={14} height={14}/>
    )
    s = starbox.length;
  }

  

  return (
    <Box flexDirection="row">
      {starbox}
    </Box>
  )
}

export default Star;