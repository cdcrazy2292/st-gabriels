import { Center } from "@chakra-ui/react"
interface InfoCardProps {
  children: JSX.Element[]
  bgColor: string
  color: string
  p: number
  gap: number
}
const InfoCard = (props: InfoCardProps) => {
  return (
    <Center
      h={"100%"}
      w={"20%"}
      bgColor={props.bgColor}
      color={props.color}
      flexDir={"column"}
      justifyContent={"flex-start"}
      p={props.p}
      gap={props.gap}
    >
      {props.children}
    </Center>
  )
}

export default InfoCard
