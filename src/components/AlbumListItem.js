import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { FaRegTrashCan } from "react-icons/fa6";

function AlbumListItem({ album }) {
  const header = (
    <div className="flex justify-center items-center">
      <Button className="mr-2">
        <FaRegTrashCan />
      </Button>
      {album.title}
    </div>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      List of photos in the album
    </ExpandablePanel>
  );
}

export default AlbumListItem;
