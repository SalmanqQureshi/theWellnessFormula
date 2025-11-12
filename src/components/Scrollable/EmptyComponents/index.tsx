import React from "react";
import { Block } from "../../Layout";
import { Image } from "../../Image";

const EmptyImage = require("./assets/Empty.png")

export const ListEmptyComponent = ()=>{
    return(
    <Block flex align='middle'>
    <Image source={EmptyImage} />
         </Block>
        )
}