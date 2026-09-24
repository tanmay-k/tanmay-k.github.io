import { getHomeContent } from "../lib/content";

export default async function HomePage() {
  return <>{await getHomeContent()}</>;
}
