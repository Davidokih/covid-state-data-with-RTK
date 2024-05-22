import Completed from './pages/Completed'
import { useGetAllInfoQuery } from './service/CovidRTK'
import PropTypes from "prop-types"

function App() {

  const { data, isLoading } = useGetAllInfoQuery()
  if(isLoading)return <h1>Loading...</h1>
  return (
    <>
      <div className="flex items-center flex-col justify-center bg-no-repeat bg-cover p-2">
        <div className="grid grid-cols-cardGrid gap-[15px] relative pc:grid-cols-mediaGrid w-full">{ data?.map((props,index) => (
          <Completed key={index} name={ props.name } notes={ props.notes } state={ props.state} covid19Site={props.covid19Site} />
        ))}</div>
      </div>
    </>
  )
}

App.propTypes = {
  name: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  covid19Site: PropTypes.string.isRequired,
}
export default App
