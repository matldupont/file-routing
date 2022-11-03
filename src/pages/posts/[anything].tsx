import { useParams } from "react-router-dom";
import { Page } from "../../components/Page";

export default function PostPage() {
  const { anything } = useParams();
  return <Page heading="Post Page">This is a Post Page - {anything}</Page>;
}
