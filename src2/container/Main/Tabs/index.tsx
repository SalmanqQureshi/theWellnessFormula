import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Home } from '../Home'
import { Profile } from '../Profile'
import { About } from '../About'
import { Contact } from '../Contact'

const Tab = createBottomTabNavigator()
const Tabs = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen component={Home} name={'Home'} />
        <Tab.Screen component={Profile} name={'Profile'} />
        <Tab.Screen component={About} name={'About Us'} />
        <Tab.Screen component={Contact} name={'Contact Us'} />
    </Tab.Navigator>
  )
}

export {Tabs}