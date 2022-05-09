import { useState, useEffect } from 'react'

export const useHistory = () => {
  const [history, setHistory] = useState([
    {
      askedQuestionList: [],
      askingQuestion: {},
      remainingQuestionList: [],
      isAnswered: false,
    },
  ])
  const showHistory = () => {
    return history
  }
  const selectQuestionList = (questionList, settingDetail) => {
    let newHistory = history[history.length - 1]
    newHistory.remainingQuestionList = []
    console.log('selectQuestionList:Start')
    questionList.forEach((group, groupIndex) => {
      if (settingDetail.questionRange.indexOf(group.groupTag) === -1) {
        return
      }
      group.groupContents.forEach((question, questionIndex) => {
        let newRemainingQuestion = question
        newRemainingQuestion.id = groupIndex * 10000 + questionIndex
        newRemainingQuestion.groupTag = group.groupTag

        if (newRemainingQuestion.askedQuestionList) {
          if (
            newRemainingQuestion.askedQuestionList.findIndex(
              (question) => question.id === newRemainingQuestion.id,
            ) > -1
          ) {
            return
          }
        } else {
          newRemainingQuestion.askedQuestionList = []
        }

        if (newRemainingQuestion.remainingQuestionList) {
          if (
            newRemainingQuestion.remainingQuestionList.findIndex(
              (question) => question.id === newRemainingQuestion.id,
            ) > -1
          ) {
            return
          }
        } else {
          newRemainingQuestion.remainingQuestionList = []
        }

        // 検索機能はここに追加する。検索単語を配列にして、該当Questionになんの配列アイテムも見つからなかった場合はreturnで省く
        let wordFilterFlag = 0
        if (settingDetail.wordFilter.length === 0) {
          wordFilterFlag = 1
        }
        settingDetail.wordFilter.forEach((word) => {
          if (question.detailInfo && question.detailInfo.indexOf(word) > -1)
            wordFilterFlag = 1
          if (
            question.questionSentence &&
            question.questionSentence.indexOf(word) > -1
          )
            wordFilterFlag = 1
          if (question.answer && question.answer.indexOf(word) > -1)
            wordFilterFlag = 1
          if (question.commentary && question.commentary.indexOf(word) > -1)
            wordFilterFlag = 1
          if (
            question.choices &&
            question.choices.every((choice) => choice.indexOf(word) === -1) ===
              false
          )
            wordFilterFlag = 1
        })
        if (wordFilterFlag === 0) return
        if (newRemainingQuestion.choices) {
          let choiceList = [...question.choices]
          newRemainingQuestion.randomizedChoices = []
          for (let i = 0; i < question.choices.length; i++) {
            newRemainingQuestion.randomizedChoices.push(
              choiceList.splice(
                Math.floor(Math.random() * choiceList.length),
                1,
              ),
            )
          }
        }
        newHistory.remainingQuestionList.push(newRemainingQuestion)
      })
    })
    setHistory([...history, newHistory])
  }
  const nextQuestion = (settingDetail) => {
    if (settingDetail.questionOrder === 'random') {
      let newHistory = history[history.length - 1]
      if (newHistory.askingQuestion) {
        newHistory.askedQuestionList = [
          ...history[history.length - 1].askedQuestionList,
          newHistory.askingQuestion,
        ]
      }
      newHistory.askingQuestion = {}
      let randomNum = Math.floor(
        Math.random() *
          history[history.length - 1].remainingQuestionList.length,
      )
      newHistory.askingQuestion = newHistory.remainingQuestionList[randomNum]
      newHistory.remainingQuestionList.splice(randomNum, 1)
      newHistory.isAnswered = false
      setHistory([...history, newHistory])
    }
    if (settingDetail.questionOrder === 'ascend') {
      let newHistory = history[history.length - 1]
      if (newHistory.askingQuestion) {
        newHistory.askedQuestionList = [
          ...history[history.length - 1].askedQuestionList,
          newHistory.askingQuestion,
        ]
      }
      newHistory.askingQuestion = {}
      function compareFun(QListA, QListB) {
        return QListA.id - QListB.id
      }
      if (newHistory.remainingQuestionList.length > 0) {
        newHistory.remainingQuestionList.sort(compareFun)
        console.log(
          'RemainingQuestionList:' + newHistory.remainingQuestionList.length,
        )
        // newHistory.askedQuestionList = [
        //   ...history[history.length - 1].askedQuestionList,
        //   newHistory.remainingQuestionList[0],
        // ]
        newHistory.askingQuestion = newHistory.remainingQuestionList[0]
        console.log(newHistory.remainingQuestionList[0])
        newHistory.remainingQuestionList.shift()
        newHistory.isAnswered = false
        setHistory([...history, newHistory])
        console.log('nextQuestion:')
        console.log(history)
      }
    }
  }
  const checkAnswer = () => {
    let newHistory = history[history.length - 1]
    newHistory.isAnswered = true
    setHistory([...history, newHistory])
    console.log('checkAnswer')
  }
  const hideAnswer = () => {
    let newHistory = history[history.length - 1]
    newHistory.isAnswered = false
    setHistory([...history, newHistory])
  }
  return {
    history,
    showHistory,
    selectQuestionList,
    nextQuestion,
    checkAnswer,
    hideAnswer,
  }
}
