import AttachmentIcon from "@mui/icons-material/Attachment";
import GroupIcon from "@mui/icons-material/Group";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";

const BoardCard = () => {
  return (
    <Card
      sx={{
        cursor: "pointer",
        boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
        overflow: "unset"
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
        title="green iguana"
      />
      <CardContent
        sx={{
          p: 1.5,
          "&:last-child": {
            p: 1.5
          }
        }}
      >
        <Typography>Trello MERN</Typography>
      </CardContent>
      <CardActions sx={{ p: "0 4px 8px 4px" }}>
        <Button size="small" startIcon={<GroupIcon />}>
          20
        </Button>
        <Button size="small" startIcon={<MarkUnreadChatAltIcon />}>
          15
        </Button>
        <Button size="small" startIcon={<AttachmentIcon />}>
          10
        </Button>
      </CardActions>
    </Card>
  );
};

BoardCard.PropTypes = {};

export default BoardCard;
