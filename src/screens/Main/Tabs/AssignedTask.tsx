import React, { useRef, useState } from 'react';
import { AnimatedTab, Block, AssignedCard, FlatList, Text, Icon, SearchBar, ImageButton, Button, TextInput } from '../../../components';
import {
  EarningData,
  EarningData2,
  EarningData3,
} from '../../../dummyData';
import { TabProps } from '.';
import { Platform, SectionList } from 'react-native';
import { Colors, Icons, Metrics, Sizes } from '../../../config';

export const AssignedTask = (props: TabProps<any>) => {
  const [Tab, setTab] = useState(1);
  const refRBSheet = useRef();
  const [selectedIndex, setSelectedIndex] = useState({ filterObj: 0, sortObj: 0 })
  const sortObj = [
    { id: 1, select: true, title: 'High' },
    { id: 2, select: false, title: 'Medium' },
    { id: 3, select: false, title: 'Low' },];
  const data = Tab == 1 ? [
    {
      title: '12 April, 24',
      data: EarningData,
    },
    {
      title: '10 May, 17',
      data: EarningData2,
    },
    {
      title: '07 May, 24',
      data: EarningData3,
    },
  ] :
    Tab == 2 ? [{ title: '03 June, 24', data: EarningData }] :
      [{ title: '03 June, 24', data: EarningData }, { title: '03 July, 24', data: EarningData3 }];

  const _renderHeader = () => {
    return (
      <AnimatedTab
        value={Tab}
        onChange={(d: any) => setTab(d)}
        options={[
          { label: 'New', id: 1 },
          { label: 'In Process', id: 2 },
          { label: 'Completed', id: 4 },
        ]}
      />
    )
  }
  const _renderItem = ({ item }: any) => {
    return (
      <Text>dksl;fkdsf</Text>
    )
  }

  return (
    <Block flex gradient={[Colors.background, Colors.textBackground]}>
      <Block backgroundColor="primary" height={54} margin={{
        Horizontal: Metrics.iPadHeightRatio(16), Top: Metrics.iPadHeightRatio(12)
      }}>
        {/* <Block
                    height={52}
                    padding={{ Top: 10 }}
                    backgroundColor="lightBackground"
                    style={{ borderTopLeftRadius: 32, borderTopRightRadius: 32 }}
                /> */}
        {_renderHeader()}
      </Block>
      <Block row margin={{ Horizontal: Metrics.iPadHeightRatio(16), Top: Metrics.iPadHeightRatio(12) }}>
        <SearchBar onChange={s => null} Style={{ flex: 1 }} />
        <Icon
          size={60}
          onPress={() => { refRBSheet.current.open() }}
          margin={{ Right: -8, Top: 0 }}
          name={'icFilter'} />
      </Block>
      <SectionList
        stickySectionHeadersEnabled={false}
        style={{
          padding: Metrics.iPadHeightRatio(Sizes.Base),
          marginTop: 0,
        }}
        sections={data}
        contentContainerStyle={{
          gap: Sizes.Base,
          paddingBottom: Metrics.iPadHeightRatio(20),
        }}
        showsVerticalScrollIndicator={false}
        // ListHeaderComponent={_renderHeader}
        renderSectionHeader={({ section: { title } }) => (
          <Text size={'H5'} font="Medium">
            {title}
          </Text>
        )}
        renderItem={_renderItem}
      />
    </Block>
  );
};
