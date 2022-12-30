import Feed from './container/Feed'
import UserProfile from './container/UserProfile'
import LeaderBoard from './container/LeaderBoard'

function App(){

  return (
    <div className="w-[400px] overflow-hidden flex flex-col">
        <LeaderBoard />
    </div>
  )
}

export default App;