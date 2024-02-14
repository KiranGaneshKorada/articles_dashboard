import Chart from 'react-google-charts';
import useTopicPie from './useTopicPie';

const TopicPieComponent = () => {

    const {each_topic_related_articles_count,error,isLoading}=useTopicPie()

    const data = each_topic_related_articles_count?.Data

    const options = {
      title: "My Daily Activities",
      is3D: true,
    };

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"500px"}
    />
  );
}

export default TopicPieComponent