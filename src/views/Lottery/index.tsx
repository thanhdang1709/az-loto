import { useState } from 'react'
import styled from 'styled-components'
import { Box, Flex, Heading, Skeleton, Text } from '@pancakeswap/uikit'
import { LotteryStatus } from 'config/constants/types'
import PageSection from 'components/PageSection'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { useFetchLottery, useLottery } from 'state/lottery/hooks'
import {
  TITLE_BG,
  GET_TICKETS_BG,
  FINISHED_ROUNDS_BG,
  FINISHED_ROUNDS_BG_DARK,
  CHECK_PRIZES_BG,
} from './pageSectionStyles'
import useGetNextLotteryEvent from './hooks/useGetNextLotteryEvent'
import useStatusTransitions from './hooks/useStatusTransitions'
import Hero from './components/Hero'
import NextDrawCard from './components/NextDrawCard'
import Countdown from './components/Countdown'
import HistoryTabMenu from './components/HistoryTabMenu'
import YourHistoryCard from './components/YourHistoryCard'
import AllHistoryCard from './components/AllHistoryCard'
import CheckPrizesSection from './components/CheckPrizesSection'
import HowToPlay from './components/HowToPlay'
import useShowMoreUserHistory from './hooks/useShowMoreUserRounds'
import { PageMeta } from '../../components/Layout/Page'

const LotteryPage = styled.div`
  min-height: calc(100vh - 64px);
`

const StepContainer = styled(Flex)`
  
  padding-bottom: 40px;
  width: 100%;
  color: #ffffff;
  flex-direction: column;
  gap: 60px;
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
    gap: 24px;
  }
`

const StyledStepCard = styled(Box)`
  display: flex;
  align-self: baseline;
  position: relative;
  padding: 1px 1px 3px 1px;
  border-radius: ${({ theme }) => theme.radii.card};
`

const StepCardInner = styled(Box)`
  width: 100%;
  padding: 10px;
  text-align: center;
`

const StepCardInnerHow = styled.div`
  position: relative;
  &:after{
    position: absolute;
    content: '';
    top: 35px;
    right: -25px;
    width: 50px;
    height: 50px;
    background-image: url('https://script.viserlab.com/lottolab/assets/templates/basic/images/elements/right-arrow.svg');
    background-size: 50px;
    background-repeat: no-repeat;
    opacity: 0.85;
  }
`

const HowWorkCard = styled.div`
  text-align: center;
  box-shadow: 0 0 10px #37f5f98c;
  text-shadow: 0 0 5px #37f5f9;
  color: #37f5f9 !important;
  width: 120px;
  height: 120px;
  background-color: #20204e;
  font-size: 1.25rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  position: relative;
  margin-bottom: 16px;
  text-align: center;
  z-index: 1;
  overflow: hidden;
  box-shadow: 0 0 10px rgb(55 245 249 / 55%);
  &:after {
    position: absolute;
    content: '';
    top: 2px;
    right: 2px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    background-color: transparent;
    border: 6px solid #20204e;
    z-index: -1;
  }
  &:before {
    position: absolute;
    content: '';
    top: -30px;
    right: -90px;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    background-color: #37f5f9;
    z-index: -2;
  }
`



