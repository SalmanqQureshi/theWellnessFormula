import React from 'react'
import { Block, FlatList, Image, PropertyCardList, Text, BookCard } from '../../../components'
import { Colors, Images } from '../../../config'

const Books = () => {
    return (
        <Block flex scroll scrollGradient gradient={[Colors.onPrimary, Colors.onSecondary]}>
            <Image source={Images.book_frame} style={{ width: '93%', height: 56, borderRadius: 10, marginHorizontal: 16, marginTop: 24 }} />
            <FlatList
                data={[0, 0, 0, 0]}
                contentContainerStyle={{ marginHorizontal: 15, marginTop: 10 }}
                renderItem={({ item }) => (
                    <BookCard
                        key={"VideoCard" + item.id + item.is_liked}
                        onPress={() => { }}
                        item={item}
                    />)}
            />
        </Block>
    )
}

export { Books }