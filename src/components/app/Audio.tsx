import Button from "../shared/Button";
import Card from "../shared/Card";

const Audio = () => {
  return (
    <div className="space-y-8">
    

      <div className="grid grid-cols-2 gap-4">
       <Card title="Prashant Malviya">
        <div className="flex flex-col items-center">
            <img src="/images/avatar.png" alt = "avatar" className="w-40 h-40 rounded-full object-cover" />
        </div>
       </Card>

       <Card title="Rahul Kumanr">
        <div className="flex flex-col items-center">
            <img src="/images/avatar.png" alt = "avatar" className="w-40 h-40 rounded-full object-cover" />
        </div>
       </Card>
      </div>

      <div className="flex justify-between items-center">
        <div className="space-x-4">
            <button className="bg-amber-300 text-white w-12 h-12 rounded-full hover:bg-amber-500 hover:text-white">
            <i className="ri-mic-line"></i>
        </button>
        
        </div>
        <Button icon="close-circle-fill">End</Button>
      </div>
    </div>
  );
};

export default Audio;
