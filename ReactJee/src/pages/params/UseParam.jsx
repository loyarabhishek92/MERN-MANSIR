import { useParams } from "react-router"

export default function UseParam() {


    const {id} = useParams();
    console.log(id)
  




  return (
    <div className="text-white">
      <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam natus minus mollitia iure commodi libero eos blanditiis quia! Eveniet, voluptates quidem exercitationem id nisi necessitatibus vitae soluta fugiat dolores. Dignissimos.</h1>
    </div>
  )
}
