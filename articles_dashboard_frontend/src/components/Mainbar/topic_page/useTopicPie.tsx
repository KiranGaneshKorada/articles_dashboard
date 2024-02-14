import { useQuery } from "react-query";
import baseApiUrl from "../../../backend_api/baseurl";

interface TopicPieComponent {
  Data: [ string, number ][];
}

const useTopicPie = () => {
  const {
    data: each_topic_related_articles_count,
    error,
    isLoading,
  } = useQuery<TopicPieComponent, Error>({
    queryKey: ["TopicPieComponent"],
    queryFn: () =>
      baseApiUrl.get("get_topic_count").then((response) => response.data),
  });

  return { each_topic_related_articles_count, error, isLoading };
};

export default useTopicPie;
