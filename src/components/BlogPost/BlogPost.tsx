import { Link } from "react-router-dom";

import { Badge } from "../Badge/Badge";
import { Text } from "../Text";
import { Image, Data, Tag } from "./BlogPost.styled";

import { BlogPost as BlogPostProps } from "../../types/collection";

export const BlogPost = ({ title, url, img, tag, category }: BlogPostProps) => (
  <Link to={url} aria-label={`Link to ${title}`}>
    <Image style={{ backgroundImage: `url(${img})` }}>
      {tag && (
        <Tag>
          <Badge solid color={tag.color}>
            {tag.title}
          </Badge>
        </Tag>
      )}
    </Image>

    <Data>
      <Text>{title}</Text>
      <Badge color={category.color}>{category.title}</Badge>
    </Data>
  </Link>
);
