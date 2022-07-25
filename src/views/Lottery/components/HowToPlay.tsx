import styled from 'styled-components'
import { Box, Flex, Text, Heading, Link, Image, useMatchBreakpointsContext } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { BallWithNumber, MatchExampleA, MatchExampleB, PoolAllocationChart } from '../svgs'
import PageSection from 'components/PageSection'

export const TITLE_BG = 'linear-gradient(180deg, rgb(41, 231, 232) -50%, #131340 100%)'
export const GET_TICKETS_BG = '#20204e'
export const CHECK_PRIZES_BG = '#0e0e32'
export const FINISHED_ROUNDS_BG = '#0e0e32'
export const FINISHED_ROUNDS_BG_DARK = 'linear-gradient(180deg, rgb(41, 231, 232) -50%, #131340 100%)'


const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBorder};
  height: 1px;
  margin: 40px 0;
  width: 100%;
`

const BulletList = styled.ul`
  list-style-type: none;
  margin-left: 8px;
  padding: 0;
  li {
    margin: 0;
    padding: 0;
  }
  li::before {
    content: '•';
    margin-right: 4px;
    color: ${({ theme }) => theme.colors.textSubtle};
  }
  li::marker {
    font-size: 12px;
  }
`

const StepContainer = styled(Flex)`
  gap: 30px;
  padding-bottom: 40px;
  color: #ffffff;
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
  }
`

const StyledStepCard = styled(Box)`
  display: flex;
  position: relative;
  padding: 1px 1px 3px 1px;
  border-radius: ${({ theme }) => theme.radii.card};
  ${({ theme }) => theme.mediaQueries.md} {
    margin-top: 10px;
  }
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

const FeatureCard = styled.div`
  box-shadow: inset 0 0 15px #37f5f9d9;
  padding: 1.875rem;
  box-shadow: inset 0 0 15px rgb(55 245 249 / 85%);
  border: 2px solid transparent;
  height: 100%;
    &:hover {
      box-shadow: 0 5px 15px #37f5f940, inset 0 0 15px #37f5f9d9;
      border-color: #37f5f9;
  }
`

const FeatureCardIcon = styled.div`
  color: #37f5f9 !important;
  text-shadow: 0 0 5px #37f5f9;
  font-size: 3.5rem;
    line-height: 1;
`


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

const BallsContainer = styled(Flex)`
  padding-left: 28px;
  align-items: center;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.xs} {
    gap: 7px;
    padding-left: 36px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    gap: 15px;
    padding-left: 40px;
  }
`

const InlineLink = styled(Link)`
  display: inline;
`

const ExampleBalls = () => {
  const { isDesktop } = useMatchBreakpointsContext()
  const ballSize = isDesktop ? '24px' : '32px'
  const fontSize = isDesktop ? '14px' : '16px'
  return (
    <BallsContainer>
      <BallWithNumber size={ballSize} fontSize={fontSize} color="yellow" number="9" />
      <BallWithNumber size={ballSize} fontSize={fontSize} color="green" number="1" />
      <BallWithNumber size={ballSize} fontSize={fontSize} color="aqua" number="3" />
      <BallWithNumber size={ballSize} fontSize={fontSize} color="teal" number="6" />
      <BallWithNumber size={ballSize} fontSize={fontSize} color="lilac" number="6" />
      <BallWithNumber size={ballSize} fontSize={fontSize} color="pink" number="2" />
    </BallsContainer>
  )
}

const MatchExampleContainer = styled(Flex)`
  height: 100%;
  flex-direction: column;
`

const MatchExampleCard = () => {
  const { isDark } = useTheme()
  const { isXs } = useMatchBreakpointsContext()
  const { t } = useTranslation()
  const exampleWidth = isXs ? '210px' : '258px'
  return (
    <StyledStepCard width={['280px', '330px', '330px']}>
      <StepCardInner height="210px">
        <MatchExampleContainer>
          <ExampleBalls />
          <Flex>
            <Text lineHeight="72px" textAlign="right" color="white" bold mr="20px">
              {t('A')}
            </Text>
            <MatchExampleA width={exampleWidth} height="46px" isDark={isDark} />
          </Flex>
          <Flex>
            <Text lineHeight="72px" textAlign="right" color="white" bold mr="20px">
              {t('B')}
            </Text>
            <MatchExampleB width={exampleWidth} height="46px" isDark={isDark} />
          </Flex>
        </MatchExampleContainer>
      </StepCardInner>
    </StyledStepCard>
  )
}

