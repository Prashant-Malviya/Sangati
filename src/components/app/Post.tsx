import Card from "../shared/Card"

const Post = () => {
  return (
    <div className="space-y-8">
      {
        Array(20).fill(0).map((item,index)=>(
          <Card 
          key={index}
          title={
            <div className="flex justify-between">
              <label className="text-base font-normal">jan 2, 2028 07:20AM</label>
            </div>
          }
          >
           <p>
             "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime laborum similique, deleniti, nisi alias unde fugiat perferendis error quam impedit veritatis nesciunt qui odit voluptas saepe necessitatibus porro vel libero."
           </p>
          </Card>
        ))
      }
    </div>
  )
}

export default Post