import React from "react"
import { teamDetails } from "../../public/data"
import { useRouter } from "next/router"
const Aboutus = () => {
  const router = useRouter()
  const { devId } = router.query
  console.log(devId, "id")
  const member = teamDetails.find((member) => member.id === devId)

  return (
    <div>
      {member ? (
        <div>
          <h1>{member.name}</h1>
          <p>{member.role}</p>
          {/* <h1>{devId}</h1> */}
        </div>
      ) : (
        <p>Developer doesn't exist</p>
      )}
    </div>
  )
}

export default Aboutus