const AllocationGrid = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-auto-rows: max-content;
  row-gap: 4px;
`

const AllocationColorCircle = styled.div<{ color: string }>`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  background-color: ${({ color }) => color};
`

const TextColor = styled.div`
  color: #ffffff
`

const AllocationMatch: React.FC<{ color: string; text: string }> = ({ color, text }) => {
  return (
    <Flex alignItems="center">
      <AllocationColorCircle color={color} />
      <Text color="textSubtle">{text}</Text>
    </Flex>
  )
}

const PoolAllocations = () => {
  const { t } = useTranslation()
  return (
    <StyledStepCard width={['280px', '330px', '380px']}>
      <StepCardInner height="auto">
        <Flex mb="32px" justifyContent="center">
          <PoolAllocationChart width="100px" height="100px" />
        </Flex>
        <Flex justifyContent="space-between">
          <Text fontSize="12px" color="white" bold textTransform="uppercase">
            {t('Digits matched')}
          </Text>
          <Text fontSize="12px" color="white" bold textAlign="right" textTransform="uppercase">
            {t('Prize pool allocation')}
          </Text>
        </Flex>
        <AllocationGrid>
          <AllocationMatch color="#FFE362" text={t('Matches first %digits%', { digits: 1 })} />
          <Text textAlign="right" bold>
            2%
          </Text>
          <AllocationMatch color="#85C54E" text={t('Matches first %digits%', { digits: 2 })} />
          <Text textAlign="right" bold>
            3%
          </Text>
          <AllocationMatch color="#028E75" text={t('Matches first %digits%', { digits: 3 })} />
          <Text textAlign="right" bold>
            5%
          </Text>
          <AllocationMatch color="#36E8F5" text={t('Matches first %digits%', { digits: 4 })} />
          <Text textAlign="right" bold>
            10%
          </Text>
          <AllocationMatch color="#A881FC" text={t('Matches first %digits%', { digits: 5 })} />
          <Text textAlign="right" bold>
            20%
          </Text>
          <AllocationMatch color="#D750B2" text={t('Matches all 6')} />
          <Text textAlign="right" bold>
            40%
          </Text>
          <AllocationMatch color="#BDC2C4" text={t('Burn Pool')} />
          <Text textAlign="right" bold>
            20%
          </Text>
        </AllocationGrid>
      </StepCardInner>
    </StyledStepCard>
  )
}

const GappedFlex = styled(Flex)`
  gap: 24px;
