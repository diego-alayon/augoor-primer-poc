"use client"
import {ThemeProvider} from '@primer/react'
import {Button, ButtonGroup, ActionMenu, ActionList} from '@primer/react'
import AgGridTableMenuDemo from './components/AgGridTableMenuDemo'

const count = 4;

export default function Home({count}) {
  
  return (
    <>
    <ThemeProvider nightScheme="dark_dimmed" colorMode='dark'>
      <Button size='medium' count={4} sx={{backgroundColor:'blue'}}>Click me</Button>
      <ButtonGroup size='small'>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
      <AgGridTableMenuDemo/>
    </ThemeProvider>
    </>

  )
}
