import {
  CheckboxGroup,
  Checkbox,
  Stack,
  Radio,
  RadioGroup,
  Button,
  List,
  ListItem,
  ListIcon,
  Divider,
  Text,
  Alert,
  AlertIcon,
} from '@chakra-ui/react'
import { CheckCircleIcon, QuestionIcon, WarningIcon } from '@chakra-ui/icons'
import '../App.css'
import { SearchWord } from './SearchWord'
import { useState } from 'react'
export const Setting = ({
  questionList,
  showSettingDetail,
  updateQuestionOrder,
  toggleQuestionRange,
  updateQuestionMode,
  selectQuestionList,
  nextQuestion,
  makeSetting,
  addWordFilter,
  deleteWordFilter,
}) => {
  const settingDetail = showSettingDetail()
  const [checkMsg, setCheckMsg] = useState()
  const checkSelection = () => {
    let selectedQuestionList = []
    questionList.forEach((group) => {
      if (settingDetail.questionRange.indexOf(group.groupTag) === -1) {
        console.log('この文章が2回表示される')
        return
      }
      group.groupContents.forEach((question) => {
        let flag = 0
        if (settingDetail.wordFilter.length === 0) {
          flag = 1
        }
        settingDetail.wordFilter.forEach((word) => {
          if (question.detailInfo && question.detailInfo.indexOf(word) > -1)
            flag = 1
          if (
            question.questionSentence &&
            question.questionSentence.indexOf(word) > -1
          )
            flag = 1
          if (question.answer && question.answer.indexOf(word) > -1) flag = 1
          if (question.commentary && question.commentary.indexOf(word) > -1)
            flag = 1
          if (
            question.choices &&
            question.choices.every((choice) => choice.indexOf(word) === -1) ===
              false
          )
            flag = 1
        })
        if (flag === 0) return
        selectedQuestionList.push(question)
      })
    })
    console.log('selectedQuestionList:')
    console.log(selectedQuestionList)
    if (
      settingDetail.wordFilter.length > 0 &&
      selectedQuestionList.length > 0
    ) {
      setCheckMsg('現在' + selectedQuestionList.length + '件の質問を選択中')
    } else if (selectedQuestionList.length === 0) {
      setCheckMsg('条件を満たした質問が存在しません')
    } else {
      setCheckMsg()
      console.log('1回だけ表示される')
    }
  }
  return (
    <>
      <List spacing={3} p={3} bgColor="green.50" fontSize={'sm'}>
        <ListItem transitionDelay="3s" className="Headline1">
          <ListIcon as={CheckCircleIcon} color="green.500" />
          スマートフォン・PC・タブレットでどこでも試験対策が可能！
        </ListItem>
        <ListItem transitionDelay="100s" className="Headline1">
          <ListIcon as={CheckCircleIcon} color="green.500" />
          練習モードで解説をインプットし,テストモードでアウトプットを実践しよう
        </ListItem>
        <ListItem transitionDelay="5s" className="Headline1">
          <ListIcon as={CheckCircleIcon} color="green.500" />
          出題パターンや細かい出題範囲設定にも対応済み。
        </ListItem>
        {/* You can also use custom icons from react-icons */}
        <ListItem transitionDelay="6s" className="Headline1">
          <ListIcon as={WarningIcon} color="green.500" />
          問題・解答解説の正誤に関しては責任を持ちません
        </ListItem>
        <ListItem transitionDelay="6s" className="Headline1">
          <ListIcon as={QuestionIcon} color="green.500" />
          その他説明不足・バグ等あれば本人まで。
        </ListItem>
      </List>

      {checkMsg === '条件を満たした質問が存在しません' ? (
        <>
          <Stack direction="row" spacing={4} align="center" m="2" ml={6}>
            <Button colorScheme="teal" variant="outline" isDisabled>
              練習モード
            </Button>
            <Button
              bgGradient="linear(to bottom right, green.300, green.800)"
              color={'white'}
              variant="solid"
              isDisabled
            >
              テストモード
            </Button>
          </Stack>
          <Alert status="error" fontWeight={'semibold'}>
            <AlertIcon />
            {checkMsg}
          </Alert>
        </>
      ) : (
        <>
          <Stack direction="row" spacing={4} align="center" m="2" ml={6}>
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={() => {
                updateQuestionMode('training')
                selectQuestionList(questionList, settingDetail)
                nextQuestion(settingDetail)
                makeSetting()
              }}
            >
              練習モード
            </Button>
            <Button
              bgGradient="linear(to bottom right, green.300, green.800)"
              color={'white'}
              variant="solid"
              onClick={() => updateQuestionMode('practice')}
            >
              テストモード
            </Button>
          </Stack>
          {checkMsg ? (
            <Alert status="success">
              <AlertIcon />
              {checkMsg}
            </Alert>
          ) : (
            <></>
          )}
        </>
      )}
      <RadioGroup defaultValue={settingDetail.questionOrder}>
        <Stack spacing={5} direction="row" p={2}>
          <Radio
            colorScheme="red"
            value="random"
            onChange={() => updateQuestionOrder('random')}
          >
            ランダム出題
          </Radio>
          <Radio
            colorScheme="green"
            value="ascend"
            onChange={() => updateQuestionOrder('ascend')}
          >
            順番通り出題
          </Radio>
        </Stack>
      </RadioGroup>
      <CheckboxGroup colorScheme="green" defaultValue={['2020本', '2018本']}>
        <Stack
          spacing={[2, 4]}
          direction={['column', 'row']}
          bg="blackAlpha.100"
          p={2}
          mb="5"
        >
          {questionList.map((group, index) => (
            <Checkbox
              value={group.groupTag}
              key={index}
              onChange={() => {
                toggleQuestionRange(group.groupTag)
                checkSelection()
              }}
            >
              {group.groupTag}(
              {group.groupContents ? group.groupContents.length : '0'}問)
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
      <SearchWord
        showSettingDetail={showSettingDetail}
        addWordFilter={addWordFilter}
        deleteWordFilter={deleteWordFilter}
        questionList={questionList}
        checkSelection={checkSelection}
      />
      <Divider orientation="horizontal" />
      <Text fontSize="xs" textColor={'blackAlpha.500'} ml="4">
        ©2022- IgaTatApps
      </Text>
    </>
  )
}
