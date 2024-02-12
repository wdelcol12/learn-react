// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'

import MyComp from './qcomps/firstcomp'
import Bio from './qcomps/bios'
import Pro from './components/profile_props'
import Gall from './qcomps/gallery_props'
import TodoList from './qcomps/todos'
import Sq from './components/square'
import Item from './qcomps/props_item'

export default function Home() {
  return (
    <div className={styles.main}>
        <Item />
    </div>
  )
}
