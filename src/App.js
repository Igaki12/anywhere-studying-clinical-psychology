import './App.css'
import { Box, Heading, Badge } from '@chakra-ui/react'
import { Setting } from './components/Setting'
import { QuestionsLog } from './components/QuestionsLog'
import { ControlPanel } from './components/ControlPanel'
import { useQuestionList } from './useQuestionList'
import { useSetting } from './hooks/useSetting'
import { useHistory } from './hooks/useHistory'
import { ChoicePanel } from './components/ChoicePanel'

function App() {
  const { showQuestionList } = useQuestionList()
  const questionList = showQuestionList()
  const {
    showSettingDetail,
    updateQuestionOrder,
    toggleQuestionRange,
    updateQuestionMode,
    makeSetting,
    addWordFilter,
    deleteWordFilter,
  } = useSetting()
  const settingDetail = showSettingDetail()
  const {
    showHistory,
    selectQuestionList,
    nextQuestion,
    checkAnswer,
    hideAnswer,
  } = useHistory()
  const history = showHistory()

  return (
    <>
      <Heading mt={'3'} ml="3" color="teal">
        どこでも試験対策
      </Heading>
      <Badge ml={3} mt="-3" borderRadius="full" px="2" colorScheme="teal">
        第二解剖学・組織
      </Badge>
      {settingDetail.isSet ? (
        <></>
      ) : (
        <Setting
          questionList={questionList}
          showSettingDetail={showSettingDetail}
          updateQuestionOrder={updateQuestionOrder}
          toggleQuestionRange={toggleQuestionRange}
          updateQuestionMode={updateQuestionMode}
          selectQuestionList={selectQuestionList}
          nextQuestion={nextQuestion}
          makeSetting={makeSetting}
          addWordFilter={addWordFilter}
          deleteWordFilter={deleteWordFilter}
        />
      )}
      {settingDetail.isSet ? (
        <>
          {/* <ResultBar
            showHistory={showHistory}
            showSettingDetail={showSettingDetail}
          /> */}
          <QuestionsLog
            questionList={questionList}
            showHistory={showHistory}
            nextQuestion={nextQuestion}
            checkAnswer={checkAnswer}
            hideAnswer={hideAnswer}
            showSettingDetail={showSettingDetail}
          />
          {settingDetail.mode === 'practice' &&
          history[history.length - 1].askingQuestion.choices.length > 1 ? (
            <ChoicePanel />
          ) : (
            <></>
          )}
          <Box h={'200px'} width="100px"></Box>
          <ControlPanel
            showSettingDetail={showSettingDetail}
            showHistory={showHistory}
          />
        </>
      ) : (
        <></>
      )}
    </>
  )
}
//   )
// }

export default App
