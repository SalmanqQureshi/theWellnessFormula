import {Pressable, StyleSheet, Image, ImageBackground} from 'react-native';
import {Colors, Images, Metrics} from '../../config';
import {Block} from '../Layout';
import {Text} from '../Text';

interface EarningProps {
  name?: string;
  ID?: string;
  Amount?: Number;
  backgruondName:string;
  onPress?:()=>void
}

export const AssignedCard = ({option = [], ...props}: EarningProps) => {
  return (
    <Pressable style={styles.EarningCard} onPress={props.onPress}>
      <Block style={{}} row >
        <Block row style={{alignItems:'center',justifyContent:'center'}}>
      <Image source={Images.LoginLogo} style={{ width:Metrics.heightRatio(40),height:Metrics.heightRatio(40)}}/>
        <Text font="Regular" size="H5" color={'textNumber'} style={{position:'absolute',textAlign:'center'}}>
      {props.backgruondName}
        </Text>
        </Block>
        <Block gap={5} margin={{Horizontal:12}}>
          <Text style={{}} color="outline" size='Body' font="Regular" margin={{Top:5}}>
            {'Task ID: '}
            <Text font='Regular' color='textNumber' size='Body'>
              {props.ID}10402
            </Text>
          </Text>
          <Text font="Regular" size="H5">
            {props.name}
          </Text>
        </Block>
      </Block>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  EarningCard: {
    backgroundColor: Colors.onSecondary,
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 20,
    shadowOpacity: 1,
    paddingVertical: 12,
    padding: 12,
  },
});
