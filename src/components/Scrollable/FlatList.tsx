import {
  FlatListProps,
  FlatList as FlatListBase,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {Colors} from '../../config';
import { ListEmptyComponent } from './EmptyComponents';

interface Props<item> extends FlatListProps<item> {
  page?: boolean;
  tab?:boolean
}
//TODO: setGenericType for FlatListItems
//TODO: setup Pagination
export const FlatList = (props: Props<any>) => {
  return (
    <FlatListBase
      showsHorizontalScrollIndicator={!props.page}
      showsVerticalScrollIndicator={!props.page}
      {...props}
      ListEmptyComponent={()=>(<ListEmptyComponent/>)}
      style={[props.style, !!props.page && style.page]}
    />
  );
};
const style = StyleSheet.create({
  page: {flex: 1, padding: 16, backgroundColor: Colors.background},
});