`

const HowToPlay: React.FC = () => {
  const { t } = useTranslation()

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
      subtitle: t('Once the round’s over, come back to the page and check to see if you’ve won!'),
    },
  ]
  return (
    <PageSection
    containerProps={{ style: { marginTop: '-30px' } }}
    innerProps={{ style: { margin: '0', width: '100%' } }}
    background={CHECK_PRIZES_BG}
    concaveDivider
    clipFill={{ light: CHECK_PRIZES_BG }}
    dividerPosition="top"
    index={2}
  >
   
      <Flex mb="40px" width="100%" flexDirection="column" alignItems="center" justifyContent="center">
        <Heading mb="24px" scale="xl" color="white">
          {t('It\'s Easy to Join and get reward')}
        </Heading>
        <Text textAlign="center">
          {t(
            'If the digits on your tickets match the winning numbers in the correct order, you win a portion of the prize pool.',
          )}
        </Text>
        <Text>{t('Simple!')}</Text>
      </Flex>
      {/* <StepContainer >
        {steps.map((step) => (
          <StepCard key={step.label} step={step} />
        ))}
      </StepContainer> */}
      <Divider />
      
          <Heading mb="24px" scale="lg" color="white">
            {t('Why You Trust Our Service')}
          </Heading>
          <StepContainer >
            <StyledStepCard>
                <FeatureCard>
                <Text mb="16px" color="white" fontSize="2rem">
                  {t('Lottery')}
                </Text>
                <Text display="inline" color="textSubtle">
                      {t(
                        'We provide transparency with the support of chainlink VRF.',
                      )}
                    </Text>
                </FeatureCard>
            </StyledStepCard>
          <StyledStepCard>
            <FeatureCard>
            <Text mb="16px" color="white" fontSize="2rem">
              {t('Value')}
            </Text>
            <Text display="inline" color="textSubtle">
                  {t(
                    'We\'re going to burn a token value in the long term.',
                  )}
                </Text>
            </FeatureCard>
          </StyledStepCard>
          <StyledStepCard>
            <FeatureCard>
            <Text mb="16px" color="white" fontSize="2rem">
              {t('VRF Supported')}
            </Text>
            <Text display="inline" color="textSubtle">
                  {t(
                    'We bring entertainment platform - make money based on blockchain\nBring interesting experience to holders.',
                  )}
                </Text>
            </FeatureCard>
          </StyledStepCard>
          
          </StepContainer >

      <Divider />
      
      <GappedFlex flexDirection={['column', 'column', 'column', 'row']}>
        <Flex flex="2" flexDirection="column">
          <Heading mb="24px" scale="lg" color="white">
            {t('Winning Criteria')}
          </Heading>
          <Heading mb="24px" scale="md">
            {t('The digits on your ticket must match in the correct order to win.')}
          </Heading>
          <Text mb="16px" color="textSubtle">
            {t('Here’s an example lottery draw, with two tickets, A and B.')}
          </Text>
          <BulletList>
            <li>
              <Text display="inline" color="textSubtle">
                {t(
                  'Ticket A: The first 3 digits and the last 2 digits match, but the 4th digit is wrong, so this ticket only wins a “Match first 3” prize.',
                )}
              </Text>
            </li>
            <li>
              <Text display="inline" color="textSubtle">
                {t(
                  'Ticket B: Even though the last 5 digits match, the first digit is wrong, so this ticket doesn’t win a prize.',
                )}
              </Text>
            </li>
          </BulletList>
          <Text mt="16px" color="textSubtle">
            {t(
              'Prize brackets don’t ‘stack’: if you match the first 3 digits in order, you’ll only win prizes from the ‘Match 3’ bracket, and not from ‘Match 1’ and ‘Match 2’.',
            )}
          </Text>
        </Flex>
        <Flex flex="1" justifyContent="center">
          <MatchExampleCard />
        </Flex>
      </GappedFlex>
      <Divider />

      <GappedFlex flexDirection={['column', 'column', 'column', 'row']}>
        <Flex flex="2" flexDirection="column">
          <Heading mb="24px" scale="lg" color="white">
            {t('Prize Funds')}
          </Heading>
          <Text color="textSubtle">{t('The prizes for each lottery round come from three sources:')}</Text>
          <Heading my="16px" scale="md">
            {t('Ticket Purchases')}
          </Heading>
          <BulletList>
            <li>
              <Text display="inline" color="textSubtle">
                {t('100% of the AZW paid by people buying tickets that round goes back into the prize pools.')}
              </Text>
            </li>
          </BulletList>
          <Heading my="16px" scale="md">
            {t('Rollover Prizes')}
          </Heading>
          <BulletList>
            <li>
              <Text display="inline" color="textSubtle">
                {t(
                  'After every round, if nobody wins in one of the prize brackets, the unclaimed AZW for that bracket rolls over into the next round and are redistributed among the prize pools.',
                )}
              </Text>
            </li>
          </BulletList>
          <Heading my="16px" scale="md">
            {t('AZW Injections')}
          </Heading>
          <BulletList>
            <li>
              <Text display="inline" color="textSubtle">
                {t(
                  'An average total of  AZW Trading Volume from the treasury is added to lottery rounds over the course of a week. This AZW is of course also included in rollovers! Read more in our guide to ',
                )}
                {/* <InlineLink href="https://docs.pancakeswap.finance/tokenomics/cake/cake-tokenomics">
                  {t('AZW Tokenomics')}
                </InlineLink> */}
              </Text>
            </li>
          </BulletList>
        </Flex>
        <Flex flex="1" justifyContent="center">
          <PoolAllocations />
        </Flex>
      </GappedFlex>
      <Divider />
      {/* <Flex justifyContent="center" alignItems="center" flexDirection={['column', 'column', 'row']}>
        <Image width={240} height={172} src="/images/lottery/tombola.png" alt="tombola bunny" mr="8px" mb="16px" />
        <Flex maxWidth="300px" flexDirection="column">
          <Heading mb="16px" scale="md">
            {t('Still got questions?')}
          </Heading>
          <Text>
            {t('Check our in-depth guide on')}{' '}
            <InlineLink href="https://docs.pancakeswap.finance/products/lottery/lottery-guide">
              {t('how to play the AZ World Network lottery!')}
            </InlineLink>
          </Text>
        </Flex>
      </Flex> */}
    
    </PageSection>
  )
}

export default HowToPlay
