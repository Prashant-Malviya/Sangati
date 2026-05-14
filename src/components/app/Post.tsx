import Button from "../shared/Button";
import Card from "../shared/Card";
import Divider from "../shared/Divider";
import IconButton from "../shared/IconButton";

const Post = () => {
  return (
    <div className="space-y-8">
      {Array(20)
        .fill(0)
        .map((item, index) => (
          <Card key={index}>
            <div className="space-y-3 ">
              <p>
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maxime laborum similique, deleniti, nisi alias unde fugiat
                perferendis error quam impedit veritatis nesciunt qui odit
                voluptas saepe necessitatibus porro vel libero."
              </p>

              <div className="flex justify-between items-center">
                <label className="text-base font-normal">
                  jan 2, 2028 07:20AM
                </label>
                <div className="flex gap-4">
                  <IconButton icon="edit-line" type="pink" />

                  <IconButton icon="delete-bin-4-line" type="danger" />
                </div>
              </div>
              <Divider />

              <div className="space-x-4">
                <Button icon="thumb-up-line" type="like">
                  20K
                </Button>

                <Button icon="thumb-down-line" type="dislike">
                  20K
                </Button>

                <Button icon="chat-ai-line" type="comment">
                  20K
                </Button>
              </div>
            </div>
          </Card>
        ))}
    </div>
  );
};

export default Post;
