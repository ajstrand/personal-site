import { pagesWithTag } from "./utils";
import dayjs from "dayjs";

const ListElement = ({ urlPath, env, title, date }) => {
  const dateFormatted = dayjs(date).format("dddd in MMMM ’YY");
  const dateMessage = `written on a ${dateFormatted}`;
  return (
    <li key={urlPath}>
      <a class="m-0" href={env}>
        {title}
      </a>{" "}
      <small>{dateMessage}</small>
    </li>
  );
};

const CreateList = ({ pages }) => {
  return pagesWithTag(pages, "post").map(({ meta, urlPath }) => {
    const { date, title } = meta;
    const withoutTrailingSlash = urlPath.slice(0, urlPath.length - 1);
    const urlPathFull = `${withoutTrailingSlash}.html`;
    const env = process.env.NODE_ENV === "development" ? urlPath : urlPathFull;
    return (
      <ListElement urlPath={urlPath} title={title} date={date} env={env} />
    );
  });
};

const List = (props) => {
  const { pages } = props;
  return (
    <ul>
      <CreateList pages={pages} />
    </ul>
  );
};

export default List;
