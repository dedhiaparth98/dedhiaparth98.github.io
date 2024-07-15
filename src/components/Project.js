import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import Card from "./Card";

export default function Project(props) {
  const { title, summary } = props;

  return (
    <Card className='p-8'>
      <CardHeader>{title}</CardHeader>
      <CardBody>
        <p className='dark:text-gray-400 text-gray-800'>
          {summary}
        </p>
      </CardBody>
    </Card>
  )
}