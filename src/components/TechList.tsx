import AstroIcon from "./icons/AstroIcon";
import AwsIcon from "./icons/AwsIcon";
import CssIcon from "./icons/CssIcon";
import DockerIcon from "./icons/DockerIcon";
import ElasticIcon from "./icons/ElasticIcon";
import GraphIcon from "./icons/GraphIcon";
import HtmlIcon from "./icons/HtmlIcon";
import JsIcon from "./icons/JsIcon";
import MongoIcon from "./icons/MongoIcon";
import NestIcon from "./icons/NestIcon";
import NextIcon from "./icons/NextIcon";
import NodeIcon from "./icons/NodeIcon";
import PostgresIcon from "./icons/PostgresIcon";
import ReactIcon from "./icons/ReactIcon";
import SvelteIcon from "./icons/SvelteIcon";
import TsIcon from "./icons/TsIcon";

export default function TechList() {
  return (
    <ul className="tech-list">
      <HtmlIcon />
      <CssIcon />
      <JsIcon />
      <TsIcon />
      <NodeIcon />
      <ReactIcon />
      <SvelteIcon />
      <NextIcon />
      <AstroIcon />
      <NestIcon />
      <PostgresIcon />
      <MongoIcon />
      <ElasticIcon />
      <DockerIcon />
      <GraphIcon />
      <AwsIcon />
    </ul>
  );
}
