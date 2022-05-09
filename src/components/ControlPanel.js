import {
  Stack,
  Button,
  Spacer,
  Circle,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Divider,
  Text,
  Tag,
} from '@chakra-ui/react'
import { ArrowBackIcon, SettingsIcon, ChevronDownIcon } from '@chakra-ui/icons'
export const ControlPanel = ({ showSettingDetail, showHistory }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  let settingDetail = showSettingDetail()
  let history = showHistory()
  const scrollToTheBottom = () => {
    let element = document.documentElement
    let bottom = element.scrollHeight - element.clientHeight
    window.scroll(0, bottom)
  }
  return (
    <>
      <Stack
        direction="column"
        spacing={4}
        align="center"
        position={'fixed'}
        top="5"
        right={'5'}
        alignItems={'end'}
      >
        <Button
          color={'gray.600'}
          variant="outline"
          borderRadius={'lg'}
          bgColor={'gray.50'}
          h="45px"
          w={'45px'}
          onClick={onOpen}
        >
          <SettingsIcon w={'25px'} h="25px" />
        </Button>
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Settings</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>現在のモード:</Text>
            <Tag colorScheme="teal" m={1}>
              {settingDetail.mode}
            </Tag>
            <Text>出題パターン:</Text>
            <Tag colorScheme="teal" m={1}>
              {settingDetail.questionOrder}
            </Tag>
            <Text>出題範囲:</Text>
            {settingDetail.questionRange.map((year) => (
              <Tag colorScheme="teal" m="1">
                {year}
              </Tag>
            ))}
            <Text>単語絞り込み:</Text>
            {settingDetail.wordFilter.map((word) => (
              <Tag colorScheme="teal" m="1">
                {word}
              </Tag>
            ))}
            <Divider orientation="horizontal" mt={3} mb="1" />
            <Text>現在の成績:</Text>
            <Text fontWeight={'bold'} pl="2">
              現在{history[history.length - 1].askedQuestionList.length}問目 /
              残り{history[history.length - 1].remainingQuestionList.length}問
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost">設定を変更する</Button>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Stack
        direction="column"
        spacing={4}
        align="center"
        position={'fixed'}
        bottom="5"
        right={'5'}
        alignItems={'end'}
      >
        <Button
          colorScheme="teal"
          variant="solid"
          borderRadius={'full'}
          borderWidth="2px"
          borderColor="white"
          h="50px"
          w={'50px'}
          onClick={scrollToTheBottom}
        >
          <ChevronDownIcon w={'40px'} h="40px" />
        </Button>
      </Stack>
    </>

    // <Stack
    //   bg={'teal'}
    //   p="2"
    //   bottom={'0'}
    //   position={'fixed'}
    //   w="100%"
    //   mt={'auto'}
    //   direction="row"
    // >
    //   <Button colorScheme="teal" variant="solid">
    //     <ArrowBackIcon />
    //   </Button>
    //   <Spacer />
    //   <Button
    //     colorScheme="teal"
    //     variant="solid"
    //     minW={'150px'}
    //     letterSpacing="0.1em"
    //   >
    //     Next
    //   </Button>
    //   <Spacer />
    //   <Button colorScheme="teal" variant="solid">
    //     <CheckIcon />
    //   </Button>
    // </Stack>
  )
}