const Lottery = () => {
  useFetchLottery()
  useStatusTransitions()
  const { t } = useTranslation()
  const { isDark, theme } = useTheme()
  const {
    currentRound: { status, endTime },
  } = useLottery()
  const [historyTabMenuIndex, setHistoryTabMenuIndex] = useState(0)
  const endTimeAsInt = parseInt(endTime, 10)
  const { nextEventTime, postCountdownText, preCountdownText } = useGetNextLotteryEvent(endTimeAsInt, status)
  const { numUserRoundsRequested, handleShowMoreUserRounds } = useShowMoreUserHistory()

  type Step = { title: string; subtitle: string; label: string }

  const StepCard: React.FC<{ step: Step }> = ({ step }) => {
    return (
      <StyledStepCard width="100%">
        <StepCardInner height={['200px', '180px', null, '200px']}>
          <HowWorkCard>{step.label}</HowWorkCard>
          <Heading mb="16px" scale="lg" color="white">
            {step.title}
          </Heading>
          <Text color="textSubtle">{step.subtitle}</Text>
        </StepCardInner>
      </StyledStepCard>
    )
  }

  const steps: Step[] = [
    {
      label: t('Step %number%', { number: 1 }),
      title: t('Buy Tickets'),
      subtitle: t('Prices are set when the round starts, equal to 5 USD in AZW per ticket.'),
    },
    {
      label: t('Step %number%', { number: 2 }),
      title: t('Wait for the Draw'),
      subtitle: t('There is one draw every day alternating between 0 AM UTC and 12 PM UTC.'),
    },
    {
      label: t('Step %number%', { number: 3 }),
      title: t('Check for Prizes'),
      subtitle: t('Once the round’s over, come back to the page and check to see if you’ve won!'),
    },
    {
      label: t('Step %number%', { number: 4 }),
      title: t('Win Lottery'),
      subtitle: t('You can win lottery - When result is out. All information is updated on website!'),
    },
  ]



  return (
    <>
      <PageMeta />
      <LotteryPage>
        <PageSection background={TITLE_BG} index={1} hasCurvedDivider={false}>
          <Hero />
        </PageSection>
        
        <PageSection
          containerProps={{ style: { marginTop: '-30px' } }}
          background={CHECK_PRIZES_BG}
          concaveDivider
          clipFill={{ light: CHECK_PRIZES_BG }}
          dividerPosition="top"
          index={2}
        >
          
          <StepContainer >
        {steps.map((step) => (
          <StepCard key={step.label} step={step} />
        ))}
      </StepContainer>

          <Flex alignItems="center" justifyContent="center" flexDirection="column" pt="50px">
            {status === LotteryStatus.OPEN && (
              <Heading scale="xl" color="#ffffff" mb="24px" textAlign="center">
                {t('Get your tickets now!')}
              </Heading>
            )}
            <Flex alignItems="center" justifyContent="center" mb="18px">
              {nextEventTime && (postCountdownText || preCountdownText) ? (
                <Countdown
                  nextEventTime={nextEventTime}
                  postCountdownText={postCountdownText}
                  preCountdownText={preCountdownText}
                />
              ) : (
                <Skeleton height="41px" width="250px" />
              )}
            </Flex>
            <NextDrawCard />
          </Flex>
        </PageSection>
        <Box style={{textAlign: 'center', maxWidth: '50%', margin: 'auto'}}>
            <img src={'/images/xs.png'} />
          </Box>
        <PageSection background={CHECK_PRIZES_BG} hasCurvedDivider={false} index={2}>
          <CheckPrizesSection />
        </PageSection>
        <PageSection
          innerProps={{ style: { margin: '0', width: '100%' } }}
          background={isDark ? FINISHED_ROUNDS_BG_DARK : FINISHED_ROUNDS_BG}
          hasCurvedDivider={false}
          index={2}
        >
          <Flex width="100%" flexDirection="column" alignItems="center" justifyContent="center">
            <Heading mb="24px" scale="xl">
              {t('Finished Rounds')}
            </Heading>
            <Box mb="24px">
              <HistoryTabMenu
                activeIndex={historyTabMenuIndex}
                setActiveIndex={(index) => setHistoryTabMenuIndex(index)}
              />
            </Box>
            {historyTabMenuIndex === 0 ? (
              <AllHistoryCard />
            ) : (
              <YourHistoryCard
                handleShowMoreClick={handleShowMoreUserRounds}
                numUserRoundsRequested={numUserRoundsRequested}
              />
            )}
          </Flex>
        </PageSection>
        
        <PageSection
          containerProps={{ style: { marginTop: '-30px' } }}
          background={CHECK_PRIZES_BG}
          concaveDivider
          clipFill={{ light: CHECK_PRIZES_BG }}
          dividerPosition="top"
          index={2}
        >
          <HowToPlay />
        </PageSection>
      </LotteryPage>
    </>
  )
}

export default Lottery
