import Card from "../shared/Card";

const Friends = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {Array(20)
        .fill(0)
        .map((item, index) => (
          <Card key={index}>
            <div className="flex flex-col items-center gap-3">
              <img
                src="/images/avatar.png"
                className="w-16 h-16 rounded-full object-cover"
              />
              <h1 className="text-base font-medium text-zinc-700">Prashant</h1>

              <button className="bg-pink-500 hover:bg-pink-600 text-white px-2 py-1.5 rounded text-xs mt-1 font-medium">
                <i className="ri-user-minus-line mr-1"></i>
                Unfriend
              </button>
            </div>
          </Card>
        ))}
    </div>
  );
};

export default Friends;
