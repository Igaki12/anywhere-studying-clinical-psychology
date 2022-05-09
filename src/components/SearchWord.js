import {
  Input,
  IconButton,
  Flex,
  HStack,
  Tag,
  TagLabel,
  TagCloseButton,
  Text,
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { useRef, useState } from 'react'

export const SearchWord = ({
  addWordFilter,
  deleteWordFilter,
  showSettingDetail,
  questionList,
  checkSelection,
}) => {
  const [predictionText, setPredictionText] = useState()
  const [predictionNum, setPredictionNum] = useState(0)
  const settingDetail = showSettingDetail()
  const inputEl = useRef(null)
  const addWordFilterTag = () => {
    if (inputEl.current.value === '') return
    // ここに検索予測が０なら中止するコードを追加
    addWordFilter(inputEl.current.value)
    inputEl.current.value = ''
  }
  const updatePredictionNum = () => {
    let newPredictNum = 0
    questionList.forEach((group) => {
      let matchList = []
      matchList = group.groupContents.filter((question, index) => {
        if (
          question.detailInfo &&
          question.detailInfo.indexOf(inputEl.current.value) > -1
        )
          return true
        if (
          question.questionSentence &&
          question.questionSentence.indexOf(inputEl.current.value) > -1
        )
          return true
        if (
          question.answer &&
          question.answer.indexOf(inputEl.current.value) > -1
        )
          return true
        if (
          question.commentary &&
          question.commentary.indexOf(inputEl.current.value) > -1
        )
          return true
        if (
          question.choices &&
          question.choices.every(
            (choice) => choice.indexOf(inputEl.current.value) === -1,
          ) === false
        )
          return true
        console.log('mismatch:' + question.detailInfo)
      })
      newPredictNum += matchList.length
    })
    console.log('newPredictNum:', newPredictNum)
    setPredictionNum(newPredictNum)
    setPredictionText(newPredictNum + '件の問題が該当しました')
  }
  return (
    <>
      <Text
        fontSize="sm"
        pl="4"
        pr="4"
        maxW="sm"
        textAlign={'center'}
        mt="4"
        color={'white'}
        bgColor={'green.800'}
        borderRadius="full"
      >
        {predictionText}
      </Text>
      <Flex m={2} mt="1" pr={3} maxW={'sm'}>
        <Input
          focusBorderColor="teal"
          placeholder="キーワードを設定しさらに絞り込む"
          onFocus={() => setPredictionText('ここに検索予測が表示されます')}
          // onBlur={() => setPredictionText()}
          ref={inputEl}
          onChange={updatePredictionNum}
        />
        {predictionNum > 0 ? (
          <IconButton
            ml={2}
            variant="outline"
            colorScheme="teal"
            aria-label="Search database"
            icon={<AddIcon />}
            onClick={() => {
              addWordFilterTag()
              setPredictionText()
              checkSelection()
            }}
          />
        ) : (
          <IconButton
            isDisabled
            ml={2}
            variant="outline"
            colorScheme="teal"
            aria-label="Search database"
            icon={<AddIcon />}
          />
        )}
      </Flex>
      <HStack spacing={1} m="3" mt={-1}>
        {settingDetail.wordFilter.map((word, index) => (
          <Tag
            size={'lg'}
            key={index + 'searchTag'}
            borderRadius="full"
            variant="solid"
            colorScheme="teal"
          >
            <TagLabel key={index + 'searchTagLabel'}>{word}</TagLabel>
            <TagCloseButton
              key={index + 'searchTagCloseBtn'}
              onClick={() => {
                deleteWordFilter(index)
                setPredictionText(`【${word}】タグが消去されました`)
                checkSelection()
              }}
            />
          </Tag>
        ))}
      </HStack>
    </>
  )
}
