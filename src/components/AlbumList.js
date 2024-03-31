import React from "react";
import { FlatList, SectionList, StyleSheet } from "react-native";
import AlbumDetail from "./AlbumDetail";
import { Box, Heading } from "@gluestack-ui/themed";
import { Text } from "@gluestack-ui/themed";

const Albumlist = ({ list }) => {
  const renderSection = ({ section }) => (
    <Box>
      <Box width={320} height={30} margin={8}>
        <Text fontSize={24} fontWeight="bold" fontFamily="Roboto">{section.title}</Text>
      </Box>
      <FlatList
        horizontal={true}
        data={section.data}
        renderItem={({ item }) => <AlbumDetail album={item} />}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.key}
      />
    </Box>
  );


  const render = () => null;
  return (
    <SectionList
      sections={list}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      stickySectionHeadersEnabled={false}
      showsHorizontalScrollIndicator={false}
      renderSectionHeader={renderSection}
      renderItem={render}
      keyExtractor={item => item.title}
    />
  );
};

export default Albumlist;