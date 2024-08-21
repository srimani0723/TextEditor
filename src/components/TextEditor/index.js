import {useState} from 'react'

import {VscBold} from 'react-icons/vsc'

import {GoItalic} from 'react-icons/go'

import {AiOutlineUnderline} from 'react-icons/ai'

import {
  Container,
  Box,
  ImageBox,
  Heading,
  Image,
  EditorBox,
  ButtonsArea,
  Button,
  TextEditArea,
  List,
} from './style'

const TextEditor = () => {
  const [bold, setBold] = useState(false)
  const [italic, setItalic] = useState(false)
  const [underline, setUnderline] = useState(false)

  return (
    <Container>
      <Box>
        <ImageBox>
          <Heading>Text Editor</Heading>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            alt="text editor"
          />
        </ImageBox>

        <EditorBox>
          <ButtonsArea>
            <List>
              <Button
                type="button"
                data-testid="bold"
                onClick={() => setBold(!bold)}
                color={bold ? '#faff00' : '#f1f5f9'}
              >
                <VscBold size={25} />
              </Button>
            </List>

            <List>
              <Button
                type="button"
                data-testid="italic"
                onClick={() => setItalic(!italic)}
                color={italic ? '#faff00' : '#f1f5f9'}
              >
                <GoItalic size={25} />
              </Button>
            </List>

            <List>
              <Button
                type="button"
                data-testid="underline"
                onClick={() => setUnderline(!underline)}
                color={underline ? '#faff00' : '#f1f5f9'}
              >
                <AiOutlineUnderline size={25} />
              </Button>
            </List>
          </ButtonsArea>
          <TextEditArea
            isBold={bold}
            isItalic={italic}
            isUnderline={underline}
          />
        </EditorBox>
      </Box>
    </Container>
  )
}

export default TextEditor
