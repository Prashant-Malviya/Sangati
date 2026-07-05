import Card from '../../shared/Card'
import socket from '../../../lib/socket'
import { useEffect } from 'react'

const FriendsOnline = () => {

    useEffect(()=>{
        socket.on("connect", ()=>{
            console.log("I am connected")
        })
    },[])

  return (
    <Card title="Online Friends" divider>
        
        <h1>{socket.connected.toString()}</h1>

    </Card>
  )
}

export default FriendsOnline
