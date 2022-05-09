import { Badge, Flex, Text } from '@chakra-ui/react'

export const ResultBar = ({ showHistory, showSettingDetail }) => {
  let history = showHistory()
  let settingDetail = showSettingDetail()
  return (
    <>
      {settingDetail.mode === 'training' ? (
        <Flex ml={'4'} alignItems="baseline" mt={3} mb="-2">
          <Badge colorScheme="purple" height="100%">
            練習モード
          </Badge>
          <Text fontSize="md" color={'gray.500'} ml="2">
            現在{history[history.length - 1].askedQuestionList.length}問目 /
            残り{history[history.length - 1].remainingQuestionList.length}問
          </Text>
        </Flex>
      ) : (
        <Flex ml={'4'} alignItems="baseline">
          <Badge colorScheme="purple" height="100%">
            テストモード
          </Badge>
          <Text fontSize="md" color={'gray.500'} ml="2">
            正解9/全10問中 正解率90.0%
          </Text>
        </Flex>
      )}
    </>
  )
}
