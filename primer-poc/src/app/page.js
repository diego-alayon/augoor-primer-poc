"use client"
import {ThemeProvider} from '@primer/react'
import {Button, ButtonGroup, ActionMenu, ActionList} from '@primer/react'

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

  <ActionMenu>
    <ActionMenu.Button>Open menu</ActionMenu.Button>
    <ActionMenu.Overlay width="medium">
      <ActionList>
        <ActionList.Item onSelect={() => alert('Copy link clicked')}>
          Copy link
          <ActionList.TrailingVisual>⌘C</ActionList.TrailingVisual>
        </ActionList.Item>
        <ActionList.Item onSelect={() => alert('Quote reply clicked')}>
          Quote reply
          <ActionList.TrailingVisual>⌘Q</ActionList.TrailingVisual>
        </ActionList.Item>
        <ActionList.Item onSelect={() => alert('Edit comment clicked')}>
          Edit comment
          <ActionList.TrailingVisual>⌘E</ActionList.TrailingVisual>
        </ActionList.Item>
        <ActionList.Divider />
        <ActionList.Item
          variant="danger"
          onSelect={() => alert('Delete file clicked')}
        >
          Delete file
          <ActionList.TrailingVisual>⌘D</ActionList.TrailingVisual>
        </ActionList.Item>
      </ActionList>
    </ActionMenu.Overlay>
  </ActionMenu>

    </ThemeProvider>
    </>

  )
}
