import React, { useRef } from 'react'
import { Block } from '../Layout'
import { RefreshControl, ScrollView } from 'react-native'
import { Text } from '../Text'
import { Icon } from '../Icon'
import { Map } from '../MapView'
import { Marker } from 'react-native-maps'
import { Colors, Icons, Images, Metrics } from '../../config'
import { Image } from '../Image'
import { ItemRow } from '../ItemRow'
import { ItemColoumn } from '../ItemColumn'

const Detail = () => {

  const map = useRef();
  return (
    <Block style={{  }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 100, marginHorizontal: Metrics.iPadHeightRatio(16), }}
      // style={{ marginHorizontal: 14,marginTop:12 }}
      >
        <Text size="H3" font="Medium" onPress={() => { }} margin={{ Top: Metrics.iPadHeightRatio(12) }}>
          {/* {'project.name'} */}Dapibus ultrices sit
        </Text>
        <Text color="lightTextColor" margin={{ Top: 10, Bottom: 2 }} size="H6">
          Claim No. <Text color="textNumber">
            {/* {'project.claim_num'} */} 10402
          </Text>
        </Text>
        <Block style={{ width: '100%', aspectRatio: 340 / 178 }}>
          <Image source={Images.icMapImage} resizeMode='stretch' style={{ width: '100%', marginTop: 12, height:'87%'}} />
          {/* <Map
            // pointerEvents="none"
            ref={map}
            type="card"
            region={{
              latitude: 41.8781,
              longitude: -87.6298,
              latitudeDelta: 0.0043,
              longitudeDelta: 0.0034
            }}>
            <Marker
              coordinate={{
                latitude: 41.8781,
                longitude: -87.6298
              }}
            />
          </Map> */}
        </Block>
        <ItemRow
          row
          title={'77 W Jackson Blvd, Chicago, IL 60604, United States'}
          icon={"icLocationPin"}
          style={{ marginVertical: 14, marginTop: 12 }} />
        <Block margin={{ Vertical: 0 }} row>
          <ItemRow row title={'26 Apr ‘21'} icon="icCalender" style={{ marginVertical: 14, marginTop: 12 }} />
          <ItemRow row title={'07:30 PM'} icon="icClock" style={{ marginVertical: 14, marginTop: 12, marginHorizontal: 100 }} />
        </Block>
        <Block margin={{ Vertical: 18 }} row >
          <ItemColoumn title={'Status'} value={'In Process'} valueTextColor={'musterdYellow'}/>
          <ItemColoumn title={'Type'} value={'Mechanical'} style={{marginHorizontal: 120,}}/>
        </Block>
        <ItemColoumn title={'Completetion Date :'} value={'26 July, 2024'} />
        <Text
          style={{ paddingTop: 5 }}
          margin={{ Horizontal: 4, Top: 30 }}
          font='Medium'
          size="H5">
          {'Assigned Members'}
        </Text>
        <Block row margin={{ Vertical: 18 }}>
          <Image source={Images.assigneMember} />
          <Text
            font='Regular'
            margin={{ Horizontal: 14 }}
            style={{ paddingTop: 10 }}
            size="H6">
            {/* {moment(project.created_at).format('MMM DD, yy')} */}
            Will Collins
          </Text>
        </Block>
        <Block row margin={{ Horizontal: 0 }}>
          <Image source={Images.assigneMember2} />
          <Text
            font='Regular'
            margin={{ Horizontal: 14 }}
            style={{ paddingTop: 10 }}
            size="H6">
            {/* {moment(project.created_at).format('MMM DD, yy')} */}
            Alex Stewart
          </Text>
        </Block>
      </ScrollView>
    </Block>
  )
}

export default Detail
